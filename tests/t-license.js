// Licença Pro assinada: ativação, adulteração, janela de validade, renovação.
const L=require('./lib.js'),LC=require('./lib-license.js');
const iso=(d)=>{const p=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())};// data LOCAL, como o app (antes UTC: falhava depois das 21h no Brasil)
async function run(){
  L.reset();
  const K=await LC.newKeys(),K2=await LC.newKeys();
  const mk=async(seed)=>{const a=await L.loadApp({pubJwk:K.pub,seed:Object.assign({r1_trial:{active:false,startedAt:'2000-01-01',expiresAt:'2000-01-01'},rizzieri_trial_used:'1'},seed||{}),wait:300});return a};
  // senha de acesso é exigida pelo Pro: simulamos que já existe (modo sem criptografia não tem hasPassword) -> contornamos criando perfil e senha mínima
  async function prep(a){
    a.ev(`storage.setItem('r1_consultor_profile',JSON.stringify({nome:'Teste',telefone:'(11) 99999-9999'}))`);
    a.ev(`window.hasPassword=()=>true`);
  }
  let a=await mk();await prep(a);
  const dev=a.ev('planDevId()');
  L.check('ID do aparelho tem 4 caracteres',/^[A-Z0-9]{4}$/.test(dev),dev);

  // 1) código válido ativa
  const c1=await LC.makeCode(K.priv,dev,1,0);
  let r=await a.ev(`planTryActivate(${JSON.stringify(c1)})`);
  L.check('código válido ativa o Pro',r&&r.ok===true,JSON.stringify(r));
  let st=a.ev('planState()');
  L.check('estado: pro=true',st.pro===true);
  const hoje=a.ev('planToday()');
  L.check('vencimento ≈ 1 mês à frente',st.lic.expiresAt>hoje&&st.diasPro>=28&&st.diasPro<=31,st.lic.expiresAt+' dias='+st.diasPro);
  // 2) reuso do mesmo código
  r=await a.ev(`planTryActivate(${JSON.stringify(c1)})`);
  L.check('mesmo código não ativa duas vezes',r.ok===false&&/já foi usado/.test(r.msg),JSON.stringify(r));
  // 3) código com espaços/quebras de linha (colado do WhatsApp)
  const c2=await LC.makeCode(K.priv,dev,1,0);
  r=await a.ev(`planTryActivate(${JSON.stringify(c2.replace(/-/g,'\n '))})`);
  L.check('código colado com quebras de linha é aceito (renovação)',r.ok===true,JSON.stringify(r));
  st=a.ev('planState()');
  L.check('renovação soma meses (≈ 2 meses)',st.diasPro>=56&&st.diasPro<=62,'dias='+st.diasPro);
  // 4) aparelho errado
  const outro=dev==='AAAA'?'BBBB':'AAAA';
  r=await a.ev(`planTryActivate(${JSON.stringify(await LC.makeCode(K.priv,outro,1,0))})`);
  L.check('código de outro aparelho é recusado',r.ok===false&&/outro aparelho/.test(r.msg),JSON.stringify(r));
  // 5) assinatura de outra chave
  r=await a.ev(`planTryActivate(${JSON.stringify(await LC.makeCode(K2.priv,dev,1,0))})`);
  L.check('código assinado por OUTRA chave é recusado',r.ok===false&&/inválido/.test(r.msg),JSON.stringify(r));
  // 6) 1 caractere trocado
  const bad=c2.replace(/[A-Z]/,ch=>ch==='A'?'B':'A');
  r=await a.ev(`planTryActivate(${JSON.stringify(bad)})`);
  L.check('código adulterado (1 caractere) é recusado',r.ok===false,JSON.stringify(r));
  // 7) lixo e vazio
  r=await a.ev(`planTryActivate('RZ-1234-1234')`);L.check('formato antigo (RZ-XXXX-0000) é recusado',r.ok===false&&/Formato/.test(r.msg),JSON.stringify(r));
  r=await a.ev(`planTryActivate('')`);L.check('vazio pede o código',r.ok===false);
  r=await a.ev(`planTryActivate('abc')`);L.check('texto curto é recusado',r.ok===false);
  a.w.close();

  // 8) janela de 45 dias
  a=await mk();await prep(a);const dev2=a.ev('planDevId()');
  r=await a.ev(`planTryActivate(${JSON.stringify(await LC.makeCode(K.priv,dev2,1,46))})`);
  L.check('código com mais de 45 dias é recusado',r.ok===false&&/venceu/.test(r.msg),JSON.stringify(r));
  r=await a.ev(`planTryActivate(${JSON.stringify(await LC.makeCode(K.priv,dev2,1,44))})`);
  L.check('código de 44 dias ainda ativa',r.ok===true,JSON.stringify(r));
  r=await a.ev(`planTryActivate(${JSON.stringify(await LC.makeCode(K.priv,dev2,1,-5))})`);
  L.check('código "do futuro" (data errada) é recusado',r.ok===false,JSON.stringify(r));
  // 9) plano inexistente
  r=await a.ev(`planTryActivate(${JSON.stringify(await LC.makeCode(K.priv,dev2,9,0))})`);
  L.check('plano inexistente é recusado',r.ok===false,JSON.stringify(r));
  a.w.close();

  // 10) adulteração do armazenamento
  const devFix='ZZ22';
  const fresh=async(lic)=>{const b=await mk({r1_devid:devFix,r1_license:lic});return b};
  const bootCheck=async(b)=>{await b.sleep(250);b.ev('planBootVerify()');await b.sleep(400);return b.ev('planState().pro')};
  let b=await fresh({pro:true,expiresAt:'2099-12-31'});
  L.check('licença forjada {pro:true,expiresAt:2099} é derrubada no boot',(await bootCheck(b))===false);
  L.check('licença forjada é removida do armazenamento',b.w.localStorage.getItem('r1_license')===null);
  b.w.close();
  b=await fresh({pro:true,code:'RZ-ZZ22-1123',plan:1,expiresAt:'2099-12-31'});
  L.check('licença no formato antigo (checksum) é derrubada',(await bootCheck(b))===false);
  b.w.close();
  // licença válida legítima sobrevive ao boot; vencimento adulterado é corrigido
  const cv=await LC.makeCode(K.priv,devFix,1,0);
  const tok=cv.replace(/-/g,'');
  b=await fresh({pro:true,tokens:[{t:tok,at:iso(new Date())}],expiresAt:'2099-12-31',plan:1});
  const okBoot=await bootCheck(b);
  const exp=JSON.parse(b.w.localStorage.getItem('r1_license')||'{}').expiresAt;
  L.check('licença legítima continua Pro após o boot',okBoot===true);
  L.check('vencimento adulterado é recalculado (não fica em 2099)',exp&&exp<'2030-01-01',String(exp));
  b.w.close();
  // data de ativação adiada para o futuro
  const fut=iso(new Date(Date.now()+400*86400000));
  b=await fresh({pro:true,tokens:[{t:tok,at:fut}],expiresAt:'2099-12-31'});
  L.check('data de ativação no futuro não estende a licença',(await bootCheck(b))===false);
  b.w.close();
  // ativação "rolante": at fora da janela de 45 dias
  const velho=await LC.makeCode(K.priv,devFix,1,60);
  b=await fresh({pro:true,tokens:[{t:velho.replace(/-/g,''),at:iso(new Date())}],expiresAt:'2099-12-31'});
  L.check('reativar código de 60 dias atrás (rolagem) não vale',(await bootCheck(b))===false);
  b.w.close();

  // 10b) defesa em profundidade: licença sem vencimento nunca vale, mesmo antes da verificação do boot
  b=await L.loadApp({pubJwk:K.pub,seed:{r1_devid:devFix,r1_license:{pro:true}},login:false,wait:200});
  L.check('licença {pro:true} sem vencimento não vale nem antes do boot',b.ev('planState().pro')===false);
  b.w.close();
  // 10c) assinatura zerada (formato certo, sem assinatura de verdade)
  b=await mk({r1_devid:devFix});await prep(b);
  const zero=await LC.makeCode(K.priv,devFix,1,0);
  const raw=zero.replace(/-/g,'');const forj=raw.slice(0,16)+'A'.repeat(raw.length-16);
  r=await b.ev(`planTryActivate(${JSON.stringify(forj)})`);
  L.check('código com assinatura zerada é recusado',r.ok===false,JSON.stringify(r));
  b.w.close();

  // 11) backup não importa licença
  b=await mk({r1_devid:devFix});
  const res=b.ev(`ajBackupApply({data:{r1_license:'{"pro":true,"expiresAt":"2099-01-01"}',r1_trial:'{"active":true}',r1_auth:'x',r1_extra_clients:'[]','__proto__':'x','r1_bad key':'x',r1_num:5}})`);
  L.check('restaurar backup aceita só dados (1 chave)',res.ok===true&&res.qtd===1,JSON.stringify(res));
  L.check('backup não grava r1_license',b.w.localStorage.getItem('r1_license')===null);
  L.check('backup sem dados reconhecíveis é recusado',b.ev(`ajBackupApply({data:{foo:'bar'}})`).ok===false);
  L.check('backup que não é objeto é recusado',b.ev(`ajBackupApply({data:[1,2]})`).ok===false&&b.ev(`ajBackupApply(null)`).ok===false);
  b.w.close();

  // 12) link de ativação ?ativar=
  const { JSDOM } = (()=>{try{return require('jsdom')}catch(e){return require(require('path').join(process.env.JSDOM_PATH,'node_modules','jsdom'))}})();
  const cl=await LC.makeCode(K.priv,devFix,1,0);
  const l=await L.loadApp({pubJwk:K.pub,seed:{r1_devid:devFix,r1_trial:{active:false,startedAt:'2000-01-01',expiresAt:'2000-01-01'}},wait:200,login:false,url:'http://localhost/?ativar='+encodeURIComponent(cl.replace(/-/g,''))});
  l.ev(`planReadActivationLink()`);await l.sleep(1200);
  const campo=l.d.querySelector('#proCode');
  L.check('link ?ativar= abre o diálogo Pro com o código preenchido',!!(campo&&planNormEq(campo.value,cl)),campo&&campo.value.slice(0,20));
  L.check('o código sai do endereço depois de lido',!/ativar=/.test(l.w.location.href),l.w.location.href);
  l.w.close();
  return L.summary('licença');
}
function planNormEq(a,b){return a.replace(/[^A-Z2-7]/g,'')===b.replace(/[^A-Z2-7]/g,'')}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

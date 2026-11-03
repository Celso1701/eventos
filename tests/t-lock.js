// Registro em uso (multiusuário): bloqueio, aviso "aguarde", alerta ao dono, liberação, expiração e Supabase simulado.
const L=require('./lib.js');
async function run(){
 L.reset();
 let a=await L.loadApp({wait:350});
 const KEY='r1_extra_suppliers',RES=KEY+':sx1';
 a.ev(`storage.setItem('${KEY}',JSON.stringify([{id:'sx1',name:'Fornecedor Teste',category:'Buffet',status:'Ativo'}]));localStorage.removeItem('lk_locks')`);
 const other=(extra)=>a.ev(`(function(){const all=JSON.parse(localStorage.getItem('lk_locks')||'{}');all['${RES}']=Object.assign({holder:'local|OUTRO',name:'maria',exp:Date.now()+60000,req:[]},${JSON.stringify(extra||{})});localStorage.setItem('lk_locks',JSON.stringify(all))})()`);
 const lockRow=()=>a.ev(`JSON.parse(localStorage.getItem('lk_locks')||'{}')['${RES}']||null`);
 const rec=`{id:'sx1',name:'Fornecedor Teste',category:'Buffet',status:'Ativo'}`;
 // 1) outro usuário com o registro
 other();
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(80);
 L.check('Registro em uso: o formulário NÃO abre para o segundo usuário',!a.d.querySelector('#formDialog').open);
 const tx=a.d.querySelector('#toast').textContent;
 L.check('Mensagem "Registro em uso por outro usuário — aguarde" (com o nome de quem usa)',/Registro em uso por outro usuário/.test(tx)&&/aguarde/.test(tx)&&/maria/.test(tx));
 L.check('O pedido fica registrado para avisar o primeiro usuário',(lockRow().req||[]).length===1);
 // 2) gravações rápidas também bloqueadas
 a.ev(`updateRecord('supplier',{id:'sx1',name:'Mudou'})`);
 L.check('Gravação rápida (updateRecord) é recusada enquanto o registro está em uso',a.ev(`readJSON('${KEY}',[])[0].name`)==='Fornecedor Teste'&&/Registro em uso/.test(a.d.querySelector('#toast').textContent));
 a.ev(`removeRecord('${KEY}',[],'sx1')`);
 L.check('Exclusão é recusada enquanto o registro está em uso',a.ev(`readJSON('${KEY}',[]).length`)===1);
 // 3) liberação avisa quem esperava
 a.ev(`(function(){const all=JSON.parse(localStorage.getItem('lk_locks'));delete all['${RES}'];localStorage.setItem('lk_locks',JSON.stringify(all))})()`);
 await a.ev(`lkTick()`);
 L.check('Ao liberar, quem esperava é avisado ("Registro liberado")',/Registro liberado/.test(a.d.querySelector('#toast').textContent));
 // 4) agora abre e reserva
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(80);
 L.check('Livre: o formulário abre e o registro fica reservado em meu nome',a.d.querySelector('#formDialog').open&&!!lockRow()&&/^local\|/.test(lockRow().holder));
 // 5) alerta para quem está com o registro parado
 a.ev(`(function(){const all=JSON.parse(localStorage.getItem('lk_locks'));all['${RES}'].req=[{by:'maria',at:Date.now()}];localStorage.setItem('lk_locks',JSON.stringify(all))})()`);
 await a.ev(`lkTick()`);await L.sleep(40);
 const ad=a.d.querySelector('#lockAlertDialog');
 L.check('Dono do registro recebe "Há outro usuário precisando atualizar informações"',ad.open&&/precisando atualizar informações/.test(ad.textContent)&&/maria/.test(a.d.querySelector('#lockAlertText').textContent));
 a.d.querySelector('#lockAlertKeep').click();
 L.check('"Continuar editando" fecha o alerta e mantém o bloqueio',!ad.open&&!!lockRow());
 a.ev(`(function(){const all=JSON.parse(localStorage.getItem('lk_locks'));all['${RES}'].req=[{by:'joao',at:Date.now()}];localStorage.setItem('lk_locks',JSON.stringify(all))})()`);
 await a.ev(`lkTick()`);await L.sleep(40);
 a.d.querySelector('#lockAlertSave').click();await L.sleep(150);
 L.check('"Salvar e liberar" salva, fecha o formulário e libera o registro',!a.d.querySelector('#formDialog').open&&lockRow()===null);
 // 6) fechar sem salvar libera
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(60);
 L.check('Reservado de novo ao reabrir',!!lockRow());
 a.ev(`document.querySelector('#formDialog').close()`);await L.sleep(40);
 L.check('Fechar o formulário libera o registro',lockRow()===null);
 // 7) bloqueio vencido não impede
 other({exp:Date.now()-1000});
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(60);
 L.check('Bloqueio vencido (usuário sumiu) não impede a edição',a.d.querySelector('#formDialog').open);
 // 8) inatividade: batimento não renova se parado
 const e0=lockRow().exp;a.ev(`lkActive=0`);await a.ev(`lkBeat()`);
 L.check('Usuário parado há muito tempo: o bloqueio NÃO é renovado (vai vencer sozinho)',lockRow().exp===e0);
 a.ev(`lkActive=Date.now()`);await L.sleep(5);await a.ev(`lkBeat()`);
 L.check('Usuário ativo: o bloqueio é renovado',lockRow().exp>=e0);
 a.ev(`document.querySelector('#formDialog').close()`);await L.sleep(30);
 // 9) o mesmo usuário não bloqueia a si mesmo
 await a.ev(`lkAcquire('${RES}')`);
 L.check('O dono do bloqueio não é barrado por si mesmo',a.ev(`lkBlocked('${RES}')`)===false);
 await a.ev(`lkRelease('${RES}')`);
 // 10) modo manual não usa bloqueio
 other();a.ev(`storage.setItem(MANUAL_ON,'1')`);
 L.check('Modo manual (dados fictícios) ignora bloqueios',a.ev(`lkBlocked('${RES}')`)===false);
 a.ev(`storage.removeItem(MANUAL_ON)`);a.ev(`localStorage.removeItem('lk_locks')`);
 // 11) chaves de bloqueio não entram no backup
 a.ev(`lkAcquire('${RES}')`);
 L.check('Dados de bloqueio (lk_*) ficam fora do backup',!/lk_locks|lk_session/.test(a.ev(`JSON.stringify(ajBackupBuild())`)));
 await a.ev(`lkRelease('${RES}')`);
 // ── Modo nuvem: NÃO / SIM e internet ──
 const off=on=>{a.ev(`Object.defineProperty(navigator,'onLine',{get:()=>${on?'true':'false'},configurable:true});window.dispatchEvent(new Event('${on?'online':'offline'}'))`)};
 const ban=()=>a.d.querySelector('#netBanner');
 L.check('Padrão do modo nuvem: NÃO',a.ev(`cloudMode()`)==='nao');
 off(false);
 L.check('Sem internet: aparece "SEM ACESSO A INTERNET"',!ban().hidden&&/SEM ACESSO A INTERNET/.test(ban().textContent));
 L.check('NÃO + sem internet: avisa que TODAS AS INFORMAÇÕES SERÃO GRAVADAS',/TODAS AS INFORMAÇÕES SERÃO GRAVADAS/.test(ban().textContent));
 a.ev(`storage.setItem('r1_extra_clients',JSON.stringify([{id:'c-nuvem',name:'Gravou offline'}]))`);
 L.check('NÃO + sem internet: a gravação acontece',a.ev(`readJSON('r1_extra_clients',[]).length`)===1);
 a.ev(`lkRaw.set('lk_cloud','sim');netRefresh()`);
 L.check('SIM + sem internet: aviso de APENAS LEITURA',/APENAS LEITURA DAS INFORMAÇÕES/.test(ban().textContent)&&/SEM ACESSO A INTERNET/.test(ban().textContent));
 a.ev(`storage.setItem('r1_extra_clients',JSON.stringify([{id:'c-nuvem',name:'Mudou'},{id:'c2',name:'Novo'}]))`);
 L.check('SIM + sem internet: gravação de dados é recusada (leitura continua)',a.ev(`readJSON('r1_extra_clients',[]).length`)===1&&a.ev(`readJSON('r1_extra_clients',[])[0].name`)==='Gravou offline');
 a.ev(`storage.setItem('r1_zoom','110')`);
 L.check('SIM + sem internet: preferências de tela (zoom) ainda gravam',a.ev(`storage.getItem('r1_zoom')`)==='110');
 await a.ev(`openForm('client')`);await L.sleep(60);
 L.check('SIM + sem internet: formulário de cadastro não abre e mostra a mensagem',!a.d.querySelector('#formDialog').open&&/SEM ACESSO A INTERNET/.test(a.d.querySelector('#toast').textContent));
 L.check('SIM + sem internet: apagar tudo e restaurar backup também bloqueados',a.ev(`cloudBlock()`)===true);
 off(true);
 L.check('Internet de volta: aviso some',ban().hidden);
 a.ev(`storage.setItem('r1_extra_clients',JSON.stringify([{id:'c-nuvem',name:'Mudou'},{id:'c2',name:'Novo'}]))`);
 L.check('SIM + com internet: grava normalmente',a.ev(`readJSON('r1_extra_clients',[]).length`)===2);
 a.ev(`lkRaw.set('lk_cloud','nao');render('dashboard');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),'dashboard')`);await L.sleep(80);
 L.check('Ajustes: pergunta "Utiliza em modo multiusuário na nuvem?" com botões NÃO e SIM',!!a.d.querySelector('[data-cloud="nao"]')&&!!a.d.querySelector('[data-cloud="sim"]')&&/Utiliza em modo multiusuário/.test(a.d.querySelector('#ajCloudQ').textContent));
 L.check('Ajustes: NÃO mostra "TODAS AS INFORMAÇÕES SERÃO GRAVADAS"',/TODAS AS INFORMAÇÕES SERÃO GRAVADAS/.test(a.d.querySelector('#ajCloudNote').textContent)&&!a.d.querySelector('#ajSbUrl'));
 a.d.querySelector('[data-cloud="sim"]').click();await L.sleep(80);
 L.check('Ajustes: SIM grava a escolha, mostra "APENAS SERÁ PERMITIDA A LEITURA" e os campos do Supabase',a.ev(`cloudMode()`)==='sim'&&/APENAS SERÁ PERMITIDA A LEITURA/.test(a.d.querySelector('#ajCloudNote').textContent)&&!!a.d.querySelector('#ajSbUrl'));
 a.ev(`lkRaw.set('lk_cloud','nao')`);
 L.check('Chave do modo nuvem fica fora do backup',!/lk_cloud/.test(a.ev(`JSON.stringify(ajBackupBuild())`)));
 // 12) Supabase simulado
 a.ev(`localStorage.setItem('lk_cloud','sim');localStorage.setItem('lk_sbcfg',JSON.stringify({url:'https://abc.supabase.co',anon:'ANON'}));localStorage.setItem('lk_session',JSON.stringify({access_token:'TOK',refresh_token:'R',user_id:'u1',email:'ana@x.com',org_id:'org1',exp:Date.now()+3600000}))`);
 a.ev(`window.__calls=[];window.__srv={};window.fetch=async(url,o)=>{o=o||{};const b=o.body?JSON.parse(o.body):null;window.__calls.push({url,method:o.method||'GET',h:o.headers,b});const mk=(j,s)=>({ok:(s||200)<400,status:s||200,text:async()=>JSON.stringify(j),json:async()=>j});
  if(/rpc\\/lock_acquire/.test(url)){const cur=window.__srv[b.p_resource];if(cur&&cur.holder!==b.p_holder)return mk({ok:false,holder:cur.name,holder_id:cur.holder});window.__srv[b.p_resource]={holder:b.p_holder,name:b.p_name};return mk({ok:true})}
  if(/rpc\\/lock_release/.test(url)){delete window.__srv[b.p_resource];return mk(null)}
  if(/rpc\\/lock_request/.test(url))return mk(null);
  if(/record_locks/.test(url))return mk(Object.keys(window.__srv).map(k=>({resource:k,holder_id:window.__srv[k].holder,holder_name:window.__srv[k].name,expires_at:new Date(Date.now()+60000).toISOString(),requests:[]})));
  return mk([])}`);
 L.check('Com sessão do Supabase o modo muda para "sb"',a.ev(`lkMode()`)==='sb');
 a.ev(`window.__srv['${RES}']={holder:'u2|zzz',name:'carlos'}`);
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(80);
 const c0=a.ev(`window.__calls.find(c=>/lock_acquire/.test(c.url))`);
 L.check('Supabase: chama lock_acquire com empresa, recurso, identificação e chaves corretas',!!c0&&c0.url==='https://abc.supabase.co/rest/v1/rpc/lock_acquire'&&c0.b.p_org==='org1'&&c0.b.p_resource===RES&&c0.h.apikey==='ANON'&&c0.h.Authorization==='Bearer TOK');
 L.check('Supabase: registro de outro usuário bloqueia e mostra o nome',!a.d.querySelector('#formDialog').open&&/carlos/.test(a.d.querySelector('#toast').textContent)&&/aguarde/.test(a.d.querySelector('#toast').textContent));
 L.check('Supabase: envia o pedido de acesso (lock_request) ao dono',a.ev(`window.__calls.some(c=>/lock_request/.test(c.url))`));
 a.ev(`delete window.__srv['${RES}']`);
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(80);
 L.check('Supabase: livre, o formulário abre',a.d.querySelector('#formDialog').open);
 a.ev(`document.querySelector('#formDialog').close()`);await L.sleep(60);
 L.check('Supabase: fechar chama lock_release',a.ev(`window.__calls.some(c=>/lock_release/.test(c.url))`)&&!a.ev(`window.__srv['${RES}']`));
 // falha de rede: edita com aviso
 a.ev(`window.fetch=async()=>{throw new Error('offline')}`);
 await a.ev(`openForm('supplier','',${rec})`);await L.sleep(80);
 L.check('Supabase fora do ar (modo SIM): não abre para edição, mostra SEM ACESSO A INTERNET',!a.d.querySelector('#formDialog').open&&/SEM ACESSO A INTERNET/.test(a.d.querySelector('#toast').textContent));
 a.ev(`document.querySelector('#formDialog').close()`);
 // login: validação
 let err='';try{await a.ev(`sbLogin('http://evil.com','k','a@b.c','x')`)}catch(e){err=String(e&&e.message||e)}
 L.check('Login Supabase recusa endereço que não seja https://….supabase.co',/inválido/i.test(err));
 a.ev(`window.fetch=async()=>{throw new Error('offline')}`);await a.ev(`lkPull()`);
 L.check('SIM + servidor fora do ar: considera sem internet e bloqueia gravação',a.ev(`cloudReadOnly()`)===true&&!ban().hidden);
 a.ev(`window.fetch=async()=>({ok:true,status:200,text:async()=>'[]',json:async()=>[]})`);await a.ev(`lkPull()`);
 L.check('Servidor voltou: libera de novo',a.ev(`cloudReadOnly()`)===false&&ban().hidden);
 a.ev(`sbLogout()`);
 L.check('Desconectar volta ao modo local',a.ev(`lkMode()`)==='local');
 return L.summary();
}
module.exports={run};

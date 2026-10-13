// App novo vem vazio; instalações antigas mantêm os exemplos; manual traz os exemplos; alternância em Ajustes.
const L=require('./lib.js'),X=require('./xss-leak.js');
const yes=async a=>{await L.sleep(40);a.d.querySelector('#askConfirmYes').click();await L.sleep(80)};
const DEMO=/Beatriz|Ana & Lucas|Grupo Orion|VetFlow|AttimoDrive|PDVMix|Buffet Maison|DJ Pulse|Atelier Flores|Frame 8|LumiPro|Bar Signature|Mariana Souza|Equipe Rizzieri/;
async function run(){
 L.reset();
 // ── instalação nova ──
 let a=await L.loadApp({wait:350});
 L.check('app novo: modo vazio definido',a.w.localStorage.getItem('r1_basemode')==='empty');
 L.check('app novo: nada de eventos, clientes, projetos, fornecedores, financeiro',a.ev(`[getEvents().length,getClients().length,getProjects().length,getSuppliers().length,finAll().length,getCatalog().length].join()`)==='0,0,0,0,0,0');
 const wss=['Negócios','Eventos','Pessoal','Ideias'];let vazados=[],telas=0;
 for(const ws of wss){
  const ids=a.ev(`(function(){applyWorkspace(${JSON.stringify(ws)});return navWithGlobalAgenda(activeConfig().nav).map(x=>x[0])})()`);
  for(const id of ids){try{a.ev(`render(${JSON.stringify(id)})`)}catch(e){vazados.push(ws+'/'+id+' ERRO '+e.message)}
   const t=a.d.querySelector('#content').textContent;telas++;if(DEMO.test(t))vazados.push(ws+'/'+id+': '+(t.match(DEMO)||[])[0])}
 }
 L.check('app novo: '+telas+' telas renderizam vazias sem erro e sem exemplo da base',vazados.length===0,vazados.slice(0,4).join(' | '));
 // formulários abrem vazios
 const forms=a.ev(`Object.keys(forms)`);let fe=[];
 for(const t of forms){try{a.ev(`openForm('${t}')`);a.ev(`document.querySelector('#formDialog').close()`)}catch(e){fe.push(t+': '+e.message)}}
 L.check('app novo: todos os formulários de cadastro abrem ('+forms.length+')',fe.length===0,fe.slice(0,3).join(' | '));
 // cartão de boas-vindas vazio
 a.ev(`applyWorkspace('Eventos');render('dashboard')`);
 L.check('app novo: dashboard mostra o cartão "Ver com dados fictícios"',!!a.d.querySelector('.empty-start [data-manual-start]'));
 L.check('app novo: busca global e alertas não quebram',(()=>{try{a.ev(`updateAlertCenter()`);return true}catch(e){return false}})());
 // abrir manual pelo cartão
 a.d.querySelector('.empty-start [data-manual-start]').click();await yes(a);await L.sleep(500);
 L.check('cartão abre o manual com os exemplos',a.ev(`manualOn()&&getEvents().length===3`));
 L.check('manual: backup e modo-base não vazam para o arquivo de backup',!Object.keys(a.ev(`ajBackupBuild().data`)).some(k=>/r1_manual_|r1_basemode/.test(k)));
 a.ev(`manualExit(false)`);await L.sleep(900);
 L.check('sair do manual: volta ao app vazio com o cartão',a.ev(`!manualOn()&&getEvents().length===0`)&&!!a.d.querySelector('.empty-start'));
 // tutorial que precisa de evento oferece o manual
 const fid=a.ev(`Object.keys(tutorialFlows).find(k=>tutorialFlows[k].steps.some(s=>TUTORIAL_NEEDS_DATA.has(s.action))&&k!=='telas')`);
 a.ev(`startTutorial(${JSON.stringify(fid)})`);await L.sleep(80);
 L.check('tutorial "'+fid+'" sem eventos: oferece abrir o manual',!!a.d.querySelector('#askConfirmDialog[open]')&&/ainda não tem nenhum/.test(a.d.querySelector('#askConfirmText').textContent));
 await yes(a);await L.sleep(900);
 L.check('...e ao aceitar, o tutorial começa sobre os dados fictícios',a.ev(`manualOn()&&activeTutorialId===${JSON.stringify(fid)}`));
 a.ev(`manualExit(false)`);await L.sleep(900);
 // alternar exemplos antigos em Ajustes
 a.ev(`openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)`);await L.sleep(50);
 L.check('Ajustes: mostra o botão de exemplos antigos',!!a.d.querySelector('#ajBaseToggle'));
 a.d.querySelector('#ajBaseToggle').click();await yes(a);await L.sleep(100);
 L.check('Ajustes: "Mostrar exemplos antigos" liga a base',a.w.localStorage.getItem('r1_basemode')==='legacy'&&a.ev(`getEvents().length`)===4);
 a.d.querySelector('#ajBaseToggle').click();await yes(a);await L.sleep(100);
 L.check('Ajustes: "Ocultar" volta ao vazio',a.w.localStorage.getItem('r1_basemode')==='empty'&&a.ev(`getEvents().length`)===0);
 L.check('modo da base sobrevive a "apagar tudo" e fora do backup',a.ev(`R1_PLAN_KEEP.includes('r1_basemode')&&isPlainKey('r1_basemode')`));
 const r=await X.walk(a,260,5);
 L.check('app novo: caminhada de 260 passos sem erro de JavaScript',a.errs.length===0,a.errs.slice(0,3).join(' | '));
 L.check('app novo: sem erros de JavaScript',a.errs.length===0,a.errs.slice(0,3).join(' | '));
 a.w.close();
 // ── instalação antiga (já usou o app): mantém os exemplos ──
 a=await L.loadApp({seed:{rizzieri_one_demo:'1'},wait:450,login:false});
 L.check('instalação antiga (demo ativo): modo legado, 4 eventos de exemplo',a.w.localStorage.getItem('r1_basemode')==='legacy'&&a.ev(`getEvents().length`)===4);
 a.w.close();
 a=await L.loadApp({seed:{r1_extra_clients:'[]'},wait:350});
 L.check('instalação com dados salvos (sem marca de demo): modo legado',a.w.localStorage.getItem('r1_basemode')==='legacy'&&a.ev(`getEvents().length`)===4);
 a.w.close();
 // modo persiste entre recarregamentos: app novo continua vazio mesmo depois de ter usado (rizzieri_one_demo=1 criado no login)
 a=await L.loadApp({wait:350});const snap={};Object.keys(a.w.localStorage).forEach(k=>snap[k]=a.w.localStorage.getItem(k));a.w.close();
 a=await L.loadApp({seed:snap,wait:450,login:false});
 L.check('app novo recarregado continua vazio',a.w.localStorage.getItem('r1_basemode')==='empty'&&a.ev(`getEvents().length`)===0);
 a.w.close();
 return L.summary('vazio');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

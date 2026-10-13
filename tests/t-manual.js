// Modo manual: dados fictícios, sair do manual devolve os dados reais, bloqueios e passeio guiado.
const L=require('./lib.js');
const real={
 r1_extra_events:JSON.stringify([{id:'real-1',title:'Meu Evento Real',type:'Casamento',client:'Cliente Real',date:'2031-05-10',venue:'Local Real',guests:80,budget:50000,progress:10,status:'Em produção',manager:'Eu',critical:0}]),
 r1_extra_clients:JSON.stringify([{id:'real-c',name:'Cliente Real',secondary:'',type:'Pessoa física',createdAt:'2030-01-01',document:'',phone:'',email:'',city:'',state:'',events:1,status:'Ativo',notes:''}]),
 r1_fin_v2:JSON.stringify([{id:'real-f',ws:'Eventos',tipo:'rec',categoria:'Contrato',parte:'Cliente Real',descricao:'Sinal real',valorCent:123400,data:'2030-01-02',dataReal:'2030-01-02',forma:'vista',eventId:'real-1',projectId:'',clientId:'',origem:'x',createdAt:1}]),
 r1_fin_v2_mig:'1',r1_deleted:JSON.stringify({r1_extra_events:['ev-corporativo']}),
 r1_company_profile:JSON.stringify({businessName:'Minha Marca Real'})
};
const yes=async a=>{await L.sleep(40);const b=a.d.querySelector('#askConfirmYes');b.click();await L.sleep(60)};
async function run(){
 L.reset();
 // ── ciclo completo ──
 let a=await L.loadApp({seed:real,wait:350});
 const antes={};a.ev(`manualDataKeys()`).forEach(k=>antes[k]=a.w.localStorage.getItem(k));
 const p=a.ev(`manualStart()`);await yes(a);const ok=await p;
 L.check('manualStart abre o manual',ok===true&&a.ev(`manualOn()`));
 const ev=a.ev(`getEvents().map(e=>e.title)`);
 L.check('manual: eventos fictícios presentes',ev.includes('Casamento • Camila & Diego')&&ev.length===3,JSON.stringify(ev));
 L.check('manual: nenhum dado real nem de base misturado',!ev.some(t=>/Real|Beatriz|Ana & Lucas/.test(t)));
 L.check('manual: financeiro fictício (sem lançamento real)',a.ev(`finAll().length>10&&!finAll().some(x=>x.id==='real-f')&&!finAll().some(x=>x.origem==='base')`));
 L.check('manual: faixa "Sair do manual" visível',!a.d.querySelector('#manualBar').hidden&&a.d.body.classList.contains('manual-on'));
 L.check('manual: dados reais guardados em cópia',!!a.w.localStorage.getItem('r1_manual_backup')&&!a.w.localStorage.getItem('r1_extra_clients').includes('Cliente Real'));
 L.check('manual: perfil da empresa real é mantido',a.w.localStorage.getItem('r1_company_profile').includes('Minha Marca Real'));
 L.check('manual: backup nunca inclui chaves do manual',!Object.keys(a.ev(`ajBackupBuild().data`)).some(k=>k.startsWith('r1_manual_')));
 // bloqueios
 a.ev(`ajDownloadBackup()`);L.check('manual: baixar backup bloqueado',/Sair do manual/.test(a.d.querySelector('#toast').textContent));
 a.ev(`ajApagarTudo()`);await L.sleep(40);L.check('manual: apagar tudo bloqueado (sem diálogo)',!a.d.querySelector('#askConfirmDialog[open]'));
 // todas as telas principais renderizam com os dados fictícios
 const telas=[['Eventos','eventos','#eventsGrid'],['Eventos','clientes','#clientsGrid'],['Eventos','fornecedores','#suppliersGrid'],['Eventos','catalogo','#catalogGrid'],['Eventos','financeiro','#finRoot'],['Eventos','agenda','#agendaList'],['Negócios','projetos','#projectsGrid'],['Pessoal','objetivos','[data-create="personalGoal"]'],['Ideias','ideias','[data-create="idea"]']];
 for(const [ws,n,sel] of telas){const r=a.ev(`(function(){applyWorkspace(${JSON.stringify(ws)});render(${JSON.stringify(n)});const c=document.querySelector(${JSON.stringify(sel)});return c?c.textContent.replace(/\\s+/g,' ').length:-1})()`);L.check('tela '+n+' renderiza com dados fictícios',r>0,String(r))}
 L.check('hub do evento fictício abre com checklist, cronograma e convidados',a.ev(`(function(){const h=eventHubView('man-ev1');return /Checklist/i.test(h)&&getChecklist('man-ev1').length>=5&&getTimeline('man-ev1').length>=6&&getGuests('man-ev1').length>=10&&getEventCatalog('man-ev1').length>=4})()`));
 // algo criado dentro do manual não sobrevive
 a.ev(`saveExtra('r1_extra_clients',{id:'man-novo',name:'Criado no manual',type:'Pessoa física',createdAt:'2030-01-01'})`);
 L.check('manual: dá para criar registros (para praticar)',a.ev(`getClients().some(c=>c.id==='man-novo')`));
 const q=a.ev(`manualExit()`);await yes(a);const saiu=await q;await L.sleep(700);
 L.check('manualExit conclui',saiu===true&&!a.ev(`manualOn()`));
 const depois={};a.ev(`manualDataKeys()`).forEach(k=>depois[k]=a.w.localStorage.getItem(k));
 const dif=Object.keys({...antes,...depois}).filter(k=>antes[k]!==depois[k]);
 L.check('sair: dados reais IDÊNTICOS aos de antes (chave por chave)',dif.length===0,dif.join(','));
 L.check('sair: nada do manual sobra',!a.w.localStorage.getItem('r1_manual_backup')&&!a.w.localStorage.getItem('r1_manual_on')&&!JSON.stringify(depois).includes('man-ev1')&&!JSON.stringify(depois).includes('Criado no manual'));
 L.check('sair: faixa some e telas voltam ao normal',a.d.querySelector('#manualBar').hidden&&!a.d.body.classList.contains('manual-on')&&a.ev(`getEvents().some(e=>e.id==='real-1')`));
 a.w.close();
 // ── recarregar a página dentro do manual: continua no manual com a faixa ──
 a=await L.loadApp({seed:real,wait:350});
 const p2=a.ev(`manualStart()`);await yes(a);await p2;
 const snap={};Object.keys(a.w.localStorage).forEach(k=>snap[k]=a.w.localStorage.getItem(k));a.w.close();
 a=await L.loadApp({seed:snap,wait:450});
 L.check('recarregar no manual: continua com faixa visível e dados fictícios',a.ev(`manualOn()`)&&!a.d.querySelector('#manualBar').hidden&&a.ev(`getEvents().length`)===3);
 const q2=a.ev(`manualExit()`);await yes(a);await q2;await L.sleep(700);
 L.check('sair depois de recarregar também devolve os dados reais',a.ev(`getEvents().some(e=>e.id==='real-1')`)&&JSON.parse(a.w.localStorage.getItem('r1_fin_v2'))[0].id==='real-f');
 a.w.close();
 // ── teste grátis vencido (somente leitura): manual funciona e a saída ainda restaura ──
 const iso=n=>{const d=new Date();d.setDate(d.getDate()+n);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
 const venc={...real,r1_trial:JSON.stringify({active:true,startedAt:iso(-31),expiresAt:iso(-1)})};
 a=await L.loadApp({seed:venc,wait:400});
 L.check('cenário: teste vencido em modo somente leitura',a.ev(`planState().somenteLeitura`)===true&&!!a.d.querySelector('#appView:not(.hidden)'));
 {
  L.check('teste vencido: gravação normal está bloqueada',a.ev(`planWriteBlocked('r1_extra_events')`)===true);
  const p3=a.ev(`manualStart()`);await yes(a);const ok3=await p3;
  L.check('teste vencido: manual abre e grava os dados fictícios',ok3===true&&a.ev(`getEvents().length`)===3);
  const q3=a.ev(`manualExit()`);await yes(a);await q3;await L.sleep(700);
  L.check('teste vencido: sair restaura os dados reais',a.ev(`JSON.parse(localStorage.getItem('r1_extra_events'))[0].id`)==='real-1');
 }
 a.w.close();
 // ── passeio guiado "telas": todos os alvos existem ──
 a=await L.loadApp({seed:real,wait:350});
 const p4=a.ev(`startTutorial('telas')`);await yes(a);await L.sleep(500);
 L.check('passeio: abre o manual e inicia no passo 1',a.ev(`manualOn()&&activeTutorialId==='telas'`));
 const n=a.ev(`tutorialFlows.telas.steps.length`);let achou=0,falta=[];
 for(let i=0;i<n;i++){
  await L.sleep(900);
  const alvo=a.ev(`(function(){const st=tutorialFlows.telas.steps[tutorialStepIndex];const el=st.target&&(trEl(st.target)||document.querySelector(st.target));return !!el})()`);
  if(alvo)achou++;else falta.push(i+1);
  if(i<n-1){a.ev(`nextTutorial()`)}
 }
 L.check('passeio: alvo de cada passo existe na tela ('+achou+'/'+n+')',achou===n,'faltam passos '+falta.join(','));
 L.check('passeio: botão "Sair do manual" aparece no cartão do tutorial',!a.d.querySelector('#tutorialManualExit').hidden);
 const q4=a.ev(`manualExit()`);await yes(a);await q4;await L.sleep(700);
 L.check('passeio: sair do manual encerra o tutorial e restaura',!a.ev(`manualOn()`)&&a.ev(`activeTutorialId`)===null&&a.ev(`getEvents().some(e=>e.id==='real-1')`));
 L.check('sem erros de JavaScript no manual',a.errs.length===0,a.errs.slice(0,3).join(' | '));
 a.w.close();
 return L.summary('manual');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

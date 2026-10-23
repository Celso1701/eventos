// V1.37–1.38: lembrete de backup, Pix, cronograma por responsável, convites e fotos.
const L=require('./lib.js');
async function run(){
 L.reset();
 let a=await L.loadApp({wait:350});
 // ── Pix: CRC e payload ──
 L.check('Pix: CRC16 do vetor padrão "123456789" = 29B1',a.ev(`pixCRC('123456789')`)==='29B1');
 const pl=a.ev(`pixPayload({chave:'(11) 99999-9999',nome:'João da Silva',cidade:'São Paulo',cent:15050,txid:'ab-12'})`);
 L.check('Pix: payload termina com CRC válido',/6304[0-9A-F]{4}$/.test(pl)&&a.ev(`pixCRC(${JSON.stringify(pl.slice(0,-4))})`)===pl.slice(-4));
 L.check('Pix: telefone vira +55..., valor 150.50, nome/cidade sem acento em maiúsculas',/\+5511999999999/.test(pl)&&pl.includes('5406150.50')&&pl.includes('JOAO DA SILVA')&&pl.includes('SAO PAULO'));
 L.check('Pix: chave vazia não gera código',a.ev(`pixPayload({chave:'',cent:100})`)==='');
 L.check('Pix: QR gera matriz quadrada (versão ≥ 3) para o payload',(()=>{const n=a.ev(`(qrMatrix(${JSON.stringify(pl)})||[]).length`);return n>=29&&(n-17)%4===0})());
 // ── Pix: diálogo ──
 a.ev(`(function(){const k='r1_fin_v2';storage.setItem(k,JSON.stringify([{id:'fx1',tipo:'rec',ws:'Eventos',valorCent:250000,data:finLocalISO(),descricao:'Parcela 1',categoria:'Parcela'}]))})()`);
 a.ev(`render('dashboard')`);
 a.ev(`pixOpen('fx1')`);await L.sleep(60);
 L.check('Pix sem chave: diálogo pede cadastro da chave',/Cadastrar chave Pix/.test(a.d.querySelector('#pixBody').textContent));
 a.ev(`document.querySelector('#pixDialog').close();storage.setItem('r1_pix_cfg',JSON.stringify({chave:'a@b.com',nome:'Rizzieri',cidade:'Curitiba'}))`);
 a.ev(`pixOpen('fx1')`);await L.sleep(60);
 const code=a.d.querySelector('#pixCode')&&a.d.querySelector('#pixCode').value;
 L.check('Pix com chave: mostra copia-e-cola com o valor da receita',!!code&&code.includes('5407')&&code.includes('2500.00')&&/6304[0-9A-F]{4}$/.test(code));
 L.check('Pix: diálogo mostra recebedor, chave e valor',/Recebedor:\s*Rizzieri/.test(a.d.querySelector('#pixBody').textContent)&&/Chave Pix:\s*a@b\.com/.test(a.d.querySelector('#pixBody').textContent));
 a.ev(`document.querySelector('#pixDialog').close()`);
 // ── Backup lembrete ──
 a.ev(`storage.removeItem('r1_last_backup');storage.removeItem('r1_bk_snooze');applyWorkspace('Eventos');render('dashboard')`);
 L.check('Backup: com dados e sem backup, o Início mostra o lembrete',!!a.d.querySelector('[data-bk-reminder]'));
 a.ev(`bkAdiar()`);
 L.check('Backup: "Lembrar em 3 dias" esconde o lembrete',!a.d.querySelector('[data-bk-reminder]'));
 a.ev(`storage.removeItem('r1_bk_snooze');storage.setItem('r1_last_backup',finLocalISO());render('dashboard')`);
 L.check('Backup: com backup de hoje, sem lembrete',!a.d.querySelector('[data-bk-reminder]'));
 a.ev(`storage.setItem('r1_last_backup',finLocalISO(new Date(Date.now()-9*864e5)));render('dashboard')`);
 L.check('Backup: backup de 9 dias atrás volta a lembrar',!!a.d.querySelector('[data-bk-reminder]')&&/9 dias/.test(a.d.querySelector('[data-bk-reminder]').textContent));
 // ── Cronograma por responsável (manual = dados de exemplo) ──
 a=await L.loadApp({wait:350});
 a.d.querySelector('.empty-start [data-manual-start]').click();await L.sleep(60);
 a.d.querySelector('#askConfirmYes').click();await L.sleep(600);
 const eid=a.ev(`getEvents()[0].id`);
 const grp=a.ev(`tlOwners(${JSON.stringify(eid)}).map(g=>g.owner+':'+g.list.length)`);
 const tot=a.ev(`getTimeline(${JSON.stringify(eid)}).length`);
 L.check('Cronograma por responsável: grupos somam todas as etapas',grp.reduce((s,x)=>s+Number(x.split(':').pop()),0)===tot&&grp.length>=1,grp.join(','));
 a.ev(`tlOwnersOpen(${JSON.stringify(eid)})`);await L.sleep(50);
 L.check('Diálogo por responsável lista um botão PDF e WhatsApp por responsável',a.d.querySelectorAll('[data-tlo-pdf]').length===grp.length&&a.d.querySelectorAll('[data-tlo-wa]').length===grp.length);
 a.ev(`document.querySelector('#tlOwnersDialog').close();window.print=()=>{}`);
 const own=grp[0].split(':').slice(0,-1).join(':');
 a.ev(`printDocument('timeline',${JSON.stringify(eid)},{owner:${JSON.stringify(own)}})`);
 const html=a.d.querySelector('#printRoot').innerHTML;
 const n=a.ev(`tlOwners(${JSON.stringify(eid)})[0].list.length`);
 L.check('PDF por responsável: só as etapas dele e o título com o nome',html.includes(own.toUpperCase().replace(/&/g,'&amp;'))&&(html.match(/<tr/g)||[]).length<=n+2,own);
 // ── Convite individual por WhatsApp ──
 a.ev(`window.__opened=[];window.open=(u)=>{window.__opened.push(u)}`);
 const g0=a.ev(`getGuests(${JSON.stringify(eid)}).find(x=>x.phone)||null`);
 const gx=a.ev(`getGuests(${JSON.stringify(eid)})[0]`);
 L.check('Convite: há convidados no exemplo',!!gx);
 a.ev(`guestInviteOne(${JSON.stringify(gx.id)})`);
 const url=a.ev(`window.__opened[0]||''`);
 L.check('Convite: abre wa.me com o nome do convidado e o título do evento',/wa\.me\//.test(url)&&decodeURIComponent(url).includes(gx.name)&&decodeURIComponent(url).includes(a.ev(`getEvents()[0].title`)),url.slice(0,90));
 L.check('Convite: pede SIM/NÃO para confirmar',/SIM/.test(decodeURIComponent(url)));
 a.ev(`guestInviteOpen(${JSON.stringify(eid)})`);await L.sleep(50);
 const pend=a.ev(`getGuests(${JSON.stringify(eid)}).filter(x=>x.status==='Pendente'||!x.status).length`);
 L.check('Convidar pendentes: um botão Enviar por pendente',a.d.querySelectorAll('[data-gi-send]').length===pend,String(pend));
 a.ev(`document.querySelector('#guestInviteDialog').close()`);
 L.check('Tela de convidados mostra "💌 Convidar" em cada linha',(a.ev(`guestsView(${JSON.stringify(eid)})`).match(/data-guest-invite="/g)||[]).length===a.ev(`getGuests(${JSON.stringify(eid)}).length`));
 // ── Plano de pagamento usa o Orçamento previsto ──
 a.ev(`(function(){const ex=readJSON('r1_extra_events',[]);ex.push({id:'ev-novo-plano',title:'Evento teste plano',type:'Casamento',client:'Cliente T',date:'2027-03-10',venue:'Local',guests:100,budget:50000,progress:0,status:'Planejamento',manager:'X',critical:0});storage.setItem('r1_extra_events',JSON.stringify(ex))})()`);
 const sem={id:'ev-novo-plano',b:50000};
 {a.ev(`(function(){const e=getEvents().find(x=>x.id===${JSON.stringify(sem.id)});const ids=getCatalog().slice(0,2).map(c=>c.id);storage.setItem('r1_event_catalog_'+e.id,JSON.stringify(ids));openPayPlanDialog(e.id)})()`);await L.sleep(60);
  const tot=a.d.querySelector('#ppTotal').value,esp=a.ev(`finFmtNum(Math.round(${sem.b}*100))`);
  L.check('Plano de pagamento: valor do contrato = Orçamento previsto do evento (mesmo com itens no catálogo)',tot===esp,tot+' vs '+esp);
  L.check('Plano de pagamento: mostra o aviso do valor previsto',/Orçamento previsto/.test(a.d.querySelector('#ppPrevisto').textContent));
  a.ev(`document.querySelector('#payPlanDialog').close()`)}
 L.check('Título da tela do projeto agora é "Evolução do produto"',!/Hub do produto/i.test(a.ev(`projectHubView(getProjects()[0].id)`)));
 // ── Outros cadastros + Mensagens por evento ──
 a.ev(`applyWorkspace('Eventos');render('dashboard')`);await L.sleep(60);
 const qg=a.d.querySelector('#content .quick-grid');const bts=qg?[...qg.querySelectorAll('button')].map(b=>b.textContent.trim()):[];
 L.check('Visão geral Eventos: "Outros cadastros" vem logo depois de Financeiro',bts.indexOf('Outros cadastros')===bts.indexOf('Financeiro')+1&&bts.indexOf('Financeiro')>0,bts.join('|'));
 a.d.querySelector('[data-open-cadastros]').click();await L.sleep(80);
 L.check('Outros cadastros abre com as 4 listas',!!a.d.querySelector('[data-cadastros-screen]')&&['Tipos de evento','Categorias de fornecedor','Categorias de catálogo','Tipos de compromisso'].every(t=>a.d.querySelector('#content').textContent.includes(t)));
 a.d.querySelector('#ajNewEventType').value='Chá de bebê';a.d.querySelector('#ajAddEventType').click();await L.sleep(80);
 L.check('Outros cadastros: adicionar tipo de evento funciona e atualiza a tela',a.ev(`getEventTypes().some(t=>t.name==='Chá de bebê')`)&&a.d.querySelector('#content').textContent.includes('Chá de bebê'));
 a.ev(`openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)`);await L.sleep(60);
 L.check('Ajustes: listas e mensagens saíram; há atalho para Outros cadastros',!a.d.querySelector('#ajNewEventType')&&!a.d.querySelector('#ajTplEvent')&&!!a.d.querySelector('[data-open-cadastros]'));
 const e1=a.ev(`getEvents()[0].id`),e2=a.ev(`getEvents()[1].id`);
 a.ev(`render('dashboard');openSubView('Hub do evento','EVENTOS',()=>eventHubView(${JSON.stringify(e1)}),'eventos')`);await L.sleep(60);
 L.check('Hub do evento tem o botão "Mensagens"',!!a.d.querySelector('[data-open-evmsg]'));
 a.d.querySelector('[data-open-evmsg]').click();await L.sleep(40);
 a.d.querySelector('#evMsgEvent').value='Oi, família do evento 1!';a.d.querySelector('#evMsgSave').click();await L.sleep(40);
 L.check('Mensagens do evento gravadas só nele',a.ev(`evMsgGet(${JSON.stringify(e1)}).event`)==='Oi, família do evento 1!'&&a.ev(`evMsgGet(${JSON.stringify(e2)}).event`)==='');
 a.ev(`window.__opened=[];window.open=u=>{window.__opened.push(String(u))}`);
 a.ev(`shareEventWhatsApp(${JSON.stringify(e1)})`);a.ev(`shareEventWhatsApp(${JSON.stringify(e2)})`);
 const ops=a.ev(`window.__opened.map(decodeURIComponent)`);
 L.check('WhatsApp do evento 1 leva a mensagem dele; o do evento 2 não',ops[0].includes('Oi, família do evento 1!')&&!ops[1].includes('Oi, família do evento 1!'));
 // ── Outros / Fotos ──
 L.check('Hub do evento tem o botão "Outros / Fotos" depois do Mapa de mesas',(()=>{const h=a.ev(`eventHubView(${JSON.stringify(eid)})`);return h.indexOf('data-open-seating')>0&&h.indexOf('data-open-photos')>h.indexOf('data-open-seating')})());
 a.ev(`openSubView('Outros / Fotos','EVENTOS & EXPERIÊNCIAS',()=>photosView(${JSON.stringify(eid)}),'eventos')`);await L.sleep(60);
 L.check('Fotos: campo de assunto com exemplo "locais turísticos" e botões câmera + galeria',/locais tur/.test(a.d.querySelector('#phSubject').placeholder)&&!!a.d.querySelector('#phCamIn[capture]')&&!!a.d.querySelector('#phGalIn[multiple]'));
 const png='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
 a.ev(`(function(){const o={subject:'locais turísticos',notes:'',fotos:[]};for(let i=0;i<10;i++)o.fotos.push({id:'p'+i,data:${JSON.stringify(png)}});storage.setItem(phKey(${JSON.stringify(eid)}),JSON.stringify(o));phRefresh(${JSON.stringify(eid)})})()`);await L.sleep(80);
 L.check('Fotos: com 10 fotos mostra 10 miniaturas, contador "10 de 10" e botões desativados',a.d.querySelectorAll('.ph-item').length===10&&/10 de 10/.test(a.d.querySelector('#phCount').textContent)&&a.d.querySelector('#phCamIn').disabled);
 await a.ev(`phAdd(${JSON.stringify(eid)},[{type:'image/png',name:'x.png'}])`);
 L.check('Fotos: tentar passar de 10 não adiciona',a.ev(`phGet(${JSON.stringify(eid)}).fotos.length`)===10);
 L.check('Fotos: assunto salvo no armazenamento',a.ev(`phGet(${JSON.stringify(eid)}).subject`)==='locais turísticos');
 // ── Degustação: evento travado ──
 a.ev(`document.querySelector('#formDialog').open&&document.querySelector('#formDialog').close()`);
 // ── Botão Salvar avaliação na degustação ──
 a.ev(`storage.setItem('r1_extra_tastings',JSON.stringify([{id:'tt1',eventId:${JSON.stringify(eid)},kind:'Bebidas e drinks',date:'2026-10-23',time:'18:00',supplier:'Xz',menu:'Agua',approved:'Pendente'}]));openSubView('Degustações','EVENTOS',()=>tastingView(${JSON.stringify(eid)}),'eventos')`);await L.sleep(80);
 const sb=a.d.querySelector('[data-score-save="tt1"]');
 L.check('Degustação: botão "Salvar avaliação" aparece no cartão',!!sb);
 sb.click();await L.sleep(30);
 L.check('Salvar sem nota: avisa para escolher a nota',/Escolha uma nota/.test(a.d.querySelector('#toast').textContent));
 a.d.querySelector('#content [data-score-set][data-val="7"]').click();await L.sleep(30);
 a.d.querySelector('[data-score-save="tt1"]').click();await L.sleep(30);
 L.check('Salvar com nota 7: confirma "7/10"',/7\/10/.test(a.d.querySelector('#toast').textContent));
 a.ev(`openForm('tasting',${JSON.stringify(eid)})`);await L.sleep(80);
 L.check('Nova degustação a partir do evento: evento travado (sem select) com campo oculto do evento',!!a.d.querySelector('[data-ev-locked]')&&!a.d.querySelector('#dynamicForm select[name="eventId"]')&&a.d.querySelector('#dynamicForm input[type=hidden][name="eventId"]').value===eid);
 L.check('...e o formulário envia o evento certo',new a.w.FormData(a.d.querySelector('#dynamicForm')).get('eventId')===eid);
 a.ev(`document.querySelector('#formDialog').close()`);
 a.ev(`openForm('tasting')`);await L.sleep(60);
 L.check('Degustação sem evento de contexto (atalho geral): continua escolhendo o evento',!!a.d.querySelector('#dynamicForm select[name="eventId"]'));
 a.ev(`document.querySelector('#formDialog').close()`);
 a.ev(`openForm('tasting','',{id:'tx',eventId:${JSON.stringify(eid)},kind:'Bebidas e drinks'})`);await L.sleep(60);
 L.check('Editar degustação: evento também travado',!!a.d.querySelector('[data-ev-locked]')&&!a.d.querySelector('#dynamicForm select[name="eventId"]'));
 a.ev(`document.querySelector('#formDialog').close()`);
 a.ev(`openForm('checklist',${JSON.stringify(eid)})`);await L.sleep(60);
 L.check('Outros formulários não mudam (checklist ainda tem seleção de evento)',!!a.d.querySelector('#dynamicForm select[name="eventId"]'));
 a.ev(`document.querySelector('#formDialog').close()`);
 return L.summary();
}
module.exports={run};

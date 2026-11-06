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
 a.ev(`document.querySelector('#pixDialog').close();storage.setItem('r1_pix_cfg',JSON.stringify({chave:'a@b.com',nome:'DIAdoEVENTO',cidade:'Curitiba'}))`);
 a.ev(`pixOpen('fx1')`);await L.sleep(60);
 const code=a.d.querySelector('#pixCode')&&a.d.querySelector('#pixCode').value;
 L.check('Pix com chave: mostra copia-e-cola com o valor da receita',!!code&&code.includes('5407')&&code.includes('2500.00')&&/6304[0-9A-F]{4}$/.test(code));
 L.check('Pix: diálogo mostra recebedor, chave e valor',/Recebedor:\s*DIAdoEVENTO/.test(a.d.querySelector('#pixBody').textContent)&&/Chave Pix:\s*a@b\.com/.test(a.d.querySelector('#pixBody').textContent));
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
 L.check('Fotos: assunto, botões Tirar foto/Galeria (botões reais), 9 espaços e vídeo',/locais tur/.test(a.d.querySelector('#phSubject').placeholder)&&a.d.querySelector('#phCam').tagName==='BUTTON'&&!!a.d.querySelector('#phGal')&&a.d.querySelectorAll('.ph-slot').length===9&&!!a.d.querySelector('#phVidCam'));
 L.check('Fotos: só o espaço 1 está liberado; 2 a 9 trancados',a.d.querySelectorAll('.ph-next').length===1&&a.d.querySelector('.ph-next').dataset.phSlot==='0'&&a.d.querySelectorAll('.ph-lock').length===8);
 L.check('Fotos: 6 públicas e 3 privativas nos títulos',/Fotos principais públicas/.test(a.d.body.textContent)&&/Fotos adicionais privativas/.test(a.d.body.textContent));
 a.d.querySelector('.ph-lock').click();
 const png='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
 a.ev(`(function(){const o={subject:'locais turísticos',notes:'',fotos:[]};for(let i=0;i<3;i++)o.fotos.push({id:'p'+i,data:${JSON.stringify(png)},publica:true});storage.setItem(phKey(${JSON.stringify(eid)}),JSON.stringify(o));phRefresh(${JSON.stringify(eid)})})()`);await L.sleep(80);
 L.check('Fotos: com 3 fotos o próximo liberado é o 4',a.d.querySelectorAll('.ph-slot.filled').length===3&&a.d.querySelector('.ph-next').dataset.phSlot==='3'&&/3 de 9/.test(a.d.querySelector('#phCount').textContent));
 a.ev(`(function(){const o=phGet(${JSON.stringify(eid)});for(let i=3;i<9;i++)o.fotos.push({id:'p'+i,data:${JSON.stringify(png)},publica:i<6});storage.setItem(phKey(${JSON.stringify(eid)}),JSON.stringify(o));phRefresh(${JSON.stringify(eid)})})()`);await L.sleep(80);
 L.check('Fotos: com 9 fotos botões desativados, e as 3 últimas têm selo Privada',a.d.querySelectorAll('.ph-slot.filled').length===9&&a.d.querySelector('#phCam').disabled&&a.d.querySelectorAll('.ph-badge').length===3&&/Privada/.test(a.d.querySelector('.ph-badge').textContent));
 await a.ev(`phAdd(${JSON.stringify(eid)},[{type:'image/png',name:'x.png'}])`);
 L.check('Fotos: tentar passar de 9 não adiciona',a.ev(`phGet(${JSON.stringify(eid)}).fotos.length`)===9);
 a.d.querySelector('[data-ph-del="p0"]').click();await L.sleep(60);
 a.ev(`(function(){const o=phGet(${JSON.stringify(eid)});o.fotos=o.fotos.filter(f=>f.id!=='p0');storage.setItem(phKey(${JSON.stringify(eid)}),JSON.stringify(o));phRefresh(${JSON.stringify(eid)})})()`);await L.sleep(60);
 L.check('Fotos: após remover, sem buracos (8 preenchidas, próximo = 9º)',a.d.querySelectorAll('.ph-slot.filled').length===8&&a.d.querySelector('.ph-next').dataset.phSlot==='8');
 L.check('Fotos: assunto salvo no armazenamento',a.ev(`phGet(${JSON.stringify(eid)}).subject`)==='locais turísticos');
 L.check('Fotos: "Tirar foto" cria input com capture fora da tela e clica nele',(()=>{const w=a.w;let clicked=null;const orig=w.HTMLInputElement.prototype.click;w.HTMLInputElement.prototype.click=function(){clicked=this};a.ev(`phPegar('image/*','environment',false,()=>{})`);w.HTMLInputElement.prototype.click=orig;const ok=clicked&&clicked.type==='file'&&clicked.getAttribute('capture')==='environment'&&clicked.isConnected;if(clicked&&clicked.parentNode)clicked.parentNode.removeChild(clicked);return !!ok})());
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
 // ── Projeto: categoria por lista cadastrada ──
 a.ev(`openForm('project')`);await L.sleep(80);
 const ps=a.d.querySelector('#dynamicForm select[name="category"]');
 L.check('Projeto: Categoria é seleção com categorias cadastradas e opção Adicionar novo',!!ps&&ps.dataset.catList==='projectCategories'&&[...ps.options].some(o=>o.value==='Tecnologia')&&[...ps.options].some(o=>/Adicionar novo/.test(o.value)));
 a.ev(`document.querySelector('#formDialog').close()`);
 a.ev(`saveProjectCategories([...getProjectCategories(),'Eventos Teste'])`);
 a.ev(`openForm('project')`);await L.sleep(80);
 L.check('Projeto: categoria nova cadastrada aparece na lista',[...a.d.querySelector('#dynamicForm select[name="category"]').options].some(o=>o.value==='Eventos Teste'));
 a.ev(`document.querySelector('#formDialog').close()`);
 a.ev(`openSubView('Outros cadastros','CADASTROS',()=>cadastrosView(),'dashboard')`);await L.sleep(60);
 L.check('Cadastros: painel Categorias de projeto presente',!!a.d.querySelector('#ajAddProjectCategory'));
 // ── Como chegar (link do mapa) ──
 L.check('Mapa: coordenadas viram link do Waze',a.ev(`mapLinkNorm('-23.5614, -46.6559')`)==='https://waze.com/ul?ll=-23.5614,-46.6559&navigate=yes');
 L.check('Mapa: link do Waze/Google Maps é aceito',a.ev(`mapLinkNorm('https://waze.com/ul/h6gyc')`)==='https://waze.com/ul/h6gyc'&&a.ev(`mapLinkNorm('https://maps.app.goo.gl/abc123')`)==='https://maps.app.goo.gl/abc123'&&a.ev(`mapLinkNorm('www.google.com/maps/place/X')`)==='https://www.google.com/maps/place/X');
 L.check('Mapa: javascript:, sites estranhos e lixo são recusados',a.ev(`mapLinkNorm('javascript:alert(1)')`)===null&&a.ev(`mapLinkNorm('https://site-falso.com/waze.com')`)===null&&a.ev(`mapLinkNorm('texto qualquer')`)===null&&a.ev(`mapLinkNorm('')`)==='');
 a.ev(`openForm('event')`);await L.sleep(80);
 const mlf=a.d.querySelector('#dynamicForm [name="mapLink"]');
 const vn=a.d.querySelector('#dynamicForm [name="venue"]');
 L.check('Formulário do evento: campo "Como chegar" vem logo após o Local, com botões de GPS e teste',!!mlf&&vn.closest('.form-field').nextElementSibling.contains(mlf)&&!!a.d.querySelector('[data-map-gps]')&&!!a.d.querySelector('[data-map-test]'));
 mlf.value='texto invalido';a.d.querySelector('#dynamicForm').requestSubmit();await L.sleep(60);
 L.check('Link inválido não salva e avisa',a.d.querySelector('#formDialog').open&&/inválido/.test(a.d.querySelector('#toast').textContent));
 a.ev(`document.querySelector('#formDialog').close()`);
 const convMsg=a.ev(`guestInviteText({name:'Maria'},{title:'Casamento X',date:'2026-12-05',time:'18:00',venue:'Espaço Jardim',mapLink:'-23.56,-46.65'})`);
 L.check('Convite do WhatsApp inclui "Como chegar" com o link',/Como chegar: https:\/\/waze\.com\/ul\?ll=-23\.56,-46\.65/.test(convMsg)&&/Espaço Jardim/.test(convMsg));
 L.check('Convite sem link continua igual (sem linha de mapa)',!/Como chegar/.test(a.ev(`guestInviteText({name:'Maria'},{title:'X',date:'2026-12-05',venue:'Y'})`)));
 // ── Página de apresentação (landing) ──
 L.check('Landing: quem já usa o app (login/teste em andamento) não vê a apresentação',a.ev(`landingWanted()`)===false);
 a.ev(`window.matchMedia=q=>({matches:false});localStorage.removeItem('lk_landing');storage.removeItem('rizzieri_one_demo');storage.removeItem('r1_trial');storage.removeItem('r1_auth')`);
 L.check('Landing: navegador comum, primeira visita → aparece',a.ev(`landingWanted()`)===true);
 a.ev(`window.matchMedia=q=>({matches:/standalone/.test(q)})`);
 L.check('Landing: app instalado (standalone) → não aparece',a.ev(`landingWanted()`)===false);
 a.ev(`window.matchMedia=q=>({matches:false});landingInit()`);
 const ld=a.d.querySelector('#landingView');
 L.check('Landing: mostra os dois botões e a frase "Sem cartão de crédito"',!ld.classList.contains('hidden')&&/30 dias gratuito/.test(a.d.querySelector('#ldStart').textContent)&&/Ver como funciona/.test(a.d.querySelector('#ldHow').textContent)&&/Sem cartão de crédito\./.test(ld.textContent)&&/Instala direto do navegador, como um aplicativo/.test(ld.textContent));
 a.d.querySelector('#loginView').classList.remove('hidden');a.d.querySelector('#ldStart').click();
 L.check('Landing: "30 dias gratuito" fecha a página, grava a escolha e mostra o login',ld.classList.contains('hidden')&&a.ev(`lkRaw.get('lk_landing')`)==='1'&&!a.d.querySelector('#loginView').classList.contains('hidden'));
 L.check('Landing: depois de escolher, não volta a aparecer',a.ev(`landingWanted()`)===false);
 L.check('Landing: não mostra frases que o app não cumpre (nuvem/multiusuário/preço)',!/nuvem|multiusu|R\$|por m[eê]s/i.test(ld.textContent));
 // ── Cartão da tela de entrada: dados fictícios do app (não os apps reais do dono) ──
 const hg=a.d.querySelector('.hero-glass').textContent;
 L.check('Tela de entrada: cartão mostra o exemplo fictício (eventos do modo manual) e não os apps reais',/DADOS FICTÍCIOS/.test(hg)&&/Camila/.test(hg)&&!/VetFlow|AttimoDrive|PDVMix/.test(hg));
 L.check('Tela de entrada: totais batem com os dados do modo manual (3 eventos, 570 convidados, 3 críticos)',/3\s*eventos/.test(hg)&&/570\s*convidados/.test(hg)&&/3\s*críticos/.test(hg));
 // ── Financeiro: evento travado e no topo quando vem da tela do evento ──
 const eidF=a.ev(`getEvents()[0].id`);
 a.ev(`finOpenForm({tipo:'desp',scope:'Eventos',eventId:${JSON.stringify(eidF)}})`);await L.sleep(80);
 const ff=a.d.querySelector('#dynamicForm');
 L.check('Lançamento vindo do evento: caixa "Evento" é a PRIMEIRA do formulário e está travada (sem seleção)',!!ff.firstElementChild.querySelector('[data-ev-locked]')&&!ff.querySelector('select[name="eventId"]'));
 L.check('...e envia o evento certo no formulário',new a.w.FormData(ff).get('eventId')===eidF);
 a.ev(`document.querySelector('#formDialog').close()`);
 a.ev(`finOpenForm({tipo:'desp',scope:'*'})`);await L.sleep(80);
 L.check('Lançamento avulso (Financeiro geral): continua escolhendo o evento (opcional)',!!a.d.querySelector('#dynamicForm select[name="eventId"]')&&!a.d.querySelector('#dynamicForm [data-ev-locked]'));
 a.ev(`document.querySelector('#formDialog').close()`);
 // ── "+ Adicionar novo" no lugar de "Outro" (tipos e categorias) ──
 for(const [form,field,list,label] of [['event','type','eventTypes','tipo de evento'],['supplier','category','supplierCategories','categoria de fornecedor'],['catalog','category','catalogCategories','categoria de catálogo'],['project','category','projectCategories','categoria de projeto'],['appointment','type','appointmentTypes','tipo de compromisso']]){
  a.ev(`openForm('${form}')`);await L.sleep(70);
  const sl=a.d.querySelector(`#dynamicForm select[name="${field}"]`);
  const ops=sl?[...sl.options].map(o=>o.value):[];
  L.check(`${label}: sem opção "Outro" e com "Adicionar novo…"`,!!sl&&!ops.some(o=>/^outro$/i.test(o))&&ops.some(o=>/Adicionar novo/.test(o))&&sl.dataset.catList===list);
  sl.value=ops.find(o=>/Adicionar novo/.test(o));sl.dispatchEvent(new a.w.Event('change'));await L.sleep(40);
  const dlg=a.d.querySelector('#catManageDialog');
  const novo=('Novo '+label.slice(0,8)).trim();
  a.d.querySelector('#catManageInput').value=novo;a.d.querySelector('#catManageAdd').click();await L.sleep(60);
  const sl2=a.d.querySelector(`#dynamicForm select[name="${field}"]`);
  L.check(`${label}: cadastrar fecha o cadastro, volta ao formulário com o novo item selecionado`,!dlg.open&&a.d.querySelector('#formDialog').open&&sl2.value===novo);
  a.ev(`document.querySelector('#formDialog').close()`);await L.sleep(30);
 }
 // ── Plano de pagamento: valor editável em todas as parcelas; soma = total do contrato ──
 {const ev=a.ev(`getEvents()[0]`),E=JSON.stringify({id:'ppx',date:'2027-03-20'});
  const calc=(vals)=>a.ev(`(function(){_ppVal=${JSON.stringify(vals)};const r=payPlanCompute(${E},{ov:{},totalCent:5000000,sinalPct:30,sinalData:'2026-11-10',parcelas:3,diasAntes:10});_ppVal={};return {soma:r.soma,dif:r.dif,neg:r.neg,v:r.linhas.map(l=>l.cent),d:r.linhas[0].desc}})()`);
  const r0=calc({});L.check('Plano: sem edição, soma = total (R$ 50.000)',r0.soma===5000000&&r0.dif===0&&r0.v[0]===1500000);
  const r1=calc({p1of3:1000000});L.check('Plano: editar 1 parcela redistribui o resto e a soma continua = total',r1.dif===0&&r1.v[1]===1000000&&r1.soma===5000000);
  const r2=calc({sinal:2000000,p1of3:1000000,p2of3:1000000,p3of3:1100000});L.check('Plano: todas editadas com soma errada → diferença acusada (bloqueia gerar)',r2.dif===100000);
  const r3=calc({sinal:2000000,p1of3:1000000,p2of3:1000000,p3of3:1000000});L.check('Plano: todas editadas fechando 50.000 → ok e sinal mostra 40%',r3.dif===0&&/40%/.test(r3.d));
  const r4=calc({sinal:6000000});L.check('Plano: valor acima do total não gera parcela negativa silenciosa',r4.dif!==0||r4.neg);
 }
 return L.summary();
}
module.exports={run};


const projects=[
 {id:'vetflow',name:'VetFlowCare',cat:'Gestão Veterinária',status:'Produção',version:'v2.8.4',health:92,issues:3,progress:84,url:'https://app.vetflowcare.com.br/',next:'v2.9',update:'Hoje'},
 {id:'attimo',name:'AttimoDrive',cat:'Gestão Automotiva',status:'Produção',version:'v1.7.2',health:88,issues:1,progress:78,url:'https://attimodrive.com.br/',next:'v1.8',update:'Ontem'},
 {id:'pdvmix',name:'PDVMix',cat:'PDV • Estoque • Gestão',status:'Produção',version:'v1.2.0',health:81,issues:4,progress:69,url:'https://pdvmixapp.com.br/',next:'v1.3',update:'Hoje'}
];

const baseEvents=[
 {id:'ev-beatriz15',title:'15 Anos • Beatriz',type:'Debutante',client:'Mariana & Rafael',date:'2026-11-21',venue:'Espaço Imperial',guests:180,budget:78000,progress:68,status:'Em produção',manager:'Equipe Principal',critical:3},
 {id:'ev-ana-lucas',title:'Casamento • Ana & Lucas',type:'Casamento',client:'Ana Ribeiro & Lucas Martins',date:'2026-12-05',venue:'Villa Toscana',guests:220,budget:132000,progress:54,status:'Em produção',manager:'Carla',critical:5},
 {id:'ev-corporativo',title:'Convenção • Grupo Orion',type:'Corporativo',client:'Grupo Orion',date:'2026-10-17',venue:'Centro de Convenções',guests:320,budget:96000,progress:82,status:'Em produção',manager:'Marcelo',critical:1},
 {id:'ev-confraternizacao',title:'Confraternização • Equipe Rizzieri',type:'Corporativo',client:'Rizzieri One',date:'2026-09-28',venue:'Espaço Jardim',guests:60,budget:18000,progress:40,status:'Em produção',manager:'Bruno',critical:0}
];

const baseContracts=[
 {id:'ct-001',number:'2026-041',title:'Contrato de Produção de Evento',client:'Mariana & Rafael',event:'15 Anos • Beatriz',value:78000,status:'Enviado',updated:'24/09/2026'},
 {id:'ct-002',number:'2026-042',title:'Contrato de Assessoria Completa',client:'Ana Ribeiro & Lucas Martins',event:'Casamento • Ana & Lucas',value:132000,status:'Rascunho',updated:'23/09/2026'}
];

const basePresentations=[
 {id:'pr-001',title:'Projeto de Experiência • Beatriz 15',event:'15 Anos • Beatriz',client:'Mariana & Rafael',theme:'Contemporâneo elegante',sections:7,assets:18,status:'Compartilhado'},
 {id:'pr-002',title:'Conceito de Casamento • Ana & Lucas',event:'Casamento • Ana & Lucas',client:'Ana Ribeiro & Lucas Martins',theme:'Toscano sofisticado',sections:8,assets:24,status:'Em edição'}
];

const baseClients=[
 {id:'cl-001',name:'Mariana Souza',secondary:'Rafael Souza',type:'Pessoa física',createdAt:'2026-07-02',document:'***.***.***-**',phone:'(11) 98765-2100',email:'mariana@email.com',city:'São Paulo',state:'SP',events:1,status:'Ativo',notes:'Família da debutante Beatriz. Prefere contato por WhatsApp.'},
 {id:'cl-002',name:'Ana Ribeiro',secondary:'Lucas Martins',type:'Casal',createdAt:'2026-05-19',document:'***.***.***-**',phone:'(11) 97770-1221',email:'ana.lucas@email.com',city:'Campinas',state:'SP',events:1,status:'Ativo',notes:'Casamento na Villa Toscana. Aprovações concentradas com Ana.'},
 {id:'cl-003',name:'Grupo Orion',secondary:'Fernanda Lopes',type:'Empresa',createdAt:'2025-11-08',document:'12.345.678/0001-95',phone:'(11) 3000-4100',email:'eventos@grupoorion.com.br',city:'São Paulo',state:'SP',events:1,status:'Corporativo',notes:'Evento anual. Exige documentação fiscal e compliance de fornecedores.'}
];

const baseSuppliers=[
 {id:'sp-001',name:'Buffet Maison',category:'Buffet',createdAt:'2025-03-10',contact:'Camila',phone:'(11) 98888-1100',email:'contato@buffetmaison.com',rating:4.9,status:'Homologado',price:'R$ 215/pessoa',events:4,notes:'Menu premium e boa operação de cozinha.'},
 {id:'sp-002',name:'DJ Pulse Experience',category:'DJ & Música',createdAt:'2025-05-22',contact:'Eduardo',phone:'(11) 97777-2210',email:'agenda@djpulse.com',rating:4.8,status:'Homologado',price:'R$ 8.500',events:7,notes:'DJ + pista + iluminação básica.'},
 {id:'sp-003',name:'Atelier Flores & Luz',category:'Decoração',createdAt:'2025-06-14',contact:'Bianca',phone:'(11) 96666-1144',email:'projetos@floreseluz.com',rating:4.9,status:'Preferencial',price:'Sob projeto',events:6,notes:'Cenografia, flores e ambientação.'},
 {id:'sp-004',name:'Frame 8 Filmes',category:'Foto & Vídeo',createdAt:'2025-09-02',contact:'Renato',phone:'(11) 95555-7711',email:'oi@frame8.com',rating:4.7,status:'Homologado',price:'R$ 12.900',events:5,notes:'Foto + filme + teaser em 48h.'},
 {id:'sp-005',name:'LumiPro Eventos',category:'Som & Luz',createdAt:'2026-01-18',contact:'André',phone:'(11) 94444-3300',email:'comercial@lumipro.com',rating:4.6,status:'Em avaliação',price:'R$ 14.500',events:3,notes:'Som, luz cênica, painéis e técnico.'},
 {id:'sp-006',name:'Bar Signature',category:'Bar & Bebidas',createdAt:'2026-04-05',contact:'Paula',phone:'(11) 93333-4510',email:'paula@barsignature.com',rating:4.8,status:'Homologado',price:'R$ 96/pessoa',events:8,notes:'Open bar premium e carta personalizada.'}
];

const baseFinance=[
 {id:'fn-001',eventId:'ev-beatriz15',date:'2026-09-05',type:'Receita',category:'Contrato',description:'Sinal do contrato',party:'Mariana & Rafael',value:23400,status:'Pago'},
 {id:'fn-002',eventId:'ev-beatriz15',date:'2026-10-10',type:'Receita',category:'Parcela',description:'2ª parcela do evento',party:'Mariana & Rafael',value:27300,status:'Pendente'},
 {id:'fn-003',eventId:'ev-beatriz15',date:'2026-09-18',type:'Despesa',category:'DJ & Música',description:'Sinal DJ Pulse',party:'DJ Pulse Experience',value:2550,status:'Pago'},
 {id:'fn-004',eventId:'ev-beatriz15',date:'2026-10-05',type:'Despesa',category:'Decoração',description:'1ª parcela decoração',party:'Atelier Flores & Luz',value:7800,status:'Pendente'},
 {id:'fn-005',eventId:'ev-ana-lucas',date:'2026-09-12',type:'Receita',category:'Contrato',description:'Sinal do casamento',party:'Ana & Lucas',value:39600,status:'Pago'},
 {id:'fn-006',eventId:'ev-ana-lucas',date:'2026-10-15',type:'Despesa',category:'Buffet',description:'Reserva Buffet Maison',party:'Buffet Maison',value:12000,status:'Pendente'},
 {id:'fn-007',eventId:'ev-corporativo',date:'2026-09-03',type:'Receita',category:'Contrato',description:'Entrada convenção',party:'Grupo Orion',value:48000,status:'Pago'},
 {id:'fn-008',eventId:'ev-corporativo',date:'2026-09-30',type:'Despesa',category:'Som & Luz',description:'Estrutura técnica',party:'LumiPro Eventos',value:14500,status:'Pendente'}
];

const baseChecklist=[
 {id:'ck-001',eventId:'ev-beatriz15',group:'Cliente',title:'Aprovar cardápio final',owner:'Mariana',due:'2026-09-28',done:false,critical:true},
 {id:'ck-002',eventId:'ev-beatriz15',group:'Produção',title:'Confirmar DJ e repertório',owner:'Bruno',due:'2026-09-30',done:false,critical:true},
 {id:'ck-003',eventId:'ev-beatriz15',group:'Decoração',title:'Aprovar mesa principal',owner:'Bianca',due:'2026-10-05',done:false,critical:false},
 {id:'ck-004',eventId:'ev-beatriz15',group:'Contratos',title:'Contrato buffet assinado',owner:'Financeiro',due:'2026-09-20',done:true,critical:false},
 {id:'ck-005',eventId:'ev-beatriz15',group:'Convidados',title:'Importar lista inicial de convidados',owner:'Mariana',due:'2026-09-18',done:true,critical:false},
 {id:'ck-006',eventId:'ev-beatriz15',group:'Operação',title:'Plano de contingência chuva',owner:'Produção',due:'2026-11-05',done:false,critical:true},
 {id:'ck-101',eventId:'ev-ana-lucas',group:'Cliente',title:'Aprovar identidade visual',owner:'Ana',due:'2026-09-27',done:true,critical:false},
 {id:'ck-102',eventId:'ev-ana-lucas',group:'Buffet',title:'Degustação final',owner:'Carla',due:'2026-10-11',done:false,critical:true},
 {id:'ck-103',eventId:'ev-ana-lucas',group:'Cerimônia',title:'Fechar roteiro da cerimônia',owner:'Carla',due:'2026-11-10',done:false,critical:false},
 {id:'ck-104',eventId:'ev-ana-lucas',group:'Fornecedores',title:'Receber documentos fiscais',owner:'Admin',due:'2026-11-15',done:false,critical:true},
 {id:'ck-201',eventId:'ev-corporativo',group:'Corporativo',title:'Validar lista de palestrantes',owner:'Fernanda',due:'2026-09-26',done:true,critical:false},
 {id:'ck-202',eventId:'ev-corporativo',group:'Técnica',title:'Mapa de palco e painéis',owner:'Marcelo',due:'2026-10-01',done:false,critical:true}
];

const baseTimeline=[
 {id:'tl-001',eventId:'ev-beatriz15',time:'08:00',title:'Entrada equipe de produção',owner:'Produção',location:'Acesso serviço',status:'Confirmado'},
 {id:'tl-002',eventId:'ev-beatriz15',time:'09:00',title:'Montagem técnica e iluminação',owner:'LumiPro',location:'Salão principal',status:'Confirmado'},
 {id:'tl-003',eventId:'ev-beatriz15',time:'12:30',title:'Montagem decoração',owner:'Atelier Flores & Luz',location:'Salão principal',status:'Confirmado'},
 {id:'tl-004',eventId:'ev-beatriz15',time:'16:00',title:'Chegada buffet e bar',owner:'Buffet Maison',location:'Cozinha / bar',status:'Pendente'},
 {id:'tl-005',eventId:'ev-beatriz15',time:'17:30',title:'Soundcheck e teste de luz',owner:'DJ Pulse',location:'Pista',status:'Pendente'},
 {id:'tl-006',eventId:'ev-beatriz15',time:'19:30',title:'Recepção dos convidados',owner:'Cerimonial',location:'Foyer',status:'Pendente'},
 {id:'tl-007',eventId:'ev-beatriz15',time:'21:00',title:'Entrada da debutante',owner:'Produção',location:'Salão',status:'Pendente'},
 {id:'tl-008',eventId:'ev-beatriz15',time:'23:45',title:'Parabéns e bolo',owner:'Cerimonial',location:'Mesa principal',status:'Pendente'}
];

const baseGuests=[
 {id:'gs-001',eventId:'ev-ana-lucas',name:'Ricardo e Fernanda Ribeiro',status:'Confirmado',phone:'(11) 98888-0001',table:'Mesa 1'},
 {id:'gs-002',eventId:'ev-ana-lucas',name:'Camila Martins',status:'Confirmado',phone:'(11) 98888-0002',table:'Mesa 2'},
 {id:'gs-003',eventId:'ev-ana-lucas',name:'João Pedro Alves',status:'Pendente',phone:'(11) 98888-0003',table:''},
 {id:'gs-004',eventId:'ev-ana-lucas',name:'Beatriz Souza',status:'Recusado',phone:'(11) 98888-0004',table:''},
 {id:'gs-005',eventId:'ev-beatriz15',name:'Família Oliveira',status:'Confirmado',phone:'(11) 98888-0005',table:'Mesa 1'},
 {id:'gs-006',eventId:'ev-beatriz15',name:'Grupo de amigas da escola',status:'Pendente',phone:'',table:''}
];

const baseCatalog=[
 {id:'cat-001',name:'Menu Essenza',category:'Cardápio',supplier:'Buffet Maison',price:215,unit:'por pessoa',description:'Coquetel, jantar empratado, sobremesas e café.',tags:['Premium','Jantar'],image:''},
 {id:'cat-002',name:'Menu Jovem Experience',category:'Cardápio',supplier:'Buffet Maison',price:168,unit:'por pessoa',description:'Finger foods, estação de massas, mini burgers e doces.',tags:['Debutante','Dinâmico'],image:''},
 {id:'cat-003',name:'Jardim Contemporâneo',category:'Decoração',supplier:'Atelier Flores & Luz',price:18500,unit:'projeto',description:'Flores naturais, cenografia, lounge, mesa principal e luz cênica.',tags:['Cenografia','Flores'],image:''},
 {id:'cat-004',name:'Pulse Night',category:'DJ & Música',supplier:'DJ Pulse Experience',price:8500,unit:'pacote',description:'DJ, controladora, pista e iluminação de pista.',tags:['DJ','Pista'],image:''},
 {id:'cat-005',name:'Cinema Memories',category:'Foto & Vídeo',supplier:'Frame 8 Filmes',price:12900,unit:'pacote',description:'2 fotógrafos, filmmaker, teaser e álbum premium.',tags:['Foto','Filme'],image:''},
 {id:'cat-006',name:'Signature Bar',category:'Bar & Bebidas',supplier:'Bar Signature',price:96,unit:'por pessoa',description:'Drinks clássicos, autorais, sem álcool e equipe completa.',tags:['Open Bar','Premium'],image:''}
];

const IDEA_STAGES=['IDEIA','ANÁLISE','VALIDAÇÃO','PROTÓTIPO','PRODUÇÃO'];
const baseIdeas=[
 {id:'idea-001',stage:'IDEIA',name:'Gestor por PDFs',problem:'Vendas',audience:'Windows',potential:'',complexity:'',next:'',meta:'Vendas • Windows'},
 {id:'idea-002',stage:'ANÁLISE',name:'Plataforma universal de organização',problem:'',audience:'Multi-segmento',potential:'',complexity:'',next:'',meta:'Multi-segmento'},
 {id:'idea-003',stage:'VALIDAÇÃO',name:'Módulo IA de prioridades',problem:'',audience:'Intelligence',potential:'',complexity:'',next:'',meta:'Intelligence'},
 {id:'idea-004',stage:'PROTÓTIPO',name:'Gestão de eventos',problem:'',audience:'Casamentos • Debutantes • Corporativo',potential:'',complexity:'',next:'',meta:'Casamentos • Debutantes • Corporativo'},
 {id:'idea-005',stage:'PRODUÇÃO',name:'VetFlowCare',problem:'',audience:'Produto ativo',potential:'',complexity:'',next:'',meta:'Produto ativo'},
 {id:'idea-006',stage:'PRODUÇÃO',name:'AttimoDrive',problem:'',audience:'Produto ativo',potential:'',complexity:'',next:'',meta:'Produto ativo'},
 {id:'idea-007',stage:'PRODUÇÃO',name:'PDVMix',problem:'',audience:'Produto ativo',potential:'',complexity:'',next:'',meta:'Produto ativo'}
];

const read=(key,fallback)=>{try{return JSON.parse(storage.getItem(key)||'null')??fallback}catch{return fallback}};
const overridesKeyFor=key=>key.replace('r1_extra_','r1_overrides_');
const merge=(base,key)=>{const overrides=read(overridesKeyFor(key),{});return [...base,...read(key,[])].map(x=>overrides[x.id]?{...x,...overrides[x.id]}:x)};
const getEvents=()=>merge(baseEvents,'r1_extra_events');
const getContracts=()=>merge(baseContracts,'r1_extra_contracts');
const getPresentations=()=>merge(basePresentations,'r1_extra_presentations');
const getClients=()=>merge(baseClients,'r1_extra_clients');
const getSuppliers=()=>merge(baseSuppliers,'r1_extra_suppliers');
const getFinance=()=>finAll().filter(e=>e.ws!=='Pessoal').map(finToLegacy);;
const getChecklist=eventId=>{
 const overrides=read('r1_checklist_overrides',{});
 const rows=merge(baseChecklist,'r1_extra_checklist').map(x=>overrides[x.id]?{...x,...overrides[x.id]}:x);
 return eventId?rows.filter(x=>x.eventId===eventId):rows;
};
const getTimeline=eventId=>{
 const overrides=read('r1_timeline_overrides',{});
 const rows=merge(baseTimeline,'r1_extra_timeline').map(x=>overrides[x.id]?{...x,...overrides[x.id]}:x);
 return eventId?rows.filter(x=>x.eventId===eventId):rows;
};
const getCatalog=()=>merge(baseCatalog,'r1_extra_catalog');
const getEventCatalog=eventId=>read(`r1_event_catalog_${eventId}`,[]);
const getGuests=eventId=>{const rows=merge(baseGuests,'r1_extra_guests');return eventId?rows.filter(x=>x.eventId===eventId):rows};

/* v0.4 workspace demo data */
const basePersonalGoals=[
 {id:'pg-001',title:'Organizar documentos importantes',area:'Organização',progress:72,due:'2026-10-15',status:'Em andamento'},
 {id:'pg-002',title:'Planejar viagem de fim de ano',area:'Viagens',progress:38,due:'2026-11-20',status:'Planejamento'},
 {id:'pg-003',title:'Reserva para novos projetos',area:'Finanças',progress:64,due:'2026-12-31',status:'Em andamento'}
];
const baseRoutine=[
 {id:'rt-001',title:'Revisar prioridades da semana',period:'Segunda',done:true},
 {id:'rt-002',title:'Organizar arquivos e documentos',period:'Quarta',done:false},
 {id:'rt-003',title:'Revisar gastos pessoais',period:'Sexta',done:false},
 {id:'rt-004',title:'Planejar próxima semana',period:'Domingo',done:false}
];
const baseAppointments=[
 {id:'ag-001',date:'2026-09-25',time:'09:00',title:'Revisão semanal de projetos',type:'Planejamento'},
 {id:'ag-002',date:'2026-09-26',time:'15:30',title:'Compromisso pessoal',type:'Pessoal'},
 {id:'ag-003',date:'2026-09-29',time:'10:00',title:'Organização financeira',type:'Finanças'}
];
const basePersonalFinance=[
 {id:'pf-001',type:'Entrada',category:'Renda',description:'Receita mensal',value:8500,status:'Previsto'},
 {id:'pf-002',type:'Saída',category:'Assinaturas',description:'Serviços digitais',value:620,status:'Previsto'},
 {id:'pf-003',type:'Saída',category:'Projetos',description:'Infraestrutura / domínios',value:480,status:'Previsto'}
];
const basePersonalDocs=[
 {id:'pd-001',name:'Documentos pessoais',category:'Identificação',status:'Organizado'},
 {id:'pd-002',name:'Contratos e garantias',category:'Arquivo',status:'Revisar'},
 {id:'pd-003',name:'Viagens e reservas',category:'Viagens',status:'Em uso'}
];
const baseValidations=[
 {id:'vl-001',idea:'Plataforma universal de organização',hypothesis:'Pessoas com operações complexas pagariam para centralizar projetos, documentos e execução.',status:'Em validação',evidence:3},
 {id:'vl-002',idea:'Módulo IA de prioridades',hypothesis:'Usuários precisam saber o que merece atenção antes de abrir cada projeto.',status:'Planejado',evidence:1}
];
const baseDecisions=[
 {id:'dc-001',title:'Workspaces com identidade própria',context:'A navegação precisava deixar claro o ambiente atual.',date:'2026-09-24',status:'Aprovado'},
 {id:'dc-002',title:'Catálogo conectado ao projeto',context:'Itens comerciais devem alimentar apresentação, orçamento e produção.',date:'2026-09-24',status:'Aprovado'}
];


const baseStrategicGoals=[
 {id:'sg-001',title:'Plataforma universal',area:'Produto principal',priority:'Alta',status:'Em andamento',date:'2026-12-31',indicator:'Execução do roadmap',target:'Lançar v1 comercial',rationale:'Sem uma base única, cada novo app é retrabalho do zero e a operação fica fragmentada entre planilhas e apps soltos.',risks:'Escopo crescer demais antes de validar o núcleo; falta de tempo para dedicar entre os projetos já em produção.',nextSteps:'Fechar o módulo Eventos, migrar dados reais de teste e definir o modelo de cobrança.',description:'Consolidar a base multi-workspace e preparar publicação comercial.'},
 {id:'sg-002',title:'Workspace para eventos',area:'Eventos',priority:'Alta',status:'Em andamento',date:'2026-11-30',indicator:'Entrega funcional',target:'Operação completa do fluxo',rationale:'É o workspace mais maduro do protótipo e com maior potencial de virar produto independente para produtores de eventos autônomos.',risks:'Persistência ainda é só local (localStorage); falta gerador de PDF real.',nextSteps:'Decidir se vira um app separado ou continua como módulo do RIZZIERI ONE.',description:'Fechar cadastros, financeiro, checklist, cronograma e documentos.'},
 {id:'sg-003',title:'Segurança comercial',area:'Infraestrutura',priority:'Média',status:'Não iniciado',date:'2026-12-20',indicator:'Adoção de controles',target:'RLS + auditoria + backups',rationale:'O protótipo atual não pode receber dados reais de clientes sem esses controles.',risks:'Adiar demais e só perceber a necessidade depois que já existir dado sensível em produção.',nextSteps:'Escolher o backend e desenhar as políticas de RLS antes de migrar dados reais.',description:'Reforçar autenticação, segregação e rastreabilidade para uso real.'}
];

const getPersonalGoals=()=>merge(basePersonalGoals,'r1_extra_personal_goals');
const getRoutine=()=>{
 const overrides=read('r1_routine_overrides',{});
 return merge(baseRoutine,'r1_extra_routine').map(x=>overrides[x.id]?{...x,...overrides[x.id]}:x);
};
const getAppointments=()=>merge(baseAppointments,'r1_extra_appointments');
const getPersonalFinance=()=>finAll().filter(e=>e.ws==='Pessoal').map(finToLegacy);
const getPersonalDocs=()=>merge(basePersonalDocs,'r1_extra_personal_docs');
const getValidations=()=>merge(baseValidations,'r1_extra_validations');
const getDecisions=()=>merge(baseDecisions,'r1_extra_decisions');
const getProjects=()=>merge(projects,'r1_extra_projects');
const baseProjectAgenda=[
 {id:'pa-001',projectId:'vetflow',startDate:'2026-09-10',endDate:'2026-09-20',notes:'Janela de testes da v2.9 com clínicas piloto.'},
 {id:'pa-002',projectId:'pdvmix',startDate:'2026-10-01',endDate:'2026-10-15',notes:'Integração com novo meio de pagamento.'}
];
const getProjectAgenda=projectId=>{const rows=merge(baseProjectAgenda,'r1_extra_project_agenda');return projectId?rows.filter(x=>x.projectId===projectId):rows};
const getStrategicGoals=()=>merge(baseStrategicGoals,'r1_extra_goals');
const getIdeasBoardList=()=>merge(baseIdeas,'r1_extra_ideas');
const getIdeasBoard=()=>{const board={};IDEA_STAGES.forEach(s=>board[s]=[]);getIdeasBoardList().forEach(x=>{(board[x.stage]||(board[x.stage]=[])).push(x)});return board};


const money=v=>Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
/* ===== FINANCEIRO UNIFICADO — V:1.05.0 =====
   Modelo único para Negócios, Eventos e Pessoal. Valores em CENTAVOS (inteiros),
   datas sempre em horário LOCAL (nunca toISOString), visões inspiradas no corsyncimoveis. */
const APP_VERSION='V:1.21.1';
const FIN_STORE='r1_fin_v2',FIN_OV='r1_fin_v2_ov',FIN_DEL='r1_fin_v2_del',FIN_CFG='r1_fin_cfg',FIN_MIG='r1_fin_v2_mig';
const FIN_WS=['Negócios','Eventos','Pessoal'];
const FIN_CATS={'Negócios':['Assinaturas de clientes','Licenças e ferramentas','Infraestrutura','Marketing','Impostos','Outros'],'Eventos':['Contrato','Parcela','Fornecedor','Decoração','Buffet','DJ & Música','Som & Luz','Transporte','Outros'],'Pessoal':['Renda','Moradia','Alimentação','Transporte','Assinaturas','Saúde','Lazer','Outros']};
const FIN_MESES=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
let finUidN=0;
const finUid=()=>`fin-${Date.now().toString(36)}-${(finUidN++).toString(36)}${Math.random().toString(36).slice(2,5)}`;
const finEsc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* ---- datas locais ---- */
const finPad=n=>String(n).padStart(2,'0');
function finLocalISO(d){d=d||new Date();return `${d.getFullYear()}-${finPad(d.getMonth()+1)}-${finPad(d.getDate())}`}
function finParse(iso){const p=String(iso||'').split('-').map(Number);return p[0]?new Date(p[0],p[1]-1,p[2]):null}
function finAddDays(iso,n){const d=finParse(iso);d.setDate(d.getDate()+n);return finLocalISO(d)}
function finAddMonths(iso,n){const d=finParse(iso),day=d.getDate(),t=new Date(d.getFullYear(),d.getMonth()+n,1),last=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();t.setDate(Math.min(day,last));return finLocalISO(t)}
function finBR(iso){if(!iso)return '—';const p=iso.split('-');return `${p[2]}/${p[1]}/${p[0]}`}
function finDiasAte(iso){return Math.round((finParse(iso)-finParse(finLocalISO()))/86400000)}
function finDataCartao(){const dv=parseInt(finCfg().diaCartao);if(!dv||dv<1||dv>31)return null;const h=finParse(finLocalISO());let m=h.getMonth();if(h.getDate()>=dv)m++;const last=new Date(h.getFullYear(),m+1,0).getDate();return finLocalISO(new Date(h.getFullYear(),m,Math.min(dv,last)))}
/* ---- dinheiro em centavos (sem teto baixo: até 9.999.999.999,99) ---- */
function finFmtNum(c){const neg=c<0;c=Math.abs(Math.round(c));const s=String(c).padStart(3,'0');return (neg?'-':'')+s.slice(0,-2).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+','+s.slice(-2)}
function finFmt(c){return (c<0?'- ':'')+'R$ '+finFmtNum(Math.abs(c))}
function finParseMoeda(str){const s=String(str||'');const d=s.replace(/\D/g,'');if(!d)return 0;const n=parseInt(d,10);return /^\s*-/.test(s)?-n:n}
function finMaskMoeda(inp,allowNeg){const neg=allowNeg&&/^\s*-/.test(inp.value);const d=String(inp.value).replace(/\D/g,'').replace(/^0+(?=\d)/,'').slice(0,12);if(!d){inp.value=neg?'-':'';return 0}const c=parseInt(d,10);inp.value=(neg?'-':'')+finFmtNum(c);return neg?-c:c}
/* ---- dados unificados ---- */
function finSeeds(){
 const mk=(x,extra)=>({forma:'vista',eventId:'',projectId:'',clientId:'',origem:'base',...x,...extra});
 const ev=baseFinance.map(x=>mk({id:x.id,ws:'Eventos',tipo:x.type==='Receita'?'rec':'desp',categoria:x.category,parte:x.party,descricao:x.description,valorCent:Math.round(x.value*100),data:x.date,dataReal:x.status==='Pago'?x.date:'',eventId:x.eventId}));
 const neg=[
  {id:'fn-b01',tipo:'rec',categoria:'Assinaturas de clientes',parte:'VetFlowCare',descricao:'Mensalidades de clínicas',valorCent:420000,data:'2026-09-20',dataReal:'2026-09-20'},
  {id:'fn-b02',tipo:'desp',categoria:'Infraestrutura',parte:'Provedor de nuvem',descricao:'Servidores e banco de dados',valorCent:128050,data:'2026-09-15',dataReal:'2026-09-15'},
  {id:'fn-b03',tipo:'desp',categoria:'Licenças e ferramentas',parte:'Ferramentas',descricao:'Licenças de desenvolvimento',valorCent:89000,data:'2026-09-26',dataReal:''},
  {id:'fn-b04',tipo:'rec',categoria:'Assinaturas de clientes',parte:'AttimoDrive',descricao:'Mensalidades de instrutores',valorCent:635000,data:'2026-10-01',dataReal:''}
 ].map(x=>mk(x,{ws:'Negócios'}));
 const pfd=['2026-10-05','2026-09-30','2026-10-10'];
 const pf=basePersonalFinance.map((x,i)=>mk({id:x.id,ws:'Pessoal',tipo:x.type==='Entrada'?'rec':'desp',categoria:x.category,parte:'',descricao:x.description,valorCent:Math.round(x.value*100),data:pfd[i]||'2026-10-05',dataReal:''}));
 return [...ev,...neg,...pf];
}
function finConvPatch(p,base){const o={};
 if('type' in p)o.tipo=(p.type==='Receita'||p.type==='Entrada')?'rec':'desp';
 if('category' in p)o.categoria=p.category;if('party' in p)o.parte=p.party;if('description' in p)o.descricao=p.description;
 if('value' in p)o.valorCent=Math.round(Number(p.value||0)*100);if('date' in p)o.data=p.date;if('eventId' in p)o.eventId=p.eventId;
 if('status' in p){const d=p.date||(base&&base.data)||finLocalISO();o.dataReal=(p.status==='Pago')?d:''}
 return o}
function finMigrate(){
 if(storage.getItem(FIN_MIG))return;
 const extras=readJSON(FIN_STORE,[]),ov=readJSON(FIN_OV,{}),seeds=finSeeds();
 const conv=(x,ws)=>({id:x.id,ws,tipo:(x.type==='Receita'||x.type==='Entrada')?'rec':'desp',categoria:x.category||'',parte:x.party||'',descricao:x.description||'',valorCent:Math.round(Number(x.value||0)*100),data:x.date||finLocalISO(),dataReal:x.status==='Pago'?(x.date||finLocalISO()):'',forma:'vista',eventId:x.eventId||'',projectId:'',clientId:'',origem:'migrado',createdAt:x.createdAt||Date.now()});
 readJSON('r1_extra_finance',[]).forEach(x=>extras.push(conv(x,'Eventos')));
 readJSON('r1_extra_personal_finance',[]).forEach(x=>extras.push(conv(x,'Pessoal')));
 [readJSON('r1_finance_overrides',{}),readJSON('r1_overrides_personal_finance',{})].forEach(map=>Object.keys(map).forEach(id=>{const s=seeds.find(z=>z.id===id);if(s)ov[id]={...(ov[id]||{}),...finConvPatch(map[id],s)}}));
 storage.setItem(FIN_STORE,JSON.stringify(extras));storage.setItem(FIN_OV,JSON.stringify(ov));storage.setItem(FIN_MIG,'1');
}
function finAll(){finMigrate();const ov=readJSON(FIN_OV,{}),del=new Set(readJSON(FIN_DEL,[]));
 return [...finSeeds().filter(x=>!del.has(x.id)).map(x=>ov[x.id]?{...x,...ov[x.id]}:x),...readJSON(FIN_STORE,[]).filter(x=>!del.has(x.id))]}
const finIsSeed=id=>finSeeds().some(s=>s.id===id);
function finSave(entry){histTrackFin(entry);if(finIsSeed(entry.id)){const ov=readJSON(FIN_OV,{});ov[entry.id]={...entry};storage.setItem(FIN_OV,JSON.stringify(ov));return}
 const ex=readJSON(FIN_STORE,[]),i=ex.findIndex(x=>x.id===entry.id);if(i>=0)ex[i]=entry;else ex.push(entry);storage.setItem(FIN_STORE,JSON.stringify(ex))}
function finAdd(list){const ex=readJSON(FIN_STORE,[]);list.forEach(e=>ex.push(e));storage.setItem(FIN_STORE,JSON.stringify(ex))}
function finRemove(id){if(finIsSeed(id)){const del=readJSON(FIN_DEL,[]);if(!del.includes(id))del.push(id);storage.setItem(FIN_DEL,JSON.stringify(del))}else storage.setItem(FIN_STORE,JSON.stringify(readJSON(FIN_STORE,[]).filter(x=>x.id!==id)))}
function finCfg(){return readJSON(FIN_CFG,{caixa:{},diaCartao:0})}
/* adaptadores: o resto do app continua enxergando o formato antigo */
const finToLegacy=e=>({id:e.id,eventId:e.eventId||'',date:e.data,type:e.ws==='Pessoal'?(e.tipo==='rec'?'Entrada':'Saída'):(e.tipo==='rec'?'Receita':'Despesa'),category:e.categoria,description:e.descricao,party:e.parte||'',value:e.valorCent/100,status:e.dataReal?'Pago':(e.ws==='Pessoal'?'Previsto':'Pendente'),ws:e.ws});
/* ---- estado de tela ---- */
let finEventScope='';
const finState={};
const finSt=scope=>finState[scope]||(finState[scope]={view:'mes',mOff:0,ini:'',fim:'',dia:'',ri:'',rf:'',ws:'Todos',filtro:'all'});
const finNet=list=>list.reduce((a,e)=>a+(e.tipo==='rec'?e.valorCent:-e.valorCent),0);
const finSum=(list,tipo)=>list.filter(e=>e.tipo===tipo).reduce((a,e)=>a+e.valorCent,0);
const finByDate=(a,b)=>String(a.data).localeCompare(String(b.data));
function finScopeList(scope){const st=finSt(scope);return finAll().filter(e=>scope==='*'?(st.ws==='Todos'||e.ws===st.ws):e.ws===scope).filter(e=>scope==='*'||!finEventScope||e.eventId===finEventScope)}
function finCaixa(list,scope){if(finEventScope&&scope!=='*')return finNet(list.filter(e=>e.dataReal));const cfg=finCfg(),st=finSt('*'),wsl=scope==='*'?(st.ws==='Todos'?FIN_WS:[st.ws]):[scope];
 return wsl.reduce((a,w)=>a+Number((cfg.caixa||{})[w]||0),0)+finNet(list.filter(e=>e.dataReal))}
function finQuando(e){const d=finDiasAte(e.data);if(d<0){const n=-d;return n===1?'venceu ontem':`venceu há ${n} dias`}if(d===0)return 'vence hoje';if(d===1)return 'vence amanhã';return `vence em ${d} dias`}
const finIcon=c=>{c=String(c||'').toLowerCase();return /transp|gasol|combust/.test(c)?'🚗':/refei|aliment|buffet/.test(c)?'🍽️':/decor/.test(c)?'🌸':/dj|som|luz|música|musica/.test(c)?'🎧':/moradia|alug/.test(c)?'🏠':/assin|licen|ferram/.test(c)?'🧩':/infra|servid|nuvem/.test(c)?'☁️':/saúde|saude/.test(c)?'🩺':'📦'};
const finConfirm=msg=>{try{return window.confirm(msg)}catch(e){return true}};
const finRebuild=()=>currentScreenRebuild()();
/* ---- componentes visuais ---- */
function finRowHTML(e,showWs){const rec=e.tipo==='rec',d=e.dataReal?null:finDiasAte(e.data),late=d!==null&&d<0,bg=late?'#FDECEC':(d===0?'#FFF9E8':'');
 return `<div class="list-row" data-fin-row="${e.id}" style="align-items:center;gap:10px;${bg?`background:${bg};`:''}border-radius:12px;padding:10px 12px;margin-bottom:6px"><span style="font-size:20px">${rec?'💚':finIcon(e.categoria)}</span><div style="flex:1;min-width:0"><b>${finEsc(e.categoria||(rec?'Receita':'Despesa'))}</b> <span class="pill ${rec?'info':'warn'}" style="margin-left:4px">${e.dataReal?(rec?'RECEBIDO':'PAGO'):(rec?'A RECEBER':'A PAGAR')}</span>${showWs?` <span class="pill">${finEsc(e.ws)}</span>`:''}${e.parte?`<small style="display:block">${rec?'Fonte pagadora':'Favorecido'}: <b>${finEsc(e.parte)}</b></small>`:''}${e.descricao?`<small style="display:block">${finEsc(e.descricao)}</small>`:''}<small style="display:block;${late?'color:#c0392b;font-weight:700':''}">${finBR(e.data)}${e.dataReal?` · realizado em ${finBR(e.dataReal)}`:` · ${finQuando(e)}`}${e.forma==='cartao'?' · 💳 cartão':''}</small></div><b style="color:${rec?'#1a8f5a':'#c0392b'};white-space:nowrap">${rec?'+':'-'} ${finFmt(e.valorCent)}</b><div style="display:flex;gap:4px">${e.dataReal?`<button class="small-btn" data-fin-act="undo" data-id="${e.id}" title="Reabrir">↩</button>`:`<button class="small-btn" data-fin-act="realize" data-id="${e.id}" title="Marcar como realizado">✔</button>`}<button class="small-btn" data-edit="finance::${e.id}" title="Editar">✏️</button><button class="small-btn" data-fin-act="del" data-id="${e.id}" title="Excluir">🗑</button></div></div>`}
function finTotalsBar(rec,desp,label){const s=rec-desp;return `<div class="panel" style="margin-bottom:12px"><div style="display:flex;gap:8px;text-align:center"><div style="flex:1"><small>Receitas</small><br><b style="color:#1a8f5a">${finFmt(rec)}</b></div><div style="flex:1;border-left:1px solid #e3e8ef;border-right:1px solid #e3e8ef"><small>Despesas</small><br><b style="color:#c0392b">${finFmt(desp)}</b></div><div style="flex:1"><small>${label||'Saldo'}</small><br><b style="color:${s>=0?'#1a8f5a':'#c0392b'}">${finFmt(s)}</b></div></div></div>`}
function finCatBars(list){const by={};list.filter(e=>e.tipo==='desp').forEach(e=>{const c=e.categoria||'Outros';by[c]=(by[c]||0)+e.valorCent});const ks=Object.keys(by);if(!ks.length)return '';const max=Math.max(...Object.values(by));
 return `<div class="panel" style="margin-bottom:12px"><small>Despesas por categoria</small>${ks.sort((a,b)=>by[b]-by[a]).map(c=>`<div style="margin-top:8px"><div style="display:flex;justify-content:space-between;font-size:12px"><span>${finEsc(c)}</span><b>${finFmt(by[c])}</b></div><div style="height:7px;background:#eef1f6;border-radius:4px;margin-top:3px"><div style="height:100%;width:${Math.round(by[c]/max*100)}%;background:#c0392b;border-radius:4px;opacity:.75"></div></div></div>`).join('')}</div>`}
function finBlocoAbertos(list,titulo,cor,bg,bd,showWs){const r=finSum(list,'rec'),d=finSum(list,'desp');
 return `<div style="background:${bg};border:1px solid ${bd};border-radius:14px;padding:9px 12px;margin:0 0 8px"><b style="color:${cor}">${titulo} · ${list.length}</b><div style="font-size:12px">A receber <b style="color:#1a8f5a">${finFmt(r)}</b> · A pagar <b style="color:#c0392b">${finFmt(d)}</b></div></div>${list.map(e=>finRowHTML(e,showWs)).join('')}`}
/* ---- visões ---- */
function finMesBody(scope,list,st){const now=new Date(),md=new Date(now.getFullYear(),now.getMonth()+st.mOff,1),ym=`${md.getFullYear()}-${finPad(md.getMonth()+1)}`,hoje=finLocalISO(),showWs=scope==='*';
 const abertos=list.filter(e=>!e.dataReal&&e.data);const atrasados=st.mOff===0?abertos.filter(e=>e.data<hoje).sort(finByDate):[];
 const mes=abertos.filter(e=>e.data.startsWith(ym)&&!(st.mOff===0&&e.data<hoje)).sort(finByDate);
 let h='';
 if(atrasados.length)h+=finBlocoAbertos(atrasados,'⚠️ Atrasados','#B42318','#FDECEC','#F6C6C2',showWs);
 h+=`<div style="display:flex;align-items:center;gap:8px;margin:10px 0"><button class="small-btn" data-fin-act="mnav" data-d="-1">‹</button><b style="flex:1;text-align:center">${FIN_MESES[md.getMonth()]} ${md.getFullYear()}</b><button class="small-btn" data-fin-act="mnav" data-d="1">›</button></div>`;
 h+=finTotalsBar(finSum(mes,'rec'),finSum(mes,'desp'))+finCatBars(mes);
 const cartao=mes.filter(e=>e.forma==='cartao'&&e.tipo==='desp').reduce((a,e)=>a+e.valorCent,0);if(cartao>0)h+=`<div class="panel" style="margin-bottom:12px;display:flex;justify-content:space-between"><span>💳 Total no cartão de crédito</span><b style="color:#c0392b">${finFmt(cartao)}</b></div>`;
 h+=mes.length?mes.map(e=>finRowHTML(e,showWs)).join(''):`<div class="empty-state"><b>Nenhum lançamento em aberto neste mês.</b><small>Use "＋ Receita" ou "＋ Despesa".</small></div>`;
 return h}
function finFluxoBody(scope,list,st){const hoje=finLocalISO();
 if(!st.ini)st.ini=hoje;if(!st.fim)st.fim=finAddDays(hoje,30);if(st.fim<st.ini)st.fim=st.ini;
 let aviso='';if(Math.round((finParse(st.fim)-finParse(st.ini))/86400000)>365){st.fim=finAddDays(st.ini,365);aviso='<small style="color:#B45309">Período limitado a 366 dias.</small>'}
 const abertos=list.filter(e=>!e.dataReal&&e.data);
 if(st.dia){const dl=abertos.filter(e=>e.data===st.dia);return `<button class="link-btn" data-fin-act="diaback">← Voltar ao fluxo</button><h4 style="margin:8px 0">Lançamentos de ${finBR(st.dia)}</h4>${finTotalsBar(finSum(dl,'rec'),finSum(dl,'desp'),'Saldo do dia')}${dl.length?dl.map(e=>finRowHTML(e,scope==='*')).join(''):'<div class="empty-state"><b>Nenhum lançamento em aberto nesta data.</b></div>'}`}
 const caixa=finCaixa(list,scope),saldoAnt=caixa+finNet(abertos.filter(e=>e.data<st.ini));
 const byRec={},byDesp={};abertos.forEach(e=>{const m=e.tipo==='rec'?byRec:byDesp;m[e.data]=(m[e.data]||0)+e.valorCent});
 let acc=saldoAnt,tr=0,td=0,linhas='';const di=finParse(st.ini),df=finParse(st.fim);
 for(let d=new Date(di);d<=df;d.setDate(d.getDate()+1)){const iso=finLocalISO(d),r=byRec[iso]||0,p=byDesp[iso]||0;acc+=r-p;tr+=r;td+=p;const mov=r>0||p>0,dow=d.getDay(),wk=(dow===0||dow===6)?'background:#FFF7CC;':'',hj=iso===hoje?'border-top:3px solid #1d4ed8;border-bottom:3px solid #1d4ed8;font-weight:800;':'';
  linhas+=`<div ${mov?`data-fin-act="dia" data-iso="${iso}" style="cursor:pointer;`:'style="opacity:.5;'}display:flex;align-items:center;padding:9px 10px;border-bottom:1px solid #e3e8ef;${wk}${hj}"><div style="width:74px;flex-shrink:0;font-size:12px">${finBR(iso).slice(0,5)}</div><div style="flex:1;text-align:right;color:#1a8f5a;font-size:12px;font-weight:700">${r>0?finFmt(r):'—'}</div><div style="flex:1;text-align:right;color:#c0392b;font-size:12px;font-weight:700">${p>0?finFmt(p):'—'}</div><div style="flex:1;text-align:right;color:${acc>=0?'#1a8f5a':'#c0392b'};font-size:12px;font-weight:800">${finFmt(acc)}</div></div>`}
 const chip=(k,l)=>`<button class="filter-chip" data-fin-act="periodo" data-p="${k}">${l}</button>`;
 return `<div class="panel" style="margin-bottom:10px"><div class="toolbar">${chip('hoje','Hoje')}${chip('semana','Semana')}${chip('mes','Este mês')}${chip('30','30 dias')}</div><div style="display:flex;gap:10px;margin-top:8px"><div style="flex:1"><small>Data inicial</small><input type="date" data-fin-in="ini" value="${st.ini}" style="width:100%"></div><div style="flex:1"><small>Data final</small><input type="date" data-fin-in="fim" value="${st.fim}" min="${st.ini}" style="width:100%"></div></div>${aviso}</div>
 <div class="panel" style="padding:0;overflow:hidden"><div style="display:flex;padding:9px 10px;background:#e8eeff;font-size:10px;font-weight:800;text-transform:uppercase"><div style="width:74px">Data</div><div style="flex:1;text-align:right">Receitas</div><div style="flex:1;text-align:right">Despesas</div><div style="flex:1;text-align:right">Saldo</div></div><div id="finSaldoAnt" style="display:flex;padding:8px 10px;border-bottom:1px solid #e3e8ef;background:#f6f8fc;font-size:12px"><div style="width:74px;color:#6b7a93">Saldo ant.</div><div style="flex:1"></div><div style="flex:1"></div><div style="flex:1;text-align:right;font-weight:800;color:${saldoAnt>=0?'#1a8f5a':'#c0392b'}">${finFmt(saldoAnt)}</div></div>${linhas}<div style="display:flex;padding:10px;background:#e8eeff;font-size:12px;font-weight:800"><div style="width:74px">TOTAL</div><div style="flex:1;text-align:right;color:#1a8f5a">${finFmt(tr)}</div><div style="flex:1;text-align:right;color:#c0392b">${finFmt(td)}</div><div style="flex:1;text-align:right;color:${acc>=0?'#1a8f5a':'#c0392b'}">${finFmt(acc)}</div></div></div>
 <small style="display:block;margin-top:8px;color:#6b7a93">O saldo anterior é o caixa realizado (saldo inicial + tudo que já foi pago/recebido) mais os lançamentos em aberto anteriores à data inicial. Toque num dia com movimento para ver os lançamentos.</small>`}
function finRealizadoBody(scope,list,st){const hoje=finLocalISO(),real=list.filter(e=>e.dataReal);
 if(!st.ri){const ds=real.map(e=>e.dataReal).sort();st.ri=ds.length?ds[0]:hoje.slice(0,8)+'01'}if(!st.rf)st.rf=hoje;if(st.rf<st.ri)st.rf=st.ri;
 const sel=real.filter(e=>e.dataReal>=st.ri&&e.dataReal<=st.rf).sort((a,b)=>String(b.dataReal).localeCompare(String(a.dataReal)));
 return `<div class="panel" style="margin-bottom:10px"><b>✅ Realizados</b><div style="display:flex;gap:10px;margin-top:8px"><div style="flex:1"><small>De (data realizada)</small><input type="date" data-fin-in="ri" value="${st.ri}" style="width:100%"></div><div style="flex:1"><small>Até</small><input type="date" data-fin-in="rf" value="${st.rf}" min="${st.ri}" style="width:100%"></div></div></div>${finTotalsBar(finSum(sel,'rec'),finSum(sel,'desp'))}${sel.length?sel.map(e=>finRowHTML(e,scope==='*')).join(''):'<div class="empty-state"><b>Nenhum lançamento realizado neste período.</b><small>Use ✔ nos lançamentos em aberto.</small></div>'}`}
function finTodasBody(scope,list,st){const F={all:()=>true,rec:e=>e.tipo==='rec',desp:e=>e.tipo==='desp',aberto:e=>!e.dataReal,real:e=>!!e.dataReal};
 const sel=list.filter(F[st.filtro]||F.all).sort((a,b)=>String(b.data).localeCompare(String(a.data)));
 const chips=[['all','Todos'],['rec','Receitas'],['desp','Despesas'],['aberto','Em aberto'],['real','Realizados']].map(([k,l])=>`<button class="filter-chip ${st.filtro===k?'active':''}" data-fin-act="filtro" data-f="${k}">${l}</button>`).join('');
 let h=`<div class="toolbar" style="margin-bottom:8px">${chips}</div>${finTotalsBar(finSum(sel,'rec'),finSum(sel,'desp'))}`,mes='';
 sel.forEach(e=>{const m=(e.data||'').slice(0,7);if(m!==mes){mes=m;const p=m.split('-');h+=`<div style="margin:14px 2px 6px"><small style="text-transform:uppercase;font-weight:800">${p[1]?FIN_MESES[parseInt(p[1])-1]+' '+p[0]:'Sem data'}</small></div>`}h+=finRowHTML(e,scope==='*')});
 return sel.length?h:h+'<div class="empty-state"><b>Nenhum lançamento.</b></div>'}
function finCardSummaryView(scope,kind){
 const list=finScopeList(scope),hoje=finLocalISO(),abertos=list.filter(e=>!e.dataReal&&e.data),atr=abertos.filter(e=>e.data<hoje);
 let rows,title,desc,total;
 if(kind==='caixa'){rows=list.filter(e=>e.dataReal);title='Caixa atual';desc='Saldo inicial + tudo que já foi realizado (recebido ou pago).';total=finCaixa(list,scope)}
 else if(kind==='receber'){rows=abertos.filter(e=>e.tipo==='rec');title='A receber (em aberto)';desc='Receitas lançadas que ainda não foram recebidas.';total=finSum(rows,'rec')}
 else if(kind==='pagar'){rows=abertos.filter(e=>e.tipo==='desp');title='A pagar (em aberto)';desc='Despesas lançadas que ainda não foram pagas.';total=finSum(rows,'desp')}
 else{rows=atr;title='Atrasados';desc='Lançamentos em aberto cujo vencimento já passou.';total=null}
 rows=rows.slice().sort((a,b)=>String(b.data||'').localeCompare(String(a.data||'')));
 let h='';rows.forEach(e=>h+=finRowHTML(e,scope==='*'));
 return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">RESUMO FINANCEIRO</span><h3>${title}</h3><p>${desc}</p></div></div>${total!==null?`<section class="metrics"><article class="metric-card"><small>Total</small><strong>${finFmt(total)}</strong></article><article class="metric-card"><small>Lançamentos</small><strong>${rows.length}</strong></article></section>`:''}<div class="panel">${h||'<div class="empty-state"><b>Nenhum lançamento aqui.</b></div>'}</div>`}
function finView(scope){
 const st=finSt(scope),list=finScopeList(scope),hoje=finLocalISO(),abertos=list.filter(e=>!e.dataReal&&e.data),atr=abertos.filter(e=>e.data<hoje);
 const caixa=finCaixa(list,scope),rec=finSum(abertos,'rec'),desp=finSum(abertos,'desp');
 const nome=scope==='*'?'Consolidado':scope,pessoal=scope==='Pessoal',evSc=(finEventScope&&scope!=='*')?getEvents().find(x=>x.id===finEventScope):null;
 const head=`${scope==='*'?'<button class="link-btn" data-back>← Voltar</button>':''}<div class="section-title"><div><span class="eyebrow">${evSc?'FINANCEIRO DO EVENTO':'FINANCEIRO '+nome.toUpperCase()}</span>${evSc?`<div class="fin-ev-name">📍 ${finEsc(evSc.title)}</div>`:''}<h3>${scope==='*'?'Financeiro consolidado':pessoal?'Finanças pessoais':'Receitas, despesas e fluxo de caixa'}</h3><p>${scope==='*'?'Negócios, Eventos e Pessoal no mesmo modelo de lançamento.':(evSc?'Mostrando só os lançamentos deste evento.':'Lançamentos em aberto e realizados, com fluxo diário e caixa.')}</p>${evSc?'<button type="button" class="link-btn" data-fin-act="evscope-clear">Ver o financeiro de todos os eventos</button>':''}</div><div class="event-head-actions"><button class="btn btn-secondary" data-fin-act="new" data-tipo="rec">＋ Receita</button><button class="btn btn-secondary" data-fin-act="new" data-tipo="desp">＋ Despesa</button>${scope!=='*'?`<button class="btn btn-primary" data-create="${pessoal?'personalFinance':'finance'}"${evSc?` data-event-id="${evSc.id}"`:''}>＋ Novo lançamento</button>`:''}${(scope==='Negócios'||scope==='Eventos')?`<button class="copper-btn" data-print="finance"${evSc?` data-id="${evSc.id}"`:''}>Extrato PDF</button>`:''}<button class="small-btn" data-fin-act="cfg" title="Saldo inicial de caixa e dia do cartão">⚙️</button></div></div>`;
 const cards=`<section class="metrics"><article class="metric-card fin-clickable" data-fin-card-summary="caixa" data-fin-scope="${scope}"><small>Caixa atual</small><strong>${finFmt(caixa)}</strong><span class="metric-meta">${evSc?'Realizados deste evento':'Saldo inicial + realizados'}</span></article><article class="metric-card fin-clickable" data-fin-card-summary="receber" data-fin-scope="${scope}"><small>A receber (em aberto)</small><strong>${finFmt(rec)}</strong><span class="metric-meta">${abertos.filter(e=>e.tipo==='rec').length} lançamento(s)</span></article><article class="metric-card fin-clickable" data-fin-card-summary="pagar" data-fin-scope="${scope}"><small>A pagar (em aberto)</small><strong>${finFmt(desp)}</strong><span class="metric-meta">${abertos.filter(e=>e.tipo==='desp').length} lançamento(s)</span></article><article class="metric-card fin-clickable" data-fin-card-summary="atrasados" data-fin-scope="${scope}"><small>Atrasados</small><strong>${atr.length}</strong><span class="metric-meta">Receber ${finFmt(finSum(atr,'rec'))} · Pagar ${finFmt(finSum(atr,'desp'))}</span></article></section>`;
 let wsRow='',brk='';
 if(scope==='*'){wsRow=`<div class="toolbar" style="margin-bottom:10px">${['Todos',...FIN_WS].map(w=>`<button class="filter-chip ${st.ws===w?'active':''}" data-fin-act="ws" data-ws="${w}">${w}</button>`).join('')}</div>`;
  const all=finAll();brk=`<section class="metrics">${FIN_WS.map(w=>{const l=all.filter(e=>e.ws===w),a=l.filter(e=>!e.dataReal);return `<article class="metric-card" data-fin-ws="${w}"><small>${w}</small><strong>${finFmt(finCaixa(l,w))}</strong><span class="metric-meta">Caixa · aberto: receber ${finFmt(finSum(a,'rec'))} / pagar ${finFmt(finSum(a,'desp'))}</span></article>`}).join('')}</section>`}
 const tabs=[['mes','📅 Por mês'],['fluxo','📈 Fluxo'],['realizado','✅ Realizado'],['todas','📄 Todas']].map(([k,l])=>`<button class="filter-chip ${st.view===k?'active':''}" data-fin-act="view" data-view="${k}">${l}</button>`).join('');
 const body=st.view==='fluxo'?finFluxoBody(scope,list,st):st.view==='realizado'?finRealizadoBody(scope,list,st):st.view==='todas'?finTodasBody(scope,list,st):finMesBody(scope,list,st);
 return `<div data-fin-scope="${scope}" id="finRoot">${head}${cards}${brk}${wsRow}<div class="toolbar" style="margin-bottom:10px">${tabs}</div>${body}</div>`}
/* bloco "em aberto" na tela inicial de cada workspace */
function finDashBlock(){if(currentWorkspace==='Ideias')return '';
 const scope=currentWorkspace==='Pessoal'?'Pessoal':currentWorkspace==='Eventos'?'Eventos':'Negócios',hoje=finLocalISO(),lim=finAddDays(hoje,3);
 const list=finScopeList(scope).filter(e=>!e.dataReal&&e.data),atr=list.filter(e=>e.data<hoje).sort(finByDate),prox=list.filter(e=>e.data>=hoje&&e.data<=lim).sort(finByDate);
 if(!atr.length&&!prox.length)return '';
 return `<section class="panel" id="finDashBlock" data-fin-scope="${scope}" style="margin-top:16px"><div class="panel-head"><h3>Financeiro em aberto</h3><button class="link-btn" data-nav="${pessoal_nav(scope)}">Abrir Financeiro</button></div>${atr.length?finBlocoAbertos(atr,'⚠️ Atrasados','#B42318','#FDECEC','#F6C6C2',false):''}${prox.length?finBlocoAbertos(prox,'📅 Próximos 3 dias','#B45309','#FFF6E6','#FCE2B0',false):''}</section>`}
const pessoal_nav=scope=>scope==='Pessoal'?'financas-pessoais':'financeiro';
/* ---- ações ---- */
function finRealize(id){const e=finAll().find(x=>x.id===id);if(!e)return;finSave({...e,dataReal:finLocalISO()});toast('Lançamento marcado como realizado.');finRebuild()}
function finReopen(id){const e=finAll().find(x=>x.id===id);if(!e)return;finSave({...e,dataReal:''});toast('Lançamento reaberto.');finRebuild()}
function finDelete(id){const e=finAll().find(x=>x.id===id);if(!e)return;
 if(!finConfirm(`Excluir o lançamento de ${finFmt(e.valorCent)} (${e.categoria||'sem categoria'})?`))return;
 let outros=[];if(e.grupoId)outros=finAll().filter(x=>x.grupoId===e.grupoId&&x.id!==id&&!x.dataReal);
 finRemove(id);
 if(outros.length&&finConfirm(`Este lançamento faz parte de uma série. Excluir também as outras ${outros.length} parcela(s) em aberto?`))outros.forEach(x=>finRemove(x.id));
 toast('Lançamento excluído.');finRebuild()}
function finBuildEntries(base,rep,n){
 if(rep==='unica')return [{...base,id:finUid()}];
 const gid=finUid(),per=Math.floor(base.valorCent/n),rem=base.valorCent-per*n,out=[];
 for(let i=0;i<n;i++)out.push({...base,id:finUid(),valorCent:rep==='parcelada'?per+(i<rem?1:0):base.valorCent,data:finAddMonths(base.data,i),dataReal:i===0?base.dataReal:'',grupoId:gid,parcelaN:i+1,parcelaTotal:n,recorrente:rep==='mensal',descricao:(base.descricao?base.descricao+' ':'')+(rep==='parcelada'?`(${i+1}/${n})`:`(mês ${i+1}/${n})`)});
 return out}
function finOpenForm(opts){opts=opts||{};
 const ex=opts.id?finAll().find(e=>e.id===opts.id):null;
 if(opts.id&&!ex){toast('Não foi possível localizar este lançamento para edição.');return}
 const wsDef=ex?ex.ws:(opts.ws||(opts.scope&&opts.scope!=='*'?opts.scope:(opts.eventId?'Eventos':(currentWorkspace==='Pessoal'?'Pessoal':currentWorkspace==='Eventos'?'Eventos':'Negócios'))));
 const v=ex||{ws:wsDef,tipo:opts.tipo||'desp',categoria:'',parte:'',descricao:'',valorCent:0,data:finLocalISO(),dataReal:'',forma:'vista',eventId:opts.eventId||'',projectId:'',clientId:''};
 const hoje=finLocalISO();
 const sel=(name,items,cur)=>`<select name="${name}">${items.map(i=>`<option value="${finEsc(i[0])}" ${String(i[0])===String(cur||'')?'selected':''}>${finEsc(i[1])}</option>`).join('')}</select>`;
 $('#formTitle').textContent=ex?'Editar lançamento':(v.tipo==='rec'?'Nova receita':'Nova despesa');
 $('#dynamicForm').innerHTML=`<div class="form-field"><label>Tipo</label>${sel('tipo',[['rec','Receita (a receber)'],['desp','Despesa (a pagar)']],v.tipo)}</div>
 <div class="form-field"><label>Workspace</label>${sel('ws',FIN_WS.map(w=>[w,w]),v.ws)}</div>
 <div class="form-field"><label>Categoria</label><input name="categoria" list="finCatList" maxlength="40" value="${finEsc(v.categoria)}"><datalist id="finCatList">${(FIN_CATS[v.ws]||[]).map(c=>`<option value="${finEsc(c)}">`).join('')}</datalist></div>
 <div class="form-field"><label id="finParteLbl">${v.tipo==='rec'?'Fonte pagadora':'Favorecido'}</label><input name="parte" maxlength="60" value="${finEsc(v.parte)}"></div>
 <div class="form-field"><label>Valor</label><input name="valor" inputmode="numeric" placeholder="0,00" value="${v.valorCent?finFmtNum(v.valorCent):''}"></div>
 <div class="form-field"><label>Pagamento</label>${sel('forma',[['vista','À vista'],['cartao','💳 Cartão de crédito (só despesas)']],v.forma)}</div>
 <div class="form-field"><label>Data (vencimento)</label><input name="data" type="date" value="${finEsc(v.data)}"></div>
 <div class="form-field"><label>Data realizada</label><input name="dataReal" type="date" max="${hoje}" value="${finEsc(v.dataReal||'')}"><small>Em branco = em aberto. Não pode estar no futuro.</small></div>
 <div class="form-field"><label>Evento (opcional)</label>${sel('eventId',[['','— nenhum —'],...getEvents().map(e=>[e.id,e.title])],v.eventId)}</div>
 <div class="form-field"><label>Projeto (opcional)</label>${sel('projectId',[['','— nenhum —'],...getProjects().map(p=>[p.id,p.name])],v.projectId)}</div>
 <div class="form-field"><label>Cliente (opcional)</label>${sel('clientId',[['','— nenhum —'],...getClients().map(c=>[c.id,c.name])],v.clientId)}</div>
 ${ex?'':`<div class="form-field"><label>Repetição</label>${sel('rep',[['unica','Lançamento único'],['parcelada','Parcelada (divide o valor)'],['mensal','Recorrente mensal (repete o valor)']],'unica')}</div><div class="form-field"><label>Nº de parcelas / meses</label><input name="n" type="number" min="2" max="60" value="2"></div>`}
 <div class="form-field full"><label>Descrição</label><input name="descricao" maxlength="120" value="${finEsc(v.descricao)}"></div>
 ${ex&&ex.grupoId?`<div class="form-field full" style="background:#f6f8fc;border-radius:10px;padding:10px 12px"><small>Esta é a parcela <b>${ex.parcelaN||'?'} de ${ex.parcelaTotal||'?'}</b> do mesmo lançamento. "Salvar em toda a série" aplica categoria, ${v.tipo==='rec'?'fonte pagadora':'favorecido'}, descrição, pagamento e vínculos a todas as parcelas em aberto — a data e o valor de cada parcela continuam os que já estavam definidos para ela.</small></div>`:''}
 <div class="form-actions">${ex&&ex.grupoId?`<button type="button" class="btn btn-secondary" data-cancel>Cancelar</button><button type="button" class="btn btn-secondary" data-fin-save="one">Salvar só esta parcela</button><button type="button" class="btn btn-primary" data-fin-save="series">Salvar em toda a série</button>`:`<button type="button" class="btn btn-secondary" data-cancel>Cancelar</button><button class="btn btn-primary" type="submit">${ex?'Salvar alterações':'Salvar'}</button>`}</div>`;
 const f=$('#dynamicForm'),g=n=>f.querySelector(`[name="${n}"]`);
 g('valor').oninput=()=>finMaskMoeda(g('valor'),false);
 g('tipo').onchange=()=>{$('#finParteLbl').textContent=g('tipo').value==='rec'?'Fonte pagadora':'Favorecido';if(g('tipo').value==='rec')g('forma').value='vista'};
 g('ws').onchange=()=>{f.querySelector('#finCatList').innerHTML=(FIN_CATS[g('ws').value]||[]).map(c=>`<option value="${finEsc(c)}">`).join('')};
 g('forma').onchange=()=>{if(g('forma').value==='cartao'){if(g('tipo').value==='rec'){g('forma').value='vista';toast('Cartão de crédito vale só para despesas.');return}const d=finDataCartao();if(!d){g('forma').value='vista';toast('Cadastre o dia do vencimento do cartão em ⚙️ (Caixa e cartão).');return}g('data').value=d}};
 f.querySelector('[data-cancel]').onclick=()=>$('#formDialog').close();
 const readBase=()=>{const tipo=g('tipo').value,ws=g('ws').value,categoria=g('categoria').value.trim(),valorCent=finParseMoeda(g('valor').value),data=g('data').value,dataReal=g('dataReal').value,forma=tipo==='rec'?'vista':g('forma').value;
  if(!categoria){toast('Informe a categoria.');return null}
  if(valorCent<=0){toast('Informe um valor maior que zero.');return null}
  if(!data){toast('Informe a data.');return null}
  if(dataReal&&dataReal>finLocalISO()){toast('A data realizada não pode estar no futuro.');return null}
  return {ws,tipo,categoria,parte:g('parte').value.trim(),descricao:g('descricao').value.trim(),valorCent,data,dataReal,forma,eventId:g('eventId').value,projectId:g('projectId').value,clientId:g('clientId').value}};
 const doEdit=scope=>{const base=readBase();if(!base)return;
  if(scope==='series'){if(!finConfirm(`Aplicar essas alterações às demais parcelas em aberto desta série?`))return;finApplySeries(ex,base);toast('Alterações aplicadas a toda a série.')}
  else{if(!finConfirm('Regravar as alterações deste lançamento?'))return;finSave({...ex,...base});toast('Lançamento regravado.')}
  $('#formDialog').close();finRebuild()};
 if(ex&&ex.grupoId){f.querySelector('[data-fin-save="one"]').onclick=()=>doEdit('one');f.querySelector('[data-fin-save="series"]').onclick=()=>doEdit('series')}
 f.onsubmit=e=>{e.preventDefault();
  const base=readBase();if(!base)return;
  if(ex){if(!finConfirm('Regravar as alterações deste lançamento?'))return;finSave({...ex,...base});toast('Lançamento regravado.')}
  else{const rep=g('rep').value;let n=1;if(rep!=='unica'){n=parseInt(g('n').value,10);if(!(n>=2&&n<=60)){toast('Informe de 2 a 60 parcelas/meses.');return}}
   finAdd(finBuildEntries({...base,origem:'manual',createdAt:Date.now()},rep,n));toast(n>1?`${n} lançamentos criados.`:'Lançamento registrado.')}
  $('#formDialog').close();finRebuild()};
 $('#formDialog').showModal()}
function finApplySeries(entry,base){const campos=['tipo','ws','categoria','parte','descricao','forma','eventId','projectId','clientId'];
 finAll().filter(e=>e.grupoId===entry.grupoId&&!e.dataReal).forEach(e=>{const patch={};campos.forEach(k=>patch[k]=base[k]);finSave({...e,...patch})})}
function finOpenConfig(){const cfg=finCfg(),caixa=cfg.caixa||{};
 $('#formTitle').textContent='Caixa inicial e cartão';
 $('#dynamicForm').innerHTML=FIN_WS.map(w=>`<div class="form-field"><label>Saldo inicial de caixa — ${w}</label><input name="caixa-${w}" inputmode="numeric" placeholder="0,00 (use - para negativo)" value="${caixa[w]?finFmtNum(caixa[w]):''}"></div>`).join('')+`<div class="form-field"><label>Dia do vencimento do cartão (1 a 31)</label><input name="diaCartao" type="number" min="1" max="31" value="${cfg.diaCartao||''}"></div><div class="form-field full"><small>O saldo inicial é o dinheiro que você já tinha antes de começar a lançar. Ele entra no "Caixa atual" e no saldo anterior do fluxo.</small></div><div class="form-actions"><button type="button" class="btn btn-secondary" data-cancel>Cancelar</button><button class="btn btn-primary" type="submit">Salvar</button></div>`;
 const f=$('#dynamicForm');FIN_WS.forEach(w=>{const i=f.querySelector(`[name="caixa-${w}"]`);i.oninput=()=>finMaskMoeda(i,true)});
 f.querySelector('[data-cancel]').onclick=()=>$('#formDialog').close();
 f.onsubmit=e=>{e.preventDefault();const dc=parseInt(f.querySelector('[name="diaCartao"]').value,10)||0;if(dc&&(dc<1||dc>31)){toast('Dia do cartão deve ser de 1 a 31.');return}
  const c={};FIN_WS.forEach(w=>{c[w]=finParseMoeda(f.querySelector(`[name="caixa-${w}"]`).value)});
  storage.setItem(FIN_CFG,JSON.stringify({caixa:c,diaCartao:dc}));$('#formDialog').close();toast('Configuração salva.');finRebuild()};
 $('#formDialog').showModal()}
/* ---- eventos delegados (uma única vez) ---- */
document.addEventListener('click',ev=>{const t=ev.target.closest&&ev.target.closest('[data-fin-act]');if(!t)return;
 const root=t.closest('[data-fin-scope]'),scope=root?root.dataset.finScope:'*',st=finSt(scope),act=t.dataset.finAct,id=t.dataset.id;
 if(act==='view'){st.view=t.dataset.view;st.dia='';return finRebuild()}
 if(act==='mnav'){st.mOff+=Number(t.dataset.d);return finRebuild()}
 if(act==='ws'){st.ws=t.dataset.ws;return finRebuild()}
 if(act==='filtro'){st.filtro=t.dataset.f;return finRebuild()}
 if(act==='dia'){st.dia=t.dataset.iso;return finRebuild()}
 if(act==='diaback'){st.dia='';return finRebuild()}
 if(act==='periodo'){const h=finLocalISO(),p=t.dataset.p;st.dia='';if(p==='hoje'){st.ini=h;st.fim=h}else if(p==='semana'){st.ini=h;st.fim=finAddDays(h,7)}else if(p==='30'){st.ini=h;st.fim=finAddDays(h,30)}else{const n=finParse(h);st.ini=finLocalISO(new Date(n.getFullYear(),n.getMonth(),1));st.fim=finLocalISO(new Date(n.getFullYear(),n.getMonth()+1,0))}return finRebuild()}
 if(act==='evscope-clear'){finEventScope='';return render('financeiro')}
 if(act==='new')return finOpenForm({tipo:t.dataset.tipo,scope,eventId:scope==='*'?'':finEventScope});
 if(act==='cfg')return finOpenConfig();
 if(act==='realize')return finRealize(id);
 if(act==='undo')return finReopen(id);
 if(act==='del')return finDelete(id);
 if(act==='consolidado')return openSubView('Financeiro consolidado','FINANCEIRO',()=>finView('*'),currentMainNav)});
document.addEventListener('change',ev=>{const t=ev.target;if(!t.dataset||!t.dataset.finIn)return;const root=t.closest('[data-fin-scope]');if(!root)return;
 const st=finSt(root.dataset.finScope),k=t.dataset.finIn,v=t.value;if(!v)return;
 if(k==='ini'){st.ini=v;if(st.fim<st.ini)st.fim=st.ini}
 else if(k==='fim'){if(v<st.ini){toast('A data final não pode ser anterior à data inicial.');return finRebuild()}st.fim=v}
 else if(k==='ri'){st.ri=v;if(st.rf<st.ri)st.rf=st.ri}
 else if(k==='rf'){if(v<st.ri){toast('A data final não pode ser anterior à data inicial.');return finRebuild()}st.rf=v}
 st.dia='';finRebuild()});

const daysUntil=date=>Math.ceil((new Date(date+'T12:00:00')-new Date())/86400000);
const spark=(vals=[30,42,38,58,66,82],copper=false)=>`<div class="spark ${copper?'copper':''}">${vals.map(v=>`<i style="height:${v}%"></i>`).join('')}</div>`;
const pstatus=s=>`<span class="pill ${s==='Produção'?'':'warn'}">● ${s}</span>`;
const eventStatus=s=>`<span class="pill ${s==='Em produção'?'info':'warn'}">${s}</span>`;
const eventName=id=>getEvents().find(e=>e.id===id)?.title||id;

const isoToday=()=>new Date().toISOString().slice(0,10);
const safeDate=s=>{const d=new Date(`${s}T12:00:00`);return Number.isNaN(d.getTime())?new Date():d};
const safeStorageGet=(key,fallback='')=>{try{return globalThis.localStorage?.getItem(key)??globalThis.__r1StorageMemory?.[key]??fallback}catch{return globalThis.__r1StorageMemory?.[key]??fallback}};
const safeReadJSON=(key,fallback)=>{try{return JSON.parse(safeStorageGet(key,'null'))??fallback}catch{return fallback}};
const contactPhone=name=>{
 const q=String(name||'').toLowerCase();
 const client=getClients().find(c=>q.includes(String(c.name||'').toLowerCase())||(String(c.secondary||'')&&q.includes(String(c.secondary||'').toLowerCase())));
 if(client?.phone)return client.phone;
 const supplier=getSuppliers().find(s=>q.includes(String(s.name||'').toLowerCase())||q.includes(String(s.contact||'').toLowerCase()));
 return supplier?.phone||'';
};
const agendaEntries=()=>{
 const rows=[];
 getAppointments().forEach(a=>rows.push({id:a.id,date:a.date,time:a.time||'',title:a.title,type:a.type||'Compromisso',source:'Compromisso',detail:a.notes||a.related||'',phone:a.phone||a.whatsapp||'',person:a.relatedName||'',priority:a.priority||'Normal',edit:`appointment::${a.id}`}));
 getEvents().forEach(e=>rows.push({id:`agenda-event-${e.id}`,date:e.date,time:e.time||'',title:e.title,type:'Evento',source:'Evento',detail:`${e.client} • ${e.venue}`,phone:contactPhone(e.client),person:e.client,priority:e.critical>0?'Alta':'Normal',edit:`event::${e.id}`}));
 getFinance().filter(x=>x.status==='Pendente').forEach(f=>rows.push({id:`agenda-fin-${f.id}`,date:f.date,time:'',title:f.description,type:f.type==='Receita'?'Recebimento':'Pagamento',source:'Financeiro',detail:`${eventName(f.eventId)} • ${f.party}`,phone:contactPhone(f.party),person:f.party,priority:'Alta',edit:`finance::${f.id}`}));
 getTastings().forEach(t=>rows.push({id:`agenda-tast-${t.id}`,date:t.date,time:t.time||'',title:`Degustação • ${eventName(t.eventId)}`,type:'Degustação',source:'Evento',detail:`${t.supplier||'Fornecedor a definir'}${t.menu?' • '+t.menu:''} • ${t.approved==='Sim'?'Aprovada':t.approved==='Não'?'Reprovada':'Pendente'}`,phone:contactPhone(t.supplier),person:t.supplier||'',priority:t.approved==='Não'?'Alta':'Normal',edit:`tasting::${t.id}`}));
 getChecklist().filter(x=>!x.done&&!x.tastingId).forEach(c=>rows.push({id:`agenda-check-${c.id}`,date:c.due,time:'',title:c.title,type:'Checklist',source:'Checklist',detail:`${eventName(c.eventId)} • ${c.owner}`,phone:contactPhone(c.owner),person:c.owner,priority:c.critical?'Alta':'Normal',edit:`checklist::${c.id}`}));
 getTimeline().filter(x=>x.status!=='Confirmado').forEach(t=>{const ev=getEvents().find(e=>e.id===t.eventId);if(!ev)return;rows.push({id:`agenda-time-${t.id}`,date:ev.date,time:t.time||'',title:t.title,type:'Cronograma',source:'Evento',detail:`${ev.title} • ${t.location} • ${t.owner}`,phone:contactPhone(t.owner),person:t.owner,priority:'Normal',edit:`timeline::${t.id}`})});
 getStrategicGoals().forEach(g=>{if(g.date)rows.push({id:`agenda-goal-${g.id}`,date:g.date,time:'',title:g.title,type:'Meta',source:'Estratégia',detail:`${g.area||'Estratégia'} • Meta: ${g.target||'a definir'}`,phone:'',person:'',priority:'Normal',edit:`goal::${g.id}`})});
 getPersonalGoals().forEach(g=>{if(g.due)rows.push({id:`agenda-pgoal-${g.id}`,date:g.due,time:'',title:g.title,type:'Meta pessoal',source:'Pessoal',detail:`${g.area} • ${g.progress}%`,phone:'',person:'',priority:'Normal',edit:`personalGoal::${g.id}`})});
 getProjectAgenda().forEach(pa=>{const proj=getProjects().find(p=>p.id===pa.projectId);const d=pa.endDate||pa.startDate;if(!d)return;rows.push({id:`agenda-proj-${pa.id}`,date:d,time:'',title:proj?proj.name:'Projeto',type:'Projeto',source:'Projetos',detail:`${pa.startDate?`${new Date(pa.startDate+'T12:00:00').toLocaleDateString('pt-BR')} → `:''}${pa.notes||''}`,phone:'',person:'',priority:'Normal',edit:`projectAgenda::${pa.id}`})});
 const hidden=new Set(safeReadJSON('r1_agenda_hidden',[]));
 return rows.filter(x=>x.date&&!hidden.has(x.id)).sort((a,b)=>`${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
};
const agendaTypeClass=type=>({'Evento':'event','Degustação':'event','Compromisso':'appointment','Pessoal':'appointment','Planejamento':'planning','Finanças':'finance','Recebimento':'income','Pagamento':'expense','Checklist':'checklist','Cronograma':'timeline','Meta':'goal','Meta pessoal':'goal','Projeto':'planning'}[type]||'appointment');

function dashboardView(workspace='Negócios'){
 const allProjects=getProjects(),ideaBoard=getIdeasBoard(),events=getEvents().slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))),finance=getFinance(),suppliers=getSuppliers(),clients=getClients(),pending=finance.filter(x=>x.status==='Pendente');
 if(workspace==='Eventos') return `
 <section class="workspace-banner"><div><span class="eyebrow">WORKSPACE EVENTOS</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.21.1</span><h3>Produção rigorosa do briefing ao último convidado.</h3><p>Eventos, clientes, fornecedores, contratos, catálogo, financeiro, checklist e cronograma trabalhando no mesmo fluxo.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="eventos"><span data-icon="calendar-heart"></span> Abrir central de eventos</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
 <section class="metrics"><article class="metric-card"><small>Eventos ativos</small><strong>${events.length}</strong><span class="metric-meta">Em produção</span>${spark([22,34,48,58,68,80],true)}</article><article class="metric-card"><small>Itens de checklist</small><strong>${getChecklist().filter(x=>!x.done).length}</strong><span class="metric-meta">Ainda em aberto</span>${spark([70,58,50,42,34,26])}</article><article class="metric-card"><small>Fornecedores</small><strong>${suppliers.length}</strong><span class="metric-meta">Rede operacional</span>${spark([28,38,48,58,68,78],true)}</article><article class="metric-card"><small>Pendências financeiras</small><strong>${pending.length}</strong><span class="metric-meta">Cobrar ou pagar</span>${spark([60,54,46,38,32,24])}</article></section>
 <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Eventos em andamento</h3><button class="link-btn" data-nav="eventos">Ver todos</button></div><div class="event-mini-grid">${events.map(e=>`<article class="event-mini"><div><span class="event-type">${e.type}</span><span class="event-mini-date">${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')}</span><h4>${e.title}</h4><p>${e.venue} • ${e.guests} convidados</p></div><div class="event-mini-foot"><div><small>Produção</small><b>${e.progress}%</b></div><div class="progress"><i style="width:${e.progress}%"></i></div><button class="small-btn" data-open-event="${e.id}">Abrir detalhes</button></div></article>`).join('')}</div></div><div class="stack"><div class="panel"><div class="panel-head"><h3>Atalhos de produção</h3></div><div class="quick-grid"><button data-nav="catalogo"><span data-icon="book-open"></span><span>Catálogo</span></button><button data-nav="fornecedores"><span data-icon="briefcase"></span><span>Fornecedores</span></button><button data-nav="contratos"><span data-icon="file-signature"></span><span>Contratos</span></button><button data-nav="apresentacoes"><span data-icon="presentation"></span><span>Apresentações</span></button><button data-create="event"><span data-icon="plus-circle"></span><span>Novo evento</span></button><button data-nav="financeiro"><span data-icon="wallet"></span><span>Financeiro</span></button></div></div><div class="panel"><div class="panel-head"><h3>Atenção agora</h3></div><div class="attention-list"><button data-open-event="ev-ana-lucas"><span class="status-dot danger"></span><div><b>Casamento • Ana & Lucas</b><small>5 pontos críticos ainda em produção</small></div><em>Hoje</em></button><button data-nav="financeiro"><span class="status-dot warn"></span><div><b>Financeiro</b><small>${pending.length} lançamentos pendentes</small></div><em>Agora</em></button></div></div></div></section>`;
 if(workspace==='Pessoal'){
   const goals=getPersonalGoals(),routine=getRoutine(),appointments=getAppointments(),pf=getPersonalFinance();
   return `<section class="workspace-banner"><div><span class="eyebrow">WORKSPACE PESSOAL</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.21.1</span><h3>Sua vida organizada sem misturar com a operação profissional.</h3><p>Objetivos, rotina, agenda, documentos e finanças pessoais em um ambiente separado e visualmente identificável.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="objetivos"><span data-icon="target"></span> Ver objetivos</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
   <section class="metrics"><article class="metric-card"><small>Objetivos ativos</small><strong>${goals.length}</strong><span class="metric-meta">Metas pessoais</span>${spark([30,38,48,58,66,74])}</article><article class="metric-card"><small>Rotinas pendentes</small><strong>${routine.filter(x=>!x.done).length}</strong><span class="metric-meta">Nesta semana</span>${spark([62,54,46,38,30,24])}</article><article class="metric-card"><small>Próximos compromissos</small><strong>${appointments.length}</strong><span class="metric-meta">Agenda pessoal</span>${spark([24,34,46,56,64,72],true)}</article><article class="metric-card"><small>Saldo demonstrativo</small><strong>${money(pf.filter(x=>x.type==='Entrada').reduce((a,x)=>a+x.value,0)-pf.filter(x=>x.type==='Saída').reduce((a,x)=>a+x.value,0))}</strong><span class="metric-meta">Prévia pessoal</span>${spark([34,44,54,62,72,80])}</article></section>
   <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Objetivos em andamento</h3><button class="link-btn" data-nav="objetivos">Abrir objetivos</button></div>${goals.map(g=>`<div class="goal-row"><div><b>${g.title}</b><small>${g.area} • até ${new Date(g.due+'T12:00:00').toLocaleDateString('pt-BR')}</small></div><span>${g.progress}%</span><div class="progress"><i style="width:${g.progress}%"></i></div></div>`).join('')}</div><div class="panel"><div class="panel-head"><h3>Rotina da semana</h3><button class="link-btn" data-nav="rotina">Abrir rotina</button></div><div class="routine-list">${routine.map(r=>`<label class="routine-row ${r.done?'done':''}"><input type="checkbox" data-routine-toggle="${r.id}" ${r.done?'checked':''}><span class="custom-check"></span><div><b>${r.title}</b><small>${r.period}</small></div></label>`).join('')}</div></div></section>`;
 }
 if(workspace==='Ideias'){
   const validations=getValidations(),decisions=getDecisions();
   return `<section class="workspace-banner"><div><span class="eyebrow">WORKSPACE IDEIAS</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.21.1</span><h3>Capture, valide e transforme ideias em projetos executáveis.</h3><p>Canvas, hipóteses, evidências, decisões e roadmap antes de gastar energia no desenvolvimento.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="ideias"><span data-icon="lightbulb"></span> Abrir incubadora</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
   <section class="metrics"><article class="metric-card"><small>Ideias no funil</small><strong>${Object.values(ideaBoard).flat().length}</strong><span class="metric-meta">Da ideia à produção</span>${spark([26,36,48,58,68,82],true)}</article><article class="metric-card"><small>Validações</small><strong>${validations.length}</strong><span class="metric-meta">Hipóteses em teste</span>${spark([18,28,38,48,58,70])}</article><article class="metric-card"><small>Decisões registradas</small><strong>${decisions.length}</strong><span class="metric-meta">Histórico rastreável</span>${spark([28,34,42,52,64,76],true)}</article><article class="metric-card"><small>Em produção</small><strong>${ideaBoard['PRODUÇÃO'].length}</strong><span class="metric-meta">Ideias que viraram produto</span>${spark([22,30,42,54,68,84])}</article></section>
   <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Funil de ideias</h3><button class="link-btn" data-nav="ideias">Abrir incubadora</button></div><div class="idea-pipeline">${Object.entries(ideaBoard).map(([stage,arr])=>`<div><span>${stage}</span><b>${arr.length}</b></div>`).join('')}</div></div><div class="panel"><div class="panel-head"><h3>Últimas decisões</h3><button class="link-btn" data-nav="decisoes">Ver decisões</button></div>${decisions.map(d=>`<div class="decision-row"><b>${d.title}</b><small>${d.context}</small><span>${d.status}</span></div>`).join('')}</div></section>`;
 }
 return `<section class="workspace-banner"><div><span class="eyebrow">WORKSPACE NEGÓCIOS</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.21.1</span><h3>Comande projetos, produtos, clientes e resultados em um único painel.</h3><p>Visão executiva para administrar aplicativos, estratégia, finanças e operação sem misturar com os demais contextos.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="projetos"><span data-icon="grid"></span> Abrir portfólio</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
 <section class="metrics"><article class="metric-card"><small>Projetos ativos</small><strong>${allProjects.length}</strong><span class="metric-meta">Produtos em produção</span>${spark([30,35,42,48,58,66])}</article><article class="metric-card"><small>Clientes cadastrados</small><strong>${clients.length}</strong><span class="metric-meta">CRM centralizado</span>${spark([24,32,44,56,68,78],true)}</article><article class="metric-card"><small>Saúde média dos apps</small><strong>${Math.round(allProjects.reduce((a,p)=>a+p.health,0)/Math.max(1,allProjects.length))}</strong><span class="metric-meta">Score operacional</span>${spark([62,68,74,80,86,90])}</article><article class="metric-card"><small>Pendências críticas</small><strong>${allProjects.reduce((a,p)=>a+p.issues,0)}</strong><span class="metric-meta">Roadmap e bugs</span>${spark([68,60,52,44,36,28],true)}</article></section>
 <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Portfólio de produtos</h3><button class="link-btn" data-nav="projetos">Ver todos</button></div><div class="project-mini-list">${allProjects.map(p=>`<article><div class="project-logo">${p.name.slice(0,2).toUpperCase()}</div><div><b>${p.name}</b><small>${p.cat} • ${p.version}</small></div><span>${p.health}/100</span><button class="small-btn" data-open-project="${p.id}">Hub</button></article>`).join('')}</div></div><div class="stack"><div class="panel"><div class="panel-head"><h3>Atalhos executivos</h3></div><div class="quick-grid"><button data-nav="projetos"><span data-icon="grid"></span><span>Projetos</span></button><button data-nav="clientes"><span data-icon="users"></span><span>Clientes</span></button><button data-nav="financeiro"><span data-icon="wallet"></span><span>Financeiro</span></button><button data-nav="estrategia"><span data-icon="target"></span><span>Estratégia</span></button><button data-nav="administracao"><span data-icon="settings"></span><span>Administração</span></button><button data-nav="seguranca"><span data-icon="shield"></span><span>Segurança</span></button></div></div></div></section>`;
}

function consolidadoView(){
 const all=finAll(),hoje=finLocalISO(),abertos=all.filter(e=>!e.dataReal&&e.data),atr=abertos.filter(e=>e.data<hoje);
 const caixaGeral=finCaixa(all,'*'),receber=finSum(abertos,'rec'),pagar=finSum(abertos,'desp');
const projects=getProjects();
 const statusCount=s=>projects.filter(p=>p.status===s).length;
 const events=getEvents();
 const receitaEventosPrevista=events.reduce((a,e)=>a+Number(e.budget||0),0);
 const goals=getPersonalGoals();
 const progressoMedio=goals.length?Math.round(goals.reduce((a,g)=>a+Number(g.progress||0),0)/goals.length):0;
 const ideaBoard=getIdeasBoard();
 return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">RIZZIERI ONE</span><h3>Consolidado geral</h3><p>Um retrato único de negócios, eventos, pessoal e ideias, atualizado agora.</p></div></div><section class="metrics"><article class="metric-card"><small>Caixa consolidado</small><strong>${finFmt(caixaGeral)}</strong><span class="metric-meta">Saldo inicial + realizados (Negócios, Eventos, Pessoal)</span></article><article class="metric-card"><small>A receber (em aberto)</small><strong>${finFmt(receber)}</strong><span class="metric-meta">Todos os workspaces</span></article><article class="metric-card"><small>A pagar (em aberto)</small><strong>${finFmt(pagar)}</strong><span class="metric-meta">Todos os workspaces</span></article><article class="metric-card"><small>Atrasados</small><strong>${atr.length}</strong><span class="metric-meta">Receber ${finFmt(finSum(atr,'rec'))} · Pagar ${finFmt(finSum(atr,'desp'))}</span></article></section><div style="margin:4px 0 14px"><button class="btn btn-primary" data-fin-act="consolidado"><span data-icon="wallet"></span> Abrir financeiro consolidado</button></div><section class="main-grid"><div class="panel"><div class="panel-head"><h3>Negócios</h3><button class="link-btn" data-goto-workspace="Negócios" data-goto-nav="projetos">Ver projetos</button></div><div class="summary-list"><div><small>Projetos</small><b>${projects.length}</b></div><div><small>Ideia</small><b>${statusCount('Ideia')}</b></div><div><small>Desenvolvimento</small><b>${statusCount('Desenvolvimento')}</b></div><div><small>Produção</small><b>${statusCount('Produção')}</b></div></div></div><div class="panel"><div class="panel-head"><h3>Eventos</h3><button class="link-btn" data-goto-workspace="Eventos" data-goto-nav="eventos">Ver eventos</button></div><div class="summary-list"><div><small>Eventos ativos</small><b>${events.length}</b></div><div><small>Receita prevista</small><b>${money(receitaEventosPrevista)}</b></div></div></div><div class="panel"><div class="panel-head"><h3>Pessoal</h3><button class="link-btn" data-goto-workspace="Pessoal" data-goto-nav="objetivos">Ver objetivos</button></div><div class="summary-list"><div><small>Objetivos</small><b>${goals.length}</b></div><div><small>Progresso médio</small><b>${progressoMedio}%</b></div></div></div><div class="panel"><div class="panel-head"><h3>Ideias</h3><button class="link-btn" data-goto-workspace="Ideias" data-goto-nav="ideias">Ver incubadora</button></div><div class="summary-list"><div><small>No funil</small><b>${Object.values(ideaBoard).flat().length}</b></div><div><small>Em produção</small><b>${ideaBoard['PRODUÇÃO']?.length||0}</b></div></div></div></section>`;
}
function projectCard(p){return `<article class="project-card"><div class="project-card-top"><div class="project-logo">${p.name.slice(0,2).toUpperCase()}</div>${pstatus(p.status)}</div><h4>${p.name}</h4><p>${p.cat}</p><div class="project-meta"><div><small>Versão</small><b>${p.version}</b></div><div><small>Saúde</small><b>${p.health}/100</b></div><div><small>Próxima</small><b>${p.next}</b></div><div><small>Pendências</small><b>${p.issues}</b></div></div><div class="project-actions"><button class="small-btn" data-open-project="${p.id}"><span data-icon="layout-dashboard"></span> Hub</button><button class="small-btn" data-edit="project::${p.id}">✏️ Editar</button>${p.url?`<a class="small-btn open-link" href="${p.url}" target="_blank" rel="noopener"><span data-icon="arrow-up-right"></span> Abrir</a>`:`<span class="small-btn" style="opacity:.55;cursor:default" title="Cadastre a URL no botão Editar quando o produto estiver publicado">Sem link ainda</span>`}</div></article>`}
function projectsView(){const rows=getProjects();return `<div class="section-title"><div><span class="eyebrow">APPS & PRODUTOS</span><h3>Portfólio de projetos</h3><p>Controle versão, saúde, roadmap, pendências e acesso aos seus produtos em um único lugar.</p></div><button class="btn btn-primary" data-create="project">＋ Novo projeto</button></div><div class="toolbar"><input id="projectsSearch" class="search-input" placeholder="Buscar projeto..."><button class="filter-chip active" data-project-filter="Todos">Todos</button><button class="filter-chip" data-project-filter="Produção">Produção</button><button class="filter-chip" data-project-filter="Desenvolvimento">Desenvolvimento</button><button class="filter-chip" data-project-filter="Análise">Análise</button><button class="filter-chip" data-project-filter="Teste">Teste</button><button class="filter-chip" data-project-filter="Ideia">Ideia</button><span id="projectsCounter" class="toolbar-counter">${rows.length} projetos</span></div><div class="project-grid" id="projectsGrid">${rows.map(p=>`<article class="project-card" data-project-card data-project-status="${p.status}" data-project-name="${`${p.name} ${p.cat} ${p.version} ${p.owner||''}`.toLowerCase()}">${projectCard(p).replace('<article class="project-card">','').replace(/<\/article>$/,'')}</article>`).join('')}</div><div id="projectsEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum projeto encontrado.</b><small>Altere os filtros ou cadastre um novo projeto.</small></div>`}
function projectHubView(id){const rows=getProjects(),p=rows.find(x=>x.id===id)||rows[0];const agenda=getProjectAgenda(p.id).sort((a,b)=>String(b.startDate||'').localeCompare(String(a.startDate||'')));return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">HUB DO PRODUTO</span><h3>${p.name}</h3><p>${p.cat}</p></div><div class="event-head-actions"><button class="btn btn-secondary" data-edit="project::${p.id}">✏️ Editar projeto</button>${p.url?`<a class="btn btn-primary open-link" href="${p.url}" target="_blank" rel="noopener">Abrir produto ↗</a>`:`<button class="btn btn-secondary" data-edit="project::${p.id}" style="opacity:.7" title="Cadastre a URL para liberar este botão">Sem link publicado</button>`}</div></div><section class="project-detail-grid"><div class="hero-card"><span class="eyebrow">STATUS OPERACIONAL</span><h3>${p.health}/100 <span style="font-size:18px;color:var(--green)">saúde geral</span></h3><div class="progress"><i style="width:${p.health}%"></i></div><p>Versão atual <b>${p.version}</b> • próxima versão <b>${p.next}</b> • ${p.issues} pendências.</p></div><div class="panel"><div class="summary-list"><div><small>Ambiente</small><b>${p.status}</b></div><div><small>Última atualização</small><b>${p.update}</b></div><div><small>Próxima versão</small><b>${p.progress}%</b></div></div></div></section><section class="panel"><div class="panel-head"><h3>Agenda do projeto</h3><button class="btn btn-primary" data-create="projectAgenda" data-event-id="${p.id}"><span data-icon="plus-circle"></span> Novo lançamento</button></div><div class="attention-list">${agenda.length?agenda.map(a=>`<div class="list-row"><span class="status-dot info"></span><div><b>${a.startDate?new Date(a.startDate+'T12:00:00').toLocaleDateString('pt-BR'):'—'} → ${a.endDate?new Date(a.endDate+'T12:00:00').toLocaleDateString('pt-BR'):'—'}</b><small>${a.notes||''}</small></div><button class="small-btn" data-edit="projectAgenda::${a.id}">✏️</button></div>`).join(''):'<p style="color:#6c7887">Nenhum lançamento registrado ainda.</p>'}</div></section>`}

function eventsView(){const events=getEvents().slice().sort((a,b)=>String(a.date).localeCompare(String(b.date)));return `<div class="section-title"><div><span class="eyebrow">EVENTOS & EXPERIÊNCIAS</span><h3>Central de produção</h3><p>Do briefing ao último pagamento: cronograma, checklist, fornecedores, contratos, apresentação e execução.</p></div><button class="btn btn-primary" data-create="event">＋ Novo evento</button></div><section class="metrics"><article class="metric-card"><small>Eventos ativos</small><strong>${events.length}</strong><span class="metric-meta">Todos com responsável definido</span>${spark([22,30,42,54,62,74])}</article><article class="metric-card"><small>Checklists</small><strong>${getChecklist().filter(x=>!x.done).length}</strong><span class="metric-meta">Itens ainda em aberto</span>${spark([62,58,50,42,34,28],true)}</article><article class="metric-card"><small>Valor contratado</small><strong>${money(events.reduce((a,e)=>a+e.budget,0))}</strong><span class="metric-meta">Carteira demonstrativa</span>${spark([30,38,48,58,68,80])}</article><article class="metric-card"><small>Fornecedores</small><strong>${getSuppliers().length}</strong><span class="metric-meta">Base reutilizável entre eventos</span>${spark([26,34,46,54,62,76],true)}</article></section><div class="toolbar"><input id="eventsSearch" class="search-input" placeholder="Buscar evento, cliente, local..."><button class="filter-chip active" data-event-filter="Todos">Todos</button>${getEventTypes().filter(t=>t.visible).map(t=>`<button class="filter-chip" data-event-filter="${t.name}">${t.name}</button>`).join('')}<span id="eventsCounter" class="toolbar-counter">${events.length} eventos</span></div><div class="event-grid" id="eventsGrid">${events.map(e=>{const pend=getChecklist(e.id).filter(x=>!x.done).length,crit=getChecklist(e.id).filter(x=>x.critical&&!x.done).length,d=daysUntil(e.date);
 const bellCfg=ajEventBell();const urgent=d<=bellCfg.urgentDays&&pend>0,warn=!urgent&&d<=bellCfg.warnDays&&d>=0;
 const bell=urgent?`<span class="event-alert-bell blinking" title="Faltam ${d} dia(s) e há ${pend} item(ns) pendente(s) no checklist${crit?`, ${crit} crítico(s)`:''}">🔔</span>`:warn?`<span class="event-alert-bell" title="Faltam ${d} dia(s) para o evento">🔔</span>`:'';
 return `<article class="event-card" data-event-card data-event-type="${e.type}" data-event-search="${finEsc(`${e.title} ${e.client} ${e.venue}`.toLowerCase())}"><div class="event-card-head"><div><span class="event-type">${e.type}</span><h4>${e.title}</h4><p>${e.client}</p></div>${eventStatus(e.status)}</div><div class="event-stats"><div><small>Data</small><b>${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} ${bell}</b><em>${d} dias</em></div><div><small>Local</small><b>${e.venue}</b></div><div><small>Convidados</small><b>${e.guests}</b></div><div><small>Orçamento</small><b>${money(e.budget)}</b></div></div><div class="progress"><i style="width:${e.progress}%"></i></div><div class="event-card-foot"><span>${e.progress}% produzido • ${e.critical} críticos</span><button class="small-btn" data-open-event="${e.id}">Abrir detalhes</button><button class="small-btn" data-edit="event::${e.id}">✏️ Editar</button></div></article>`}).join('')}</div><div id="eventsEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum evento encontrado.</b><small>Altere os filtros ou cadastre um novo evento.</small></div>`}
function eventHubView(id){const e=getEvents().find(x=>x.id===id)||getEvents()[0],_sm=tastingSyncMissing(e.id),ck=getChecklist(e.id),tl=getTimeline(e.id),fin=getFinance().filter(x=>x.eventId===e.id),selected=getEventCatalog(e.id);const done=ck.filter(x=>x.done).length, paid=fin.filter(x=>x.status==='Pago').reduce((a,x)=>a+Number(x.value),0);return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">HUB DO EVENTO</span><h3>${e.title}</h3><p>${e.client} • ${e.venue} • ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')}</p></div><div class="event-head-actions"><button class="small-btn" data-edit="event::${e.id}">✏️ Editar evento</button><button class="small-btn" data-duplicate-event="${e.id}">⧉ Duplicar evento</button><button class="small-btn" data-share-event="${e.id}">📲 WhatsApp</button><button class="copper-btn" data-print="event" data-id="${e.id}">Gerar resumo PDF</button><button class="copper-btn" data-open-budget="${e.id}">💰 Orçamento PDF</button><button class="copper-btn" data-open-payplan="${e.id}">🗓️ Plano de pagamento</button><button class="small-btn" data-open-history="event::${e.id}">📈 Histórico</button><button class="btn btn-primary" data-open-event-pres="${e.id}">Abrir apresentação</button></div></div><section class="hero-grid"><div class="hero-card"><span class="eyebrow">CONTAGEM REGRESSIVA</span><h3>${daysUntil(e.date)} dias <span style="font-size:18px;color:var(--silver)">para a execução</span></h3><div class="progress"><i style="width:${e.progress}%"></i></div><p>${e.progress}% da produção concluída. Responsável: <b>${e.manager}</b>.</p><div class="hero-actions"><button class="copper-btn" data-open-tasting="${e.id}">🍽️ Degustação</button><button class="copper-btn" data-open-checklist="${e.id}">✓ Checklist</button><button class="copper-btn" data-open-approval="${e.id}">⭐ Aprovação do cliente</button><button class="copper-btn" data-open-timeline="${e.id}">⏱ Cronograma</button><button class="copper-btn" data-open-guests="${e.id}">🎟 Convidados</button><button class="copper-btn" data-open-seating="${e.id}">🪑 Mapa de mesas</button><button class="copper-btn" data-open-portal="${e.id}">🔗 Portal do cliente</button><button class="copper-btn" data-nav="fornecedores">👥 Fornecedores</button><button class="copper-btn" data-open-event-fin="${e.id}">◈ Financeiro</button></div></div><div class="panel"><div class="panel-head"><h3>Resumo operacional</h3><span class="pill warn">${e.critical} críticos</span></div><div class="summary-list"><div><small>Degustação</small><b>${tastingSummary(e.id)}</b></div><div><small>Checklist</small><b>${done}/${ck.length} concluídos</b></div><div><small>Aprovação do cliente</small><b data-score-summary data-eid="${e.id}">${approvalSummaryText(e.id)}</b></div><div><small>Cronograma do dia</small><b>${tl.length} marcos</b></div><div><small>Convidados</small><b>${getGuests(e.id).filter(x=>x.status==='Confirmado').length} confirmados de ${e.guests||0} previstos</b></div><div><small>Catálogo escolhido</small><b>${selected.length} itens</b></div><div><small>Movimento financeiro</small><b>${money(paid)} baixado</b></div></div></div></section><section class="metrics"><article class="metric-card"><small>Checklist</small><strong>${ck.length?Math.round(done/ck.length*100):0}%</strong><span class="metric-meta">${done} de ${ck.length} itens concluídos</span>${spark([18,26,38,50,64,74])}</article><article class="metric-card"><small>Fornecedores</small><strong>${getSuppliers().length}</strong><span class="metric-meta">Catálogo reutilizável</span>${spark([28,34,42,52,64,76],true)}</article><article class="metric-card"><small>Financeiro</small><strong>${fin.filter(x=>x.status==='Pendente').length}</strong><span class="metric-meta">Lançamentos pendentes</span>${spark([18,32,40,52,58,61])}</article><article class="metric-card"><small>Catálogo</small><strong>${selected.length}</strong><span class="metric-meta">Itens adicionados ao projeto</span>${spark([22,30,42,54,64,72],true)}</article></section><section class="two-col"><div class="panel"><div class="panel-head"><h3>Linha do tempo do dia</h3><button class="link-btn" data-open-timeline="${e.id}">Abrir cronograma</button></div><div class="timeline-list">${tl.slice(0,5).map(x=>`<div><b>${x.time}</b><span>${x.title}</span><em>${x.owner}</em></div>`).join('')}</div></div><div class="panel"><div class="panel-head"><h3>Próximas ações</h3><button class="link-btn" data-open-checklist="${e.id}">Abrir checklist</button></div><div class="attention-list">${ck.filter(x=>!x.done).slice(0,4).map(x=>`<div class="list-row"><span class="status-dot ${x.critical?'danger':'warn'}"></span><div><b>${x.title}</b><small>${x.group} • ${x.owner}</small></div><strong>${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')}</strong></div>`).join('')}</div></div></section>`}

function clientsView(){const list=getClients();return `<div class="section-title"><div><span class="eyebrow">CRM DE CLIENTES</span><h3>Clientes & contratantes</h3><p>Cadastre pessoas, casais e empresas com histórico, eventos, documentos e contatos centralizados.</p></div><button class="btn btn-primary" data-create="client">＋ Novo cliente</button></div><section class="metrics"><article class="metric-card"><small>Clientes ativos</small><strong>${list.length}</strong><span class="metric-meta">Base única para contratos e eventos</span>${spark([24,32,44,58,68,78])}</article><article class="metric-card"><small>Eventos vinculados</small><strong>${list.reduce((a,x)=>a+Number(x.events||0),0)}</strong><span class="metric-meta">Relacionamento por projeto</span>${spark([18,26,38,50,62,72],true)}</article><article class="metric-card"><small>Perfis PF</small><strong>${list.filter(x=>x.type!=='Empresa').length}</strong><span class="metric-meta">Casais, famílias e pessoas</span>${spark()}</article><article class="metric-card"><small>Perfis PJ</small><strong>${list.filter(x=>x.type==='Empresa').length}</strong><span class="metric-meta">Corporativos e parceiros</span>${spark([30,36,42,52,58,66],true)}</article></section><div class="toolbar"><input id="clientsSearch" class="search-input" placeholder="Buscar cliente, telefone, e-mail..."><button class="filter-chip active" data-client-filter="Todos">Todos</button><button class="filter-chip" data-client-filter="Pessoa física">Pessoa física</button><button class="filter-chip" data-client-filter="Empresa">Empresa</button><span id="clientsCounter" class="toolbar-counter">${list.length} clientes</span></div><div class="client-crm-grid" id="clientsGrid">${list.map(c=>`<article class="crm-card" data-client-card data-client-type="${c.type}" data-client-search="${finEsc(`${c.name} ${c.secondary||''} ${c.phone||''} ${c.email||''} ${c.city||''} ${c.state||''}`.toLowerCase())}"><div class="crm-avatar">${c.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div class="crm-main"><span class="eyebrow">${c.type}</span><h4>${c.name}${c.secondary?` & ${c.secondary}`:''}</h4><p>${c.phone} • ${c.email}</p><div class="crm-meta"><span>${c.city}${c.state?` • ${c.state}`:''}</span><span>${c.events} evento(s)</span>${c.createdAt?`<span>Desde: ${finBR(c.createdAt)}</span>`:''}<span class="pill info">${c.status}</span></div><small>${c.notes||''}</small></div><div class="crm-actions"><button class="small-btn" data-open-client-history="${c.id}">Abrir histórico</button><button class="small-btn" data-edit="client::${c.id}">✏️ Editar</button><button class="small-btn" data-create="event">Novo evento</button></div></article>`).join('')}</div><div id="clientsEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum cliente encontrado.</b><small>Tente outro termo ou cadastre um novo cliente.</small></div>`}

function suppliersView(){const list=getSuppliers();const cats=[...new Set(list.map(x=>x.category))].filter(c=>!ajHidden('supplierCategories').has(c));return `<div class="section-title"><div><span class="eyebrow">REDE DE FORNECEDORES</span><h3>Parceiros que executam o projeto</h3><p>Contato, categoria, preço, avaliação, contratos e histórico de uso em eventos.</p></div><div class="event-head-actions"><button class="btn btn-secondary" id="supCompareBtn" disabled style="width:auto">⚖️ Comparar (0)</button><button class="copper-btn" data-print="suppliers">Gerar lista PDF</button><button class="btn btn-primary" data-create="supplier">＋ Novo fornecedor</button></div></div><section class="metrics"><article class="metric-card"><small>Fornecedores</small><strong>${list.length}</strong><span class="metric-meta">Base reutilizável</span>${spark()}</article><article class="metric-card"><small>Homologados</small><strong>${list.filter(x=>x.status==='Homologado'||x.status==='Preferencial').length}</strong><span class="metric-meta">Prontos para contratação</span>${spark([28,38,48,58,68,80],true)}</article><article class="metric-card"><small>Categorias</small><strong>${cats.length}</strong><span class="metric-meta">Cobertura operacional</span>${spark([22,32,40,52,62,74])}</article><article class="metric-card"><small>Avaliação média</small><strong>${(list.reduce((a,x)=>a+Number(x.rating||0),0)/Math.max(1,list.length)).toFixed(1)}</strong><span class="metric-meta">Histórico demonstrativo</span>${spark([60,68,72,80,86,92],true)}</article></section><div class="toolbar"><input id="suppliersSearch" class="search-input" placeholder="Buscar fornecedor, serviço ou contato..."><button class="filter-chip active" data-supplier-filter="Todos">Todos</button>${cats.map(x=>`<button class="filter-chip" data-supplier-filter="${x}">${x}</button>`).join('')}<span id="suppliersCounter" class="toolbar-counter">${list.length} fornecedores</span></div><div class="supplier-grid" id="suppliersGrid">${list.map(s=>`<article class="supplier-card" data-supplier-card data-supplier-category="${s.category}" data-supplier-search="${finEsc(`${s.name} ${s.category} ${s.contact||''} ${s.phone||''} ${s.email||''}`.toLowerCase())}"><div class="supplier-head"><div class="supplier-icon">${s.category==='Buffet'?'🍽️':s.category.includes('DJ')?'🎧':s.category==='Decoração'?'🌿':s.category.includes('Foto')?'📷':s.category.includes('Bar')?'🍸':'⚙️'}</div><div><span class="eyebrow">${s.category}</span><h4>${s.name}</h4></div><span class="pill ${s.status==='Em avaliação'?'warn':'info'}">${s.status}</span></div><p>${s.notes}</p><label class="cmp-check"><input type="checkbox" data-cmp-sup="${s.id}"> Comparar</label><button class="small-btn" data-open-history="supplier::${s.id}" style="margin-top:6px">📈 Histórico de preço</button><div class="supplier-facts"><div><small>Contato</small><b>${s.contact}</b><span>${s.phone}</span></div>${s.createdAt?`<div><small>Desde</small><b>${finBR(s.createdAt)}</b></div>`:''}<div><small>Referência</small><b>${s.price}</b><span>${s.events} eventos</span></div><div><small>Avaliação</small><b>★ ${s.rating}</b><span>${s.email}</span></div></div><div class="project-actions"><button class="small-btn" data-whatsapp="${s.phone}" data-name="${s.name}">WhatsApp</button><button class="small-btn" data-edit="supplier::${s.id}">✏️ Editar</button><button class="small-btn" data-create="contract">Contrato</button></div></article>`).join('')}</div><div id="suppliersEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum fornecedor encontrado.</b><small>Ajuste a busca ou o filtro selecionado.</small></div>`}


function checklistView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],_sm=tastingSyncMissing(e.id),rows=getChecklist(e.id),done=rows.filter(x=>x.done).length,pct=rows.length?Math.round(done/rows.length*100):0;const groups=[...new Set(rows.map(x=>x.group))].sort((a,b)=>(b==='Degustação')-(a==='Degustação'));
 const critItems=rows.filter(x=>x.critical&&!x.done),openItems=rows.filter(x=>!x.done),doneItems=rows.filter(x=>x.done);
 const preview=list=>list.length?finEsc(list.slice(0,2).map(x=>x.title).join(', '))+(list.length>2?` +${list.length-2}`:''):'Nenhum';
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">CHECKLIST REAL</span><h3>${e.title}</h3><p>Itens obrigatórios, responsáveis, prazos e criticidade.</p></div><div class="event-head-actions"><button class="small-btn" data-share-checklist="${e.id}">📲 WhatsApp</button><button class="copper-btn" data-print="checklist" data-id="${e.id}">Checklist PDF</button><button class="btn btn-primary" data-create="checklist" data-event-id="${e.id}">＋ Novo item</button></div></div><section class="hero-grid compact"><div class="hero-card"><span class="eyebrow">PROGRESSO OPERACIONAL</span><h3>${pct}% concluído</h3><div class="progress"><i style="width:${pct}%"></i></div><p>${done} de ${rows.length} itens concluídos. ${critItems.length} itens críticos ainda abertos.</p><p style="margin-top:6px">Aprovação do cliente: <b data-score-summary data-eid="${e.id}">${approvalSummaryText(e.id)}</b></p></div><div class="panel"><div class="summary-list"><div><small>Críticos</small><b>${critItems.length}</b><span class="metric-meta" style="display:block;margin-top:4px">${preview(critItems)}</span></div><div><small>Em aberto</small><b>${openItems.length}</b><span class="metric-meta" style="display:block;margin-top:4px">${preview(openItems)}</span></div><div><small>Concluídos</small><b>${done}</b><span class="metric-meta" style="display:block;margin-top:4px">${preview(doneItems)}</span></div></div></div></section><div class="checklist-board">${groups.map(g=>`<section class="check-group"><div class="panel-head"><h3>${g}</h3><span class="pill">${rows.filter(x=>x.group===g).length}</span></div>${rows.filter(x=>x.group===g).map(x=>`<div style="display:flex;align-items:center;gap:8px"><label class="check-row ${x.done?'done':''}" style="flex:1"><input type="checkbox" data-checklist-toggle="${x.id}" ${x.done?'checked':''}><span class="custom-check"></span><div><b>${x.title}</b><small>${x.owner} • prazo ${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')}</small></div>${x.critical?'<span class="pill warn">Crítico</span>':''}</label><button class="small-btn" data-edit="checklist::${x.id}">✏️</button></div>${scoreScaleHTML(e.id,x.tastingId?'tasting':'checklist',x.tastingId||x.id)}`).join('')}</section>`).join('')}</div>`}

function timelineView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],rows=getTimeline(e.id).sort((a,b)=>a.time.localeCompare(b.time));return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">CRONOGRAMA DO DIA</span><h3>${e.title}</h3><p>Horários, responsáveis, locais e confirmação de cada marco operacional.</p></div><div class="event-head-actions"><button class="small-btn" data-share-timeline="${e.id}">📲 WhatsApp</button><button class="copper-btn" data-print="timeline" data-id="${e.id}">Cronograma PDF</button><button class="btn btn-primary" data-create="timeline" data-event-id="${e.id}">＋ Novo marco</button></div></div><section class="timeline-command"><div class="timeline-summary"><div><small>Primeiro acesso</small><b>${rows[0]?.time||'—'}</b></div><div><small>Abertura</small><b>${rows.find(x=>x.title.toLowerCase().includes('recep'))?.time||'—'}</b></div><div><small>Marcos</small><b>${rows.length}</b></div><div><small>Confirmados</small><b>${rows.filter(x=>x.status==='Confirmado').length}</b></div></div><div class="day-timeline">${rows.map(x=>`<article class="day-item ${x.status==='Confirmado'?'confirmed':''}"><div class="time-badge">${x.time}</div><div class="day-line"></div><div class="day-content"><div><span class="eyebrow">${x.location}</span><h4>${x.title}</h4><p>Responsável: ${x.owner}</p></div><button class="timeline-status" data-timeline-toggle="${x.id}">${x.status==='Confirmado'?'✓ Confirmado':'Confirmar'}</button><button class="small-btn" data-edit="timeline::${x.id}">✏️</button></div></article>`).join('')}</div></section>`}

function catalogView(){const list=getCatalog(),events=getEvents();const cats=[...new Set(list.map(x=>x.category))].filter(c=>!ajHidden('catalogCategories').has(c));return `<div class="section-title"><div><span class="eyebrow">CATÁLOGO COMERCIAL</span><h3>Opções que viram proposta e operação</h3><p>Agora os filtros são executáveis: escolha uma categoria, abra o detalhe e vincule a opção ao evento.</p></div><button class="btn btn-primary" data-create="catalog"><span data-icon="plus-circle"></span> Novo item</button></div><section class="hero-grid compact"><div class="hero-card"><span class="eyebrow">VENDA + EXECUÇÃO</span><h3>Um catálogo que alimenta <span class="accent-text">apresentação, orçamento e produção.</span></h3><p>Clique em uma categoria para filtrar. Abra o item para ver detalhes, selecionar o evento e registrar a escolha.</p></div><div class="panel"><div class="summary-list"><div><small>Itens</small><b>${list.length}</b></div><div><small>Categorias</small><b>${cats.length}</b></div><div><small>Fornecedores vinculados</small><b>${new Set(list.map(x=>x.supplier)).size}</b></div></div></div></section><div class="toolbar catalog-toolbar"><button class="filter-chip active" data-catalog-filter="Todos">Todos</button>${cats.map(c=>`<button class="filter-chip" data-catalog-filter="${c}">${c}</button>`).join('')}<span id="catalogFilterCount" class="toolbar-counter">${list.length} itens</span></div><div class="catalog-grid" id="catalogGrid">${list.map(item=>`<article class="catalog-card" data-catalog-category="${item.category}" data-catalog-id="${item.id}"><button class="catalog-visual ${item.image?'has-image':''}" data-catalog-open="${item.id}" ${item.image?`style="background-image:url('${item.image}')"`:''}><span>${item.category}</span><i data-icon="arrow-up-right"></i></button><div class="catalog-body"><span class="eyebrow">${item.supplier}</span><h4>${item.name}</h4><p>${item.description}</p><div class="catalog-tags">${(item.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div><div class="catalog-price"><strong>${money(item.price)}</strong><small>${item.unit}</small></div><div class="catalog-actions"><button class="small-btn" data-catalog-open="${item.id}"><span data-icon="eye"></span> Detalhes</button><button class="small-btn" data-edit="catalog::${item.id}">✏️ Editar</button><select class="catalog-event-select" data-catalog-event="${item.id}">${events.map(e=>`<option value="${e.id}">${e.title}</option>`).join('')}</select><button class="btn btn-primary" data-add-catalog="${item.id}"><span data-icon="plus-circle"></span> Adicionar ao projeto</button></div></div></article>`).join('')}</div><div id="catalogEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum item nesta categoria.</b><small>Cadastre uma nova opção ou escolha outro filtro.</small></div>`}

function presentationsView(){const list=getPresentations();return `<div class="section-title"><div><span class="eyebrow">APRESENTAÇÕES & PROPOSTAS VISUAIS</span><h3>Apresente o projeto antes de executar</h3><p>Conceito, cardápio, decoração, DJ, imagens, PDFs, investimento e próximos passos.</p></div><button class="btn btn-primary" data-create="presentation">＋ Nova apresentação</button></div><section class="hero-grid"><div class="hero-card"><span class="eyebrow">PROJETO VISUAL</span><h3>Transforme briefing em uma <span style="color:var(--copper2)">apresentação que vende.</span></h3><p>Use o catálogo comercial, fotos, referências e PDFs para montar cenários completos.</p><div class="hero-actions"><button class="copper-btn" data-nav="catalogo">Abrir catálogo</button><button class="copper-btn" data-profile>Personalizar marca</button></div></div><div class="panel summary-card"><div class="summary-list"><div><small>1</small><b>Capa & conceito</b></div><div><small>2–6</small><b>Decoração • Menu • Música • Foto • Experiência</b></div><div><small>7–8</small><b>Investimento & próximos passos</b></div></div></div></section><div class="presentation-grid">${list.map(p=>`<article class="presentation-card"><div class="presentation-cover"><span>${p.theme}</span><strong>${p.title}</strong><small>${p.client}</small></div><div class="presentation-info"><div><small>Evento</small><b>${p.event}</b></div><div class="presentation-meta"><span>${p.sections} seções</span><span>${p.assets} arquivos</span><span class="pill">${p.status}</span></div><div class="project-actions"><button class="small-btn" data-open-presentation="${p.id}">Editar / apresentar</button><button class="small-btn" data-edit="presentation::${p.id}">✏️ Dados básicos</button><button class="small-btn" data-print="presentation" data-id="${p.id}">PDF</button></div></div></article>`).join('')}</div>`}
function presentationBuilderView(id){const p=getPresentations().find(x=>x.id===id)||getPresentations()[0];return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">EDITOR DE APRESENTAÇÃO</span><h3>${p.title}</h3><p>${p.event} • ${p.client}</p></div><div class="event-head-actions"><button class="copper-btn" data-nav="catalogo">Catálogo comercial</button><button class="copper-btn" data-print="presentation" data-id="${p.id}">Gerar PDF</button><button class="btn btn-primary" id="presentModeBtn">Modo apresentação</button></div></div><section class="presentation-editor"><aside class="presentation-sections"><h4>Seções</h4>${['Capa','Conceito & moodboard','Cardápio','Decoração','DJ & experiência sonora','Foto & vídeo','Investimento','Próximos passos'].map((x,i)=>`<button class="${i===0?'active':''}"><span>${String(i+1).padStart(2,'0')}</span>${x}</button>`).join('')}</aside><div class="presentation-canvas"><div class="deck-slide"><span class="eyebrow">PROJETO DE EXPERIÊNCIA</span><h2>${p.title}</h2><p>${p.theme}</p><div class="mood-grid" id="assetGallery"><div class="mood-placeholder">Adicionar imagem</div><div class="mood-placeholder">Adicionar referência</div><div class="mood-placeholder">Adicionar PDF</div></div><div class="deck-footer"><span>${p.client}</span><b>Projeto personalizado</b></div></div></div><aside class="presentation-tools"><h4>Conteúdo</h4><label class="upload-zone" for="assetUpload"><input id="assetUpload" type="file" accept="image/*,application/pdf" multiple><b>＋ Adicionar arquivos</b><span>Imagens e PDFs</span></label><button class="tool-row" data-nav="catalogo">▣ <span>Catálogo comercial</span></button><button class="tool-row">🎨 <span>Estilo visual</span></button><button class="tool-row">🍽️ <span>Cardápio</span></button><button class="tool-row">🎧 <span>DJ / música</span></button><button class="tool-row">🌿 <span>Decoração</span></button><button class="tool-row">💰 <span>Investimento</span></button><small class="tool-note">No protótipo, os arquivos ficam na sessão atual. Na versão com backend, irão para storage privado.</small></aside></section>`}

function presOfEvent(e){const nm=gsNorm(e.title);return getPresentations().filter(p=>p.eventId===e.id||(!p.eventId&&gsNorm(p.event)===nm))}
function presRelink(oe,novo){getPresentations().filter(p=>p.eventId===oe.id||(!p.eventId&&gsNorm(p.event)===gsNorm(oe.title))).forEach(p=>updateRecord('presentation',{id:p.id,event:novo,eventId:oe.id}))}
function eventPresentationView(eventId){
 const e=getEvents().find(x=>x.id===eventId);
 if(!e)return `<button class="link-btn" data-back>← Voltar</button><div class="panel"><p style="margin:0;color:#6b7a93">Evento não encontrado.</p></div>`;
 const list=presOfEvent(e),itens=getEventCatalog(e.id).map(id=>getCatalog().find(c=>c.id===id)).filter(Boolean);
 const card=p=>`<article class="presentation-card"><div class="presentation-cover"><span>${finEsc(p.theme)}</span><strong>${finEsc(p.title)}</strong><small>${finEsc(p.client)}</small></div><div class="presentation-info"><div><small>Evento</small><b>${finEsc(e.title)}</b></div><div class="presentation-meta"><span>${p.sections} seções</span><span>${p.assets} arquivos</span><span class="pill">${finEsc(p.status)}</span></div><div class="project-actions"><button class="small-btn" data-open-presentation="${p.id}">Editar / apresentar</button><button class="small-btn" data-edit="presentation::${p.id}">✏️ Dados básicos</button><button class="small-btn" data-print="presentation" data-id="${p.id}">PDF</button></div></div></article>`;
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">APRESENTAÇÃO DO EVENTO</span><h3>${finEsc(e.title)}</h3><p>${finEsc(e.client)} • ${finBR(e.date)} • ${finEsc(e.venue)}</p></div></div>${list.length?`<div class="presentation-grid">${list.map(card).join('')}</div>`:`<div class="panel"><div class="panel-head"><h3>Este evento ainda não tem apresentação</h3></div><p style="color:#6b7a93;margin:0 0 12px">Crie a apresentação deste evento — ela já nasce com o nome do evento e do cliente.</p><button class="btn btn-primary" data-create-event-pres="${e.id}">＋ Criar apresentação deste evento</button></div>`}<div class="panel"><div class="panel-head"><h3>Itens escolhidos para este evento</h3></div>${itens.length?`<div class="summary-list">${itens.map(c=>`<div><small>${finEsc(c.category)}</small><b>${finEsc(c.name)}</b></div>`).join('')}</div>`:'<p style="color:#6b7a93;margin:0">Nenhum item do catálogo escolhido ainda. Escolha os itens no Catálogo comercial.</p>'}<div class="event-head-actions" style="margin-top:12px"><button class="copper-btn" data-open-budget="${e.id}">💰 Orçamento PDF</button></div></div>`;
}
function createEventPresentation(eventId){
 const e=getEvents().find(x=>x.id===eventId);if(!e)return;
 try{if(typeof planWriteBlocked==='function'&&planWriteBlocked('r1_extra_presentations')){planNotifyReadOnly();return}}catch(err){}
 const p=applyTypeDefaults('presentation',{id:'pr-'+Date.now(),title:'Projeto de Experiência • '+e.title,event:e.title,eventId:e.id,client:e.client||'',theme:'Contemporâneo elegante',notes:''},true);
 saveExtra('r1_extra_presentations',p);toast('Apresentação criada para este evento.');currentScreenRebuild()();
}
function openEventFinance(id){finEventScope=id;openSubView('Financeiro do evento','EVENTOS & EXPERIÊNCIAS',()=>finView('Eventos'),'financeiro')}
const getTastings=eventId=>{const rows=merge([],'r1_extra_tastings');return eventId?rows.filter(x=>x.eventId===eventId):rows};
function tastingKindShort(k){k=String(k||'');return /bebida/i.test(k)?'Bebidas':/doce/i.test(k)?'Doces e bolo':/outro/i.test(k)?'Outro':'Cardápio'}
function tastingSummary(eid){const l=getTastings(eid);if(!l.length)return 'Nenhuma agendada';const ok=l.filter(x=>x.approved==='Sim').length,no=l.filter(x=>x.approved==='Não').length;return `${l.length} agendada(s) • ${ok} aprovada(s)${no?` • ${no} reprovada(s)`:''}`}
function tastingFileHTML(t){const f=String(t.file||'');if(!/^data:(image\/(png|jpe?g|webp|gif)|application\/pdf);base64,[A-Za-z0-9+\/=]+$/.test(f))return '';const nm=finEsc(t.fileName||(f.startsWith('data:application/pdf')?'degustacao.pdf':'degustacao.jpg'));return f.startsWith('data:image/')?`<a class="tasting-file" href="${f}" download="${nm}"><img src="${f}" alt="Arquivo da degustação"><span>⬇ Baixar imagem</span></a>`:`<a class="small-btn tasting-file-pdf" href="${f}" download="${nm}">📎 Baixar PDF • ${nm}</a>`}
// ---- Aprovação do cliente (0 a 10) ----
const SCORE_KEY='r1_client_scores';
const scoreKey=(eid,kind,id)=>`${eid}|${kind}|${id}`;
const getScore=(eid,kind,id)=>{const v=readJSON(SCORE_KEY,{})[scoreKey(eid,kind,id)];return Number.isInteger(v)&&v>=0&&v<=10?v:null};
function setScore(eid,kind,id,val){const m=readJSON(SCORE_KEY,{}),k=scoreKey(eid,kind,id);if(val===null||val===undefined)delete m[k];else m[k]=val;storage.setItem(SCORE_KEY,JSON.stringify(m))}
const fmtAvg=n=>(n===null||n===undefined)?'—':(Math.round(n*10)/10).toFixed(1).replace('.',',');
function approvalItems(eid){const out=[];
 getTastings(eid).slice().sort((a,b)=>`${a.date||'9999'} ${a.time||''}`.localeCompare(`${b.date||'9999'} ${b.time||''}`)).forEach(t=>out.push({kind:'tasting',id:t.id,group:'Degustações',title:`${tastingKindShort(t.kind)} • ${t.supplier||'fornecedor a definir'}`,sub:[t.menu,t.date?finBR(t.date)+(t.time?' '+t.time:''):''].filter(Boolean).join(' • ')}));
 getChecklist(eid).filter(c=>!c.tastingId).forEach(c=>out.push({kind:'checklist',id:c.id,group:`Checklist • ${c.group}`,title:c.title,sub:c.owner||''}));
 const cat=getCatalog();getEventCatalog(eid).map(id=>cat.find(c=>c.id===id)).filter(Boolean).forEach(c=>out.push({kind:'catalog',id:c.id,group:'Itens escolhidos (catálogo)',title:c.name,sub:c.category||''}));
 getTimeline(eid).forEach(t=>out.push({kind:'timeline',id:t.id,group:'Cronograma do dia',title:t.title,sub:[t.time,t.location].filter(Boolean).join(' • ')}));
 return out.map(i=>({...i,score:getScore(eid,i.kind,i.id)}))}
function approvalStats(eid){const l=approvalItems(eid),r=l.filter(x=>x.score!==null);return{total:l.length,rated:r.length,avg:r.length?r.reduce((a,x)=>a+x.score,0)/r.length:null,low:r.filter(x=>x.score<=5).length}}
function approvalSummaryText(eid){const s=approvalStats(eid);return s.total===0?'Sem itens ainda':(s.rated===0?`Nenhum avaliado de ${s.total}`:`média ${fmtAvg(s.avg)}/10 • ${s.rated} de ${s.total} avaliados`)}
function scoreScaleHTML(eid,kind,id){const v=getScore(eid,kind,id);return `<div class="score-scale" data-score-scale><div class="score-head"><span>Aprovação do cliente</span><b data-score-text>${v===null?'não avaliado':v+'/10'}</b></div><div class="score-btns" role="group" aria-label="Aprovação do cliente de 0 a 10">${Array.from({length:11},(_,n)=>`<button type="button" class="score-btn s${n}${v===n?' on':''}" data-score-set data-eid="${eid}" data-kind="${kind}" data-id="${finEsc(id)}" data-val="${n}" aria-pressed="${v===n}">${n}</button>`).join('')}</div></div>`}
function groupPillText(arr){const r=arr.filter(v=>v!==null);return r.length?`média ${fmtAvg(r.reduce((a,b)=>a+b,0)/r.length)} • ${r.length}/${arr.length}`:`0/${arr.length} avaliados`}
function scoreRefreshSummaries(eid){$$('[data-score-summary]').forEach(el=>{el.textContent=approvalSummaryText(el.dataset.eid||eid)});const m=$('#approvalMetrics');if(m){const s=approvalStats(m.dataset.eid);m.querySelector('[data-score-avg]').textContent=fmtAvg(s.avg);m.querySelector('[data-score-rated]').textContent=`${s.rated}/${s.total}`;m.querySelector('[data-score-low]').textContent=s.low}
 $$('[data-score-group]').forEach(p=>{const its=$$(`.approval-item[data-group="${p.dataset.scoreGroup}"]`);p.textContent=groupPillText(its.map(i=>i.dataset.score===''?null:Number(i.dataset.score)))})}
function scoreTap(b){const eid=b.dataset.eid,kind=b.dataset.kind,id=b.dataset.id,n=Number(b.dataset.val),cur=getScore(eid,kind,id);setScore(eid,kind,id,cur===n?null:n);const real=getScore(eid,kind,id);
 const box=b.closest('[data-score-scale]');if(box){box.querySelectorAll('.score-btn').forEach(x=>{const on=real!==null&&Number(x.dataset.val)===real;x.classList.toggle('on',on);x.setAttribute('aria-pressed',String(on))});box.querySelector('[data-score-text]').textContent=real===null?'não avaliado':real+'/10'}
 const it=b.closest('.approval-item');if(it)it.dataset.score=real===null?'':String(real);scoreRefreshSummaries(eid)}
function approvalView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],items=approvalItems(e.id),st=approvalStats(e.id),groups=[];
 items.forEach(i=>{let g=groups.find(x=>x.name===i.group);if(!g){g={name:i.group,items:[]};groups.push(g)}g.items.push(i)});
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">APROVAÇÃO DO CLIENTE</span><h3>${finEsc(e.title)}</h3><p>Nota de 0 a 10 que o cliente deu a cada item do evento: degustações, checklist, itens escolhidos e cronograma.</p></div><div class="event-head-actions"><button class="copper-btn" data-print="event" data-id="${e.id}">Resumo PDF</button></div></div><section class="metrics" id="approvalMetrics" data-eid="${e.id}"><article class="metric-card"><small>Média geral</small><strong data-score-avg>${fmtAvg(st.avg)}</strong><span class="metric-meta">de 0 a 10</span></article><article class="metric-card"><small>Avaliados</small><strong data-score-rated>${st.rated}/${st.total}</strong><span class="metric-meta">itens com nota</span></article><article class="metric-card"><small>Pedem atenção</small><strong data-score-low>${st.low}</strong><span class="metric-meta">nota 5 ou menos</span></article></section><div class="panel" data-approval-intro style="margin-bottom:14px;font-size:12.5px;color:#4a5568"><b>Como usar:</b> toque na nota (0 = não aprovou, 10 = amou). Tocar na mesma nota de novo limpa. <button type="button" class="small-btn" data-approval-filter style="margin-left:8px">Mostrar só os não avaliados</button></div><div class="approval-board">${groups.length?groups.map((g,gi)=>`<section class="panel approval-group"><div class="panel-head"><h3>${finEsc(g.name)}</h3><span class="pill" data-score-group="g${gi}">${groupPillText(g.items.map(i=>i.score))}</span></div>${g.items.map(i=>`<div class="approval-item" data-group="g${gi}" data-score="${i.score===null?'':i.score}"><div class="approval-title"><b>${finEsc(i.title)}</b>${i.sub?`<small>${finEsc(i.sub)}</small>`:''}</div>${scoreScaleHTML(e.id,i.kind,i.id)}</div>`).join('')}</section>`).join(''):'<div class="panel"><p style="margin:0;color:#6b7a93">Ainda não há itens neste evento. Cadastre degustações, itens de checklist ou escolha itens no Catálogo comercial.</p></div>'}</div>`}
function eventSummaryExtraHTML(e){const T=getTastings(e.id).slice().sort((a,b)=>`${a.date||'9999'} ${a.time||''}`.localeCompare(`${b.date||'9999'} ${b.time||''}`)),its=approvalItems(e.id);let h='';
 if(T.length)h+=`<h3>Degustações</h3><table><tr><th>Data</th><th>Tipo</th><th>Fornecedor</th><th>Cardápio / itens</th><th>Aprovada</th><th>Cliente (0–10)</th></tr>${T.map(t=>{const sc=getScore(e.id,'tasting',t.id);return `<tr><td>${t.date?finBR(t.date):'—'}${t.time?' '+finEsc(t.time):''}</td><td>${finEsc(t.kind||'Cardápio / buffet')}</td><td>${finEsc(t.supplier)||'—'}</td><td>${finEsc(t.menu)||'—'}</td><td>${t.approved==='Sim'?'Sim':t.approved==='Não'?'Não':'Pendente'}</td><td>${sc===null?'—':sc+'/10'}</td></tr>`}).join('')}</table>`;
 h+=`<h3>Aprovação do cliente (0 a 10)</h3><p>${approvalSummaryText(e.id)}.</p>`;
 if(its.length)h+=`<table><tr><th>Grupo</th><th>Item</th><th>Nota</th></tr>${its.map(i=>`<tr><td>${finEsc(i.group)}</td><td>${finEsc(i.title)}</td><td>${i.score===null?'—':i.score+'/10'}</td></tr>`).join('')}</table>`;
 return h}
async function compressImageFile(file,maxPx=1600,q=0.72){if(!file||!/^image\/(jpe?g|png|webp)$/.test(file.type)||typeof createImageBitmap!=='function'||typeof document==='undefined')return file;try{const bmp=await createImageBitmap(file),r=Math.min(1,maxPx/Math.max(bmp.width,bmp.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(bmp.width*r));c.height=Math.max(1,Math.round(bmp.height*r));const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(bmp,0,0,c.width,c.height);const blob=await new Promise(res=>c.toBlob(res,'image/jpeg',q));return(blob&&blob.size<file.size)?new File([blob],file.name.replace(/\.[^.]+$/,'')+'.jpg',{type:'image/jpeg'}):file}catch(err){return file}}
// ---- Degustação ↔ checklist ----
function tastingSyncChecklist(tid){const t=getTastings().find(x=>x.id===tid),cid=`chk-tast-${tid}`,extras=readJSON('r1_extra_checklist',[]),idx=extras.findIndex(x=>x.id===cid),ov=readJSON('r1_checklist_overrides',{});
 if(!t){if(idx>=0){extras.splice(idx,1);storage.setItem('r1_extra_checklist',JSON.stringify(extras))}if(ov[cid]){delete ov[cid];storage.setItem('r1_checklist_overrides',JSON.stringify(ov))}return}
 const ev=getEvents().find(x=>x.id===t.eventId),item={id:cid,eventId:t.eventId,group:'Degustação',title:`${tastingKindShort(t.kind)} • ${String(t.supplier||'fornecedor a definir').replace(/[<>]/g,'')}${t.menu?' — '+String(t.menu).replace(/[<>]/g,''):''}`,owner:(ev&&ev.manager)||'Equipe',due:t.date||(ev&&ev.date)||finLocalISO(),done:t.approved==='Sim',critical:false,tastingId:t.id};
 if(idx>=0)extras[idx]={...extras[idx],...item};else extras.push(item);storage.setItem('r1_extra_checklist',JSON.stringify(extras));
 ov[cid]={...(ov[cid]||{}),done:item.done};storage.setItem('r1_checklist_overrides',JSON.stringify(ov))}
function tastingView(eventId){
 const e=getEvents().find(x=>x.id===eventId)||getEvents()[0];
 const list=getTastings(e.id).slice().sort((a,b)=>`${a.date||'9999'} ${a.time||''}`.localeCompare(`${b.date||'9999'} ${b.time||''}`));
 const kinds={};list.forEach(t=>{const k=tastingKindShort(t.kind);kinds[k]=(kinds[k]||0)+1});
 const card=t=>{const ap=t.approved||'Pendente',sim=ap==='Sim',nao=ap==='Não';return `<article class="panel tasting-card" data-tasting="${t.id}" data-approved="${finEsc(ap)}"><div class="panel-head"><h3>🍽️ ${t.date?finBR(t.date):'Sem data'}${t.time?` • ${finEsc(t.time)}`:''}</h3><span class="pill" style="${sim?'background:#eafbf1;color:#1f8a4c':nao?'background:#fdecec;color:#c0392b':''}">${sim?'✓ Aprovada':nao?'✕ Reprovada':'Pendente'}</span></div><p style="margin:0 0 8px"><span class="pill tasting-kind">${finEsc(tastingKindShort(t.kind))}</span></p><div class="summary-list"><div><small>Fornecedor</small><b>${finEsc(t.supplier)||'A definir'}</b></div><div><small>Cardápio / itens provados</small><b>${finEsc(t.menu)||'A definir'}</b></div></div>${t.notes?`<p class="tasting-notes">${finEsc(t.notes)}</p>`:''}${tastingFileHTML(t)}<div class="tasting-approve"><span>Aprovado?</span><button type="button" class="${sim?'on-sim':''}" data-tasting-approve="${t.id}" data-val="Sim" aria-pressed="${sim}">✓ Sim</button><button type="button" class="${nao?'on-nao':''}" data-tasting-approve="${t.id}" data-val="Não" aria-pressed="${nao}">✕ Não</button></div>${scoreScaleHTML(e.id,'tasting',t.id)}<div class="project-actions"><button class="small-btn" data-edit="tasting::${t.id}">✏️ Editar</button><button class="small-btn" data-tasting-del="${t.id}">🗑 Excluir</button></div></article>`};
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">DEGUSTAÇÕES DO EVENTO</span><h3>${finEsc(e.title)}</h3><p>Pode haver várias: cardápio com um fornecedor, bebidas com outro, doces e bolo… Cada uma com seu arquivo, aprovação e nota do cliente. ${tastingSummary(e.id)}.</p></div><div class="event-head-actions"><button class="copper-btn" data-create="tasting" data-event-id="${e.id}">＋ Nova degustação</button></div></div><div class="panel" data-tasting-legend style="margin-bottom:14px;font-size:12.5px;color:#4a5568"><b>Aprovado?</b> ✓ <b>Sim</b> libera o cardápio • ✕ <b>Não</b> sinaliza que precisa ajustar • tocar de novo volta para pendente. Cada degustação também entra no <b>checklist</b> (grupo “Degustação”) e é concluída quando você aprova.${Object.keys(kinds).length?`<div style="margin-top:6px">${Object.entries(kinds).map(([k,n])=>`<span class="pill" style="margin-right:6px">${finEsc(k)}: ${n}</span>`).join('')}</div>`:''}</div>${list.length?list.map(card).join(''):'<div class="panel"><p style="margin:0;color:#6b7a93">Nenhuma degustação agendada para este evento. Toque em “＋ Nova degustação” para marcar a prova do cardápio, das bebidas ou dos doces.</p></div>'}`;
}
function tastingSyncMissing(eid){try{if(typeof planWriteBlocked==='function'&&planWriteBlocked('r1_extra_checklist'))return;const have=new Set(getChecklist().filter(x=>x.tastingId).map(x=>x.tastingId));getTastings(eid).forEach(t=>{if(!have.has(t.id))tastingSyncChecklist(t.id)})}catch(e){}}
function tastingSetApproved(id,val){const t=getTastings().find(x=>x.id===id);if(!t)return;const novo=t.approved===val?'Pendente':val;updateRecord('tasting',{id,approved:novo});tastingSyncChecklist(id);toast(novo==='Sim'?'Degustação aprovada.':novo==='Não'?'Degustação reprovada.':'Degustação voltou a pendente.');currentScreenRebuild()()}
function tastingDelete(id){const t=getTastings().find(x=>x.id===id);storage.setItem('r1_extra_tastings',JSON.stringify(readJSON('r1_extra_tastings',[]).filter(x=>x.id!==id)));tastingSyncChecklist(id);if(t)setScore(t.eventId,'tasting',id,null);toast('Degustação excluída.');currentScreenRebuild()()}
function guestTables(eventId,current){const set=new Set([...getEventTables(eventId),...getGuests(eventId).map(g=>g.table).filter(Boolean)]);if(current)set.add(current);return [...set].sort((a,b)=>String(a).localeCompare(String(b),'pt-BR',{numeric:true}))}
function ensureEventTable(eventId,name){const nm=String(name||'').trim();if(!nm||!eventId)return;const tabs=getEventTables(eventId).slice();if(!tabs.some(t=>gsNorm(t)===gsNorm(nm))){tabs.push(nm);storage.setItem(`r1_event_tables_${eventId}`,JSON.stringify(tabs))}}
function tableOptionsHTML(tabs,current){return `<option value="">Sem mesa (deixar vazia)</option>${tabs.map(t=>`<option value="${finEsc(t)}" ${t===current?'selected':''}>${finEsc(t)}</option>`).join('')}<option value="__nova__">＋ Criar nova mesa…</option>`}
function tableChooserHTML(o){const tabs=guestTables(o.eventId,o.current),nome=o.name?` name="${o.name}"`:'',idAttr=o.id?` id="${o.id}"`:'';return `<div data-table-chooser><select${idAttr}${nome} data-table-select>${tableOptionsHTML(tabs,o.current)}</select><input type="text" ${o.name?`name="${o.name}__nova"`:`id="${o.id}Nova"`} data-table-new placeholder="Nome da nova mesa (ex.: Mesa ${tabs.length+1})" hidden style="margin-top:6px;width:100%"></div>`}
function tableChosenValue(box){const sel=box&&box.querySelector('[data-table-select]'),inp=box&&box.querySelector('[data-table-new]');if(!sel)return{ok:true,table:''};if(sel.value==='__nova__'){const nm=(inp.value||'').trim();if(!nm)return{ok:false,msg:'Digite o nome da nova mesa (ou escolha “Sem mesa”).',focus:inp};return{ok:true,table:nm}}return{ok:true,table:sel.value}}
function wireTableChoosers(scope){(scope||document).querySelectorAll('[data-table-chooser]').forEach(box=>{const sel=box.querySelector('[data-table-select]'),inp=box.querySelector('[data-table-new]');sel.onchange=()=>{const nova=sel.value==='__nova__';inp.hidden=!nova;if(nova)inp.focus();if(typeof box._onChange==='function')box._onChange()}})}
function giDefTable(){const sel=$('#giTable');if(!sel)return '';if(sel.value==='__nova__')return (($('#giTableNova')||{}).value||'').trim();return sel.value}
function guestsView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],rows=getGuests(e.id).slice().sort((a,b)=>a.name.localeCompare(b.name));
 const conf=rows.filter(x=>x.status==='Confirmado').length,pend=rows.filter(x=>x.status==='Pendente').length,rec=rows.filter(x=>x.status==='Recusado').length;
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">LISTA DE CONVIDADOS</span><h3>${e.title}</h3><p>Confirmação de presença, telefone e mesa de cada convidado.</p></div><div class="event-head-actions"><button class="small-btn" data-share-guests="${e.id}">📲 WhatsApp</button><button class="btn btn-primary" data-create="guest" data-event-id="${e.id}">＋ Novo convidado</button></div></div><section class="metrics"><article class="metric-card"><small>Confirmados</small><strong>${conf}</strong><span class="metric-meta">de ${rows.length} na lista • ${e.guests||0} previstos</span>${spark([20,30,42,54,66,78])}</article><article class="metric-card"><small>Pendentes</small><strong>${pend}</strong><span class="metric-meta">aguardando resposta</span>${spark([44,38,34,30,26,22],true)}</article><article class="metric-card"><small>Recusados</small><strong>${rec}</strong><span class="metric-meta">não comparecerão</span>${spark([12,12,12,12,12,12])}</article></section><div class="panel"><div class="panel-head"><h3>Adicionar vários de uma vez</h3></div><p style="color:#6c7887;margin:0 0 10px">Cole uma lista de nomes, um por linha — todos entram como "Pendente".</p><textarea id="guestBulkInput" rows="3" placeholder="Ex.:
Maria Silva
João Pereira" style="width:100%;resize:vertical"></textarea><div style="margin-top:10px"><label style="font-weight:700;font-size:13px;display:block;margin-bottom:4px">Mesa dos convidados <span style="font-weight:400;color:#6c7887">(opcional)</span></label>${tableChooserHTML({id:'guestBulkTable',eventId:e.id})}<small style="display:block;color:#6c7887;font-size:11.5px;line-height:1.5;margin-top:4px">Todos os nomes entram nessa mesa. Deixe “Sem mesa” para organizar depois no Mapa de mesas.</small></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-secondary" id="guestBulkAdd" data-event-id="${e.id}">＋ Adicionar à lista</button><button class="btn btn-secondary" data-guest-import="${e.id}">📥 Importar de planilha</button></div></div><input type="text" id="guestSearch" placeholder="Buscar convidado por nome ou telefone..." style="margin:16px 0 10px;width:100%"/><div class="guest-list">${rows.length?rows.map(g=>`<article class="guest-row" data-guest-row data-guest-search="${finEsc(`${g.name} ${g.phone||''}`.toLowerCase())}"><div class="guest-main"><b>${g.name}</b><small>${g.phone||'sem telefone'}${g.table?' • '+g.table:''}</small></div><div class="guest-status-group"><button class="guest-status-btn ${g.status==='Confirmado'?'active confirmado':''}" data-guest-set="${g.id}" data-status="Confirmado" title="Confirmado">✓ Confirmado</button><button class="guest-status-btn ${g.status==='Pendente'?'active pendente':''}" data-guest-set="${g.id}" data-status="Pendente" title="Pendente">? Pendente</button><button class="guest-status-btn ${g.status==='Recusado'?'active recusado':''}" data-guest-set="${g.id}" data-status="Recusado" title="Recusado">✕ Recusado</button></div><button class="small-btn" data-edit="guest::${g.id}">✏️</button></article>`).join(''):'<p style="color:#6c7887">Nenhum convidado cadastrado ainda. Cole uma lista acima ou use "Novo convidado".</p>'}</div>`}
const getEventTables=eventId=>readJSON(`r1_event_tables_${eventId}`,[]);
function createEventTables(eid,n){const tabs=getEventTables(eid).slice(),have=new Set(tabs.map(t=>gsNorm(t)));for(let i=1;i<=n;i++){const nm='Mesa '+i;if(!have.has(gsNorm(nm))){tabs.push(nm);have.add(gsNorm(nm))}}storage.setItem(`r1_event_tables_${eid}`,JSON.stringify(tabs));return tabs.length}
const defaultEventTypes=[{name:'Casamento',visible:true},{name:'Debutante',visible:true},{name:'Corporativo',visible:true},{name:'Aniversário',visible:false},{name:'Formatura',visible:false},{name:'Outro',visible:false}];
const getEventTypes=()=>{const saved=readJSON('r1_event_types',null);return (saved&&saved.length)?saved:defaultEventTypes};
const saveEventTypes=list=>storage.setItem('r1_event_types',JSON.stringify(list));
const defaultSupplierCategories=['Buffet','DJ & Música','Decoração','Foto & Vídeo','Som & Luz','Bar & Bebidas','Espaço','Segurança'];
const getSupplierCategories=()=>{const saved=readJSON('r1_supplier_categories',null);return (saved&&saved.length)?saved:defaultSupplierCategories};
const saveSupplierCategories=list=>storage.setItem('r1_supplier_categories',JSON.stringify(list));
const defaultCatalogCategories=['Cardápio','Decoração','DJ & Música','Foto & Vídeo','Bar & Bebidas','Som & Luz'];
const getCatalogCategories=()=>{const saved=readJSON('r1_catalog_categories',null);return (saved&&saved.length)?saved:defaultCatalogCategories};
const saveCatalogCategories=list=>storage.setItem('r1_catalog_categories',JSON.stringify(list));
const defaultAppointmentTypes=['Compromisso','Pessoal','Planejamento','Evento','Cliente','Fornecedor','Financeiro'];
const getAppointmentTypes=()=>{const saved=readJSON('r1_appointment_types',null);return (saved&&saved.length)?saved:defaultAppointmentTypes};
const saveAppointmentTypes=list=>storage.setItem('r1_appointment_types',JSON.stringify(list));
const MANAGED_LIST_FIELDS={
 eventTypeSelect:{get:getEventTypes,save:saveEventTypes,isObj:true},
 supplierCategorySelect:{get:()=>getSupplierCategories(),save:v=>saveSupplierCategories(v),isObj:false},
 catalogCategorySelect:{get:()=>getCatalogCategories(),save:v=>saveCatalogCategories(v),isObj:false},
 appointmentTypeSelect:{get:()=>getAppointmentTypes(),save:v=>saveAppointmentTypes(v),isObj:false}
};
MANAGED_LIST_FIELDS.grouppicker={get:()=>getChecklistGroups(),save:v=>saveChecklistGroups(v),isObj:false};
function seatingView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],guests=getGuests(e.id);
 const tables=[...new Set([...getEventTables(e.id),...guests.map(g=>g.table).filter(Boolean)])].sort((a,b)=>String(a).localeCompare(String(b),'pt-BR',{numeric:true}));
 const semMesa=guests.filter(g=>!g.table);
 const chip=g=>`<div class="seat-chip" draggable="true" data-guest-id="${g.id}"><span class="seat-grip" data-grip title="Segure e arraste">⠿</span><span class="seat-name">${g.name}</span><select data-seat-select="${g.id}"><option value="">Sem mesa</option>${tables.map(t=>`<option value="${t}" ${g.table===t?'selected':''}>${t}</option>`).join('')}</select></div>`;
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">MAPA DE MESAS</span><h3>${e.title}</h3><p>No celular, segure o ⠿ ao lado do nome e arraste até a mesa. No computador, arraste o card inteiro. Ou use o menu de cada convidado.</p></div></div><div class="panel" style="margin-bottom:14px;display:flex;gap:8px;flex-wrap:wrap;align-items:center"><input type="text" id="seatNewTableName" placeholder="Nome da nova mesa (ex.: Mesa 7)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="seatAddTable" data-seating-event="${e.id}" style="width:auto">＋ Adicionar mesa</button></div><div class="seating-board" data-seating-event="${e.id}"><div class="seating-table seating-pool" data-table-zone=""><h4>Sem mesa <span>${semMesa.length}</span></h4><div class="seating-chips">${semMesa.map(chip).join('')||'<p class="seating-empty">Nenhum convidado sem mesa.</p>'}</div></div>${tables.map(t=>`<div class="seating-table" data-table-zone="${t}"><h4>${t} <span>${guests.filter(g=>g.table===t).length}</span></h4><div class="seating-chips">${guests.filter(g=>g.table===t).map(chip).join('')||'<p class="seating-empty">Arraste alguém aqui.</p>'}</div></div>`).join('')}</div>`}
function clientFinanceSummaryView(clientId){const client=getClients().find(x=>x.id===clientId);if(!client)return'<p>Cliente não encontrado.</p>';
 const events=getEvents().filter(e=>String(e.client).toLowerCase().includes(client.name.toLowerCase())||(client.secondary&&String(e.client).toLowerCase().includes(String(client.secondary).toLowerCase())));
 const rows=getFinance().filter(f=>events.some(e=>e.id===f.eventId)).slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)));
 const receitas=rows.filter(x=>x.type==='Receita').reduce((a,x)=>a+Number(x.value||0),0),despesas=rows.filter(x=>x.type==='Despesa').reduce((a,x)=>a+Number(x.value||0),0);
 return `<button class="link-btn" data-back>← Voltar ao cliente</button><div class="section-title"><div><span class="eyebrow">RESUMO FINANCEIRO</span><h3>${client.name}${client.secondary?` & ${client.secondary}`:''}</h3><p>Receitas e despesas ligadas aos eventos deste cliente.</p></div></div><section class="metrics"><article class="metric-card"><small>Receitas</small><strong>${money(receitas)}</strong></article><article class="metric-card"><small>Despesas</small><strong>${money(despesas)}</strong></article><article class="metric-card"><small>Saldo</small><strong>${money(receitas-despesas)}</strong></article></section><section class="panel"><div class="panel-head"><h3>Lançamentos</h3></div>${rows.length?rows.map(f=>`<div class="list-row"><span class="status-dot ${f.type==='Receita'?'success':'warn'}"></span><div><b>${f.description||f.category||f.type}</b><small>${new Date(f.date+'T12:00:00').toLocaleDateString('pt-BR')} • ${f.status}</small></div><b style="color:${f.type==='Receita'?'#1f9d55':'#c0392b'}">${f.type==='Despesa'?'-':''}${money(f.value)}</b></div>`).join(''):'<p style="color:#6c7887">Nenhum lançamento financeiro ligado a este cliente ainda.</p>'}</section>`}
function contractsSummaryView(kind){const list=getContracts();let filtered,title,desc;
 if(kind==='enviados'){filtered=list.filter(x=>x.status==='Enviado');title='Contratos enviados';desc='Aguardando retorno do cliente ou fornecedor.'}
 else if(kind==='valor'){filtered=list;title='Valor documentado';desc='Soma de todos os contratos registrados.'}
 else{filtered=list;title='Todos os contratos';desc='Resumo de todos os contratos centralizados por cliente.'}
 const total=filtered.reduce((a,x)=>a+Number(x.value||0),0);
 return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">RESUMO</span><h3>${title}</h3><p>${desc}</p></div></div><section class="metrics"><article class="metric-card"><small>Quantidade</small><strong>${filtered.length}</strong></article><article class="metric-card"><small>Valor total</small><strong>${money(total)}</strong></article></section><div class="contract-list">${filtered.length?filtered.map(c=>`<article class="contract-card"><div class="doc-icon">PDF</div><div class="contract-main"><span class="eyebrow">${c.number}</span><h4>${c.title}</h4><p>${c.event} • ${c.client}</p><div class="contract-meta"><span>${money(c.value)}</span><span>Atualizado ${c.updated}</span><span class="pill ${c.status==='Rascunho'?'warn':''}">${c.status}</span></div></div><div class="contract-actions"><button class="small-btn" data-open-contract="${c.id}">Abrir</button><button class="small-btn" data-edit="contract::${c.id}">✏️ Editar</button></div></article>`).join(''):'<p style="color:#6c7887">Nenhum contrato aqui ainda.</p>'}</div>`}
function contractsView(){const list=getContracts();return `<div class="section-title"><div><span class="eyebrow">CONTRATOS & DOCUMENTOS</span><h3>Documentos com identidade própria</h3><p>Cadastre sua empresa e logo uma vez. Gere contratos, propostas, checklists, cronogramas e relatórios em PDF personalizados.</p></div><button class="btn btn-primary" data-create="contract">＋ Novo contrato</button></div><section class="metrics"><article class="metric-card" data-open-contracts-summary="total" style="cursor:pointer"><small>Contratos</small><strong>${list.length}</strong><span class="metric-meta">Centralizados por cliente</span>${spark()}</article><article class="metric-card" data-open-contracts-summary="enviados" style="cursor:pointer"><small>Enviados</small><strong>${list.filter(x=>x.status==='Enviado').length}</strong><span class="metric-meta">Aguardando retorno</span>${spark([22,28,36,48,54,62],true)}</article><article class="metric-card" data-open-contracts-summary="valor" style="cursor:pointer"><small>Valor documentado</small><strong>${money(list.reduce((a,x)=>a+x.value,0))}</strong><span class="metric-meta">Demonstrativo</span>${spark([30,38,46,56,68,82])}</article><article class="metric-card"><small>Templates</small><strong>10+</strong><span class="metric-meta">Eventos • Serviços • Projetos</span>${spark([28,34,42,50,58,66],true)}</article></section><div class="contract-list">${list.map(c=>`<article class="contract-card"><div class="doc-icon">PDF</div><div class="contract-main"><span class="eyebrow">${c.number}</span><h4>${c.title}</h4><p>${c.event} • ${c.client}</p><div class="contract-meta"><span>${money(c.value)}</span><span>Atualizado ${c.updated}</span><span class="pill ${c.status==='Rascunho'?'warn':''}">${c.status}</span></div></div><div class="contract-actions"><button class="small-btn" data-open-contract="${c.id}">Abrir</button><button class="small-btn" data-edit="contract::${c.id}">✏️ Editar</button><button class="small-btn" data-print="contract" data-id="${c.id}">Gerar PDF</button></div></article>`).join('')}</div>`}
function contractDetailView(id){const c=getContracts().find(x=>x.id===id)||getContracts()[0];return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">CONTRATO ${c.number}</span><h3>${c.title}</h3><p>${c.event} • ${c.client}</p></div><button class="btn btn-primary" data-print="contract" data-id="${c.id}">Gerar PDF</button></div><section class="two-col"><div class="panel contract-preview"><span class="eyebrow">PRÉVIA</span><h2>CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h2><p>Entre a CONTRATADA e <b>${c.client}</b>, referente a <b>${c.event}</b>.</p><h4>1. Objeto</h4><p>Planejamento, produção, coordenação e execução dos serviços descritos no escopo.</p><h4>2. Investimento</h4><p>Valor total: <b>${money(c.value)}</b>.</p><h4>3. Responsabilidades</h4><p>Prazos de aprovação, pagamentos e obrigações previstos no contrato.</p></div><div class="panel"><div class="summary-list"><div><small>Status</small><b>${c.status}</b></div><div><small>Valor</small><b>${money(c.value)}</b></div><div><small>Personalização</small><b>Logo + dados cadastrais</b></div></div><div class="quick-grid" style="margin-top:14px"><button data-profile>🏢<span>Dados da empresa</span></button><button data-print="contract" data-id="${c.id}">📄<span>Gerar PDF</span></button></div></div></section>`}

function strategyView(){const goals=[...getStrategicGoals()].sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0));const latest=goals[0];const legacy=[{title:'Plataforma universal',copy:'Produto multi-segmento com workspaces e módulos ativáveis.',progress:48,status:'Q4/2026'},{title:'Workspace para eventos',copy:'Clientes, fornecedores, catálogo, financeiro, checklist e cronograma.',progress:62,status:'Validação'},{title:'Segurança comercial',copy:'RLS, MFA, criptografia, logs e segregação por organização.',progress:32,status:'Prioridade alta'}];return `<div class="section-title"><div><span class="eyebrow">ESTRATÉGIA</span><h3>Direção e execução</h3><p>Objetivos, OKRs, matriz de prioridade e decisões.</p></div><button class="btn btn-primary" data-create="goal">＋ Novo objetivo</button></div><div class="strategy-grid">${legacy.map(x=>`<article class="strategy-card"><h4>${x.title}</h4><p>${x.copy}</p><div class="meter"><i style="width:${x.progress}%"></i></div><footer><span>${x.progress}% executado</span><span>${x.status}</span></footer></article>`).join('')}</div><section class="panel strategic-goals-panel"><div class="panel-head"><h3>Objetivos estratégicos registrados</h3><span class="pill info">${goals.length} objetivo(s)</span></div>${latest?`<div class="list-row" style="margin-bottom:12px"><span class="status-dot info"></span><div><b>Último registro: ${latest.title}</b><small>${latest.area||'Estratégia'} • ${latest.createdAt?'salvo neste navegador':'objetivo base do sistema'}</small></div><strong>${latest.target||'Meta em definição'}</strong></div>`:''}<div class="strategic-goals-list">${goals.map(g=>`<article class="goal-card strategic-goal-card"><div class="project-card-top"><span class="eyebrow">${g.area||'Estratégia'}</span><span class="pill ${g.priority==='Alta'?'warn':''}">${g.priority?`Prioridade ${g.priority}`:'Prioridade a definir'}</span></div><h4>${g.title}</h4><p>${g.description||'Objetivo estratégico registrado no protótipo.'}</p><div class="goal-meta-grid"><div><small>Status</small><b>${g.status||'Não definido'}</b></div><div><small>Prazo</small><b>${g.date?new Date(g.date+'T12:00:00').toLocaleDateString('pt-BR'):'Não definido'}</b></div><div><small>Indicador</small><b>${g.indicator||'A definir'}</b></div><div><small>Meta</small><b>${g.target||'A definir'}</b></div></div>${g.rationale?`<div style="margin-top:10px"><small style="color:#8a95a1;display:block;margin-bottom:2px">Por que isso importa</small><p style="margin:0;font-size:13px;color:#4a5568;line-height:1.5">${g.rationale}</p></div>`:''}${g.risks?`<div style="margin-top:8px"><small style="color:#8a95a1;display:block;margin-bottom:2px">Riscos / obstáculos</small><p style="margin:0;font-size:13px;color:#4a5568;line-height:1.5">${g.risks}</p></div>`:''}${g.nextSteps?`<div style="margin-top:8px"><small style="color:#8a95a1;display:block;margin-bottom:2px">Próximos passos</small><p style="margin:0;font-size:13px;color:#4a5568;line-height:1.5">${g.nextSteps}</p></div>`:''}<div class="project-actions"><button class="small-btn" data-edit="goal::${g.id}">✏️ Editar</button></div></article>`).join('')}</div></section>`}

function adminView(){return `<div class="section-title"><div><span class="eyebrow">ADMINISTRAÇÃO</span><h3>Gestão real do negócio</h3><p>Identidade, usuários, dados, clientes, fornecedores, contratos, custos e segurança.</p></div><button class="btn btn-primary" data-profile>Configurar minha empresa</button></div><div class="admin-grid"><article class="admin-card"><h4>Minha empresa / marca</h4><div class="admin-list"><div><span>Logo</span><b>Personalizável</b></div><div><span>Dados cadastrais</span><b>Completo</b></div><div><span>PDFs</span><b>White-label</b></div></div><button class="small-btn" style="width:100%;margin-top:12px" data-profile>Editar perfil</button></article><article class="admin-card"><h4>Operação comercial</h4><div class="admin-list"><div><span>Clientes</span><b>${getClients().length}</b></div><div><span>Fornecedores</span><b>${getSuppliers().length}</b></div><div><span>Catálogo</span><b>${getCatalog().length}</b></div></div><button class="small-btn" style="width:100%;margin-top:12px" data-nav="clientes">Abrir CRM</button></article><article class="admin-card"><h4>Segurança</h4><div class="admin-list"><div><span>MFA</span><b>Planejado</b></div><div><span>RLS</span><b>Estruturado</b></div><div><span>Auditoria</span><b>Estruturada</b></div></div><button class="small-btn" style="width:100%;margin-top:12px" data-nav="seguranca">Central de segurança</button></article></div>`}

function securityView(){return `<div class="section-title"><div><span class="eyebrow">SEGURANÇA & PRIVACIDADE</span><h3>Arquitetura para dados confidenciais</h3><p>O preview local é demonstrativo. A versão comercial deverá aplicar autenticação forte, RLS, storage privado, logs e gestão de chaves no backend.</p></div><span class="pill warn">Backend necessário</span></div><section class="security-grid"><article class="security-card"><div class="security-icon">🔐</div><h4>Autenticação forte</h4><p>MFA/TOTP, sessões controladas e recuperação segura.</p><span class="pill info">Supabase Auth</span></article><article class="security-card"><div class="security-icon">🧱</div><h4>Isolamento multi-tenant</h4><p>Row Level Security em todas as tabelas expostas.</p><span class="pill info">RLS</span></article><article class="security-card"><div class="security-icon">🗝️</div><h4>Criptografia</h4><p>TLS em trânsito, repouso e proteção adicional para campos classificados.</p><span class="pill info">KMS / AES-GCM</span></article><article class="security-card"><div class="security-icon">📁</div><h4>Arquivos privados</h4><p>Buckets privados e URLs assinadas temporárias.</p><span class="pill info">Storage privado</span></article></section>`}

function ideasView(){const board=getIdeasBoard();return `<div class="section-title"><div><span class="eyebrow">INCUBADORA</span><h3>Ideias & inovação</h3><p>Transforme uma ideia em análise, validação, protótipo e produto.</p></div><button class="btn btn-primary" data-create="idea">＋ Nova ideia</button></div><div class="idea-board">${Object.entries(board).map(([stage,arr])=>`<section class="task-col"><h4>${stage}</h4>${arr.map(i=>`<article class="idea-card"><b>${i.name}</b><p>${i.meta}</p><footer><span>ECOSSISTEMA</span>${i.id?`<button class="small-btn" data-edit="idea::${i.id}">✏️ Editar</button>`:'<span>↗</span>'}</footer></article>`).join('')}</section>`).join('')}</div>`}

function personalGoalsView(){const goals=getPersonalGoals();return `<div class="section-title"><div><span class="eyebrow">OBJETIVOS PESSOAIS</span><h3>Metas com acompanhamento</h3><p>Separe objetivos pessoais dos projetos profissionais e acompanhe progresso, prazo e área.</p></div><button class="btn btn-primary" data-create="personalGoal"><span data-icon="plus-circle"></span> Novo objetivo</button></div><div class="goal-grid">${goals.map(g=>`<article class="goal-card"><span class="eyebrow">${g.area}</span><h4>${g.title}</h4><div class="goal-score"><strong>${g.progress}%</strong><span>${g.status}</span></div><div class="progress"><i style="width:${g.progress}%"></i></div><small>Prazo: ${new Date(g.due+'T12:00:00').toLocaleDateString('pt-BR')}</small><div class="project-actions"><button class="small-btn" data-edit="personalGoal::${g.id}">✏️ Editar</button></div></article>`).join('')}</div>`}

function routineView(){const list=getRoutine();return `<div class="section-title"><div><span class="eyebrow">ROTINA</span><h3>Ritmos que não podem ser esquecidos</h3><p>Checklist recorrente para organização semanal.</p></div><button class="btn btn-primary" data-create="routine"><span data-icon="plus-circle"></span> Nova rotina</button></div><section class="panel"><div class="routine-list large">${list.map(r=>`<div style="display:flex;align-items:center;gap:8px"><label class="routine-row ${r.done?'done':''}" style="flex:1"><input type="checkbox" data-routine-toggle="${r.id}" ${r.done?'checked':''}><span class="custom-check"></span><div><b>${r.title}</b><small>${r.period}</small></div><em>${r.done?'Concluído':'Pendente'}</em></label><button class="small-btn" data-edit="routine::${r.id}">✏️</button></div>`).join('')}</div></section>`}

function agendaView(){
 const rows=agendaEntries();
 const stored=safeStorageGet('r1_agenda_month','');
 const now=new Date();
 const base=stored&&/^\d{4}-\d{2}$/.test(stored)?new Date(stored+'-01T12:00:00'):new Date(now.getFullYear(),now.getMonth(),1,12);
 const year=base.getFullYear(),month=base.getMonth();
 const monthKey=`${year}-${String(month+1).padStart(2,'0')}`;
 const first=new Date(year,month,1,12),last=new Date(year,month+1,0,12),start=(first.getDay()+6)%7;
 const monthRows=rows.filter(r=>r.date.startsWith(monthKey));
 const byDay={};monthRows.forEach(r=>{const d=Number(r.date.slice(-2));(byDay[d]??=[]).push(r)});
 const days=[];for(let i=0;i<start;i++)days.push('<span class="calendar-empty"></span>');
 for(let d=1;d<=last.getDate();d++){const iso=`${monthKey}-${String(d).padStart(2,'0')}`;const entries=byDay[d]||[];const today=iso===isoToday();days.push(`<button class="calendar-day ${today?'today':''} ${entries.length?'has-items':''}" data-agenda-date="${iso}" title="${entries.length?`${entries.length} compromisso(s)`:'Sem compromissos'}"><b>${d}</b><span class="calendar-dots">${entries.slice(0,4).map(e=>`<i class="${agendaTypeClass(e.type)}"></i>`).join('')}</span></button>`)}
 const upcoming=rows.filter(r=>r.date>=isoToday()).slice(0,30);
 const displayRows=monthRows;
 const legends=[['event','Evento'],['appointment','Compromisso'],['finance','Financeiro'],['checklist','Prazo'],['goal','Meta'],['planning','Projeto']];
 const months=Array.from({length:12},(_,i)=>`<option value="${i}" ${i===month?'selected':''}>${new Date(2026,i,1).toLocaleDateString('pt-BR',{month:'long'})}</option>`).join('');
 const years=Array.from({length:56},(_,i)=>now.getFullYear()-5+i).map(y=>`<option value="${y}" ${y===year?'selected':''}>${y}</option>`).join('');
 return `<div class="section-title"><div><span class="eyebrow">AGENDA UNIVERSAL</span><h3>Calendário & compromissos</h3><p>A mesma agenda acompanha todos os workspaces: projetos, eventos, clientes, fornecedores, finanças, metas e vida pessoal.</p></div><button class="btn btn-primary" data-create="appointment"><span data-icon="plus-circle"></span> Novo compromisso</button></div>
 <section class="agenda-universal-grid"><div class="agenda-calendar-card"><div class="calendar-head agenda-calendar-head"><button class="calendar-nav" data-agenda-month-shift="-1" aria-label="Mês anterior">‹</button><div class="agenda-calendar-selector"><span class="eyebrow">AGENDA CENTRAL</span><div class="agenda-month-year"><select id="agendaMonthSelect" aria-label="Mês">${months}</select><select id="agendaYearSelect" aria-label="Ano">${years}</select></div></div><button class="calendar-nav" data-agenda-month-shift="1" aria-label="Próximo mês">›</button></div><div class="calendar-week"><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span><span>D</span></div><div class="calendar-grid">${days.join('')}</div><div class="calendar-legend">${legends.map(([c,l])=>`<span><i class="${c}"></i>${l}</span>`).join('')}</div></div>
 <aside class="agenda-summary-card"><span class="eyebrow">VISÃO RÁPIDA</span><h4>${upcoming.length} próximos compromissos</h4><div class="summary-list"><div><small>Hoje</small><b>${rows.filter(r=>r.date===isoToday()).length}</b></div><div><small>Financeiro futuro</small><b>${rows.filter(r=>['Pagamento','Recebimento'].includes(r.type)&&r.date>=isoToday()).length}</b></div><div><small>Eventos futuros</small><b>${rows.filter(r=>r.type==='Evento'&&r.date>=isoToday()).length}</b></div><div><small>Mês exibido</small><b>${monthRows.length}</b></div></div><button class="btn btn-secondary full-btn" data-agenda-today>Ir para hoje</button></aside></section>
 <div class="agenda-toolbar"><button class="filter-chip active" data-agenda-filter="Todos">Todos</button><button class="filter-chip" data-agenda-filter="Evento">Eventos</button><button class="filter-chip" data-agenda-filter="Compromisso">Compromissos</button><button class="filter-chip" data-agenda-filter="Financeiro">Financeiro</button><button class="filter-chip" data-agenda-filter="Checklist">Prazos</button><span id="agendaCounter" class="toolbar-counter">${displayRows.length} no mês</span></div>
 <section class="agenda-upcoming"><div class="tutorial-section-head"><div><h3>Compromissos de ${base.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}</h3><p>Selecione um dia para filtrar. Use WhatsApp quando houver contato cadastrado, ative lembretes ou remova o item da agenda sem apagar o projeto de origem.</p></div></div><div id="agendaList" class="agenda-list">${displayRows.map(r=>`<article class="agenda-universal-row" data-agenda-row data-agenda-type="${r.type}" data-agenda-source="${r.source}" data-agenda-date-row="${r.date}" data-agenda-id="${r.id}"><div class="agenda-date-box"><b>${safeDate(r.date).getDate()}</b><span>${safeDate(r.date).toLocaleDateString('pt-BR',{month:'short'}).replace('.','')}</span></div><div class="agenda-row-main"><div class="agenda-row-top"><span class="agenda-kind ${agendaTypeClass(r.type)}">${r.type}</span>${r.priority==='Alta'?'<span class="pill warn">Prioridade</span>':''}</div><h4>${r.title}</h4><p>${r.detail||r.source}</p><small>${r.time?`${r.time} • `:''}${safeDate(r.date).toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'})}</small></div><div class="agenda-row-actions">${r.phone?`<button class="small-btn whatsapp-action" data-whatsapp="${r.phone}" data-name="${r.person||r.title}" data-message="Olá${r.person?`, ${r.person}`:''}! Lembrete: ${r.title} em ${safeDate(r.date).toLocaleDateString('pt-BR')}${r.time?` às ${r.time}`:''}. Podemos confirmar?"><span data-icon="arrow-up-right"></span> WhatsApp</button>`:''}${r.edit?`<button class="small-btn" data-edit="${r.edit}"><span data-icon="pencil"></span> Editar</button>`:''}<button class="small-btn" data-agenda-remind="${r.id}"><span data-icon="bell"></span> Lembrar</button><button class="small-btn agenda-remove" data-agenda-remove="${r.id}" data-agenda-source="${r.source}">Remover</button></div></article>`).join('')}</div><div id="agendaEmpty" class="empty-state hidden"><span data-icon="calendar"></span><b>Nenhum compromisso neste filtro.</b><small>Adicione um novo compromisso ou escolha outro filtro.</small></div></section>`}



function personalDocsView(){const docs=getPersonalDocs();return `<div class="section-title"><div><span class="eyebrow">DOCUMENTOS PESSOAIS</span><h3>Arquivos organizados por contexto</h3><p>No backend comercial, arquivos ficarão em storage privado com acesso autenticado.</p></div><button class="btn btn-primary" data-create="personalDoc"><span data-icon="plus-circle"></span> Registrar documento</button></div><div class="module-grid">${docs.map(d=>`<article class="module-card"><div class="module-icon"><span data-icon="folder"></span></div><h4>${d.name}</h4><p>${d.category}</p><span class="pill info">${d.status}</span><div class="project-actions"><button class="small-btn" data-edit="personalDoc::${d.id}">✏️ Editar</button></div></article>`).join('')}</div>`}

function canvasView(){return `<div class="section-title"><div><span class="eyebrow">IDEA CANVAS</span><h3>Estruture antes de construir</h3><p>Problema, público, proposta de valor, riscos, receita e próximo experimento.</p></div><button class="btn btn-primary" data-create="idea"><span data-icon="plus-circle"></span> Nova ideia</button></div><div class="canvas-grid">${[['Problema','Que dor estamos resolvendo?'],['Público','Quem sente essa dor com frequência?'],['Proposta de valor','Por que usariam nosso produto?'],['Solução','Qual é a menor solução útil?'],['Receita','Como pode gerar valor financeiro?'],['Riscos','O que pode invalidar a ideia?'],['Evidências','O que já sabemos de verdade?'],['Próximo experimento','Qual teste reduz mais incerteza?']].map(([a,b])=>`<article class="canvas-card"><span data-icon="edit"></span><h4>${a}</h4><p>${b}</p><button class="small-btn">Editar bloco</button></article>`).join('')}</div>`}

function validationView(){const rows=getValidations();return `<div class="section-title"><div><span class="eyebrow">VALIDAÇÃO</span><h3>Hipóteses precisam de evidência</h3><p>Registre o que precisa ser verdade antes de investir mais tempo e dinheiro.</p></div><button class="btn btn-primary" data-create="validation"><span data-icon="plus-circle"></span> Nova hipótese</button></div><div class="validation-list">${rows.map(v=>`<article class="validation-card"><div><span class="eyebrow">${v.status}</span><h4>${v.idea}</h4><p>${v.hypothesis}</p></div><div class="evidence-score"><strong>${v.evidence}</strong><span>evidências</span></div><div class="project-actions"><button class="small-btn" data-validation-evidence="${v.id}">Registrar evidência</button><button class="small-btn" data-edit="validation::${v.id}">✏️ Editar</button></div></article>`).join('')}</div>`}

function ideaRoadmapView(){const board=getIdeasBoard();return `<div class="section-title"><div><span class="eyebrow">ROADMAP DE IDEIAS</span><h3>Da descoberta à produção</h3><p>Visualize em qual estágio cada iniciativa se encontra.</p></div></div><div class="idea-board">${Object.entries(board).map(([stage,arr])=>`<section class="task-col"><h4>${stage}</h4>${arr.map(i=>`<article class="idea-card"><b>${i.name}</b><p>${i.meta}</p><footer><span>Próximo passo</span><span>→</span></footer></article>`).join('')}</section>`).join('')}</div>`}

function decisionsView(){const rows=getDecisions();return `<div class="section-title"><div><span class="eyebrow">CENTRAL DE DECISÕES</span><h3>Registre o porquê das escolhas</h3><p>Evite perder decisões importantes em conversas dispersas.</p></div><button class="btn btn-primary" data-create="decision"><span data-icon="plus-circle"></span> Nova decisão</button></div><div class="decision-list">${rows.map(d=>`<article class="decision-card"><div class="decision-date">${new Date(d.date+'T12:00:00').toLocaleDateString('pt-BR')}</div><div><h4>${d.title}</h4><p>${d.context}</p></div><span class="pill info">${d.status}</span><button class="small-btn" data-edit="decision::${d.id}">✏️ Editar</button></article>`).join('')}</div>`}

function moreView(workspace='Negócios'){
 const map={
  'Negócios':[['users','Clientes','CRM universal','clientes'],['grid','Projetos','Apps e produtos','projetos'],['wallet','Financeiro','Receitas, custos e parcelas','financeiro'],['target','Estratégia','Direção e objetivos','estrategia'],['settings','Administração','Empresa, usuários e operação','administracao'],['shield','Segurança','Privacidade e permissões','seguranca'],['settings','Ajustes','Consultor, acessibilidade, backup…','__ajustes__']],
  'Eventos':[['calendar-heart','Eventos','Central de produção','eventos'],['users','Clientes','Contratantes e histórico','clientes'],['briefcase','Fornecedores','Rede operacional','fornecedores'],['book-open','Catálogo','Opções comerciais','catalogo'],['presentation','Apresentações','Projetos visuais','apresentacoes'],['file-signature','Contratos','Documentos em PDF','contratos'],['settings','Ajustes','Consultor, acessibilidade, backup…','__ajustes__']],
  'Pessoal':[['target','Objetivos','Metas pessoais','objetivos'],['check-square','Rotina','Hábitos e revisões','rotina'],['calendar','Agenda','Compromissos','agenda'],['wallet','Finanças','Controle pessoal','financas-pessoais'],['folder','Documentos','Arquivos pessoais','documentos-pessoais'],['settings','Ajustes','Consultor, acessibilidade, backup…','__ajustes__']],
  'Ideias':[['lightbulb','Incubadora','Funil de ideias','ideias'],['edit','Canvas','Estrutura da ideia','canvas'],['flask','Validação','Hipóteses e evidências','validacao'],['route','Roadmap','Evolução das ideias','roadmap-ideias'],['history','Decisões','Histórico de escolhas','decisoes'],['settings','Ajustes','Consultor, acessibilidade, backup…','__ajustes__']]
 };
 const modules=map[workspace]||map['Negócios'];return `<div class="section-title"><div><span class="eyebrow">MÓDULOS DO WORKSPACE</span><h3>${workspace}</h3><p>Cada ambiente mostra apenas as funções que fazem sentido para aquele contexto.</p></div></div><div class="module-grid">${modules.map(x=>`<article class="module-card"><div class="module-icon"><span data-icon="${x[0]}"></span></div><h4>${x[1]}</h4><p>${x[2]}</p><button class="small-btn" ${x[3]==='__ajustes__'?'data-open-ajustes':`data-nav="${x[3]}"`}>Abrir módulo</button></article>`).join('')}</div>`}



const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

const iconPaths={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 'calendar-heart':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M12 17s-3-1.8-3-3.8a1.9 1.9 0 0 1 3-1.5 1.9 1.9 0 0 1 3 1.5c0 2-3 3.8-3 3.8Z"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
 briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
 'book-open':'<path d="M2 4h6a4 4 0 0 1 4 4v12a4 4 0 0 0-4-4H2Z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a4 4 0 0 1 4-4h6Z"/>',
 wallet:'<path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6"/><path d="M16 13h4"/>',
 presentation:'<path d="M4 3h16v12H4z"/><path d="M8 21l4-6 4 6M2 3h20"/>',
 'file-signature':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 17c2-3 4-3 6 0M8 19h8"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.6v-.1A1.7 1.7 0 0 0 8 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 3.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2V9.6h.1A1.7 1.7 0 0 0 3.6 8a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8 3.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2h4v.1A1.7 1.7 0 0 0 15 3.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 8c.17.37.38.7.6 1 .28.36.66.57 1.1.6h.1v4h-.1a1.7 1.7 0 0 0-1.7 1.4Z"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 lightbulb:'<path d="M9 18h6M10 22h4"/><path d="M8.5 15.5A7 7 0 1 1 15.5 15.5c-.9.7-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.8-1.5-2.5Z"/>',
 'check-square':'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 12 3 3 5-6"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
 folder:'<path d="M3 5h6l2 2h10v12H3Z"/>',
 edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
 flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3"/><path d="M8 15h8"/>',
 route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a4 4 0 0 0 4-4v-4a4 4 0 0 1 3-4"/>',
 history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
 'plus-circle':'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
 download:'<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
 'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 'help-circle':'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-.9.7-1.9 1.2-1.9 2.9"/><path d="M12 17h.01"/>',
 'play-circle':'<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/>',
 'bar-chart-3':'<path d="M3 3v18h18"/><rect x="7" y="13" width="3" height="5" rx="1"/><rect x="12" y="9" width="3" height="9" rx="1"/><rect x="17" y="5" width="3" height="13" rx="1"/>',
 'layout-grid':'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
'sliders':'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
'layout-dashboard':'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
 pencil:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>'
};
const iconSvg=name=>`<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]||iconPaths.grid}</svg>`;
function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{const name=el.dataset.icon;if(el.dataset.hydrated===name)return;el.innerHTML=iconSvg(name);el.dataset.hydrated=name})}

const workspaceConfigs={
 'Negócios':{slug:'business',accent:'#2366b1',label:'Negócios',nav:[['dashboard','home','Início','CENTRAL DE COMANDO'],['projetos','grid','Projetos','APPS & PRODUTOS'],['clientes','users','Clientes','CRM'],['financeiro','wallet','Financeiro','GESTÃO FINANCEIRA'],['estrategia','target','Estratégia','DIREÇÃO'],['administracao','settings','Administração','OPERAÇÃO'],['seguranca','shield','Segurança','PRIVACIDADE'],['mais','menu','Mais','MÓDULOS']]},
 'Eventos':{slug:'events',accent:'#b8743c',label:'Eventos',nav:[['dashboard','home','Início','CENTRAL DE EVENTOS'],['eventos','calendar-heart','Eventos','EVENTOS & EXPERIÊNCIAS'],['clientes','users','Clientes','CONTRATANTES'],['fornecedores','briefcase','Fornecedores','PARCEIROS'],['catalogo','book-open','Catálogo','COMERCIAL'],['financeiro','wallet','Financeiro','GESTÃO DO EVENTO'],['apresentacoes','presentation','Apresentações','PROJETOS VISUAIS'],['contratos','file-signature','Contratos','DOCUMENTOS'],['mais','menu','Mais','MÓDULOS']]},
 'Pessoal':{slug:'personal',accent:'#16867a',label:'Pessoal',nav:[['dashboard','home','Início','VIDA & ORGANIZAÇÃO'],['objetivos','target','Objetivos','METAS PESSOAIS'],['rotina','check-square','Rotina','ORGANIZAÇÃO'],['agenda','calendar','Agenda','COMPROMISSOS'],['financas-pessoais','wallet','Finanças','PESSOAL'],['documentos-pessoais','folder','Documentos','ARQUIVOS'],['mais','menu','Mais','MÓDULOS']]},
 'Ideias':{slug:'ideas',accent:'#7657b5',label:'Ideias',nav:[['dashboard','home','Início','INCUBADORA'],['ideias','lightbulb','Ideias','FUNIL'],['canvas','edit','Canvas','ESTRUTURAÇÃO'],['validacao','flask','Validação','EVIDÊNCIAS'],['roadmap-ideias','route','Roadmap','EVOLUÇÃO'],['decisoes','history','Decisões','HISTÓRICO'],['mais','menu','Mais','MÓDULOS']]}
};

const tutorialFlows={
 essential:{title:'Tour essencial',group:'Comece aqui',workspace:'Negócios',icon:'help-circle',minutes:4,description:'Conheça workspaces, navegação, criação rápida, busca, alertas e instalação.',steps:[
  {workspace:'Negócios',nav:'dashboard',target:'#workspaceBtn',title:'Workspaces organizam contextos',text:'Aqui você troca entre Negócios, Eventos, Pessoal e Ideias. Cada ambiente muda menus, cores e funções.',tip:'Clique no botão destacado sempre que quiser mudar de contexto.'},
  {action:'workspaceDialog',target:'#workspaceDialog .workspace-list',title:'Escolha o ambiente certo',text:'Negócios é para empresas e projetos; Eventos para produção e contratos; Pessoal para rotina; Ideias para incubação.',tip:'No tutorial, nós abrimos esta tela automaticamente para você.'},
  {workspace:'Eventos',nav:'dashboard',target:'#quickAddBtn',title:'O botão Novo é contextual',text:'O botão Novo muda conforme o workspace. Em Eventos ele cria evento, cliente, fornecedor, contrato, apresentação e mais.',tip:'Você não precisa procurar a tela de cadastro antes: use Novo como atalho.'},
  {target:'#searchBtn',title:'Busca global',text:'A busca localiza projetos, eventos e clientes e leva você ao contexto correto.',tip:'Use nomes curtos: “Beatriz”, “VetFlow” ou parte do nome do cliente.'},
  {target:'#alertsBtn',title:'Central de atenção',text:'Alertas reúnem pontos críticos que precisam de ação. A ideia é você começar o dia por aqui.',tip:'Na versão comercial, alertas poderão ser gerados por prazo, status, financeiro e aprovações.'},
  {target:'#installBtn',title:'Instale como aplicativo',text:'O sistema é PWA. Você pode instalar no computador e, futuramente, no celular/tablet com experiência de app.',tip:'No Chrome/Edge, use o botão destacado para iniciar a instalação.'}
 ]},
 company:{title:'Minha empresa e PDFs',group:'Configuração',workspace:'Negócios',icon:'settings',minutes:5,description:'Cadastre sua marca, dados legais, logo e rodapé usados nos PDFs.',steps:[
  {workspace:'Negócios',nav:'administracao',target:'[data-profile]',title:'Abra Minha empresa / marca',text:'Esta área centraliza os dados que aparecem em contratos, propostas, listas e relatórios.',tip:'Clique em Editar perfil para abrir o cadastro.'},
  {action:'profile',target:'#companyProfileDialog',title:'Cadastre a identidade',text:'Preencha nome da marca, razão social, CPF/CNPJ, telefone, e-mail, site e endereço.',tip:'Esses dados serão reutilizados automaticamente nos documentos.'},
  {keepDialog:true,target:'#companyLogo',title:'Adicione seu logo',text:'Escolha um arquivo de imagem para personalizar os documentos.',tip:'Use uma imagem pequena e nítida. No protótipo, limite de 1,5 MB.'},
  {keepDialog:true,target:'#companyProfileForm textarea[name="footer"]',title:'Configure o rodapé',text:'Use o rodapé para dados institucionais, avisos ou informações de contato.',tip:'Depois clique em Salvar identidade.'}
 ]},
 client:{title:'Cadastrar cliente / contratante',group:'Eventos',workspace:'Eventos',icon:'users',minutes:4,description:'Crie o cadastro que será usado em eventos, contratos e apresentações.',steps:[
  {workspace:'Eventos',nav:'clientes',target:'[data-create="client"]',title:'Abra o cadastro de cliente',text:'A Central de Clientes reúne contratantes e relacionamento. Use Novo cliente para começar.',tip:'O mesmo cliente poderá participar de vários eventos.'},
  {action:'form:client',target:'#formDialog',title:'Preencha o cadastro',text:'Informe nome principal, segundo contratante ou empresa, tipo, documento, contatos e cidade.',tip:'Você pode usar Pessoa física, Casal ou Empresa.'},
  {keepDialog:true,target:'#dynamicForm [name="name"]',title:'Identificação principal',text:'Comece pelo nome do contratante. Este nome aparecerá nas telas e documentos.',tip:'Exemplo: Karina, Ana & Lucas ou Empresa XPTO.'},
  {keepDialog:true,target:'#dynamicForm textarea[name="notes"]',title:'Registre informações úteis',text:'Use Observações para preferências, restrições, aprovações e informações que a equipe precisa lembrar.',tip:'Evite registrar senhas ou informações desnecessariamente sensíveis.'},
  {keepDialog:true,target:'#dynamicForm button[type="submit"]',title:'Salve o cliente',text:'Ao salvar, o cadastro entra na base do protótipo e aparece na lista de clientes.',tip:'No backend comercial, o dado será protegido por autenticação e regras de acesso.'}
 ]},
 supplier:{title:'Cadastrar fornecedor',group:'Eventos',workspace:'Eventos',icon:'briefcase',minutes:4,description:'Monte uma rede reutilizável de buffet, DJ, decoração, foto, espaço e outros parceiros.',steps:[
  {workspace:'Eventos',nav:'fornecedores',target:'[data-create="supplier"]',title:'Abra a rede de fornecedores',text:'Fornecedores ficam cadastrados uma vez e podem ser reutilizados em vários eventos.',tip:'Mantenha contatos e referências de preço atualizados.'},
  {action:'form:supplier',target:'#formDialog',title:'Cadastre o fornecedor',text:'Informe categoria, contato, WhatsApp, e-mail, referência de preço e status.',tip:'Use “Homologado” para parceiros já avaliados.'},
  {keepDialog:true,target:'#dynamicForm [name="category"]',title:'Escolha a categoria',text:'A categoria facilita filtros e vinculação com catálogo comercial e produção.',tip:'Exemplos: Buffet, DJ & Música, Decoração, Foto & Vídeo.'},
  {keepDialog:true,target:'#dynamicForm [name="notes"]',title:'Guarde o histórico',text:'Registre condições comerciais, pontos fortes, restrições e observações de operação.',tip:'Isso evita depender apenas da memória da equipe.'},
  {workspace:'Eventos',nav:'fornecedores',target:'#supCompareBtn, [data-cmp-sup]',title:'Compare fornecedores lado a lado',text:'Marque a caixinha “Comparar” em 2 ou 3 fornecedores e toque em Comparar: categoria, avaliação, preço de referência, itens do catálogo e contato ficam lado a lado, com o melhor de cada linha destacado.',tip:'Se dois empatarem na melhor nota, os dois ficam destacados.'},
  {workspace:'Eventos',nav:'fornecedores',target:'[data-open-history]',title:'Veja o histórico de preços',text:'O botão 📈 Histórico mostra cada mudança de preço de referência do fornecedor e dos itens ligados a ele, com o antes, o depois e a variação em %.',tip:'O mesmo botão existe no hub de cada evento (orçamento previsto e preços dos itens escolhidos).'}
 ]},
 event:{title:'Criar um evento',group:'Eventos',workspace:'Eventos',icon:'calendar-heart',minutes:5,description:'Abra um evento e organize cliente, data, local, convidados, orçamento e responsável.',steps:[
  {workspace:'Eventos',nav:'eventos',target:'[data-create="event"]',title:'Crie um novo evento',text:'Todo projeto de casamento, debutante, aniversário ou corporativo começa aqui. Informe também a <b>quantidade de mesas</b>: o Mapa de mesas já nasce com Mesa 1, Mesa 2… vazias, prontas pra receber os convidados.',tip:'O evento vira o dossiê central da produção.'},
  {action:'form:event',target:'#formDialog',title:'Preencha as informações-base',text:'Defina nome, tipo, contratante, data, local, convidados, orçamento e responsável.',tip:'Esses dados alimentam o hub, PDFs e indicadores.'},
  {keepDialog:true,target:'#dynamicForm [name="date"]',title:'Defina a data',text:'A data é usada para contagem regressiva, cronograma e acompanhamento de prazo.',tip:'Confirme a data antes de começar a produção detalhada.'},
  {keepDialog:true,target:'#dynamicForm [name="budget"]',title:'Registre o orçamento previsto',text:'O orçamento ajuda a comparar contratação, despesas e evolução financeira.',tip:'Use o valor total previsto do projeto.'},
  {action:'eventHub',target:'[data-duplicate-event]',title:'Duplique um evento parecido',text:'Copia checklist e cronograma inteiros pro evento novo (tudo volta como pendente), com o formulário já aberto pra ajustar título e data.',tip:'Ótimo pra um segundo casamento com a mesma estrutura do primeiro.'},
  {action:'eventHub',target:'[data-share-event]',title:'Compartilhe pelo WhatsApp',text:'Gera um resumo do evento (data, progresso, checklist, financeiro pendente) e já abre o WhatsApp pronto pra enviar.',tip:'O mesmo botão existe no checklist, no cronograma e na lista de convidados.'},
  {action:'eventHub',target:'[data-open-portal]',title:'Gere o portal do cliente',text:'Baixa um arquivo .html independente com o resumo do evento, convidados e cronograma — pronto pra enviar ou hospedar onde preferir.',tip:'É um retrato daquele momento, não uma página que atualiza sozinha; gere de novo quando quiser compartilhar algo mais recente.'},
  {action:'eventHub',target:'#topBackBtn',title:'“Voltar” sempre no mesmo lugar',text:'Em qualquer tela aberta dentro de outra (hub do evento, histórico, apresentação…), o “← Voltar” fica sempre no canto superior esquerdo e acompanha a rolagem. Um toque leva à tela anterior.',tip:'Nas telas principais (Início, Eventos…) ele não aparece, porque não há tela anterior.'},
  {action:'eventHub',target:'[data-open-event-fin]',title:'Financeiro só deste evento',text:'O botão Financeiro do hub abre as receitas, despesas e o fluxo de caixa apenas deste evento — o nome dele aparece em destaque antes do título. “＋ Receita”, “＋ Despesa” e “Novo lançamento” já vêm com o evento escolhido, e o Extrato PDF sai só com os lançamentos dele.',tip:'Pra ver todos os eventos juntos, use “Ver o financeiro de todos os eventos” ou o Financeiro do menu.'},
  {action:'eventHub',target:'[data-open-event-pres]',title:'Apresentação só deste evento',text:'“Abrir apresentação” mostra apenas as apresentações do evento escolhido e os itens dele. Se ainda não houver, o botão cria uma já com o nome do evento e do cliente. O “← Voltar” leva de volta ao hub.',tip:'Renomear o evento não perde a apresentação — ela acompanha o novo nome.'},
  {action:'eventHub',target:'[data-open-budget]',title:'Gere a proposta em PDF',text:'Monta o orçamento para o cliente com os itens escolhidos, total, sinal de reserva, parcelas e campo de aceite. O que você paga aos fornecedores não entra.',tip:'Defina validade e o % do sinal antes de gerar; na janela de impressão use “Salvar como PDF”.'},
  {action:'eventHub',target:'[data-open-payplan]',title:'Feche a reserva: plano de pagamento',text:'Depois do aceite, gere o sinal e as parcelas de uma vez: você escolhe o %, o número de parcelas e quantos dias antes do evento vence a última. Elas entram como receitas pendentes no Financeiro do evento. Antes de gerar, toque na data de cada linha da prévia para ajustá-la. Se o evento já tem parcelas, o plano abre mostrando cada uma (recebida em verde, atrasada em vermelho) e pergunta se você quer incluir mais parcelas ou alterar as existentes; ao reduzir, você escolhe quais excluir, e tudo é conferido antes de regravar o Financeiro.',tip:'O portal do cliente passa a mostrar “Pagamento em andamento” e avisa atraso sozinho.'},
  {action:'eventHub',target:'[data-open-history]',title:'Acompanhe as mudanças de orçamento',text:'O botão 📈 Histórico abre a tela com o NOME DO EVENTO no topo e mostra quando o orçamento previsto, os preços dos itens escolhidos e os valores de lançamentos mudaram, com o antes, o depois e a variação em %. Cada mudança fica gravada com o nome do evento daquele momento (e nas telas gerais cada linha diz de qual evento é).',tip:'Editar outra coisa do evento não cria histórico — só mudança de valor.'}
 ]},
  degustacao:{title:'Degustação do evento',group:'Eventos',workspace:'Eventos',icon:'calendar-heart',minutes:3,description:'Agende a degustação do cardápio antes do checklist: data, horário, fornecedor, cardápio e aprovação.',steps:[
   {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-tasting]',title:'Degustação vem antes do checklist',text:'No hub do evento, o botão 🍽️ Degustação fica antes do Checklist: é onde você marca a prova do cardápio com o fornecedor e registra se foi aprovada.',tip:'O resumo operacional do evento mostra quantas degustações estão agendadas e aprovadas.'},
   {action:'tasting',target:'[data-create="tasting"]',title:'Agende a degustação',text:'Toque em Nova degustação e informe data, horário, fornecedor e cardápio. Fornecedor e cardápio têm busca (por nome ou telefone, em qualquer parte do texto) e, se não existir, você inclui na hora.',tip:'Um cardápio novo incluído aqui também entra no Catálogo comercial.'},
   {action:'tasting',target:'[data-create="tasting"]',title:'Várias degustações, cada uma com seu arquivo',text:'Pode haver quantas quiser no mesmo evento: cardápio com um fornecedor, bebidas com outro, doces e bolo… Escolha o tipo, anexe a foto ou o PDF do cardápio (fotos grandes são reduzidas sozinhas) e anote o que o cliente gostou.',tip:'O cardápio buscado muda conforme o tipo: bebidas procuram em Bar & Bebidas.'},
   {action:'checklist',target:'.check-group',title:'A degustação entra no checklist',text:'Cada degustação vira um item no grupo “Degustação”, que aparece primeiro no checklist e fica concluído quando você marca a degustação como aprovada.',tip:'Mudou o fornecedor ou o cardápio? O item do checklist acompanha.'},
   {action:'tasting',target:'[data-tasting-legend]',title:'Aprovado: Sim ou Não',text:'Cada degustação tem os botões ✓ Sim e ✕ Não. Sim libera o cardápio; Não sinaliza que precisa ajustar; tocar de novo volta para pendente.',tip:'As degustações também aparecem na Agenda, com data e horário.'}
  ]},
 checklist:{title:'Checklist operacional',group:'Eventos',workspace:'Eventos',icon:'check-square',minutes:5,description:'Organize tudo que precisa ser concluído antes do evento e acompanhe responsáveis e prazos.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-checklist]',title:'Entre no hub do evento',text:'O hub reúne produção, financeiro, catálogo e execução. Abra Checklist para controlar pendências.',tip:'O tutorial usa o primeiro evento cadastrado como exemplo.'},
  {action:'checklist',target:'.check-group, .checklist-board',title:'Veja os itens por grupo',text:'Itens podem ser separados por cliente, produção, decoração, contratos e outros grupos.',tip:'Marque um item quando ele estiver realmente concluído.'},
  {target:'[data-create="checklist"]',title:'Adicione um novo item',text:'Use Novo item para registrar uma pendência. O <b>Grupo</b> é o bloco onde ela aparece (Cliente, Buffet, Produção…) e o <b>Item</b> é a tarefa em si; os dois têm busca — digite pra achar o que já existe ou inclua um novo. Depois defina responsável, prazo e criticidade.',tip:'Marque como crítico somente o que realmente pode comprometer a execução.'},
  {action:'checklist',target:'[data-share-checklist]',title:'Envie os pendentes pelo WhatsApp',text:'Lista os itens em aberto (com ⚠️ nos críticos) num texto pronto pra enviar à equipe ou ao fornecedor.',tip:'Útil pra cobrar pendências sem precisar abrir o app na frente de ninguém.'}
 ]},
 aprovacao:{title:'Aprovação do cliente (0 a 10)',group:'Eventos',workspace:'Eventos',icon:'check-square',minutes:3,description:'Registre a nota de 0 a 10 que o cliente deu a cada item do evento e acompanhe a média no resumo.',steps:[
   {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-approval]',title:'Aprovação do cliente no hub',text:'O botão ⭐ Aprovação do cliente reúne todos os itens do evento — degustações, checklist, itens escolhidos e cronograma — para o cliente dar nota de 0 a 10. A média também aparece no Resumo operacional.',tip:'A mesma nota aparece no cartão da degustação e na linha do checklist.'},
   {action:'approval',target:'[data-approval-intro]',title:'Dê a nota e filtre o que falta',text:'Toque no número de 0 a 10 (0 = não aprovou, 10 = amou); tocar de novo limpa. Use “Mostrar só os não avaliados” pra ver o que ainda falta perguntar ao cliente.',tip:'Itens com nota 5 ou menos entram no contador “Pedem atenção”.'},
   {action:'approval',target:'#approvalMetrics',title:'Média e itens que pedem atenção',text:'No topo ficam a média geral, quantos itens já têm nota e quantos pedem atenção. O Resumo PDF do evento leva essas notas junto, item por item.',tip:'Itens sem nota aparecem com “—” no PDF.'}
  ]},
 timeline:{title:'Cronograma do dia',group:'Eventos',workspace:'Eventos',icon:'calendar',minutes:5,description:'Monte a sequência operacional do evento por horário, responsável, local e status.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-timeline]',title:'Abra o cronograma pelo evento',text:'O cronograma do dia organiza a operação em ordem temporal.',tip:'Use o mesmo hub do evento para acessar a execução.'},
  {action:'timeline',target:'.day-timeline',title:'Leia a linha do tempo',text:'Cada marco mostra horário, atividade, responsável, local e confirmação.',tip:'No dia do evento, esta tela pode evoluir para o Modo Execução.'},
  {target:'[data-create="timeline"]',title:'Crie um novo marco',text:'Adicione montagem, chegada de fornecedores, soundcheck, recepção, cerimônia e desmontagem.',tip:'Evite horários vagos em tarefas críticas.'},
  {action:'timeline',target:'[data-share-timeline]',title:'Envie a ordem do dia pelo WhatsApp',text:'Gera a lista de horários e atividades, pronta pra compartilhar com a equipe no dia do evento.',tip:'Mande na véspera pra todo mundo saber o próprio horário.'}
 ]},
 guests:{title:'Lista de convidados',group:'Eventos',workspace:'Eventos',icon:'users',minutes:5,description:'Controle confirmação de presença, telefone e mesa de cada convidado.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-guests]',title:'Abra a lista pelo hub do evento',text:'A lista de convidados fica junto com checklist e cronograma, no hub de cada evento.',tip:'O número de "convidados" do evento é só a previsão — esta lista é o controle de verdade.'},
  {action:'guests',target:'#guestBulkInput, #guestBulkAdd',title:'Adicione vários de uma vez',text:'Cole uma lista de nomes, um por linha, e todos entram como "Pendente" — sem precisar cadastrar um por um. Escolha também a mesa deles na hora — ou deixe “Sem mesa” e organize depois.',tip:'Bom pra começar a lista a partir de uma planilha ou de uma lista que o cliente já tinha.'},
  {action:'guests',target:'[data-guest-import]',title:'Importe de uma planilha',text:'Copie as células do Excel ou Google Planilhas (ou escolha um arquivo .csv) e cole. O app reconhece Nome, Telefone, Mesa e Status, mostra uma prévia e ignora quem já está na lista.',tip:'A primeira linha pode ser o cabeçalho. Quem já existe (mesmo nome e telefone) não entra duas vezes.'},
  {action:'guests',target:'.guest-status-group',title:'Confirme presença com um toque',text:'Os três botões — ✓ Confirmado, ? Pendente e ✕ Recusado — trocam o status na hora, sem precisar abrir formulário.',tip:'Use a busca acima da lista quando o evento tiver muitos convidados.'},
  {action:'guests',target:'[data-share-guests]',title:'Compartilhe o resumo pelo WhatsApp',text:'Envia a contagem de confirmados, pendentes e recusados pro cliente ou pra equipe.',tip:'O mesmo contador aparece no resumo do hub do evento.'}
 ]},
 settings:{title:'Ajustes do app',group:'Administração',workspace:'Negócios',icon:'sliders',minutes:4,description:'Personalize mensagens de WhatsApp, avisos, listas, plano, senha de acesso e backup.',steps:[
  {target:'[data-open-ajustes]',title:'Abra os Ajustes',text:'Fica em qualquer workspace, ao lado do seu nome, no topo.',tip:'Reúne perfil, mensagens, acessibilidade, avisos, backup e segurança num só lugar.'},
  {action:'ajustes',target:'#ajTplEvent, #ajTplChecklist',title:'Personalize as mensagens de WhatsApp',text:'O texto que você escrever aqui entra na frente de todo resumo compartilhado — do evento, checklist, cronograma ou convidados.',tip:'Deixe em branco pra enviar só o resumo automático, sem introdução.'},
  {action:'ajustes',target:'#ajBellWarn, #ajBellUrgent',title:'Ajuste os prazos do sino de eventos',text:'Controla quando o sino aparece do lado da data (aviso simples) e quando ele pisca (evento próximo com pendência no checklist).',tip:'O padrão é avisar com 15 dias e piscar com 7 — mude se sua operação precisar de mais ou menos antecedência.'},
  {action:'ajustes',target:'#ajBackupBaixar',title:'Baixe um backup regularmente',text:'Os dados ficam só neste navegador. A tela avisa há quantos dias foi o último backup, pra você não esquecer.',tip:'Baixe antes de trocar de celular ou de navegador.'},
  {action:'ajustes',target:'#ajPermissoes',title:'Veja o que o app realmente acessa',text:'Câmera/galeria só quando você escolhe uma foto, e os avisos são só dentro do app — nada de permissão de notificação do celular.',tip:'Bom pra responder rápido quando alguém perguntar "esse app acessa o quê?".'},
  {action:'ajustes',target:'[data-ev-type-toggle]',title:'Escolha quais tipos de evento aparecem no filtro',text:'Esconder um tipo não apaga os eventos que já usam ele — só tira aquele botão de filtro da tela de Eventos.',tip:'Dá pra adicionar tipos novos (ex.: Chá de bebê) logo abaixo da lista.'},
  {action:'ajustes',target:'#ajNewSupplierCategory, #ajAddSupplierCategory',title:'Adicione categorias de fornecedor permanentes',text:'Uma vez cadastrada (ex.: Florista), a categoria fica disponível pra sempre ao cadastrar fornecedores — sem precisar usar "Outro" de novo a cada vez.',tip:'A tela de Fornecedores mostra o filtro automaticamente assim que existir pelo menos um fornecedor com aquela categoria.'},
  {action:'ajustes',target:'#ajNewCatalogCategory, #ajAddCatalogCategory',title:'Categorias de catálogo permanentes',text:'Mesma lógica: cadastre uma categoria nova (ex.: Doces finos) e ela fica disponível pra sempre ao cadastrar itens do catálogo.',tip:'Também funciona digitando em "Outro" na hora de cadastrar o item — o app registra sozinho pra próxima vez.'},
  {action:'ajustes',target:'#ajNewAppointmentType, #ajAddAppointmentType',title:'Tipos de compromisso permanentes',text:'E o mesmo vale pros tipos de compromisso da agenda — cadastre um tipo novo (ex.: Reunião de equipe) e ele fica disponível pra sempre.',tip:'Em qualquer um dos três (tipo de evento, categoria de fornecedor, categoria de catálogo ou tipo de compromisso), digitar em "Outro" já cadastra automaticamente — essa tela é só pra quem prefere cadastrar antes, com calma.'},
  {action:'ajustes',target:'#ajPlanoCard',title:'Seu plano: teste grátis e Pro',text:'Mostra quantos dias faltam do teste grátis de 30 dias, o ID deste aparelho e como assinar pelo WhatsApp (Pro de 1 mês: R$ 90,00, depois do teste). Depois do teste, sem o Pro o app fica só pra consulta — nada é apagado.',tip:'Baixe um backup antes do fim do teste: ele continua disponível mesmo com o app só pra consulta.'},
  {action:'ajustes',target:'#ajCriarSenha, #ajTrocarSenha',title:'Proteja tudo com uma senha',text:'A senha tem de 4 a 50 caracteres, com 1 maiúscula, 1 minúscula, 1 número e 1 símbolo. Os dados ficam criptografados neste aparelho e o app pede a senha ao abrir.',tip:'Ao criar, o app oferece mandar uma cópia pro seu próprio WhatsApp. Sem a senha não há como recuperar os dados.'},
  {action:'ajustes',target:'[data-aj-list-rename], [data-aj-list-hide], [data-aj-list-del]',title:'Edite, oculte ou exclua itens das listas',text:'Em cada lista (tipos de evento, categorias, tipos de compromisso) use ✏️ pra corrigir um nome (os registros já cadastrados acompanham), 🚫 pra esconder do formulário e 🗑️ pra excluir.',tip:'Renomear pra um nome que já existe junta os dois. Excluir um item em uso pede o destino dos registros.'},
  {action:'ajustes',target:'#ajSalvarTemplates',title:'Gravar ou descartar',text:'Em cada bloco de Ajustes, “Gravar” guarda as mudanças e “Descartar” volta sem salvar. No fim da página também há um “← Voltar”.',tip:'Se entrou num bloco sem querer, é só Descartar.'}
 ]},
 seating:{title:'Mapa de mesas',group:'Eventos',workspace:'Eventos',icon:'layout-grid',minutes:4,description:'Organize qual convidado senta em qual mesa: arrastando (mouse ou toque) ou pelo menu de cada card.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-seating]',title:'Abra o mapa pelo hub do evento',text:'O mapa de mesas usa a mesma lista de convidados — cadastre os convidados primeiro.',tip:'Convidados sem mesa aparecem na coluna "Sem mesa".'},
  {action:'seating',target:'.seat-grip, .seat-chip',title:'Arraste, toque e arraste, ou use o menu',text:'No computador, arraste o card do convidado até a mesa. No celular ou tablet, segure o ⠿ (a alça à esquerda do nome) e arraste até a mesa. Também dá pra escolher a mesa no menu suspenso do card.',tip:'As três formas fazem exatamente a mesma coisa — use a que for mais prática na hora.'},
  {action:'seating',target:'#seatAddTable',title:'Crie mesas vazias antecipadamente',text:'Dá pra criar "Mesa 7", por exemplo, antes mesmo de decidir quem senta nela.',tip:'Assim você já deixa a numeração pronta pra organizar depois com calma. Ao criar um evento novo, o campo “Quantidade de mesas” já cria todas de uma vez.'}
 ]},
 catalog:{title:'Catálogo comercial',group:'Eventos',workspace:'Eventos',icon:'book-open',minutes:6,description:'Filtre opções, veja detalhes e adicione cardápio, decoração, DJ e serviços ao projeto.',steps:[
  {workspace:'Eventos',nav:'catalogo',target:'[data-catalog-filter="DJ & Música"]',title:'Filtre por categoria',text:'Os filtros mudam a listagem imediatamente. Aqui você pode visualizar apenas DJ & Música.',tip:'Clique nas categorias para reduzir o catálogo.'},
  {action:'catalogFilter:DJ & Música',target:'[data-catalog-category="DJ & Música"]',title:'Veja os itens filtrados',text:'Agora a tela exibe apenas opções desta categoria.',tip:'O contador também é atualizado.'},
  {target:'[data-catalog-open]',title:'Abra os detalhes',text:'Detalhes mostra fornecedor, descrição, tags, preço e destinos possíveis.',tip:'Use essa ficha para decidir antes de inserir no projeto.'},
  {action:'catalogDetail',target:'#catalogDetailDialog',title:'Adicione ao evento ou à apresentação',text:'Escolha o evento e use Adicionar ao projeto. Ou selecione uma apresentação e inclua o item nela.',tip:'Esse vínculo permite evoluir para orçamento, contrato e produção.'}
 ]},
 presentation:{title:'Montar apresentação do projeto',group:'Eventos',workspace:'Eventos',icon:'presentation',minutes:7,description:'Crie uma apresentação visual e inclua imagens, PDFs e itens do catálogo.',steps:[
  {workspace:'Eventos',nav:'apresentacoes',target:'[data-create="presentation"]',title:'Crie a apresentação',text:'Uma apresentação pode representar conceito, cardápio, decoração, música e investimento.',tip:'Crie uma apresentação por projeto ou versão de proposta.'},
  {target:'[data-open-presentation]',title:'Abra o editor',text:'Escolha uma apresentação existente para entrar no editor visual.',tip:'O editor organiza seções e materiais de referência.'},
  {action:'presentation',target:'#assetUpload',title:'Adicione imagens e PDFs',text:'Use o upload para inserir referências, moodboard, propostas de fornecedores ou materiais do cliente.',tip:'No protótipo os arquivos ficam apenas durante a sessão de edição.'},
  {target:'#presentModeBtn',title:'Use o modo apresentação',text:'Mostre o projeto em tela cheia durante uma reunião com o cliente.',tip:'Depois, gere o PDF para enviar uma versão formal.'}
 ]},
 finance:{title:'Financeiro do evento',group:'Eventos',workspace:'Eventos',icon:'wallet',minutes:5,description:'Controle receitas, despesas, cliente/fornecedor, datas e situação de pagamento.',steps:[
  {workspace:'Eventos',nav:'financeiro',target:'[data-create="finance"]',title:'Abra o financeiro',text:'Aqui você acompanha o fluxo financeiro dos eventos.',tip:'Registre tanto receitas quanto despesas.'},
  {action:'form:finance',target:'#formDialog',title:'Crie um lançamento',text:'Escolha o tipo, a categoria, quem paga ou recebe, o valor, a data de vencimento e o evento. Se já foi pago ou recebido, preencha a data realizada.',tip:'Vincule o evento para o resumo financeiro dele (e o portal do cliente) ficarem certos.'},
  {keepDialog:true,target:'#dynamicForm [name="tipo"]',title:'Receita ou despesa',text:'Receita é o que você vai receber do cliente. Despesa é o que você vai pagar (fornecedores e custos).',tip:'Use categorias consistentes para facilitar a análise.'},
  {keepDialog:true,target:'#dynamicForm [name="dataReal"]',title:'Em aberto ou realizado',text:'Deixe a “Data realizada” em branco enquanto o valor não foi recebido ou pago — ele fica pendente. Preencha quando der baixa (não pode ser no futuro).',tip:'Você também pode dar baixa depois, direto na lista de lançamentos.'},
  {workspace:'Eventos',action:'eventHub',target:'[data-open-payplan]',title:'Receitas do cliente em um clique',text:'No hub do evento, “Plano de pagamento” gera o sinal e as parcelas como receitas pendentes — sem lançar uma por uma.',tip:'Você escolhe o %, o número de parcelas e quantos dias antes do evento vence a última — e pode ajustar a data de cada linha antes de gerar.'}
 ]},
 contract:{title:'Contratos e PDF',group:'Eventos',workspace:'Eventos',icon:'file-signature',minutes:6,description:'Crie contrato, revise dados e gere PDF personalizado com sua identidade.',steps:[
  {workspace:'Eventos',nav:'contratos',target:'[data-create="contract"]',title:'Crie o contrato',text:'Cadastre título, contratante, projeto/evento, valor, condições e objeto.',tip:'O contrato deve refletir a proposta aprovada.'},
  {action:'form:contract',target:'#formDialog',title:'Preencha o escopo',text:'O campo Objeto do contrato descreve o que está sendo contratado.',tip:'O modelo demonstrativo deve ser revisado juridicamente antes do uso comercial.'},
  {workspace:'Eventos',nav:'contratos',target:'[data-open-contract]',title:'Abra o contrato',text:'Depois de criado, abra o documento para revisar dados e status.',tip:'O PDF usa automaticamente a identidade cadastrada em Minha empresa / marca.'},
  {action:'contract',target:'[data-print="contract"]',title:'Gere o PDF',text:'Use Gerar PDF para abrir a versão pronta para impressão/salvamento.',tip:'No navegador, escolha “Salvar como PDF”.'}
 ]},
 business:{title:'Projetos e aplicativos',group:'Negócios',workspace:'Negócios',icon:'grid',minutes:5,description:'Organize produtos digitais, versão, saúde, roadmap e links de acesso.',steps:[
  {workspace:'Negócios',nav:'projetos',target:'[data-create="project"]',title:'Cadastre um projeto',text:'Use Projetos para apps, empresas, iniciativas ou produtos.',tip:'Cadastre a URL quando houver um site ou sistema online.'},
  {action:'form:project',target:'#formDialog',title:'Defina status e responsável',text:'Informe categoria, status, acesso, responsável e objetivo.',tip:'O status ajuda a separar ideia, desenvolvimento, teste e produção.'},
  {workspace:'Negócios',nav:'projetos',target:'[data-open-project]',title:'Abra o Hub do Produto',text:'O hub concentra saúde, versão atual, próxima versão e pendências.',tip:'A ideia é transformar este hub em cockpit completo do produto.'}
 ]},
 personal:{title:'Workspace Pessoal',group:'Pessoal',workspace:'Pessoal',icon:'user',minutes:5,description:'Separe objetivos, rotina, agenda, finanças e documentos dos dados profissionais.',steps:[
  {workspace:'Pessoal',nav:'dashboard',target:'#sideNav',title:'Um ambiente separado',text:'Ao entrar em Pessoal, menu, cor e funções mudam para não misturar vida pessoal e operação profissional.',tip:'No celular, use o botão de workspace no topo.'},
  {nav:'objetivos',target:'[data-create="personalGoal"]',title:'Crie objetivos pessoais',text:'Registre meta, área, prazo e progresso.',tip:'Use metas concretas e revisáveis.'},
  {nav:'rotina',target:'[data-create="routine"]',title:'Crie rotinas',text:'Rotinas funcionam como checklist recorrente para hábitos e obrigações.',tip:'Marque a rotina quando concluir.'},
  {nav:'agenda',target:'[data-create="appointment"]',title:'Organize compromissos',text:'Agenda guarda compromissos pessoais separados dos eventos do negócio.',tip:'Use data e horário para planejar a semana.'}
 ]},
 ideas:{title:'Workspace Ideias',group:'Ideias',workspace:'Ideias',icon:'lightbulb',minutes:6,description:'Estruture, valide e acompanhe ideias antes de transformar tudo em projeto.',steps:[
  {workspace:'Ideias',nav:'ideias',target:'[data-create="idea"]',title:'Registre a ideia',text:'Capture nome, problema, público, potencial, complexidade e próximo passo.',tip:'A ideia não precisa nascer perfeita; precisa ser registrada.'},
  {nav:'canvas',target:'.canvas-grid',title:'Estruture no Canvas',text:'Use os blocos para problema, público, proposta de valor, solução, receita, riscos e evidências.',tip:'Preencha antes de investir pesado em desenvolvimento.'},
  {nav:'validacao',target:'[data-create="validation"]',title:'Crie hipóteses',text:'Hipóteses deixam claro o que precisa ser verdade para a ideia funcionar.',tip:'Registre evidências em vez de confiar apenas em opinião.'},
  {nav:'decisoes',target:'[data-create="decision"]',title:'Registre decisões',text:'Documente o que foi decidido e por quê.',tip:'Isso cria memória do projeto e evita decisões perdidas em conversas.'}
 ]},
 security:{title:'Segurança e privacidade',group:'Administração',workspace:'Negócios',icon:'shield',minutes:4,description:'Veja como a senha de acesso protege os dados deste aparelho e o que está planejado para a versão comercial.',steps:[
  {workspace:'Negócios',nav:'seguranca',target:'.security-grid',title:'Arquitetura de segurança',text:'A tela resume MFA, isolamento multi-tenant, criptografia e arquivos privados.',tip:'Neste aparelho, a senha de acesso criptografa tudo o que você salva (Ajustes → Segurança). A arquitetura abaixo é o plano para a versão comercial na nuvem.'},
  {target:'.security-card:nth-child(2)',title:'Isolamento de organizações',text:'Na versão comercial, cada organização terá acesso apenas aos próprios dados via políticas de banco.',tip:'RLS é parte central da arquitetura multi-tenant.'},
  {target:'.security-card:nth-child(4)',title:'Arquivos privados',text:'Uploads reais deverão ficar em storage privado, com acesso autenticado e URLs temporárias.',tip:'Isso é especialmente importante para contratos, documentos e materiais de clientes.'}
 ]}
};

const tutorialGroups=['Comece aqui','Configuração','Eventos','Negócios','Pessoal','Ideias','Administração'];
let activeTutorialId=null,tutorialStepIndex=0,tutorialHighlighted=null;

function tutorialProgressMap(){return readJSON('r1_tutorial_progress',{})}
function saveTutorialDone(id){const p=tutorialProgressMap();p[id]={done:true,finishedAt:new Date().toISOString()};storage.setItem('r1_tutorial_progress',JSON.stringify(p))}
function tutorialCenterView(){
 const progress=tutorialProgressMap(),entries=Object.entries(tutorialFlows),done=entries.filter(([id])=>progress[id]?.done).length,pct=Math.round(done/entries.length*100);
 return `<section class="tutorial-hero"><div class="tutorial-intro"><span class="eyebrow">CENTRAL DE APRENDIZADO</span><h3>Aprenda fazendo — tela por tela.</h3><p>Escolha um tutorial e o sistema leva você até a função correta, destaca o botão e explica o que fazer. Você pode preencher os campos de verdade durante o passo a passo.</p><div class="tutorial-intro-actions"><button class="btn btn-primary" data-start-tutorial="essential"><span data-icon="play-circle"></span> Iniciar tour essencial</button><button class="btn btn-secondary" data-tutorial-reset style="width:auto;margin:0">Reiniciar progresso</button></div></div><div class="tutorial-progress-card"><h4>Seu progresso</h4><strong>${pct}%</strong><p>${done} de ${entries.length} tutoriais concluídos</p><div class="progress"><i style="width:${pct}%"></i></div></div></section>${tutorialGroups.map(group=>{const rows=entries.filter(([,t])=>t.group===group);if(!rows.length)return'';return `<div class="tutorial-section-head"><div><h3>${group}</h3><p>${group==='Comece aqui'?'Conheça a lógica geral antes de entrar nos módulos.':'Tutoriais guiados deste contexto.'}</p></div><span>${rows.length} tutorial${rows.length>1?'is':''}</span></div><div class="tutorial-grid">${rows.map(([id,t])=>`<article class="tutorial-card"><div class="tutorial-card-top"><div class="tutorial-card-icon"><span data-icon="${t.icon}"></span></div><span class="tutorial-card-status ${progress[id]?.done?'done':''}">${progress[id]?.done?'Concluído':'Disponível'}</span></div><h4>${t.title}</h4><p>${t.description}</p><div class="tutorial-card-meta"><span>${t.steps.length} passos</span><span>~${t.minutes} min</span><span>${t.workspace}</span></div><button class="btn btn-primary" data-start-tutorial="${id}"><span data-icon="play-circle"></span> ${progress[id]?.done?'Refazer passo a passo':'Iniciar passo a passo'}</button></article>`).join('')}</div>`}).join('')}`;
}

const views={projetos:projectsView,eventos:eventsView,clientes:clientsView,fornecedores:suppliersView,catalogo:catalogView,financeiro:()=>finView(currentWorkspace==='Negócios'?'Negócios':'Eventos'),apresentacoes:presentationsView,contratos:contractsView,estrategia:strategyView,administracao:adminView,seguranca:securityView,ideias:ideasView,objetivos:personalGoalsView,rotina:routineView,agenda:agendaView,'financas-pessoais':()=>finView('Pessoal'),'documentos-pessoais':personalDocsView,canvas:canvasView,validacao:validationView,'roadmap-ideias':ideaRoadmapView,decisoes:decisionsView};
let currentWorkspace='Negócios';
let current='dashboard',deferredPrompt=null,presentationAssets=[];

const defaultProfile={businessName:'RIZZIERI ONE • Codename',legalName:'Empresa / Profissional',document:'',phone:'(11) 99999-9999',email:'contato@empresa.com.br',address:'São Paulo • SP',website:'www.seusite.com.br',footer:'Documento emitido eletronicamente pelo ecossistema de gestão.',logo:''};
const memoryStore=globalThis.__r1StorageMemory||(globalThis.__r1StorageMemory={});
// ═══ Plano / licença (mesmo modelo do corsyncimoveis: teste 30 dias → leitura → bloqueio → código Pro por aparelho) ═══
const PLAN_TRIAL_DIAS=30,PLAN_LEITURA_DIAS=1,PLAN_AVISO_DIAS=5;
const PRO_WHATS='5515998293087';
const PRO_PLANS={1:'1 mês',6:'6 meses',12:'12 meses'};
const PLAN_BY_IDX={1:1,2:6,3:12};
const PRECOS_PRO={1:'R$ 90,00',6:'R$ 99,90',12:'R$ 179,90'};
// Chaves ligadas AO APARELHO: nunca cifradas, nunca vão pro backup, nunca voltam de um backup restaurado.
const R1_DEVICE_KEYS=['r1_auth','r1_lock_bad','r1_lock_until','r1_trial','r1_license','r1_devid','r1_used_codes'];
const R1_PLAN_KEEP=['r1_trial','r1_license','r1_devid','r1_used_codes'];// sobrevivem até ao "esqueci a senha / apagar tudo"
const R1_TRIAL_MARKS=['rizzieri_trial_used','rizzieri_tu2','rzTrial'];
const isPlainKey=k=>R1_DEVICE_KEYS.includes(k);
// Em somente-leitura, só estas chaves (dados do negócio) ficam travadas; configurações e o próprio plano seguem livres.
const PLAN_DATA_PREFIXES=['r1_extra_','r1_fin_v2','r1_finance_overrides','r1_event_catalog_','r1_event_tables_','r1_overrides_','r1_checklist_overrides','r1_checklist_groups','r1_timeline_overrides','r1_routine_overrides','r1_presentation_catalog_','r1_history','r1_agenda_reminders','r1_client_scores'];
const _encSeq={};

// ═══ Gerenciador das listas (renomear / ocultar / excluir) ═══
const _hid=k=>new Set(readJSON(k,[]));
const AJ_LISTS={
 eventTypes:{label:'tipo de evento',obj:true,special:['Outro'],
  names:()=>getEventTypes().map(t=>t.name),items:()=>getEventTypes().map(t=>({name:t.name,visible:t.visible})),
  usage:n=>getEvents().filter(e=>e.type===n).length,
  rewrite:(o,n)=>getEvents().filter(e=>e.type===o).forEach(e=>updateRecord('event',{id:e.id,type:n}))},
 supplierCategories:{label:'categoria de fornecedor',hiddenKey:'r1_hidden_supplier_categories',get:getSupplierCategories,save:saveSupplierCategories,
  usage:n=>getSuppliers().filter(x=>x.category===n).length,
  rewrite:(o,n)=>getSuppliers().filter(x=>x.category===o).forEach(x=>updateRecord('supplier',{id:x.id,category:n}))},
 catalogCategories:{label:'categoria de catálogo',hiddenKey:'r1_hidden_catalog_categories',get:getCatalogCategories,save:saveCatalogCategories,
  usage:n=>getCatalog().filter(x=>x.category===n).length,
  rewrite:(o,n)=>getCatalog().filter(x=>x.category===o).forEach(x=>updateRecord('catalog',{id:x.id,category:n}))},
 appointmentTypes:{label:'tipo de compromisso',hiddenKey:'r1_hidden_appointment_types',get:getAppointmentTypes,save:saveAppointmentTypes,
  usage:n=>getAppointments().filter(x=>x.type===n).length,
  rewrite:(o,n)=>getAppointments().filter(x=>x.type===o).forEach(x=>updateRecord('appointment',{id:x.id,type:n}))}
};
AJ_LISTS.supplierCategories.names=()=>getSupplierCategories();AJ_LISTS.catalogCategories.names=()=>getCatalogCategories();AJ_LISTS.appointmentTypes.names=()=>getAppointmentTypes();
['supplierCategories','catalogCategories','appointmentTypes'].forEach(k=>{const L=AJ_LISTS[k];L.items=()=>{const h=_hid(L.hiddenKey);return L.get().map(n=>({name:n,visible:!h.has(n)}))}});
const ajHidden=key=>{const L=AJ_LISTS[key];return L.hiddenKey?_hid(L.hiddenKey):new Set()};
function ajListRename(key,oldName,newName){
 const L=AJ_LISTS[key];newName=(newName||'').trim();
 const dup=L.names().find(n=>n.toLowerCase()===newName.toLowerCase()&&n!==oldName);
 const alvo=dup||newName;
 L.rewrite(oldName,alvo);
 if(L.obj){let arr=getEventTypes().slice();const iDup=arr.findIndex(t=>t.name===dup);const i=arr.findIndex(t=>t.name===oldName);if(dup&&i>=0){arr.splice(i,1)}else if(i>=0){arr[i]={...arr[i],name:newName}}saveEventTypes(arr)}
 else{let arr=L.get().slice();const i=arr.indexOf(oldName);if(dup){arr.splice(i,1)}else{arr[i]=newName}L.save(arr);
  const h=_hid(L.hiddenKey);if(h.has(oldName)){h.delete(oldName);if(!dup)h.add(newName);storage.setItem(L.hiddenKey,JSON.stringify([...h]))}}
 return alvo;
}
function ajListDelete(key,name,reatribuirPara){
 const L=AJ_LISTS[key];
 if(L.usage(name)>0&&reatribuirPara)L.rewrite(name,reatribuirPara);
 if(L.obj){saveEventTypes(getEventTypes().filter(t=>t.name!==name))}
 else{L.save(L.get().filter(n=>n!==name));const h=_hid(L.hiddenKey);if(h.delete(name))storage.setItem(L.hiddenKey,JSON.stringify([...h]))}
}
function ajListToggleHide(key,name){
 const L=AJ_LISTS[key];
 if(L.obj){const arr=getEventTypes().slice(),i=arr.findIndex(t=>t.name===name);if(i>=0){arr[i]={...arr[i],visible:!arr[i].visible};saveEventTypes(arr)}return}
 const h=_hid(L.hiddenKey);if(h.has(name))h.delete(name);else h.add(name);storage.setItem(L.hiddenKey,JSON.stringify([...h]));
}

function ajListDialog(mode,key,name){
 const L=AJ_LISTS[key],n=L.usage(name);
 $('#ajListErr').textContent='';
 const inp=$('#ajListInput'),selW=$('#ajListSelWrap'),inW=$('#ajListInputWrap'),ok=$('#ajListOk');
 if(mode==='rename'){
  $('#ajListTitle').textContent='Renomear '+L.label;inW.style.display='';selW.style.display='none';inp.value=name;
  $('#ajListText').textContent=n?`${n} registro(s) usam "${name}" e passam a usar o novo nome. Se já existir um item com o nome novo, os dois são mesclados.`:`Nenhum registro usa "${name}" ainda.`;
  ok.textContent='Salvar nome';
  ok.onclick=()=>{const nn=inp.value.trim();if(!nn){$('#ajListErr').textContent='Digite o nome.';return}if(nn===name){$('#ajListDialog').close();return}ajListRename(key,name,nn);$('#ajListDialog').close();toast('Renomeado.');ajRefresh()};
 }else{
  const outros=L.names().filter(x=>x!==name);
  $('#ajListTitle').textContent='Excluir '+L.label;inW.style.display='none';
  if(n>0){
   selW.style.display='';$('#ajListSelect').innerHTML=outros.map(x=>`<option>${finEsc(x)}</option>`).join('');
   $('#ajListText').textContent=outros.length?`${n} registro(s) usam "${name}". Escolha para qual item eles passam antes de excluir.`:`${n} registro(s) usam "${name}" e não há outro item pra onde passá-los. Cadastre outro item primeiro (ou use 🚫 pra esconder).`;
   ok.disabled=!outros.length;
  }else{selW.style.display='none';$('#ajListText').textContent=`Excluir "${name}"? Nenhum registro usa esse item.`;ok.disabled=false}
  ok.textContent='Excluir';
  ok.onclick=()=>{const alvo=n>0?$('#ajListSelect').value:null;if(n>0&&!alvo)return;ajListDelete(key,name,alvo);$('#ajListDialog').close();toast('Excluído.');ajRefresh()};
 }
 $('#ajListDialog').showModal();
 if(mode==='rename')setTimeout(()=>{inp.focus();inp.select()},50);
}

// ═══ Importar convidados de planilha ═══
const gsNorm=x=>String(x==null?'':x).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function gsParseDelimited(t,d){
 const rows=[];let row=[],cell='',q=false;
 for(let i=0;i<t.length;i++){
  const c=t[i];
  if(q){if(c==='"'){if(t[i+1]==='"'){cell+='"';i++}else q=false}else cell+=c}
  else if(c==='"'&&cell==='')q=true;
  else if(d&&c===d){row.push(cell);cell=''}
  else if(c==='\n'){row.push(cell);rows.push(row);row=[];cell=''}
  else cell+=c;
 }
 row.push(cell);rows.push(row);
 return rows.map(r=>r.map(x=>x.trim())).filter(r=>r.some(x=>x!==''));
}
function gsStatus(v){const n=gsNorm(v);if(!n)return 'Pendente';if(/pend|aguard|talvez|nao confirm|sem resposta|\?/.test(n))return 'Pendente';if(/^(nao|n)\b|recus|declin|nao vai|cancel/.test(n))return 'Recusado';if(/conf|^sim$|^s$|vai|presente|ok|yes/.test(n))return 'Confirmado';return 'Pendente'}
// Lê o texto colado/arquivo e devolve {rows:[{name,phone,table,status}],temCabecalho,delim,ignoradas}
function parseGuestSheet(text){
 const t=String(text||'').replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n').trim();
 if(!t)return{rows:[],temCabecalho:false,delim:'',ignoradas:0};
 const first=t.split('\n')[0],n=ch=>first.split(ch).length-1;
 const delim=n('\t')>0?'\t':(n(';')>0&&n(';')>=n(','))?';':n(',')>0?',':'';
 const grid=gsParseDelimited(t,delim);
 const hdr=grid[0].map(gsNorm);
 const idx=rx=>hdr.findIndex(h=>rx.test(h));
 let cN=idx(/^(nome|name|convidado|convidados|pessoa)/),cT=idx(/(tel|fone|whats|celular|contato)/),cM=idx(/(mesa|table)/),cS=idx(/(status|situacao|confirm|presenca|rsvp)/);
 const temCabecalho=cN>=0;
 if(!temCabecalho&&(cT>=0||cM>=0||cS>=0))return{rows:[],temCabecalho:true,delim,ignoradas:0,semNome:true};// tem cabeçalho (Telefone/Mesa/Status) mas nenhuma coluna de nome
 if(!temCabecalho){cN=0;cT=grid[0].length>1?1:-1;cM=grid[0].length>2?2:-1;cS=grid[0].length>3?3:-1}
 const body=temCabecalho?grid.slice(1):grid;
 let ignoradas=0;const rows=[];
 body.forEach(r=>{
  const name=(r[cN]||'').trim();
  if(!name){ignoradas++;return}
  rows.push({name,phone:cT>=0?(r[cT]||'').trim():'',table:cM>=0?(r[cM]||'').trim():'',status:cS>=0?gsStatus(r[cS]):'Pendente'});
 });
 return{rows,temCabecalho,delim,ignoradas};
}
// Separa o que é novo do que já existe (mesmo nome, ignorando acento/maiúscula) ou se repete na própria planilha
function guestImportPlan(eventId,parsed){
 const jaTem=new Set(getGuests(eventId).map(g=>gsNorm(g.name)));
 const vistos=new Set();const novos=[],repetidos=[];
 parsed.rows.forEach(r=>{const k=gsNorm(r.name);if(jaTem.has(k)||vistos.has(k))repetidos.push(r);else{vistos.add(k);novos.push(r)}});
 return{novos,repetidos};
}
let _giEvent='';
function guestImportRefresh(){
 const parsed=parseGuestSheet($('#giText').value);const pv=$('#giPreview'),ok=$('#giOk');
 if(!parsed.rows.length){pv.innerHTML=$('#giText').value.trim()?'<span style="color:#c0392b;font-weight:700">Não encontrei nenhum nome. Confira se a coluna "Nome" está na planilha.</span>':'';ok.disabled=true;ok.textContent='Importar';return null}
 const pl=guestImportPlan(_giEvent,parsed);
 const amostra=pl.novos.slice(0,6).map(r=>`<tr><td>${finEsc(r.name)}</td><td>${finEsc(r.phone||'—')}</td><td>${finEsc(r.table||giDefTable()||'—')}</td><td>${r.status}</td></tr>`).join('');
 pv.innerHTML=`<div><b>${pl.novos.length}</b> novo(s) para importar${pl.repetidos.length?` • <b>${pl.repetidos.length}</b> já existe(m) ou repete(m) — serão ignorados`:''}${parsed.ignoradas?` • ${parsed.ignoradas} linha(s) sem nome ignorada(s)`:''}</div><div style="font-size:11px;color:#6b7a93;margin:2px 0 6px">${parsed.temCabecalho?'Cabeçalho reconhecido.':'Sem cabeçalho: usei as colunas na ordem Nome, Telefone, Mesa, Status.'}</div>${pl.novos.length?`<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:12px"><tr style="text-align:left;color:#6b7a93"><th>Nome</th><th>Telefone</th><th>Mesa</th><th>Status</th></tr>${amostra}</table>${pl.novos.length>6?`<small style="color:#6b7a93">…e mais ${pl.novos.length-6}</small>`:''}</div>`:''}`;
 ok.disabled=!pl.novos.length;ok.textContent=pl.novos.length?`Importar ${pl.novos.length} convidado(s)`:'Nada novo para importar';
 return pl;
}
function openGuestImport(eventId){
 _giEvent=eventId;$('#giTableBox').innerHTML=tableChooserHTML({id:'giTable',eventId});wireTableChoosers($('#giTableBox'));$('#giTableBox [data-table-chooser]')._onChange=guestImportRefresh;$('#giText').value='';$('#giPreview').innerHTML='';$('#giFileName').textContent='';$('#giFile').value='';
 $('#giOk').disabled=true;$('#giOk').textContent='Importar';$('#guestImportDialog').showModal();
}
function doGuestImport(){
 const pl=guestImportRefresh();if(!pl||!pl.novos.length)return;
 const chEl=$('#giTableBox [data-table-chooser]'),ch=chEl?tableChosenValue(chEl):{ok:true,table:''};if(!ch.ok){toast(ch.msg);if(ch.focus)ch.focus.focus();return}
 if(ch.table)ensureEventTable(_giEvent,ch.table);
 pl.novos.forEach((r,i)=>saveExtra('r1_extra_guests',{id:`guest-${Date.now()}-${i}`,eventId:_giEvent,name:r.name,status:r.status,phone:r.phone,table:r.table||ch.table}));
 $('#guestImportDialog').close();
 toast(`${pl.novos.length} convidado(s) importado(s)${pl.repetidos.length?` • ${pl.repetidos.length} repetido(s) ignorado(s)`:''}.`);
 openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(_giEvent),'eventos');
}
function guestImportFile(file){
 if(!file)return Promise.resolve();
 $('#giFileName').textContent=file.name;
 if(/\.xlsx?$/i.test(file.name)){$('#giPreview').innerHTML='<span style="color:#c0392b;font-weight:700">Arquivos Excel (.xlsx) não abrem aqui. Na planilha, use Arquivo → Baixar → CSV — ou copie as células e cole na caixa acima.</span>';$('#giOk').disabled=true;return Promise.resolve()}
 return file.text().then(t=>{$('#giText').value=t;guestImportRefresh()});
}

// ═══ Histórico de alterações de preço e orçamento ═══
const HIST_KEY='r1_history';
const getHistory=()=>readJSON(HIST_KEY,[]);
function histLog(e){const arr=getHistory();arr.unshift({id:'h-'+Date.now()+'-'+Math.floor(Math.random()*1e4),ts:new Date().toISOString(),...e});storage.setItem(HIST_KEY,JSON.stringify(arr.slice(0,500)))}
function histEventsOf(catalogId){try{return getEvents().filter(e=>getEventCatalog(e.id).includes(catalogId)).map(e=>({id:e.id,name:e.title}))}catch(e){return[]}}
function histTrack(type,obj){
 try{
  const cfg={event:{get:getEvents,field:'budget',label:'Orçamento previsto',kind:'orcamento',money:true,name:r=>r.title},
   catalog:{get:getCatalog,field:'price',label:'Preço de referência',kind:'preco',money:true,name:r=>r.name},
   supplier:{get:getSuppliers,field:'price',label:'Referência de preço',kind:'preco',money:false,name:r=>r.name}}[type];
  if(!cfg||!obj||!(cfg.field in obj))return;
  const old=cfg.get().find(x=>x.id===obj.id);if(!old)return;
  const a=cfg.money?Number(old[cfg.field]||0):String(old[cfg.field]==null?'':old[cfg.field]).trim();
  const b=cfg.money?Number(obj[cfg.field]||0):String(obj[cfg.field]==null?'':obj[cfg.field]).trim();
  if(a===b)return;
  histLog({kind:cfg.kind,refType:type,refId:obj.id,refName:cfg.name(old),field:cfg.label,from:a,to:b,money:cfg.money,eventId:type==='event'?obj.id:'',eventName:type==='event'?String(obj.title||old.title||''):'',events:type==='catalog'?histEventsOf(obj.id):[]});
 }catch(e){}
}
function histTrackFin(entry){
 try{
  if(!entry||!entry.id)return;const old=finAll().find(x=>x.id===entry.id);
  if(!old||Number(old.valorCent)===Number(entry.valorCent))return;
  histLog({kind:'financeiro',refType:'finance',refId:entry.id,refName:entry.descricao||entry.categoria||'Lançamento',field:'Valor do lançamento',from:Number(old.valorCent)/100,to:Number(entry.valorCent)/100,money:true,eventId:entry.eventId||'',eventName:(getEvents().find(x=>x.id===entry.eventId)||{}).title||''});
 }catch(e){}
}
function histPred(spec){
 const[kind,id]=String(spec||'all').split('::');
 if(kind==='event'){const sel=getEventCatalog(id),evx=getEvents().find(x=>x.id===id),ult=getHistory().find(h=>h.eventId===id&&h.eventName);return{title:'Histórico do evento',name:(evx&&evx.title)||(ult&&ult.eventName)||'Evento',pred:h=>h.eventId===id||(h.events||[]).some(x=>x.id===id)||(h.refType==='catalog'&&sel.includes(h.refId)),sub:'Orçamento previsto, preços dos itens escolhidos e valores de lançamentos deste evento.'}}
 if(kind==='supplier'){const nm=(getSuppliers().find(x=>x.id===id)||{}).name;const ids=getCatalog().filter(c=>c.supplier===nm).map(c=>c.id);return{title:'Histórico do fornecedor',pred:h=>(h.refType==='supplier'&&h.refId===id)||(h.refType==='catalog'&&ids.includes(h.refId)),sub:`${nm||''}: referência de preço e preços dos itens do catálogo ligados a ele.`}}
 if(kind==='kind')return{title:id==='orcamento'?'Histórico de orçamentos':'Histórico de preços',pred:h=>h.kind===id,sub:''};
 return{title:'Histórico de alterações',pred:()=>true,sub:'Tudo que mudou em orçamentos, preços e valores lançados.'};
}
function historyView(spec){
 const f=histPred(spec),rows=getHistory().filter(f.pred);
 const val=(h,v)=>h.money?moneyApp(v):(finEsc(v)||'—');
 const delta=h=>{if(!h.money||!Number(h.from))return '';const d=Number(h.to)-Number(h.from),pc=Math.round(d/Number(h.from)*100);return `<span class="${d>0?'hist-up':'hist-down'}">${d>0?'▲':'▼'} ${moneyApp(Math.abs(d))} (${pc>0?'+':''}${pc}%)</span>`};
 const ico={orcamento:'💰',preco:'🏷️',financeiro:'◈'};
 const own=f.name!==undefined,evTag=h=>{if(own)return '';const u=[...new Set([...(h.eventName?[h.eventName]:[]),...(h.events||[]).map(x=>x.name)])].filter(Boolean);return u.length?` <small class="hist-ev">• Evento: ${u.map(finEsc).join(', ')}</small>`:''};
 return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">${own?'HISTÓRICO DO EVENTO':'HISTÓRICO'}</span><h3>${own?finEsc(f.name):f.title}</h3><p>${f.sub}</p></div></div><div class="panel">${rows.length?rows.map(h=>`<div class="hist-row"><div><b>${ico[h.kind]||'•'} ${finEsc(h.refName)}</b> <small>• ${finEsc(h.field)}</small>${evTag(h)}</div><div style="margin-top:3px">${val(h,h.from)} <b>→</b> <b>${val(h,h.to)}</b> ${delta(h)}</div><small>${new Date(h.ts).toLocaleString('pt-BR')}</small></div>`).join(''):'<p style="color:#6b7a93;margin:0">Nenhuma alteração registrada ainda. Quando você mudar um orçamento ou um preço, o antes e o depois aparecem aqui.</p>'}</div>`;
}
function openHistory(spec){const f=histPred(spec);openSubView(f.title,'HISTÓRICO',()=>historyView(spec),'dashboard')}

// ═══ Comparar fornecedores lado a lado ═══
const _cmpSel=new Set();
function supplierCompareView(ids){
 const sups=ids.map(id=>getSuppliers().find(x=>x.id===id)).filter(Boolean);
 const cat=getCatalog(),hist=getHistory();
 const info=sups.map(s=>{const its=cat.filter(c=>c.supplier===s.name),pr=its.map(c=>Number(c.price||0)).filter(v=>v>0);const uh=hist.find(h=>(h.refType==='supplier'&&h.refId===s.id)||(h.refType==='catalog'&&its.some(c=>c.id===h.refId)));return{s,its,min:pr.length?Math.min(...pr):null,max:pr.length?Math.max(...pr):null,uh}});
 const best=(fn,dir)=>{const v=info.map(fn);const ok=v.filter(x=>x!=null&&!isNaN(x));if(ok.length<2)return [];const t=dir==='max'?Math.max(...ok):Math.min(...ok);if(ok.filter(x=>x===t).length===ok.length)return [];return v.map((x,i)=>x===t?i:-1).filter(i=>i>=0)};
 const bR=best(i=>Number(i.s.rating||0),'max'),bE=best(i=>Number(i.s.events||0),'max'),bP=best(i=>i.min,'min');
 const row=(label,fn,bi=[])=>`<tr><th class="cmp-row">${label}</th>${info.map((i,k)=>`<td class="${bi.includes(k)?'cmp-best':''}">${fn(i)}</td>`).join('')}</tr>`;
 const wa=p=>{const d=onlyDigits(p||'');return d.length>=10?`<a href="https://wa.me/${d.length<=11?'55'+d:d}" target="_blank" rel="noopener">${finEsc(p)}</a>`:finEsc(p||'—')};
 return `<button class="link-btn" data-back>← Voltar aos fornecedores</button><div class="section-title"><div><span class="eyebrow">COMPARAR FORNECEDORES</span><h3>${sups.map(x=>finEsc(x.name)).join(' × ')}</h3><p>Lado a lado, com o melhor de cada linha destacado.</p></div></div><div class="panel"><div class="cmp-wrap"><table class="cmp-table"><tr><th class="cmp-row"></th>${info.map(i=>`<th><b>${finEsc(i.s.name)}</b></th>`).join('')}</tr>
 ${row('Categoria',i=>finEsc(i.s.category))}${row('Status',i=>finEsc(i.s.status||'—'))}${row('Avaliação',i=>`<b>★ ${i.s.rating||0}</b>`,bR)}${row('Eventos realizados',i=>`<b>${i.s.events||0}</b>`,bE)}${row('Referência de preço',i=>finEsc(i.s.price||'—'))}${row('Itens no catálogo',i=>i.its.length?`${i.its.length} item(ns)<br><small>${i.min===i.max?moneyApp(i.min):moneyApp(i.min)+' a '+moneyApp(i.max)}</small>`:'—')}${row('Menor preço do catálogo',i=>i.min!=null?`<b>${moneyApp(i.min)}</b>`:'—',bP)}${row('Contato',i=>finEsc(i.s.contact||'—'))}${row('WhatsApp',i=>wa(i.s.phone))}${row('E-mail',i=>finEsc(i.s.email||'—'))}${row('Fornecedor desde',i=>i.s.createdAt?finBR(i.s.createdAt):'—')}${row('Última mudança de preço',i=>i.uh?`${finEsc(i.uh.refName)}: ${i.uh.money?moneyApp(i.uh.from)+' → '+moneyApp(i.uh.to):finEsc(i.uh.from)+' → '+finEsc(i.uh.to)}<br><small>${new Date(i.uh.ts).toLocaleDateString('pt-BR')}</small>`:'<small>sem alterações</small>')}${row('Observações',i=>finEsc(i.s.notes||'—'))}
 </table></div></div>`;
}
function cmpUpdateBar(){
 const b=$('#supCompareBtn');if(!b)return;const n=_cmpSel.size;
 b.textContent=`⚖️ Comparar (${n})`;b.disabled=n<2;
}

// ═══ Orçamento / proposta de reserva em PDF ═══
// ═══ Plano de pagamento (fechar a reserva): sinal + parcelas → receitas pendentes do evento ═══
function payPlanBase(e){ // mesma regra da proposta: total dos itens escolhidos; sem itens, o orçamento previsto
 const cat=getCatalog(),ids=getEventCatalog(e.id);
 const porPessoa=u=>/pessoa|convidado|cabe[cç]a/i.test(String(u||''));
 const total=ids.map(id=>cat.find(c=>c.id===id)).filter(Boolean).reduce((a,c)=>a+Number(c.price||0)*(porPessoa(c.unit)?Math.max(1,Number(e.guests||0)):1),0);
 return total>0?total:Number(e.budget||0);
}
function payPlanCompute(e,o){
 const totalC=Math.round(Number(o.totalCent)||0),pct=Number(o.sinalPct),n=Math.floor(Number(o.parcelas)),dias=Math.floor(Number(o.diasAntes));
 if(!(totalC>0))return {erro:'Informe o valor total do contrato.'};
 if(!(pct>=0&&pct<=100))return {erro:'O sinal deve estar entre 0% e 100%.'};
 if(!o.sinalData)return {erro:'Informe o vencimento do sinal.'};
 if(pct<100&&!(n>=1&&n<=12))return {erro:'Use de 1 a 12 parcelas.'};
 if(pct<100&&!(dias>=0))return {erro:'Informe quantos dias antes do evento vence a última parcela.'};
 const sinalC=Math.round(totalC*pct/100),saldo=totalC-sinalC,linhas=[],avisos=[];
 if(sinalC>0)linhas.push({key:'sinal',cat:'Sinal',desc:`Sinal (${pct}%)`,data:o.sinalData,cent:sinalC});
 if(saldo>0){
  let ultima=finAddDays(e.date,-dias);
  if(ultima<o.sinalData){ultima=o.sinalData;avisos.push('O evento está perto: as parcelas vencem na mesma data do sinal.')}
  const base=Math.floor(saldo/n);
  for(let k=1;k<=n;k++){
   let d=finAddMonths(ultima,-(n-k));
   if(d<o.sinalData){d=o.sinalData;if(!avisos.some(a=>/não cabem/.test(a)))avisos.push('Algumas parcelas não cabem em intervalos de 1 mês e vencem junto do sinal.')}
   linhas.push({key:'p'+k+'of'+n,cat:'Parcela',desc:`Parcela ${k}/${n}`,data:d,cent:k===n?saldo-base*(n-1):base});
  }
 }
 const ov=o.ov||{};let manuais=0;
 linhas.forEach(l=>{const v=ov[l.key];if(v&&/^\d{4}-\d{2}-\d{2}$/.test(v)){if(v!==l.data)manuais++;l.data=v;l.manual=true}});
 linhas.forEach((l,i)=>{if(l.data>e.date)avisos.push(`${l.desc}: vence depois do evento (${finBR(e.date)}).`);if(i>0&&l.data<linhas[i-1].data)avisos.push(`${l.desc}: está antes da linha anterior.`)});
 return {linhas,totalC,avisos,manuais};
}
let _ppMode='gen',_ppEx=null,_ppDel=new Set(),_ppDelOk=false,_ppEscolheu=false,_ppConfirm=false;
function payPlanExLines(e){return finAll().filter(x=>x.tipo==='rec'&&x.eventId===e.id).slice().sort((a,b)=>String(a.data).localeCompare(String(b.data)))}
function payPlanSetMode(){
 const ex=_ppMode==='exist',sh=(id,on)=>{const el=$('#'+id);if(el)el.style.display=on?'':'none'};
 sh('ppExisting',ex);sh('ppExList',ex&&!_ppEscolheu);sh('ppAsk',ex&&!_ppEscolheu);
 $$('#payPlanDialog .pp-gen').forEach(x=>x.style.display=ex?'none':'');
 sh('ppForm',!ex||_ppEscolheu);
 const lb=$('#ppParcLabel');if(lb)lb.textContent=ex?'Parcelas do saldo em aberto (0 a 12)':'Parcelas do saldo (1 a 12)';
 sh('ppGerar',!ex);sh('ppRevisar',ex&&_ppEscolheu&&!_ppConfirm);sh('ppGravar',ex&&_ppConfirm);sh('ppVoltarEdit',ex&&_ppConfirm);
 sh('ppConfirm',ex&&_ppConfirm);sh('ppPreview',!(ex&&(_ppConfirm||!_ppEscolheu)));
 if(ex){const w=$('#ppExistWrap');if(w)w.style.display='none'}
}
function payPlanExStart(e,lin){
 _ppMode='exist';_ppEscolheu=false;_ppConfirm=false;_ppDel=new Set();_ppDelOk=false;_ppOv={};
 const open=lin.filter(x=>!x.dataReal&&x.categoria!=='Sinal');
 _ppEx={e,lines:lin,open,curTotalC:lin.reduce((a,x)=>a+Number(x.valorCent),0),delFor:0};
 $('#ppTotal').value=finFmtNum(_ppEx.curTotalC);$('#ppParcelas').value=open.length;$('#ppErr').textContent='';
 payPlanSetMode();
}
function payPlanExCompute(){
 const st=_ppEx,e=st.e,hoje=finLocalISO();
 const totalC=Math.round(Number(finParseMoeda($('#ppTotal').value))||0),n=Math.floor(Number($('#ppParcelas').value));
 const open=st.open,fixos=st.lines.filter(x=>!open.includes(x)),fixosC=fixos.reduce((a,x)=>a+Number(x.valorCent),0);
 if(!(totalC>0))return{erro:'Informe o valor total do contrato.'};
 if(!(n>=0&&n<=12))return{erro:'Use de 0 a 12 parcelas em aberto.'};
 const D=totalC-fixosC;
 if(D<0)return{erro:`O total do contrato (${moneyApp(totalC/100)}) é menor que o valor já recebido ou lançado fora das parcelas em aberto (${moneyApp(fixosC/100)}).`};
 if(n===0&&D>0)return{erro:`Com 0 parcelas ficam ${moneyApp(D/100)} sem lançar. Use pelo menos 1 parcela ou ajuste o total.`};
 if(n>0&&D===0)return{erro:'O total do contrato já está todo lançado — não há saldo para parcelar. Aumente o valor total para incluir parcelas.'};
 const needDel=Math.max(0,open.length-n);
 if(st.delFor!==needDel){_ppDel=new Set();_ppDelOk=false;st.delFor=needDel}
 const fase=needDel>0&&!_ppDelOk?'excluir':'ok',excl=new Set(needDel>0&&_ppDelOk?[..._ppDel]:[]);
 const manter=needDel>0&&_ppDelOk?open.filter(x=>!excl.has(x.id)):open,novas=Math.max(0,n-open.length);
 const mudou=totalC!==st.curTotalC||n!==open.length,rParc=st.lines.filter(x=>x.categoria==='Parcela'&&x.dataReal).length,M=rParc+n;
 const base=n>0?Math.floor(D/n):0,cents=i=>mudou?(i===n-1?D-base*(n-1):base):null;
 const mk=(l,extra)=>({id:l.id,data:(!l.dataReal&&_ppOv[l.id])||l.data,desc:l.descricao,cent:Number(l.valorCent),recebida:!!l.dataReal,dataReal:l.dataReal||'',old:{data:l.data,cent:Number(l.valorCent),desc:l.descricao},...extra});
 const rows=fixos.map(l=>mk(l,{fixo:true}));
 if(fase==='excluir'){open.forEach(l=>rows.push(mk(l,{sel:_ppDel.has(l.id)})))}
 else{
  manter.forEach((l,i)=>{const c=cents(i),plano=/^Parcela \d+\/\d+$/.test(l.descricao||'');rows.push(mk(l,{desc:plano?`Parcela ${rParc+i+1}/${M}`:l.descricao,cent:c==null?Number(l.valorCent):c}))});
  const ultima=[...open,...fixos].map(x=>x.data).sort().pop()||hoje;
  for(let k=0;k<novas;k++){const i=manter.length+k,key='new'+(k+1);rows.push({id:null,key,novo:true,data:_ppOv[key]||finAddMonths(ultima,k+1),desc:`Parcela ${rParc+i+1}/${M}`,cent:cents(i),old:null})}
 }
 rows.sort((a,b)=>String(a.data).localeCompare(String(b.data)));
 const avisos=[];rows.forEach(r=>{if(!r.recebida&&r.data>e.date)avisos.push(`${r.desc}: vence depois do evento (${finBR(e.date)}).`)});
 const alterar=[],incluir=[],excluir=[];
 if(fase==='ok'){rows.forEach(r=>{if(r.novo)incluir.push(r);else if(!r.recebida&&r.old&&(r.data!==r.old.data||r.cent!==r.old.cent||r.desc!==r.old.desc))alterar.push(r)});open.filter(x=>excl.has(x.id)).forEach(x=>excluir.push({id:x.id,data:x.data,cent:Number(x.valorCent),desc:x.descricao}))}
 return{rows,avisos,fase,needDel,totalC,D,n,M,open,resumo:{alterar,incluir,excluir}};
}
function payPlanExTable(r){
 const hoje=finLocalISO(),L=_ppEx.lines;
 const stOf=x=>x.recebida?{k:'recebida',bg:'#eafbf1',fg:'#1f8a4c',tag:'✓ Recebida'+(x.dataReal?' em '+finBR(x.dataReal):'')}:(x.data<hoje?{k:'atrasada',bg:'#fdecec',fg:'#c0392b',tag:'⚠ Atrasada'}:{k:'aberta',bg:'',fg:'',tag:x.novo?'＋ Nova':'Em aberto'});
 const td='padding:4px 6px;border-bottom:1px solid #eef1f5';
 const tr=x=>{const s=stOf(x),mudou=x.old&&x.old.cent!==x.cent;
  const dt=x.recebida?finBR(x.data):`<input type="date" data-pp-date="${x.id||x.key}" value="${x.data}" aria-label="Data: ${finEsc(x.desc)}" style="width:100%;max-width:150px;font-size:12.5px;padding:3px 4px;margin:0${_ppOv[x.id||x.key]?';border-color:#c47a3a':''}">`;
  return `<tr data-pp-status="${s.k}"${x.novo?' data-pp-new':''} style="background:${s.bg};color:${s.fg}"><td style="${td}">${dt}</td><td style="${td}">${finEsc(x.desc)}<div class="pp-st">${s.tag}</div></td><td style="${td};text-align:right">${mudou?`<s style="opacity:.6">${moneyApp(x.old.cent/100)}</s><br>`:''}<b>${moneyApp(x.cent/100)}</b></td>${r.fase==='excluir'&&!x.fixo?`<td style="${td}"><button type="button" class="small-btn" data-pp-del="${x.id}" aria-pressed="${!!x.sel}">${x.sel?'Excluir: Sim':'Excluir: Não'}</button></td>`:(r.fase==='excluir'?`<td style="${td}"></td>`:'')}</tr>`};
 const soma=r.rows.reduce((a,x)=>a+x.cent,0);
 let h=`<table style="width:100%;border-collapse:collapse;font-size:12.5px">${r.rows.map(tr).join('')}<tr><td colspan="2" style="padding:6px"><b>Total</b></td><td style="padding:6px;text-align:right"><b>${moneyApp(soma/100)}</b></td>${r.fase==='excluir'?'<td></td>':''}</tr></table>`;
 const nOv=Object.keys(_ppOv).length;
 h+=`<div style="font-size:11.5px;color:#6b7a93;margin-top:6px">Recebidas ficam em verde, atrasadas em vermelho. Toque numa data para ajustá-la.${nOv?` <button type="button" class="link-btn" id="ppResetDatas">↺ Voltar às datas originais (${nOv})</button>`:''}</div>`;
 if(r.fase==='excluir')h+=`<div style="margin-top:8px;background:#fdf1e3;border:1px solid #eccb9c;border-radius:10px;padding:8px 10px;font-size:12.5px;color:#a15b1f">Você reduziu de ${r.open.length} para ${r.n} parcela(s). Marque <b>${r.needDel}</b> parcela(s) com <b>Excluir: Sim</b> (marcadas: ${_ppDel.size}).<div style="margin-top:6px"><button type="button" class="btn btn-secondary" id="ppConfirmDel" style="width:auto"${_ppDel.size===r.needDel?'':' disabled'}>Confirmar exclusão</button></div></div>`;
 else if(r.resumo.excluir.length)h+=`<div style="margin-top:8px;font-size:12px;color:#c0392b">Serão excluídas: ${r.resumo.excluir.map(x=>`${finEsc(x.desc)} (${moneyApp(x.cent/100)})`).join(', ')} — os valores das parcelas restantes foram recalculados. <button type="button" class="link-btn" id="ppUndoDel">↩ Desfazer</button></div>`;
 h+=r.avisos.map(a=>`<div style="color:#a15b1f;margin-top:4px">⚠️ ${finEsc(a)}</div>`).join('');
 return h;
}
function payPlanExRefresh(){
 if(!_ppEx)return;const hoje=finLocalISO(),L=_ppEx.lines,sum=f=>L.filter(f).reduce((a,x)=>a+Number(x.valorCent),0);
 const td='padding:4px 6px;border-bottom:1px solid #eef1f5';
 $('#ppExList').innerHTML=`<div style="font-size:13px;font-weight:700;margin-bottom:4px">Parcelas deste evento (${L.length})</div><table style="width:100%;border-collapse:collapse;font-size:12.5px">${L.map(x=>{const rec=!!x.dataReal,atr=!rec&&x.data<hoje,k=rec?'recebida':atr?'atrasada':'aberta';return `<tr data-pp-status="${k}" style="background:${rec?'#eafbf1':atr?'#fdecec':''};color:${rec?'#1f8a4c':atr?'#c0392b':''}"><td style="${td}">${finBR(x.data)}</td><td style="${td}">${finEsc(x.descricao)}<div class="pp-st">${rec?'✓ Recebida em '+finBR(x.dataReal):atr?'⚠ Atrasada':'Em aberto'}</div></td><td style="${td};text-align:right"><b>${moneyApp(Number(x.valorCent)/100)}</b></td></tr>`}).join('')}</table><div style="display:flex;gap:10px;flex-wrap:wrap;margin:8px 0;font-size:12.5px"><span style="color:#1f8a4c">✓ Recebido ${moneyApp(sum(x=>x.dataReal)/100)}</span><span style="color:#c0392b">⚠ Atrasado ${moneyApp(sum(x=>!x.dataReal&&x.data<hoje)/100)}</span><span>Em aberto ${moneyApp(sum(x=>!x.dataReal&&x.data>=hoje)/100)}</span><b>Total ${moneyApp(sum(()=>true)/100)}</b></div>`;
 if(!_ppEscolheu)return;
 const r=payPlanExCompute();
 if(r.erro){$('#ppPreview').innerHTML='';$('#ppErr').textContent=r.erro;$('#ppRevisar').disabled=true;return}
 $('#ppErr').textContent='';$('#ppPreview').innerHTML=payPlanExTable(r);
 $$('#ppPreview [data-pp-date]').forEach(inp=>inp.onchange=()=>{const k=inp.dataset.ppDate,v=inp.value;if(/^\d{4}-\d{2}-\d{2}$/.test(v))_ppOv[k]=v;else delete _ppOv[k];payPlanExRefresh()});
 $$('#ppPreview [data-pp-del]').forEach(b=>b.onclick=()=>{const id=b.dataset.ppDel;if(_ppDel.has(id))_ppDel.delete(id);else _ppDel.add(id);payPlanExRefresh()});
 const cd=$('#ppConfirmDel');if(cd)cd.onclick=()=>{if(_ppDel.size===r.needDel){_ppDelOk=true;payPlanExRefresh()}};
 const ud=$('#ppUndoDel');if(ud)ud.onclick=()=>{_ppDel=new Set();_ppDelOk=false;payPlanExRefresh()};
 const rb=$('#ppResetDatas');if(rb)rb.onclick=()=>{_ppOv={};payPlanExRefresh()};
 const m=r.resumo;$('#ppRevisar').disabled=!(r.fase==='ok'&&(m.alterar.length||m.incluir.length||m.excluir.length));
}
function payPlanExConfirm(r){
 const m=r.resumo,li=a=>a.map(x=>`<li>${finEsc(x.desc)}: ${x.old?`${finBR(x.old.data)} ${moneyApp(x.old.cent/100)} → `:''}<b>${finBR(x.data)} ${moneyApp(x.cent/100)}</b></li>`).join('');
 $('#ppConfirm').innerHTML=`<div style="background:#f6f8fc;border:1px solid #e3e8ef;border-radius:12px;padding:12px 14px;font-size:13px"><b>Confirme as mudanças no Financeiro de ${finEsc(_ppEx.e.title)}</b><div style="margin:6px 0">Total do contrato: <b>${moneyApp(r.totalC/100)}</b></div>${m.alterar.length?`<div style="margin-top:6px"><b>Alterar ${m.alterar.length} parcela(s)</b><ul style="margin:4px 0 0 18px;padding:0">${li(m.alterar)}</ul></div>`:''}${m.incluir.length?`<div style="margin-top:6px"><b>Incluir ${m.incluir.length} parcela(s)</b><ul style="margin:4px 0 0 18px;padding:0">${li(m.incluir)}</ul></div>`:''}${m.excluir.length?`<div style="margin-top:6px;color:#c0392b"><b>Excluir ${m.excluir.length} parcela(s)</b><ul style="margin:4px 0 0 18px;padding:0">${m.excluir.map(x=>`<li>${finEsc(x.desc)} — ${finBR(x.data)} ${moneyApp(x.cent/100)}</li>`).join('')}</ul></div>`:''}<div style="font-size:11.5px;color:#6b7a93;margin-top:8px">As parcelas já recebidas não são alteradas. Isso regrava o Financeiro deste evento.</div></div>`;
}
function payPlanExApply(){
 const r=payPlanExCompute();if(r.erro||r.fase!=='ok')return;const e=_ppEx.e;
 try{if(typeof planWriteBlocked==='function'&&planWriteBlocked(FIN_STORE)){planNotifyReadOnly();return}}catch(err){}
 r.resumo.alterar.forEach(x=>{const orig=_ppEx.lines.find(l=>l.id===x.id);if(orig)finSave({...orig,data:x.data,valorCent:x.cent,descricao:x.desc})});
 if(r.resumo.incluir.length)finAdd(r.resumo.incluir.map(x=>({id:finUid(),eventId:e.id,ws:'Eventos',tipo:'rec',forma:'vista',projectId:'',clientId:'',origem:'plano',categoria:'Parcela',parte:e.client||'',descricao:x.desc,valorCent:x.cent,data:x.data,dataReal:''})));
 r.resumo.excluir.forEach(x=>finRemove(x.id));
 $('#payPlanDialog').close();
 toast(`Plano atualizado: ${r.resumo.alterar.length} alterada(s), ${r.resumo.incluir.length} incluída(s), ${r.resumo.excluir.length} excluída(s).`);
 currentScreenRebuild()();
}
let _ppOv={};
function payPlanOpts(){return {ov:_ppOv,totalCent:finParseMoeda($('#ppTotal').value),sinalPct:$('#ppSinal').value,sinalData:$('#ppSinalData').value,parcelas:$('#ppParcelas').value,diasAntes:$('#ppDiasAntes').value}}
function payPlanRefresh(){
 if(_ppMode==='exist'){payPlanExRefresh();return}
 const id=$('#payPlanDialog').dataset.eventId,e=getEvents().find(x=>x.id===id);if(!e)return;
 const r=payPlanCompute(e,payPlanOpts());
 const exist=getFinance().filter(f=>f.eventId===e.id&&f.type==='Receita');
 const precisaOk=exist.length>0&&!$('#ppExistOk').checked;
 if(r.erro){$('#ppPreview').innerHTML='';$('#ppErr').textContent=r.erro;$('#ppGerar').disabled=true;return}
 $('#ppErr').textContent='';
 $('#ppPreview').innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:12.5px">${r.linhas.map(l=>`<tr><td style="padding:4px 6px;border-bottom:1px solid #eef1f5"><input type="date" data-pp-date="${l.key}" value="${l.data}" aria-label="Data: ${finEsc(l.desc)}" style="width:100%;max-width:150px;font-size:12.5px;padding:3px 4px;margin:0${l.manual?';border-color:#c47a3a':''}"></td><td style="padding:4px 6px;border-bottom:1px solid #eef1f5">${finEsc(l.desc)}</td><td style="padding:4px 6px;border-bottom:1px solid #eef1f5;text-align:right"><b>${moneyApp(l.cent/100)}</b></td></tr>`).join('')}<tr><td colspan="2" style="padding:6px"><b>Total</b></td><td style="padding:6px;text-align:right"><b>${moneyApp(r.linhas.reduce((a,l)=>a+l.cent,0)/100)}</b></td></tr></table><div style="font-size:11.5px;color:#6b7a93;margin-top:6px">Toque numa data para ajustá-la antes de gerar.${r.manuais?` <button type="button" class="link-btn" id="ppResetDatas">↺ Voltar às datas automáticas (${r.manuais})</button>`:''}</div>${r.avisos.map(a=>`<div style="color:#a15b1f;margin-top:4px">⚠️ ${finEsc(a)}</div>`).join('')}`;
 $('#ppGerar').disabled=precisaOk;
 $$('#ppPreview [data-pp-date]').forEach(inp=>inp.onchange=()=>{const k=inp.dataset.ppDate,v=inp.value;if(k==='sinal'){if(v)$('#ppSinalData').value=v;payPlanRefresh();return}if(/^\d{4}-\d{2}-\d{2}$/.test(v))_ppOv[k]=v;else delete _ppOv[k];payPlanRefresh()});
 const rb=$('#ppResetDatas');if(rb)rb.onclick=()=>{_ppOv={};payPlanRefresh()};
}
function openPayPlanDialog(eventId){
 const e=getEvents().find(x=>x.id===eventId);if(!e)return;
 const d=$('#payPlanDialog');d.dataset.eventId=eventId;_ppOv={};const lin=payPlanExLines(e);
 $('#ppTitle').textContent='Plano de pagamento — '+e.title;
 const base=payPlanBase(e),hoje=finLocalISO();let sd=finAddDays(hoje,3);if(sd>e.date)sd=hoje;
 $('#ppTotal').value=base>0?finFmtNum(Math.round(base*100)):'';
 $('#ppSinal').value=30;$('#ppParcelas').value=3;$('#ppDiasAntes').value=10;$('#ppSinalData').value=sd;$('#ppExistOk').checked=false;
 const exist=getFinance().filter(f=>f.eventId===e.id&&f.type==='Receita');
 $('#ppExistWrap').style.display=exist.length?'block':'none';
 $('#ppExistText').textContent=exist.length?`Este evento já tem ${exist.length} receita(s) lançada(s) (${moneyApp(exist.reduce((a,f)=>a+Number(f.value),0))}). Gerar o plano ADICIONA novas linhas — não substitui as que já existem.`:'';
 if(lin.length){payPlanExStart(e,lin)}else{_ppMode='gen';payPlanSetMode()}
 d.showModal();payPlanRefresh();
}
function doPayPlanGenerate(){
 const id=$('#payPlanDialog').dataset.eventId,e=getEvents().find(x=>x.id===id);if(!e)return;
 const r=payPlanCompute(e,payPlanOpts());
 if(r.erro){$('#ppErr').textContent=r.erro;return}
 try{if(typeof planWriteBlocked==='function'&&planWriteBlocked(FIN_STORE)){planNotifyReadOnly();return}}catch(err){}
 finAdd(r.linhas.map(l=>({id:finUid(),eventId:e.id,ws:'Eventos',tipo:'rec',forma:'vista',projectId:'',clientId:'',origem:'plano',categoria:l.cat,parte:e.client||'',descricao:l.desc,valorCent:l.cent,data:l.data,dataReal:''})));
 $('#payPlanDialog').close();
 toast(`Plano gerado: ${r.linhas.length} lançamento(s) pendente(s) no Financeiro do evento.`);
 currentScreenRebuild()();
}
function openBudgetDialog(eventId){
 const e=getEvents().find(x=>x.id===eventId);if(!e)return;
 $('#budgetTitle').textContent='Orçamento — '+e.title;$('#budGerar').dataset.eventId=eventId;$('#budgetDialog').showModal();
}
function budgetHTML(eventId,opt){
 const e=getEvents().find(x=>x.id===eventId),p=getProfile();
 const cat=getCatalog(),ids=getEventCatalog(e.id);
 const itens=ids.map(id=>cat.find(c=>c.id===id)).filter(Boolean);
 const porPessoa=u=>/pessoa|convidado|cabe[cç]a/i.test(String(u||''));
 const linhas=itens.map(c=>{const q=porPessoa(c.unit)?Math.max(1,Number(e.guests||0)):1,preco=Number(c.price||0);return{c,q,preco,sub:preco*q}});
 const total=linhas.reduce((a,l)=>a+l.sub,0);
 const grupos={};linhas.forEach(l=>{(grupos[l.c.category||'Outros']=grupos[l.c.category||'Outros']||[]).push(l)});
 const validade=finAddDays(finLocalISO(),Math.max(1,Number(opt.validade)||7));
 const base=total>0?total:Number(e.budget||0);
 const sinalPct=Math.min(100,Math.max(0,Number(opt.sinal)||0)),sinal=Math.round(base*sinalPct)/100;
 const rec=opt.parcelas?getFinance().filter(f=>f.eventId===e.id&&f.type==='Receita').sort((a,b)=>String(a.date).localeCompare(String(b.date))):[];
 const recTot=rec.reduce((a,f)=>a+Number(f.value),0);
 const tab=Object.keys(grupos).map(g=>`<tr><td colspan="4" style="background:#f4f1ec;font-weight:800;padding:6px 8px">${finEsc(g)}</td></tr>`+grupos[g].map(l=>`<tr><td style="padding:6px 8px">${finEsc(l.c.name)}${l.c.description?`<br><small style="color:#6b7a93">${finEsc(l.c.description)}</small>`:''}</td><td style="padding:6px 8px">${finEsc(l.c.unit||'—')}</td><td style="padding:6px 8px;text-align:center">${l.q}</td><td style="padding:6px 8px;text-align:right">${moneyApp(l.sub)}</td></tr>`).join('')).join('');
 return `${profileHeader(p)}<main class="print-doc"><div class="print-kicker">ORÇAMENTO / PROPOSTA DE RESERVA</div><h2>${finEsc(e.title)}</h2>
 <p><b>Cliente:</b> ${finEsc(e.client)} • <b>Data:</b> ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • <b>Local:</b> ${finEsc(e.venue)} • <b>Convidados previstos:</b> ${e.guests||0}</p>
 <p style="color:#a15b1f"><b>Proposta válida até ${finBR(validade)}.</b></p>
 <h3>Itens do orçamento</h3>
 ${itens.length?`<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="text-align:left;border-bottom:2px solid #273142"><th style="padding:6px 8px">Item</th><th style="padding:6px 8px">Unidade</th><th style="padding:6px 8px;text-align:center">Qtd.</th><th style="padding:6px 8px;text-align:right">Valor</th></tr>${tab}<tr style="border-top:2px solid #273142"><td colspan="3" style="padding:8px;text-align:right"><b>Total dos itens</b></td><td style="padding:8px;text-align:right"><b>${moneyApp(total)}</b></td></tr></table>`:'<p>Nenhum item do catálogo foi escolhido para este evento ainda.</p>'}
 <h3>Resumo</h3>
 <p><b>Orçamento previsto pelo cliente:</b> ${moneyApp(e.budget||0)}${total>0&&Number(e.budget)>0?` • <b>${total<=Number(e.budget)?'Dentro do orçamento (sobram '+moneyApp(Number(e.budget)-total)+')':'Acima do orçamento em '+moneyApp(total-Number(e.budget))}</b>`:''}</p>
 <h3>Reserva e pagamento</h3>
 <p>Para reservar a data, é necessário o pagamento de um <b>sinal de ${sinalPct}% (${moneyApp(sinal)})</b> até <b>${finBR(validade)}</b>. O saldo de <b>${moneyApp(Math.max(0,base-sinal))}</b> ${rec.length?'segue o cronograma de parcelas abaixo.':'será combinado entre as partes.'}</p>
 ${rec.length?`<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="text-align:left;border-bottom:1px solid #273142"><th style="padding:5px 8px">Parcela</th><th style="padding:5px 8px">Vencimento</th><th style="padding:5px 8px">Situação</th><th style="padding:5px 8px;text-align:right">Valor</th></tr>${rec.map(f=>`<tr><td style="padding:5px 8px">${finEsc(f.description||f.category)}</td><td style="padding:5px 8px">${finBR(f.date)}</td><td style="padding:5px 8px">${f.status==='Pago'?'Pago':'A pagar'}</td><td style="padding:5px 8px;text-align:right">${moneyApp(f.value)}</td></tr>`).join('')}<tr style="border-top:1px solid #273142"><td colspan="3" style="padding:6px 8px;text-align:right"><b>Total das parcelas</b></td><td style="padding:6px 8px;text-align:right"><b>${moneyApp(recTot)}</b></td></tr></table>`:''}
 ${opt.obs?`<h3>Observações</h3><p style="white-space:pre-wrap">${finEsc(opt.obs)}</p>`:''}
 <h3>Aceite</h3><p>Ao assinar, o contratante concorda com os itens e condições acima.</p>
 <div style="display:flex;gap:40px;margin-top:46px"><div style="flex:1;border-top:1px solid #273142;padding-top:6px;font-size:12px">Contratante — ${finEsc(e.client)}</div><div style="flex:1;border-top:1px solid #273142;padding-top:6px;font-size:12px">${finEsc(p.businessName||'Contratada')}</div></div>
 <p style="margin-top:22px;font-size:12px">Local e data: ______________________, ____/____/________</p></main><footer class="print-footer">${finEsc(p.address||'')} • ${finEsc(p.footer||'')}</footer>`;
}
function generateBudgetPdf(eventId,opt){
 $('#printRoot').innerHTML=budgetHTML(eventId,opt);
 document.body.classList.add('printing');setTimeout(()=>{window.print();setTimeout(()=>document.body.classList.remove('printing'),500)},100);
}

function ajRefresh(){const y=window.scrollY;drawSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav);window.scrollTo({top:y,behavior:'instant'})}
function ajListRowsHTML(key){
 const L=AJ_LISTS[key];
 return L.items().map((it,i)=>{
  const n=L.usage(it.name),esp=(L.special||[]).includes(it.name),nm=finEsc(it.name);
  const tog=L.obj?`<button class="small-btn" data-ev-type-toggle="${i}">${it.visible?'👁️ Visível':'🚫 Escondido'}</button>`:`<button class="small-btn" data-aj-list-hide data-list="${key}" data-name="${nm}">${it.visible?'👁️ Visível':'🚫 Oculto'}</button>`;
  const ed=esp?'':`<button class="small-btn" data-aj-list-rename data-list="${key}" data-name="${nm}" title="Renomear">✏️</button><button class="small-btn" data-aj-list-del data-list="${key}" data-name="${nm}" title="Excluir">🗑️</button>`;
  return `<div class="aj-list-row"><div class="aj-list-name"><b>${nm}</b><small>${n} ${n===1?'uso':'usos'}</small></div><div class="aj-list-btns">${tog}${ed}</div></div>`;
 }).join('');
}
let _cryptoKey=null;// chave AES-GCM derivada da senha nesta sessão (null = sem senha ativa ou ainda bloqueado)
const R1_AUTH_KEY='r1_auth';// nunca passa pelo wrapper de criptografia (precisa ser legível antes de desbloquear)
const b64e=bytes=>{let s='';bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s)};
const b64d=str=>Uint8Array.from(atob(str),c=>c.charCodeAt(0));
async function deriveKey(pass,saltU8){
 const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);
 return crypto.subtle.deriveKey({name:'PBKDF2',salt:saltU8,iterations:150000,hash:'SHA-256'},km,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
async function makeCheck(key){
 const iv=crypto.getRandomValues(new Uint8Array(12));
 const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode('rizzieri-ok'));
 return {iv:b64e(iv),ct:b64e(new Uint8Array(ct))};
}
async function verifyKey(key,check){
 try{const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64d(check.iv)},key,b64d(check.ct));return new TextDecoder().decode(pt)==='rizzieri-ok'}catch(e){return false}
}
async function encryptForStorage(key,plain){
 const iv=crypto.getRandomValues(new Uint8Array(12));
 const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(plain));
 return JSON.stringify({__r1enc:1,iv:b64e(iv),ct:b64e(new Uint8Array(ct))});
}
async function decryptFromStorage(key,blobStr){
 const blob=JSON.parse(blobStr);
 const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64d(blob.iv)},key,b64d(blob.ct));
 return new TextDecoder().decode(pt);
}
function looksEncrypted(raw){try{const b=JSON.parse(raw);return !!(b&&b.__r1enc)}catch(e){return false}}
let _stFullAt=0;function storageFull(){const n=Date.now();if(n-_stFullAt<5000)return;_stFullAt=n;try{toast('Sem espaço no aparelho para guardar isto. Ao fechar o app o dado pode se perder: faça um backup e apague anexos grandes.')}catch(e){}}
const storage={
 getItem(key){
  if(key in memoryStore)return memoryStore[key];
  try{return globalThis.localStorage?.getItem(key)??null}catch{return null}
 },
 setItem(key,value){
  const normalized=String(value);
  try{if(typeof planWriteBlocked==='function'&&planWriteBlocked(key)){planNotifyReadOnly();return normalized}}catch(e){}
  memoryStore[key]=normalized;
  if(_cryptoKey&&!isPlainKey(key)&&key.indexOf('r1_')===0){
   const seq=_encSeq[key]=(_encSeq[key]||0)+1;
   encryptForStorage(_cryptoKey,normalized).then(enc=>{if(_encSeq[key]!==seq)return;try{globalThis.localStorage?.setItem(key,enc)}catch{storageFull()}}).catch(()=>{});
  }else{
   try{globalThis.localStorage?.setItem(key,normalized)}catch{storageFull()}
  }
  return normalized;
 },
 removeItem(key){try{globalThis.localStorage?.removeItem(key)}catch{}delete memoryStore[key]}
};
// Descriptografa tudo que estiver cifrado em localStorage pra memoryStore (chamado 1x ao desbloquear).
// Dados ainda em texto puro (de antes da senha existir) continuam legíveis normalmente.
async function unlockAllData(key){
 let names=[];try{names=Object.keys(globalThis.localStorage||{})}catch(e){names=[]}
 const alvo=names.filter(k=>k.indexOf('r1_')===0&&!isPlainKey(k));
 await Promise.all(alvo.map(async k=>{
  const raw=globalThis.localStorage.getItem(k);
  if(raw==null)return;
  if(looksEncrypted(raw)){
   try{memoryStore[k]=await decryptFromStorage(key,raw)}catch(e){/* senha errada não chega aqui; corrupção isolada não trava o resto */}
  }else{
   memoryStore[k]=raw;
  }
 }));
}
// Criptografa tudo que ainda estiver em texto puro (chamado 1x ao criar a senha, sem apagar nada).
async function encryptAllExistingData(key){
 let names=[];try{names=Object.keys(globalThis.localStorage||{})}catch(e){names=[]}
 const alvo=names.filter(k=>k.indexOf('r1_')===0&&!isPlainKey(k));
 await Promise.all(alvo.map(async k=>{
  const raw=globalThis.localStorage.getItem(k);
  if(raw==null||looksEncrypted(raw))return;
  memoryStore[k]=raw;
  const enc=await encryptForStorage(key,raw);
  try{globalThis.localStorage.setItem(k,enc)}catch(e){}
 }));
}
// Reverte tudo pra texto puro (usado ao remover a senha).
async function decryptAllExistingData(key){
 let names=[];try{names=Object.keys(globalThis.localStorage||{})}catch(e){names=[]}
 const alvo=names.filter(k=>k.indexOf('r1_')===0&&!isPlainKey(k));
 await Promise.all(alvo.map(async k=>{
  const raw=globalThis.localStorage.getItem(k);
  if(raw==null||!looksEncrypted(raw))return;
  try{const plain=await decryptFromStorage(key,raw);memoryStore[k]=plain;globalThis.localStorage.setItem(k,plain)}catch(e){}
 }));
}

// Re-criptografa tudo com uma chave NOVA, cobrindo tanto "criar senha pela 1ª vez" (oldKey=null,
// dados ainda em texto puro) quanto "trocar senha" (oldKey=chave atual, dados já cifrados com ela).
// Varre memoryStore + localStorage juntos pra não deixar nada de fora, mesmo que algum dado antigo
// de uma sessão anterior ainda não tenha sido lido nesta sessão.
async function reencryptAll(oldKeyOrNull,newKey){
 let names=[];try{names=Object.keys(globalThis.localStorage||{})}catch(e){names=[]}
 const alvo=new Set([...Object.keys(memoryStore||{}),...names]);
 const chaves=[...alvo].filter(k=>k.indexOf('r1_')===0&&!isPlainKey(k));
 await Promise.all(chaves.map(async k=>{
  let plain;
  if(k in memoryStore){
   plain=memoryStore[k];
  }else{
   const raw=globalThis.localStorage.getItem(k);
   if(raw==null)return;
   if(looksEncrypted(raw)){
    if(!oldKeyOrNull)return;
    try{plain=await decryptFromStorage(oldKeyOrNull,raw)}catch(e){return}
   }else{
    plain=raw;
   }
  }
  memoryStore[k]=plain;
  const enc=await encryptForStorage(newKey,plain);
  try{globalThis.localStorage.setItem(k,enc)}catch(e){}
 }));
}

// ═══ Senha de acesso real (PBKDF2 + AES-256-GCM) ═══
// Mesmo padrão do corsyncimoveis: a senha nunca é gravada, só um "check" cifrado pra validar a chave derivada.
function hasPassword(){return !!storage.getItem(R1_AUTH_KEY)}
function sessionUnlocked(){try{return globalThis.sessionStorage?.getItem('r1_unlocked')==='1'}catch(e){return false}}
function markSessionUnlocked(){try{globalThis.sessionStorage?.setItem('r1_unlocked','1')}catch(e){}}
function clearSessionUnlocked(){try{globalThis.sessionStorage?.removeItem('r1_unlocked')}catch(e){}}
function validatePassword(v){return {len:v.length>=4&&v.length<=50,up:/[A-Z]/.test(v),low:/[a-z]/.test(v),num:/[0-9]/.test(v),sp:/[^A-Za-z0-9]/.test(v)}}
function checkPwRules(){
 const res=validatePassword($('#pwSetupPass')?.value||'');
 Object.keys(res).forEach(k=>{const pill=document.querySelector(`#pwRules [data-r="${k}"]`);if(pill)pill.classList.toggle('active',res[k])});
 return Object.values(res).every(Boolean);
}
function conferirSenhasSetup(){
 const p1=$('#pwSetupPass')?.value||'',p2=$('#pwSetupPass2')?.value||'';
 const regrasOk=Object.values(validatePassword(p1)).every(Boolean);
 const el=$('#pwSetupMatch'),btn=$('#pwSetupBtn');
 if(!p2){if(el)el.textContent='';if(btn)btn.disabled=true;return}
 const iguais=p1===p2;
 if(el){el.textContent=iguais?'✓ As senhas conferem':'✕ As senhas não conferem';el.style.color=iguais?'#1f8a4c':'#c0392b'}
 if(btn)btn.disabled=!(iguais&&regrasOk);
}
function togglePwField(id,btn){const el=$('#'+id);if(!el)return;el.type=el.type==='password'?'text':'password';btn.textContent=el.type==='password'?'👁':'🙈'}
async function doCriarOuTrocarSenha(){
 const p1=$('#pwSetupPass')?.value||'',p2=$('#pwSetupPass2')?.value||'';
 const err=$('#pwSetupErr');
 if(err)err.textContent='';
 if(p1!==p2){if(err)err.textContent='As senhas não conferem.';return}
 if(!Object.values(validatePassword(p1)).every(Boolean)){if(err)err.textContent='A senha não atende às regras.';return}
 if(!globalThis.crypto?.subtle){if(err)err.textContent='A senha só funciona com o app aberto por HTTPS ou instalado na tela inicial. Neste contexto a criptografia não está disponível.';return}
 if(err)err.textContent='Criando…';
 const trocando=hasPassword();
 const oldKey=trocando?_cryptoKey:null;
 try{
  const salt=crypto.getRandomValues(new Uint8Array(16));
  const key=await deriveKey(p1,salt);
  const check=await makeCheck(key);
  await reencryptAll(oldKey,key);
  storage.setItem(R1_AUTH_KEY,JSON.stringify({salt:b64e(salt),check,createdAt:Date.now()}));
  _cryptoKey=key;
  markSessionUnlocked();
  $('#pwSetupDialog').close();
  $('#pwSetupPass').value='';$('#pwSetupPass2').value='';
  toast(trocando?'🔐 Senha alterada.':'🔐 Senha criada. Seus dados estão protegidos.');
  openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav);
  enviarSenhaWhats(p1);
  if(_planPendingCode){const c=_planPendingCode;_planPendingCode='';setTimeout(()=>{const r=planTryActivate(c);if(r.ok)planAfterActivate();else toast(r.msg||'Não foi possível ativar o Pro.')},150)}
 }catch(e){
  if(err)err.textContent='Não foi possível concluir. Nada foi alterado — tente de novo.';
 }
}
// Igual ao corsyncimoveis: ao criar/trocar a senha, oferece mandar uma cópia pro WhatsApp da própria
// pessoa (link wa.me com a senha já no texto — ela só aperta enviar). Usa o telefone do perfil do
// consultor (Ajustes > Perfil) como o corsyncimoveis usa o WhatsApp do corretor; se não tiver um
// telefone válido salvo ali, pergunta antes.
let _pwWhatsTmp='';
function enviarSenhaWhats(senha){
 _pwWhatsTmp=senha;
 const numSalvo=onlyDigits(ajCfg().telefone||'');
 if(numSalvo.length>=10){doEnviarSenhaWhats(numSalvo.length<=11?'55'+numSalvo:numSalvo);return}
 $('#pwWhatsNumero').value=ajCfg().telefone||'';
 $('#pwWhatsDialog').showModal();
}
function doEnviarSenhaWhats(numDireto){
 let num=numDireto;
 if(!num){
  const raw=$('#pwWhatsNumero')?.value||'';
  num=onlyDigits(raw);
  if(num.length<10){toast('Informe um WhatsApp válido com DDD.');return}
  if(num.length<=11)num='55'+num;
  const cfg=ajCfg();cfg.telefone=raw;storage.setItem('r1_consultor_profile',JSON.stringify(cfg));
 }
 const msg=`🔐 RIZZIERI ONE — GUARDE COM SEGURANÇA.\nSua senha de acesso é: ${_pwWhatsTmp}\n\nSem ela seus dados neste aparelho não podem ser recuperados.`;
 globalThis.open?.(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,'_blank');
 toast('📲 Cópia da senha encaminhada ao seu WhatsApp.');
 _pwWhatsTmp='';
 $('#pwWhatsDialog').close();
}
async function doRemoverSenha(){
 if(_cryptoKey)await decryptAllExistingData(_cryptoKey);
 storage.removeItem(R1_AUTH_KEY);
 _cryptoKey=null;
 $('#pwRemoveDialog').close();
 toast('Senha removida. Os dados voltaram a ficar em texto normal neste aparelho.');
 openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav);
}
async function doUnlockAttempt(){
 const authRaw=storage.getItem(R1_AUTH_KEY);
 const auth=authRaw?JSON.parse(authRaw):null;
 const pass=$('#lockPass')?.value||'';
 const err=$('#lockErr');
 if(!auth){if(err)err.textContent='Nenhuma senha configurada.';return}
 const until=parseInt(storage.getItem('r1_lock_until')||'0');
 if(Date.now()<until){if(err)err.textContent=`Muitas tentativas — aguarde ${Math.ceil((until-Date.now())/1000)}s`;return}
 if(!pass){if(err)err.textContent='Digite a senha.';return}
 if(err)err.textContent='Verificando…';
 const key=await deriveKey(pass,b64d(auth.salt));
 if(!(await verifyKey(key,auth.check))){
  const tries=parseInt(storage.getItem('r1_lock_bad')||'0')+1;
  storage.setItem('r1_lock_bad',String(tries));
  if(tries>=5){
   storage.setItem('r1_lock_until',String(Date.now()+30000));
   storage.setItem('r1_lock_bad','0');
   if(err)err.textContent='5 tentativas erradas — aguarde 30 segundos.';
  }else{
   if(err)err.textContent=`Senha incorreta (${tries}/5).`;
  }
  return;
 }
 storage.removeItem('r1_lock_bad');storage.removeItem('r1_lock_until');
 await unlockAllData(key);
 _cryptoKey=key;
 markSessionUnlocked();
 $('#lockView').classList.add('hidden');
 $('#lockPass').value='';
 proceedIntoApp();
}
function doWipeTudo(){
 let names=[];try{names=Object.keys(globalThis.localStorage||{})}catch(e){names=[]}
 const alvo=new Set([...Object.keys(memoryStore||{}),...names]);
 [...alvo].filter(k=>k.startsWith('r1_')&&!R1_PLAN_KEEP.includes(k)).forEach(k=>storage.removeItem(k));
 try{globalThis.sessionStorage?.removeItem('r1_unlocked')}catch(e){}
 location.reload();
}

// ═══ Plano: teste → somente leitura → bloqueio → Pro (código por aparelho) ═══
const planToday=()=>finLocalISO();
const planTrial=()=>readJSON('r1_trial',null);
const planLicense=()=>readJSON('r1_license',null);
const planUsedCodes=()=>readJSON('r1_used_codes',[]);
function planDevId(){
 let id=storage.getItem('r1_devid');
 if(!/^[A-Z0-9]{4}$/.test(id||'')){
  const A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let o='';
  try{const r=crypto.getRandomValues(new Uint8Array(4));o=[...r].map(b=>A[b%A.length]).join('')}catch(e){}
  if(!/^[A-Z0-9]{4}$/.test(o)){o='';for(let i=0;i<4;i++)o+=A[Math.floor(Math.random()*A.length)]}
  id=o;storage.setItem('r1_devid',id);
 }
 return id;
}
function planChecksum(dev,idx){let h=7;const x=dev+'|'+idx+'|RIZZIERIONEPRO';for(let i=0;i<x.length;i++)h=(h*31+x.charCodeAt(i))%99991;return String(100+(h%900))}
function planCheck(code){
 const m=/^RZ-([A-Z0-9]{4})-([123])(\d{3})$/.exec((code||'').toUpperCase().trim());
 if(!m)return{ok:false,motivo:'formato'};
 if(m[1]!==planDevId())return{ok:false,motivo:'aparelho'};
 if(planChecksum(m[1],+m[2])!==m[3])return{ok:false,motivo:'invalido'};
 return{ok:true,meses:PLAN_BY_IDX[+m[2]]};
}
function planTrialMarked(){return R1_TRIAL_MARKS.some(k=>{try{return !!globalThis.localStorage?.getItem(k)}catch(e){return false}})}
function planMarkTrial(){R1_TRIAL_MARKS.forEach(k=>{try{globalThis.localStorage?.setItem(k,'1')}catch(e){}})}
function planEnsureTrial(){
 if(planTrial())return;
 const hoje=planToday();
 if(planTrialMarked()){storage.setItem('r1_trial',JSON.stringify({active:false,startedAt:'2000-01-01',expiresAt:'2000-01-01'}));return}
 storage.setItem('r1_trial',JSON.stringify({active:true,startedAt:hoje,expiresAt:finAddDays(hoje,PLAN_TRIAL_DIAS)}));
 planMarkTrial();
}
function planState(){
 const lic=planLicense(),hoje=planToday(),T=planTrial();
 const pro=!!(lic&&lic.pro&&(!lic.expiresAt||lic.expiresAt>=hoje));
 const trialAtivo=!!(T&&T.active&&T.expiresAt&&hoje<=T.expiresAt);
 const trialExpirado=!!(T&&T.expiresAt&&hoje>T.expiresAt);
 const limite=T&&T.expiresAt?finAddDays(T.expiresAt,PLAN_LEITURA_DIAS):'';
 const diff=iso=>Math.max(0,Math.ceil((new Date(iso+'T00:00:00')-new Date(hoje+'T00:00:00'))/86400000));
 return{pro,lic,T,trialAtivo,trialExpirado,somenteLeitura:!pro&&trialExpirado,bloqueado:!pro&&trialExpirado&&hoje>limite,
  diasTrial:T&&T.expiresAt?diff(T.expiresAt):0,diasPro:pro&&lic.expiresAt?diff(lic.expiresAt):0,leituraDias:limite?diff(limite):0};
}
function planWriteBlocked(key){
 if(isPlainKey(key)||key==='r1_fin_v2_mig')return false;
 if(!PLAN_DATA_PREFIXES.some(p=>key.indexOf(p)===0))return false;
 const st=planState();return st.somenteLeitura||st.bloqueado;
}
let _planNotifyAt=0,_planPendingCode='';
function planNotifyReadOnly(){
 const agora=Date.now();if(agora-_planNotifyAt<4000)return;_planNotifyAt=agora;
 try{toast('Teste grátis encerrado — somente leitura.');showProDialog('Seu teste grátis terminou: dá pra consultar, mas não alterar. Assine o Pro para voltar a cadastrar e editar.')}catch(e){}
}
function planCopyDev(){
 const t='AP-'+planDevId();
 try{navigator.clipboard.writeText(t).then(()=>toast('ID copiado: '+t)).catch(()=>toast('ID: '+t))}catch(e){toast('ID: '+t)}
}
function planOpenWhats(){
 const msg='Oi! Quero assinar o RIZZIERI ONE Pro.\nMeu ID do aparelho é AP-'+planDevId();
 globalThis.open?.('https://wa.me/'+PRO_WHATS+'?text='+encodeURIComponent(msg),'_blank');
}
function planProfileReady(){const c=ajCfg();return !!(c.nome&&c.nome.trim())&&onlyDigits(c.telefone||'').length>=10}
function openPlanProfile(depois){
 const c=ajCfg();$('#planProfNome').value=c.nome||'';$('#planProfTel').value=c.telefone||'';$('#planProfErr').textContent='';
 $('#planProfSalvar').onclick=()=>{
  const nome=$('#planProfNome').value.trim(),tel=$('#planProfTel').value.trim();
  if(!nome){$('#planProfErr').textContent='Informe seu nome.';return}
  if(onlyDigits(tel).length<10){$('#planProfErr').textContent='Informe um WhatsApp válido com DDD.';return}
  const cfg=ajCfg();cfg.nome=nome;cfg.telefone=tel;storage.setItem('r1_consultor_profile',JSON.stringify(cfg));
  $('#planProfileDialog').close();if(depois)depois();
 };
 $('#planProfileDialog').showModal();
}
function openProDialog(reason){
 if(!planProfileReady()){openPlanProfile(()=>showProDialog(reason));return}
 showProDialog(reason);
}
function showProDialog(reason){
 const r=$('#proReason');r.textContent=reason||'';r.style.display=reason?'block':'none';
 $('#proDevId').textContent='AP-'+planDevId();$('#proPreco1').textContent=PRECOS_PRO[1];
 $('#proCode').value='';$('#proErr').textContent='';
 if(!$('#proDialog').open)$('#proDialog').showModal();
}
function planMaskCode(el){
 let v=el.value.toUpperCase().replace(/[^A-Z0-9]/g,'');if(v.indexOf('RZ')===0)v=v.slice(2);v=v.slice(0,8);
 let out='RZ';if(v.length>0)out+='-'+v.slice(0,4);if(v.length>4)out+='-'+v.slice(4,8);el.value=out;
}
// Tenta ativar. Devolve {ok,msg}. O Pro exige senha de acesso (igual ao corsyncimoveis): sem senha, pede agora e ativa em seguida.
function planTryActivate(codeRaw){
 const code=(codeRaw||'').toUpperCase().trim();
 if(!code||code==='RZ')return{ok:false,msg:'Digite o código.'};
 const r=planCheck(code);
 if(!r.ok)return{ok:false,msg:r.motivo==='aparelho'?'Este código foi gerado para outro aparelho. Confira o ID AP-'+planDevId()+'.':r.motivo==='formato'?'Formato inválido — use RZ-XXXX-0000.':'Código inválido para este aparelho.'};
 if(planUsedCodes().includes(code))return{ok:false,msg:'Este código já foi usado neste aparelho. Peça um novo para renovar.'};
 if(!planProfileReady()){openPlanProfile(()=>{const r2=planTryActivate(code);if(r2.ok)planAfterActivate()});return{ok:false,msg:'',pendente:true}}
 if(!hasPassword()){
  _planPendingCode=code;
  $('#proDialog').close();
  $('#pwSetupTitle').textContent='Crie sua senha de acesso (exigida pelo Pro)';$('#pwSetupBtn').textContent='Criar senha e ativar o Pro';
  $('#pwSetupPass').value='';$('#pwSetupPass2').value='';$('#pwSetupErr').textContent='';$('#pwSetupMatch').textContent='';checkPwRules();
  $('#pwSetupDialog').showModal();
  return{ok:false,msg:'Crie a senha de acesso primeiro — o Pro exige senha.',pendente:true};
 }
 const st=planState(),base=st.pro?st.lic.expiresAt:planToday();
 storage.setItem('r1_license',JSON.stringify({pro:true,code,plan:r.meses,activatedAt:planToday(),expiresAt:finAddMonths(base,r.meses)}));
 const u=planUsedCodes();u.push(code);storage.setItem('r1_used_codes',JSON.stringify(u));
 return{ok:true,meses:r.meses};
}
function planAfterActivate(){
 const st=planState();
 toast('🎉 Pro ativado! Válido até '+finBR(st.lic.expiresAt));
 if($('#proDialog').open)$('#proDialog').close();
 if(!$('#planLockView').classList.contains('hidden')){$('#planLockView').classList.add('hidden');proceedIntoApp();return}
 openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav);
}
function showPlanLock(){
 $('#appView').classList.add('hidden');$('#planLockView').classList.remove('hidden');
 $('#planLockDev').textContent='AP-'+planDevId();$('#planLockErr').textContent='';
}
function planBannerHTML(){
 const st=planState();
 if(st.pro){
  if(st.diasPro>7)return '';
  return `<div class="card" id="planBanner" data-reason="Renove o Pro para continuar com tudo liberado." style="border:1.5px solid #f0a500;background:#fff9e8;margin-bottom:14px;cursor:pointer;padding:12px 14px"><b style="font-size:13.5px">⏳ Seu Pro vence em ${st.diasPro} ${st.diasPro===1?'dia':'dias'}</b><div style="font-size:11.5px;color:#6b7a93;margin-top:3px">Toque para renovar.</div></div>`;
 }
 if(st.somenteLeitura)return `<div class="card" id="planBanner" data-reason="Seu teste grátis terminou. Assine o Pro para voltar a cadastrar e editar." style="border:1.5px solid #c0392b;background:#fdecea;margin-bottom:14px;cursor:pointer;padding:12px 14px"><b style="font-size:13.5px">🔒 Teste encerrado — somente leitura</b><div style="font-size:11.5px;color:#6b7a93;margin-top:3px">Você pode consultar${st.leituraDias?` por mais ${st.leituraDias} dia(s)`:''}. Toque para assinar o Pro.</div></div>`;
 if(st.trialAtivo){
  const acabando=st.diasTrial<=PLAN_AVISO_DIAS;
  return `<div class="card" id="planBanner" data-reason="${acabando?'Seu teste grátis está acabando! Assine o Pro para continuar com tudo liberado.':'Assine o Plano Pro e continue com tudo liberado depois do teste.'}" style="border:1.5px solid ${acabando?'#f0a500':'#ffd980'};background:#fff9e8;margin-bottom:14px;cursor:pointer;padding:12px 14px"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:24px">${acabando?'⏳':'🎁'}</span><div style="flex:1"><span style="background:${acabando?'#f0a500':'#2563a8'};color:#fff;font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:100px">${acabando?'⏳ ACABANDO':'🎁 TESTE GRÁTIS'}</span> <b style="font-size:13.5px">Faltam ${st.diasTrial} ${st.diasTrial===1?'dia':'dias'}</b><div style="font-size:11.5px;color:#6b7a93;margin-top:3px">Todas as funções liberadas durante o teste. Toque para assinar.</div></div></div></div>`;
 }
 return '';
}
function planCardHTML(){
 const st=planState();
 let badge,texto;
 if(st.pro){badge=['#16a34a','PRO ATIVO'];texto=`Pro ativo até <b>${finBR(st.lic.expiresAt)}</b> (${st.diasPro} ${st.diasPro===1?'dia':'dias'}).`}
 else if(st.trialAtivo){badge=['#2563a8','TESTE GRÁTIS'];texto=`Faltam <b>${st.diasTrial} ${st.diasTrial===1?'dia':'dias'}</b> de teste, com todas as funções liberadas.`}
 else{badge=['#c0392b','TESTE ENCERRADO'];texto='O teste grátis terminou. Seus dados continuam salvos; assine o Pro para voltar a cadastrar e editar.'}
 return `<div class="card" id="ajPlanoCard" style="background:#f4f8fd;border:1.5px solid #bcd3ee;border-radius:14px;padding:14px">
  <span style="background:${badge[0]};color:#fff;font-size:11px;font-weight:800;padding:3px 10px;border-radius:100px">${badge[1]}</span>
  <p style="font-size:13px;color:#273142;margin:10px 0 0">${texto}</p>
  <div style="background:#fff;border:1.5px dashed #2563a8;border-radius:12px;padding:10px 12px;margin-top:12px">
   <div style="font-size:10px;font-weight:800;color:#2563a8;text-transform:uppercase;letter-spacing:.3px">ID deste aparelho</div>
   <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:6px"><b style="font-size:17px;letter-spacing:1.5px;font-family:monospace">AP-${planDevId()}</b><button class="small-btn" id="ajPlanoCopiar" type="button">Copiar</button></div>
  </div>
  <div style="font-size:12.5px;color:#4a5568;margin-top:12px;line-height:1.8">1 mês — <b>${PRECOS_PRO[1]}</b> <span style="background:#2563a8;color:#fff;font-size:9.5px;font-weight:800;padding:2px 7px;border-radius:100px">PROMOÇÃO</span><br>6 meses e 12 meses — <span style="color:#6b7a93">em breve</span></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-primary" id="ajPlanoWhats" type="button" style="background:#25D366;width:auto">Assinar pelo WhatsApp</button><button class="btn btn-secondary" id="ajPlanoAtivar" type="button" style="width:auto">Tenho um código</button></div>
  <div style="font-size:11px;color:#6b7a93;margin-top:10px">Versão instalada: <b>${APP_VERSION}</b></div>
 </div>`;
}

const readJSON=(k,fallback)=>{try{return JSON.parse(storage.getItem(k)||'null')??fallback}catch{return fallback}};
currentWorkspace=storage.getItem('r1_workspace')||'Negócios';
const getProfile=()=>readJSON('r1_company_profile',defaultProfile);
let financeUIState=readJSON('r1_finance_ui',{filter:'Todos',event:'Todos os eventos'});
let projectUIState={filter:'Todos'};
let eventUIState={filter:'Todos'};
let clientUIState={filter:'Todos'};
let supplierUIState={filter:'Todos'};
const saveExtra=(key,obj)=>{const arr=readJSON(key,[]);arr.push(obj);storage.setItem(key,JSON.stringify(arr));};
const moneyApp=v=>Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

function activeConfig(){return workspaceConfigs[currentWorkspace]||workspaceConfigs['Negócios']}
function navWithGlobalAgenda(nav){
 const items=nav.map(x=>[...x]);
 if(!items.some(x=>x[0]==='agenda')){const idx=items.findIndex(x=>x[0]==='mais');items.splice(idx>=0?idx:items.length,0,['agenda','calendar','Agenda','AGENDA GERAL'])}
 return items;
}
function renderNav(){
 const nav=navWithGlobalAgenda(activeConfig().nav);
 const dashboard=nav.find(x=>x[0]==='dashboard');
 const agenda=nav.find(x=>x[0]==='agenda');
 const more=nav.find(x=>x[0]==='mais')||nav[nav.length-1];
 const context=nav.filter(x=>!['dashboard','agenda','mais'].includes(x[0]));
 const mobile=[dashboard,context[0],context[1]||context[0],agenda,more].filter(Boolean).filter((x,i,a)=>a.findIndex(y=>y[0]===x[0])===i);
 const make=items=>items.map(([id,icon,label])=>`<button class="nav-item ${current===id?'active':''}" data-nav="${id}"><span class="nav-icon" data-icon="${icon}"></span><span>${label}</span></button>`).join('');
 $('#sideNav').innerHTML=make(nav);$('#bottomNav').innerHTML=make(mobile);hydrateIcons();
}
function applyWorkspace(workspace,rerender=false){
 currentWorkspace=workspaceConfigs[workspace]?workspace:'Negócios';
 storage.setItem('r1_workspace',currentWorkspace);
 document.body.dataset.workspace=activeConfig().slug;
 $('#workspaceName').textContent=currentWorkspace;
 $('#workspaceDialog')?.querySelectorAll('[data-workspace]').forEach(b=>b.classList.toggle('active',b.dataset.workspace===currentWorkspace));
 if(rerender){current='dashboard';render('dashboard')}
}
let currentMainNav='dashboard',navStack=[],currentDescriptor={kind:'nav',id:'dashboard'};
function render(id='dashboard'){
 const nav=navWithGlobalAgenda(activeConfig().nav);const allowed=nav.some(x=>x[0]===id)||id==='seguranca'||id==='tutorial';
 if(!allowed && id!=='dashboard')id='dashboard';
 finEventScope='';current=id;currentMainNav=id;navStack=[];currentDescriptor={kind:'nav',id};renderNav();const item=id==='tutorial'?['','','Tutorial','CENTRAL DE APRENDIZADO']:(nav.find(x=>x[0]===id)||['','','Visão geral','ECOSSISTEMA']);
 $('#pageTitle').textContent=item[2]==='Início'?'Visão geral':item[2];$('#sectionEyebrow').textContent=item[3];
 $('#content').innerHTML=id==='dashboard'?dashboardView(currentWorkspace):id==='mais'?moreView(currentWorkspace):id==='tutorial'?tutorialCenterView():(views[id]||(()=>dashboardView(currentWorkspace)))();
 if(id==='dashboard')$('#content').insertAdjacentHTML('beforeend',finDashBlock());
 bindContent();syncBackBtn();hydrateIcons($('#content'));window.scrollTo({top:0,behavior:'instant'});
}
function drawSubView(title,eyebrow,htmlOrFn,parent){
 if(parent!=='financeiro')finEventScope='';
 const html=typeof htmlOrFn==='function'?htmlOrFn():htmlOrFn;
 current=parent;renderNav();$('#pageTitle').textContent=title;$('#sectionEyebrow').textContent=eyebrow;$('#content').innerHTML=html;
 currentDescriptor={kind:'sub',parent,rebuild:typeof htmlOrFn==='function'?()=>drawSubView(title,eyebrow,htmlOrFn,parent):null};
 bindContent();syncBackBtn();hydrateIcons($('#content'));window.scrollTo({top:0,behavior:'instant'});
}
function openSubView(title,eyebrow,htmlOrFn,parent='dashboard'){navStack.push(currentDescriptor);drawSubView(title,eyebrow,htmlOrFn,parent)}
function goBack(){
 const prev=navStack.pop();
 if(!prev){render('dashboard');return}
 if(prev.kind==='nav')render(prev.id);
 else if(prev.rebuild)prev.rebuild();
 else render(prev.parent||'dashboard');
}
function currentScreenRebuild(){return currentDescriptor.kind==='nav'?(()=>render(currentDescriptor.id)):(currentDescriptor.rebuild||(()=>render(currentDescriptor.parent||'dashboard')))}

function syncBackBtn(){const b=document.getElementById('topBackBtn');if(!b)return;b.hidden=!(navStack.length>0||document.querySelector('#content [data-back]'))}
function syncTopbarH(){const t=document.querySelector('.topbar');if(t)document.documentElement.style.setProperty('--topbar-h',t.offsetHeight+'px');const nv=document.querySelector('.bottom-nav');if(nv)document.documentElement.style.setProperty('--bottomnav-h',nv.offsetHeight+'px')}
window.addEventListener('resize',()=>syncTopbarH());
function bindContent(){syncTopbarH();
 if(current==='dashboard'&&currentDescriptor&&currentDescriptor.kind==='nav'&&!$('#planBanner')&&$('#content')){const bn=planBannerHTML();if(bn){$('#content').insertAdjacentHTML('afterbegin',bn);const el=$('#planBanner');if(el)el.onclick=()=>openProDialog(el.dataset.reason||'')}}
 if(document.getElementById('ajZoomMenos'))ajWire();
 $$('[data-nav]').forEach(b=>b.onclick=()=>{
  const emprestada=!!b.closest('#content')&&currentDescriptor&&currentDescriptor.kind==='sub';
  const antes=navStack.slice(),prev=currentDescriptor;
  render(b.dataset.nav);
  if(emprestada){navStack=[...antes,prev];syncBackBtn();$('#content').insertAdjacentHTML('afterbegin','<button class="link-btn borrowed-back" data-back>← Voltar</button>');const bk=$('#content .borrowed-back');if(bk)bk.onclick=goBack}
 });
 $$('[data-back]').forEach(b=>b.onclick=goBack);
 $$('[data-open-consolidado]').forEach(b=>b.onclick=()=>openSubView('Consolidado','RIZZIERI ONE',()=>consolidadoView(),currentMainNav));
 $$('[data-open-contracts-summary]').forEach(el=>el.onclick=()=>openSubView('Resumo','CONTRATOS & DOCUMENTOS',()=>contractsSummaryView(el.dataset.openContractsSummary),currentMainNav));
 $$('[data-fin-card-summary]').forEach(el=>el.onclick=()=>{
  const label=el.querySelector('small')?.textContent||'este valor';
  $('#finConfirmText').textContent=`Ver os lançamentos que formam "${label}"?`;
  $('#finConfirmDialog').showModal();
  $('#finConfirmYes').onclick=()=>{$('#finConfirmDialog').close();openSubView('Resumo financeiro','FINANCEIRO',()=>finCardSummaryView(el.dataset.finScope,el.dataset.finCardSummary),'financeiro')};
 });
 $$('[data-open-client-events]').forEach(el=>el.onclick=()=>{
  applyWorkspace('Eventos');
  const term=String(el.dataset.clientName).split(' ')[0];
  const renderFiltered=()=>{const html=`<button class="link-btn" data-back>← Voltar</button>`+eventsView();setTimeout(()=>{const inp=$('#eventsSearch');if(inp){inp.value=term;applyEventFilters()}},0);return html};
  openSubView('Eventos','EVENTOS & EXPERIÊNCIAS',renderFiltered,'eventos');
 });
 $$('[data-open-client-finance]').forEach(el=>el.onclick=()=>openSubView('Resumo financeiro','CRM',()=>clientFinanceSummaryView(el.dataset.openClientFinance),'clientes'));
 $$('[data-client-status]').forEach(sel=>sel.onchange=()=>{updateRecord('client',{id:sel.dataset.clientStatus,status:sel.value});toast('Status atualizado.');openClientHistory(sel.dataset.clientStatus)});
 $$('[data-open-ajustes]').forEach(b=>b.onclick=()=>openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav));
 $$('[data-goto-workspace]').forEach(b=>b.onclick=()=>{applyWorkspace(b.dataset.gotoWorkspace);render(b.dataset.gotoNav)});
 $$('[data-open-project]').forEach(b=>b.onclick=()=>openSubView('Hub do produto','APPS & PRODUTOS',()=>projectHubView(b.dataset.openProject),'projetos'));
 $$('[data-open-event]').forEach(b=>b.onclick=()=>openSubView('Hub do evento','EVENTOS & EXPERIÊNCIAS',()=>eventHubView(b.dataset.openEvent),'eventos'));
 $$('[data-open-checklist]').forEach(b=>b.onclick=()=>openSubView('Checklist do evento','EXECUÇÃO RIGOROSA',()=>checklistView(b.dataset.openChecklist),'eventos'));
 $$('[data-open-timeline]').forEach(b=>b.onclick=()=>openSubView('Cronograma do dia','EXECUÇÃO DO EVENTO',()=>timelineView(b.dataset.openTimeline),'eventos'));
 $$('[data-open-guests]').forEach(b=>b.onclick=()=>openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(b.dataset.openGuests),'eventos'));
 $$('[data-open-seating]').forEach(b=>b.onclick=()=>openSubView('Mapa de mesas','EVENTOS & EXPERIÊNCIAS',()=>seatingView(b.dataset.openSeating),'eventos'));
 $$('[data-open-portal]').forEach(b=>b.onclick=()=>generateClientPortal(b.dataset.openPortal));
 const seatAddTable=$('#seatAddTable');
 if(seatAddTable)seatAddTable.onclick=()=>{
  const nome=$('#seatNewTableName')?.value||'';
  if(!nome.trim()){toast('Digite o nome da mesa.');return}
  const eid=seatAddTable.dataset.seatingEvent;
  const tabs=getEventTables(eid);
  if(!tabs.includes(nome.trim()))tabs.push(nome.trim());
  storage.setItem(`r1_event_tables_${eid}`,JSON.stringify(tabs));
  openSubView('Mapa de mesas','EVENTOS & EXPERIÊNCIAS',()=>seatingView(eid),'eventos');
 };
 const seatBoard=$('.seating-board');
 if(seatBoard){
  const seatEid=seatBoard.dataset.seatingEvent;
  const refreshSeating=()=>openSubView('Mapa de mesas','EVENTOS & EXPERIÊNCIAS',()=>seatingView(seatEid),'eventos');
  $$('.seat-chip[draggable]').forEach(chip=>{chip.ondragstart=ev=>ev.dataTransfer.setData('text/plain',chip.dataset.guestId)});
  $$('[data-table-zone]').forEach(zone=>{
   zone.ondragover=ev=>{ev.preventDefault();zone.classList.add('drag-over')};
   zone.ondragleave=()=>zone.classList.remove('drag-over');
   zone.ondrop=ev=>{ev.preventDefault();zone.classList.remove('drag-over');const gid=ev.dataTransfer.getData('text/plain');if(!gid)return;updateRecord('guest',{id:gid,table:zone.dataset.tableZone||''});refreshSeating()};
  });
  $$('[data-seat-select]').forEach(sel=>{sel.onchange=()=>{updateRecord('guest',{id:sel.dataset.seatSelect,table:sel.value});refreshSeating()}});
  // Arrastar por toque/caneta: segura o ⠿ e arrasta. (O mouse continua usando o arrastar nativo do card.)
  $$('.seat-grip').forEach(grip=>{
   grip.onpointerdown=ev=>{
    if(ev.pointerType==='mouse')return;
    ev.preventDefault();
    const chip=grip.closest('.seat-chip'),gid=chip.dataset.guestId;chip.draggable=false;
    const ghost=chip.cloneNode(true);ghost.classList.add('seat-ghost');ghost.removeAttribute('draggable');ghost.style.width=chip.offsetWidth+'px';
    document.body.appendChild(ghost);chip.classList.add('seat-dragging');
    let over=null;
    const move=(x,y)=>{
     ghost.style.transform=`translate(${Math.round(x-ghost.offsetWidth/2)}px,${Math.round(y-ghost.offsetHeight/2)}px) scale(1.03)`;
     ghost.style.display='none';const el=document.elementFromPoint(x,y);ghost.style.display='';
     const z=el&&el.closest?el.closest('[data-table-zone]'):null;
     if(z!==over){if(over)over.classList.remove('drag-over');over=z;if(over)over.classList.add('drag-over')}
     if(y<110)window.scrollBy(0,-16);else if(y>window.innerHeight-150)window.scrollBy(0,16);
    };
    const onMove=e=>{e.preventDefault();move(e.clientX,e.clientY)};
    const done=drop=>{
     grip.removeEventListener('pointermove',onMove);grip.removeEventListener('pointerup',onUp);grip.removeEventListener('pointercancel',onCancel);
     ghost.remove();chip.draggable=true;chip.classList.remove('seat-dragging');if(over)over.classList.remove('drag-over');
     if(drop&&over){updateRecord('guest',{id:gid,table:over.dataset.tableZone||''});refreshSeating()}
    };
    const onUp=()=>done(true),onCancel=()=>done(false);
    try{grip.setPointerCapture(ev.pointerId)}catch(e){}
    grip.addEventListener('pointermove',onMove);grip.addEventListener('pointerup',onUp);grip.addEventListener('pointercancel',onCancel);
    move(ev.clientX,ev.clientY);
   };
  });
 }
 $$('[data-duplicate-event]').forEach(b=>b.onclick=()=>duplicateEvent(b.dataset.duplicateEvent));
 $$('[data-share-event]').forEach(b=>b.onclick=()=>shareEventWhatsApp(b.dataset.shareEvent));
 $$('[data-share-guests]').forEach(b=>b.onclick=()=>shareGuestsWhatsApp(b.dataset.shareGuests));
 $$('[data-share-checklist]').forEach(b=>b.onclick=()=>shareChecklistWhatsApp(b.dataset.shareChecklist));
 $$('[data-share-timeline]').forEach(b=>b.onclick=()=>shareTimelineWhatsApp(b.dataset.shareTimeline));
 $$('[data-open-budget]').forEach(b=>b.onclick=()=>openBudgetDialog(b.dataset.openBudget));$$('[data-open-event-pres]').forEach(b=>b.onclick=()=>openSubView('Apresentação do evento','EVENTOS & EXPERIÊNCIAS',()=>eventPresentationView(b.dataset.openEventPres),'eventos'));$$('[data-create-event-pres]').forEach(b=>b.onclick=()=>createEventPresentation(b.dataset.createEventPres));$$('[data-open-event-fin]').forEach(b=>b.onclick=()=>openEventFinance(b.dataset.openEventFin));$$('[data-open-approval]').forEach(b=>b.onclick=()=>openSubView('Aprovação do cliente','EVENTOS & EXPERIÊNCIAS',()=>approvalView(b.dataset.openApproval),'eventos'));$$('[data-score-set]').forEach(b=>b.onclick=()=>scoreTap(b));$$('[data-approval-filter]').forEach(b=>b.onclick=()=>{const bd=$('.approval-board');if(!bd)return;const on=bd.classList.toggle('only-unrated');b.textContent=on?'Mostrar todos':'Mostrar só os não avaliados'});
 $$('[data-open-tasting]').forEach(b=>b.onclick=()=>openSubView('Degustação do evento','EVENTOS & EXPERIÊNCIAS',()=>tastingView(b.dataset.openTasting),'eventos'));$$('[data-tasting-approve]').forEach(b=>b.onclick=()=>tastingSetApproved(b.dataset.tastingApprove,b.dataset.val));$$('[data-tasting-del]').forEach(b=>b.onclick=()=>{if(b.dataset.armed==='1'){tastingDelete(b.dataset.tastingDel);return}b.dataset.armed='1';b.textContent='Clique de novo para excluir';setTimeout(()=>{if(b.isConnected){b.dataset.armed='';b.textContent='🗑 Excluir'}},3500)});$$('[data-open-payplan]').forEach(b=>b.onclick=()=>openPayPlanDialog(b.dataset.openPayplan));
 $$('[data-open-history]').forEach(b=>b.onclick=()=>openHistory(b.dataset.openHistory));
 $$('[data-cmp-sup]').forEach(cb=>{cb.checked=_cmpSel.has(cb.dataset.cmpSup);cb.onchange=()=>{if(cb.checked){if(_cmpSel.size>=3){cb.checked=false;toast('Dá pra comparar até 3 fornecedores de cada vez.');return}_cmpSel.add(cb.dataset.cmpSup)}else _cmpSel.delete(cb.dataset.cmpSup);cmpUpdateBar()}});
 if($('#supCompareBtn')){cmpUpdateBar();$('#supCompareBtn').onclick=()=>{const ids=[..._cmpSel];if(ids.length<2)return;openSubView('Comparar fornecedores','REDE DE FORNECEDORES',()=>supplierCompareView(ids),'fornecedores')}}
 $$('[data-guest-import]').forEach(b=>b.onclick=()=>openGuestImport(b.dataset.guestImport));
 wireTableChoosers($('#content'));
 const guestBulkAdd=$('#guestBulkAdd');
 if(guestBulkAdd)guestBulkAdd.onclick=()=>{
  const ta=$('#guestBulkInput'),names=ta.value.split('\n').map(x=>x.trim()).filter(Boolean);
  if(!names.length){toast('Cole ao menos um nome.');return}
  const ch=tableChosenValue($('#guestBulkTable').closest('[data-table-chooser]'));if(!ch.ok){toast(ch.msg);if(ch.focus)ch.focus.focus();return}
  if(ch.table)ensureEventTable(guestBulkAdd.dataset.eventId,ch.table);
  names.forEach((name,i)=>saveExtra('r1_extra_guests',{id:`guest-${Date.now()}-${i}`,eventId:guestBulkAdd.dataset.eventId,name,status:'Pendente',phone:'',table:ch.table}));
  toast(`${names.length} convidado(s) adicionado(s)${ch.table?` na mesa “${ch.table}”`:' (sem mesa)'}.`);
  openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(guestBulkAdd.dataset.eventId),'eventos');
 };
 $$('[data-guest-set]').forEach(b=>b.onclick=()=>{const g=getGuests().find(x=>x.id===b.dataset.guestSet);if(!g)return;updateRecord('guest',{id:g.id,status:b.dataset.status});openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(g.eventId),'eventos')});
 const guestSearch=$('#guestSearch');
 if(guestSearch)guestSearch.oninput=()=>{const term=guestSearch.value.trim().toLowerCase();$$('[data-guest-row]').forEach(r=>r.style.display=r.dataset.guestSearch.includes(term)?'':'none')};
 $$('[data-open-presentation]').forEach(b=>b.onclick=()=>openSubView('Editor de apresentação','PROJETOS VISUAIS',()=>presentationBuilderView(b.dataset.openPresentation),'apresentacoes'));
 $$('[data-open-contract]').forEach(b=>b.onclick=()=>openSubView('Contrato','DOCUMENTOS',()=>contractDetailView(b.dataset.openContract),'contratos'));
 $$('[data-create]').forEach(b=>b.onclick=()=>openForm(b.dataset.create,b.dataset.eventId||''));
 $$('[data-edit]').forEach(b=>b.onclick=()=>{const [type,id]=String(b.dataset.edit).split('::');if(type==='finance'||type==='personalFinance')return finOpenForm({id});const getters={project:getProjects,event:getEvents,client:getClients,supplier:getSuppliers,catalog:getCatalog,contract:getContracts,presentation:getPresentations,finance:getFinance,checklist:()=>getChecklist(),tasting:()=>getTastings(),guest:()=>getGuests(),timeline:()=>getTimeline(),personalGoal:getPersonalGoals,routine:getRoutine,appointment:getAppointments,personalFinance:getPersonalFinance,personalDoc:getPersonalDocs,validation:getValidations,decision:getDecisions,goal:getStrategicGoals,projectAgenda:()=>getProjectAgenda(),idea:()=>getIdeasBoardList()};const getter=getters[type];const record=getter?getter().find(x=>x.id===id):null;if(record)openForm(type,record.eventId||record.projectId||'',record);else toast('Não foi possível localizar este registro para edição.')});
 $$('[data-profile]').forEach(b=>b.onclick=openProfile);
 $$('[data-print]').forEach(b=>b.onclick=()=>printDocument(b.dataset.print,b.dataset.id));
 $$('[data-checklist-toggle]').forEach(b=>b.onchange=()=>toggleChecklist(b.dataset.checklistToggle,b.checked));
 $$('[data-timeline-toggle]').forEach(b=>b.onclick=()=>toggleTimeline(b.dataset.timelineToggle));
 $$('[data-finance-pay]').forEach(b=>b.onclick=()=>markFinancePaid(b.dataset.financePay));
 $$('[data-finance-filter]').forEach(b=>b.onclick=()=>setFinanceFilter(b.dataset.financeFilter));
 const financeEventFilter=$('#financeEventFilter');if(financeEventFilter)financeEventFilter.onchange=()=>setFinanceEvent(financeEventFilter.value);
 $$('[data-project-filter]').forEach(b=>b.onclick=()=>setProjectFilter(b.dataset.projectFilter));
 const projectsSearch=$('#projectsSearch');if(projectsSearch)projectsSearch.oninput=applyProjectFilters;
 $$('[data-event-filter]').forEach(b=>b.onclick=()=>setEventFilter(b.dataset.eventFilter));
 const eventsSearch=$('#eventsSearch');if(eventsSearch)eventsSearch.oninput=applyEventFilters;
 $$('[data-client-filter]').forEach(b=>b.onclick=()=>setClientFilter(b.dataset.clientFilter));
 const clientsSearch=$('#clientsSearch');if(clientsSearch)clientsSearch.oninput=applyClientFilters;
 $$('[data-supplier-filter]').forEach(b=>b.onclick=()=>setSupplierFilter(b.dataset.supplierFilter));
 const suppliersSearch=$('#suppliersSearch');if(suppliersSearch)suppliersSearch.oninput=applySupplierFilters;
 $$('[data-open-client-history]').forEach(b=>b.onclick=()=>openClientHistory(b.dataset.openClientHistory));
 $$('[data-whatsapp]').forEach(b=>b.onclick=()=>openWhatsapp(b.dataset.whatsapp,b.dataset.name,b.dataset.message));
 $$('[data-canvas-edit]').forEach(b=>b.onclick=()=>toast(`Bloco “${b.dataset.canvasEdit}” pronto para edição detalhada na próxima fase do protótipo.`));
 $$('[data-validation-evidence]').forEach(b=>b.onclick=()=>registerEvidence(b.dataset.validationEvidence));
 $$('[data-presentation-section]').forEach(b=>b.onclick=()=>activatePresentationSection(b.dataset.presentationSection,b));
 $$('[data-add-catalog]').forEach(b=>b.onclick=()=>addCatalogToEvent(b.dataset.addCatalog));
 $$('[data-catalog-open]').forEach(b=>b.onclick=()=>openCatalogDetail(b.dataset.catalogOpen));
 $$('[data-catalog-filter]').forEach(b=>b.onclick=()=>filterCatalog(b.dataset.catalogFilter));
 $$('[data-routine-toggle]').forEach(b=>b.onchange=()=>toggleRoutine(b.dataset.routineToggle,b.checked));
 $$('[data-start-tutorial]').forEach(b=>b.onclick=()=>startTutorial(b.dataset.startTutorial));
 $$('[data-tutorial-reset]').forEach(b=>b.onclick=()=>{storage.removeItem('r1_tutorial_progress');render('tutorial');toast('Progresso dos tutoriais reiniciado.')});
 $$('[data-agenda-month-shift]').forEach(b=>b.onclick=()=>shiftAgendaMonth(Number(b.dataset.agendaMonthShift||0)));
 const agendaMonthSelect=$('#agendaMonthSelect'),agendaYearSelect=$('#agendaYearSelect');
 if(agendaMonthSelect)agendaMonthSelect.onchange=()=>setAgendaMonthYear(Number(agendaMonthSelect.value),Number(agendaYearSelect?.value||new Date().getFullYear()));
 if(agendaYearSelect)agendaYearSelect.onchange=()=>setAgendaMonthYear(Number(agendaMonthSelect?.value||0),Number(agendaYearSelect.value));
 $$('[data-agenda-remove]').forEach(b=>b.onclick=()=>removeAgendaItem(b.dataset.agendaRemove,b.dataset.agendaSource));
 $$('[data-agenda-date]').forEach(b=>b.onclick=()=>{agendaDateFilter=b.dataset.agendaDate;applyAgendaFilters();});
 $$('[data-agenda-filter]').forEach(b=>b.onclick=()=>{agendaFilter=b.dataset.agendaFilter;applyAgendaFilters();});
 $$('[data-agenda-remind]').forEach(b=>b.onclick=()=>saveAgendaReminder(b.dataset.agendaRemind));
 const agendaToday=$('[data-agenda-today]');if(agendaToday)agendaToday.onclick=()=>{storage.removeItem('r1_agenda_month');agendaDateFilter='';render('agenda')};
 const al=$('#openAlertsInline');if(al)al.onclick=()=>$('#alertsDialog').showModal();
 const upload=$('#assetUpload');if(upload)upload.onchange=handleAssets;
 const pm=$('#presentModeBtn');if(pm)pm.onclick=openPresentationMode;
 applyFinanceFilters();
 applyProjectFilters();
 applyEventFilters();
 applyClientFilters();
 applySupplierFilters();
 applyAgendaFilters();
 updateAlertCenter();
}


function closeTutorialDialogs(){['workspaceDialog','quickAddDialog','formDialog','catalogDetailDialog','companyProfileDialog','presentationModeDialog','alertsDialog'].forEach(id=>{const d=$('#'+id);if(d?.open)try{d.close()}catch{}d?.classList.remove('tutorial-nonmodal')})}
function tutorialDemodalize(id){const d=$('#'+id);if(!d)return;try{if(d.open)d.close();d.show();d.classList.add('tutorial-nonmodal')}catch{}}
function clearTutorialTarget(){if(tutorialHighlighted){tutorialHighlighted.classList.remove('tutorial-target');tutorialHighlighted=null}document.querySelectorAll('.tutorial-target').forEach(el=>el.classList.remove('tutorial-target'))}
function coachShow(){const c=$('#tutorialCoach');if(!c)return;try{if(!c.matches(':popover-open'))c.showPopover()}catch{c.style.display='block'}}
function coachHide(){const c=$('#tutorialCoach');if(!c)return;try{if(c.matches(':popover-open'))c.hidePopover()}catch{c.style.display='none'}}
function tutorialAction(action){
 if(!action)return;
 if(action==='workspaceDialog'){openWorkspaceDialog();tutorialDemodalize('workspaceDialog')}
 else if(action==='profile'){openProfile();tutorialDemodalize('companyProfileDialog')}
 else if(action.startsWith('form:')){openForm(action.split(':')[1]);tutorialDemodalize('formDialog')}
 else if(action==='eventHub'){const e=getEvents()[0];if(e)openSubView('Hub do evento','EVENTOS & EXPERIÊNCIAS',()=>eventHubView(e.id),'eventos')}
 else if(action==='approval'){const e=getEvents()[0];if(e)openSubView('Aprovação do cliente','EVENTOS & EXPERIÊNCIAS',()=>approvalView(e.id),'eventos')}  else if(action==='tasting'){const e=getEvents()[0];if(e)openSubView('Degustação do evento','EVENTOS & EXPERIÊNCIAS',()=>tastingView(e.id),'eventos')}  else if(action==='checklist'){const e=getEvents()[0];if(e)openSubView('Checklist do evento','EXECUÇÃO RIGOROSA',()=>checklistView(e.id),'eventos')}
 else if(action==='timeline'){const e=getEvents()[0];if(e)openSubView('Cronograma do dia','EXECUÇÃO DO EVENTO',()=>timelineView(e.id),'eventos')}
 else if(action==='guests'){const e=getEvents()[0];if(e)openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(e.id),'eventos')}
 else if(action==='seating'){const e=getEvents()[0];if(e)openSubView('Mapa de mesas','EVENTOS & EXPERIÊNCIAS',()=>seatingView(e.id),'eventos')}
 else if(action==='ajustes'){if($('#pageTitle').textContent!=='Ajustes')openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)}
 else if(action.startsWith('catalogFilter:'))filterCatalog(action.split(':').slice(1).join(':'));
 else if(action==='catalogDetail'){const item=getCatalog().find(x=>x.category==='DJ & Música')||getCatalog()[0];if(item){openCatalogDetail(item.id);tutorialDemodalize('catalogDetailDialog')}}
 else if(action==='presentation'){const p=getPresentations()[0];if(p)openSubView('Editor de apresentação','PROJETOS VISUAIS',()=>presentationBuilderView(p.id),'apresentacoes')}
 else if(action==='contract'){const c=getContracts()[0];if(c)openSubView('Contrato','DOCUMENTOS',()=>contractDetailView(c.id),'contratos')}
}
function runTutorialStep(){
 const flow=tutorialFlows[activeTutorialId];if(!flow)return;const step=flow.steps[tutorialStepIndex];if(!step){finishTutorial();return}
 clearTutorialTarget();if(!step.keepDialog)closeTutorialDialogs();
 if(step.workspace&&step.workspace!==currentWorkspace)applyWorkspace(step.workspace,false);
 if(step.nav)render(step.nav);else if(step.workspace)render(current==='tutorial'?'dashboard':current);
 setTimeout(()=>{tutorialAction(step.action);setTimeout(()=>{
  const target=step.target?document.querySelector(step.target):null;if(target){tutorialHighlighted=target;target.classList.add('tutorial-target');try{target.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'})}catch{}}
  $('#tutorialCoachLabel').textContent=`PASSO ${tutorialStepIndex+1} DE ${flow.steps.length}`;$('#tutorialCoachTitle').textContent=step.title;$('#tutorialCoachText').textContent=step.text;$('#tutorialCoachTip').textContent=step.tip||'';$('#tutorialCoachProgress').style.width=`${Math.round((tutorialStepIndex+1)/flow.steps.length*100)}%`;$('#tutorialBack').disabled=tutorialStepIndex===0;$('#tutorialNext').textContent=tutorialStepIndex===flow.steps.length-1?'Concluir tutorial ✓':'Próximo passo →';coachShow();
 },120)},60)
}
function startTutorial(id){if(!tutorialFlows[id])return;activeTutorialId=id;tutorialStepIndex=0;storage.setItem('r1_tutorial_welcome_seen','1');const w=$('#tutorialWelcomeDialog');if(w?.open)w.close();runTutorialStep()}
function nextTutorial(){const flow=tutorialFlows[activeTutorialId];if(!flow)return;if(tutorialStepIndex>=flow.steps.length-1){finishTutorial();return}tutorialStepIndex++;runTutorialStep()}
function backTutorial(){if(tutorialStepIndex<=0)return;tutorialStepIndex--;runTutorialStep()}
function stopTutorial(){clearTutorialTarget();coachHide();closeTutorialDialogs();activeTutorialId=null;tutorialStepIndex=0;toast('Tutorial encerrado. Você pode retomá-lo na Central de Aprendizado.')}
function finishTutorial(){const id=activeTutorialId;if(id)saveTutorialDone(id);clearTutorialTarget();coachHide();closeTutorialDialogs();activeTutorialId=null;tutorialStepIndex=0;render('tutorial');toast('Tutorial concluído! Progresso salvo neste navegador.')}

function showApp(){
 storage.setItem('rizzieri_one_demo','1');
 $('#loginView').classList.add('hidden');
 if(hasPassword()&&!_cryptoKey){$('#lockView').classList.remove('hidden');setTimeout(()=>$('#lockPass')?.focus(),200);return}
 proceedIntoApp();
}
function proceedIntoApp(){
 $('#loginView').classList.add('hidden');$('#lockView').classList.add('hidden');
 planEnsureTrial();
 if(planState().bloqueado){showPlanLock();return}
 $('#planLockView').classList.add('hidden');
 $('#appView').classList.remove('hidden');ajApplyZoom();ajApplyLogin();applyWorkspace(currentWorkspace);render('dashboard');updateAlertCenter();
 if(!storage.getItem('r1_tutorial_welcome_seen'))setTimeout(()=>{const d=$('#tutorialWelcomeDialog');if(d&&!d.open){d.showModal();hydrateIcons(d)}},450);
}
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();showApp()});
$('#demoLogin').onclick=showApp;$('#topBackBtn').onclick=goBack;
$('#lockEntrarBtn').onclick=doUnlockAttempt;
$('#lockPass').onkeydown=ev=>{if(ev.key==='Enter'){ev.preventDefault();doUnlockAttempt()}};
$('#lockTogglePass').onclick=function(){togglePwField('lockPass',this)};
$('#lockForgotBtn').onclick=()=>{$('#pwForgotDialog').showModal()};
$('#pwForgotWipeBtn').onclick=()=>{if(confirm('Sem a senha, os dados criptografados não podem ser recuperados. Esta ação apaga todos os dados deste aparelho. Tem certeza?')){$('#pwForgotDialog').close();doWipeTudo()}};
$('#pwSetupPass').oninput=()=>{checkPwRules();conferirSenhasSetup()};
$('#pwSetupPass2').oninput=conferirSenhasSetup;
$('#pwSetupToggle1').onclick=function(){togglePwField('pwSetupPass',this)};
$('#pwSetupToggle2').onclick=function(){togglePwField('pwSetupPass2',this)};
$('#pwSetupBtn').onclick=doCriarOuTrocarSenha;
$('#pwRemoveConfirmBtn').onclick=doRemoverSenha;
$('#planLockCopy').onclick=planCopyDev;
$('#planLockWhats').onclick=planOpenWhats;
$('#planLockCode').oninput=function(){planMaskCode(this)};
$('#planLockCode').onkeydown=ev=>{if(ev.key==='Enter'){ev.preventDefault();$('#planLockActivate').click()}};
$('#planLockActivate').onclick=()=>{const r=planTryActivate($('#planLockCode').value);if(r.ok)planAfterActivate();else $('#planLockErr').textContent=r.pendente?'':(r.msg||'')};
$('#planLockBackup').onclick=()=>ajDownloadBackup();
$('#proCopyDev').onclick=planCopyDev;
$('#proWhatsBtn').onclick=planOpenWhats;
$('#proCode').oninput=function(){planMaskCode(this)};
$('#proActivateBtn').onclick=()=>{const r=planTryActivate($('#proCode').value);if(r.ok)planAfterActivate();else if(!r.pendente)$('#proErr').textContent=r.msg||''};
$('#budGerar').onclick=()=>{const id=$('#budGerar').dataset.eventId;$('#budgetDialog').close();generateBudgetPdf(id,{validade:$('#budValidade').value,sinal:$('#budSinal').value,obs:$('#budObs').value.trim(),parcelas:$('#budParcelas').checked})};
$('#ppTotal').oninput=function(){finMaskMoeda(this);payPlanRefresh()};['ppSinal','ppSinalData','ppParcelas','ppDiasAntes'].forEach(id=>$('#'+id).oninput=payPlanRefresh);$('#ppExistOk').onchange=payPlanRefresh;$('#ppGerar').onclick=doPayPlanGenerate;
$('#ppAskMais').onclick=()=>{if(!_ppEx)return;_ppEscolheu=true;$('#ppParcelas').value=Math.min(12,_ppEx.open.length+1);payPlanSetMode();payPlanExRefresh();$('#ppParcelas').focus()};
$('#ppAskAlterar').onclick=()=>{if(!_ppEx)return;_ppEscolheu=true;payPlanSetMode();payPlanExRefresh()};
$('#ppRevisar').onclick=()=>{const r=payPlanExCompute();if(r.erro||r.fase!=='ok')return;_ppConfirm=true;payPlanSetMode();payPlanExConfirm(r)};
$('#ppVoltarEdit').onclick=()=>{_ppConfirm=false;payPlanSetMode();payPlanExRefresh()};
$('#ppGravar').onclick=payPlanExApply;
$('#giText').oninput=guestImportRefresh;
$('#giOk').onclick=doGuestImport;
$('#giFile').onchange=ev=>guestImportFile(ev.target.files&&ev.target.files[0]);
$('#pwWhatsEnviar').onclick=()=>doEnviarSenhaWhats();
$('#pwWhatsCancelar').onclick=()=>{_pwWhatsTmp='';$('#pwWhatsDialog').close()};
$('#togglePassword').onclick=()=>{const i=$('#password');i.type=i.type==='password'?'text':'password'};
const openWorkspaceDialog=()=>{$('#workspaceDialog').showModal();hydrateIcons($('#workspaceDialog'))};
$('#workspaceBtn').onclick=openWorkspaceDialog;
$('#mobileWorkspaceBtn').onclick=openWorkspaceDialog;
$('#quickAddBtn').onclick=()=>{populateQuickGrid();$('#quickAddDialog').showModal();hydrateIcons($('#quickAddDialog'))};
$('#alertsBtn').onclick=()=>{populateAlerts();$('#alertsDialog').showModal();};
$('#searchBtn').onclick=globalSearch;
$('#tutorialBtn').onclick=()=>render('tutorial');
$('#tutorialTopBtn').onclick=()=>render('tutorial');
$('#startEssentialTutorial').onclick=()=>startTutorial('essential');
$('#openTutorialCenter').onclick=()=>{$('#tutorialWelcomeDialog').close();storage.setItem('r1_tutorial_welcome_seen','1');render('tutorial')};
$('#tutorialNext').onclick=nextTutorial;$('#tutorialBack').onclick=backTutorial;$('#tutorialStop').onclick=stopTutorial;
$$('[data-close]').forEach(b=>b.onclick=()=>$('#'+b.dataset.close).close());
$('#searchDialogGo').onclick=runGlobalSearch;
$('#searchDialogInput').onkeydown=ev=>{if(ev.key==='Enter'){ev.preventDefault();runGlobalSearch()}};
$$('[data-workspace]').forEach(b=>b.onclick=()=>{$('#workspaceDialog').close();applyWorkspace(b.dataset.workspace,true);toast(`Workspace alterado para ${b.dataset.workspace}.`) });
$('#quickAddDialog').addEventListener('click',e=>{const b=e.target.closest('[data-create]');if(b){$('#quickAddDialog').close();openForm(b.dataset.create)}});

function populateQuickGrid(){
 const sets={
  'Negócios':[['project','grid','Projeto'],['client','users','Cliente'],['finance','wallet','Lançamento'],['goal','target','Objetivo'],['task','check-square','Tarefa']],
  'Eventos':[['event','calendar-heart','Evento'],['client','users','Cliente'],['supplier','briefcase','Fornecedor'],['finance','wallet','Lançamento'],['catalog','book-open','Item catálogo'],['contract','file-signature','Contrato'],['presentation','presentation','Apresentação'],['tasting','calendar-heart','Degustação'],['checklist','check-square','Checklist'],['timeline','calendar','Cronograma']],
  'Pessoal':[['personalGoal','target','Objetivo'],['routine','check-square','Rotina'],['appointment','calendar','Compromisso'],['personalFinance','wallet','Lançamento'],['personalDoc','folder','Documento']],
  'Ideias':[['idea','lightbulb','Ideia'],['validation','flask','Hipótese'],['decision','history','Decisão'],['project','grid','Projeto']]
 };
 $('#quickGrid').innerHTML=(sets[currentWorkspace]||sets['Negócios']).map(([type,icon,label])=>`<button data-create="${type}"><span data-icon="${icon}"></span><span>${label}</span></button>`).join('');hydrateIcons($('#quickGrid'));
}

function globalSearch(){
 $('#searchDialogInput').value='';
 $('#searchDialogEmpty').style.display='none';
 $('#searchDialog').showModal();
 setTimeout(()=>$('#searchDialogInput').focus(),30);
}
function runGlobalSearch(){
 const q=($('#searchDialogInput').value||'').trim().toLowerCase();
 if(!q)return;
 const close=()=>$('#searchDialog').close();
 const p=getProjects().find(x=>x.name.toLowerCase().includes(q));if(p){close();openSubView('Hub do produto','APPS & PRODUTOS',()=>projectHubView(p.id),'projetos');return}
 const e=getEvents().find(x=>x.title.toLowerCase().includes(q)||x.client.toLowerCase().includes(q));if(e){close();openSubView('Hub do evento','EVENTOS & EXPERIÊNCIAS',()=>eventHubView(e.id),'eventos');return}
 const qd=onlyDigits(q);
 const c=getClients().find(x=>x.name.toLowerCase().includes(q)||String(x.secondary||'').toLowerCase().includes(q)||(qd&&onlyDigits(x.phone).includes(qd)));if(c){close();if(currentWorkspace!=='Eventos'&&currentWorkspace!=='Negócios')applyWorkspace('Negócios');render('clientes');toast(`Cliente encontrado: ${c.name}.`);return}
 $('#searchDialogEmpty').style.display='block';
}

function filterCatalog(category){
 const cards=$$('[data-catalog-category]');let visible=0;
 cards.forEach(card=>{const show=category==='Todos'||card.dataset.catalogCategory===category;card.classList.toggle('hidden',!show);if(show)visible++});
 $$('[data-catalog-filter]').forEach(b=>b.classList.toggle('active',b.dataset.catalogFilter===category));
 const count=$('#catalogFilterCount');if(count)count.textContent=`${visible} ${visible===1?'item':'itens'}`;
 const empty=$('#catalogEmpty');if(empty)empty.classList.toggle('hidden',visible!==0);
}
function openCatalogDetail(itemId){
 const item=getCatalog().find(x=>x.id===itemId);if(!item)return;const events=getEvents(),presentations=getPresentations();
 $('#catalogDetailTitle').textContent=item.name;
 $('#catalogDetailBody').innerHTML=`<div class="catalog-detail"><div class="catalog-detail-visual ${item.image?'has-image':''}" ${item.image?`style="background-image:url('${item.image}')"`:''}><span>${item.category}</span></div><div class="catalog-detail-copy"><span class="eyebrow">${item.supplier}</span><h2>${item.name}</h2><p>${item.description}</p><div class="catalog-tags">${(item.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div><div class="catalog-price"><strong>${moneyApp(item.price)}</strong><small>${item.unit}</small></div><label>Adicionar ao evento</label><select id="catalogDetailEvent" class="catalog-event-select">${events.map(e=>`<option value="${e.id}">${e.title}</option>`).join('')}</select><button id="catalogDetailAdd" class="btn btn-primary"><span data-icon="plus-circle"></span> Adicionar ao projeto</button><label style="margin-top:16px">Adicionar à apresentação</label><select id="catalogDetailPresentation" class="catalog-event-select">${presentations.map(p=>`<option value="${p.id}">${p.title}</option>`).join('')}</select><button id="catalogDetailAddPresentation" class="small-btn full-btn"><span data-icon="presentation"></span> Adicionar à apresentação</button></div></div>`;
 hydrateIcons($('#catalogDetailBody'));$('#catalogDetailAdd').onclick=()=>addCatalogToEvent(itemId,$('#catalogDetailEvent').value);$('#catalogDetailAddPresentation').onclick=()=>addCatalogToPresentation(itemId,$('#catalogDetailPresentation').value);$('#catalogDetailDialog').showModal();
}
function addCatalogToPresentation(itemId,presentationId){const key=`r1_presentation_catalog_${presentationId}`,arr=readJSON(key,[]);if(!arr.includes(itemId))arr.push(itemId);storage.setItem(key,JSON.stringify(arr));const item=getCatalog().find(x=>x.id===itemId);toast(`${item?.name||'Item'} adicionado à apresentação.`)}
function toggleRoutine(id,done){const overrides=readJSON('r1_routine_overrides',{});overrides[id]={done};storage.setItem('r1_routine_overrides',JSON.stringify(overrides));toast(done?'Rotina concluída.':'Rotina reaberta.');render('rotina')}

function setFinanceFilter(filter){financeUIState={...financeUIState,filter};storage.setItem('r1_finance_ui',JSON.stringify(financeUIState));applyFinanceFilters()}
function setFinanceEvent(event){financeUIState={...financeUIState,event};storage.setItem('r1_finance_ui',JSON.stringify(financeUIState));applyFinanceFilters()}
function applyFinanceFilters(){const rows=$$('[data-finance-row]');if(!rows.length)return;const filter=financeUIState.filter||'Todos';const event=financeUIState.event||'Todos os eventos';let visible=0;rows.forEach(row=>{const matchFilter=filter==='Todos'||row.dataset.financeType===filter||(filter==='Pendentes'&&row.dataset.financeStatus==='Pendente');const matchEvent=event==='Todos os eventos'||row.dataset.financeEvent===event;const show=matchFilter&&matchEvent;row.classList.toggle('hidden',!show);if(show)visible++});$$('[data-finance-filter]').forEach(b=>b.classList.toggle('active',b.dataset.financeFilter===filter));const select=$('#financeEventFilter');if(select)select.value=event;const counter=$('#financeCounter');if(counter)counter.textContent=`${visible} ${visible===1?'lançamento':'lançamentos'}`;const empty=$('#financeEmpty');if(empty)empty.classList.toggle('hidden',visible!==0)}
function setProjectFilter(filter){projectUIState={filter};applyProjectFilters()}
function applyProjectFilters(){const cards=$$('[data-project-card]');if(!cards.length)return;const filter=projectUIState.filter||'Todos';const term=($('#projectsSearch')?.value||'').trim().toLowerCase();let visible=0;cards.forEach(card=>{const status=card.dataset.projectStatus||'';const name=card.dataset.projectName||'';const matchFilter=filter==='Todos'||status===filter;const matchSearch=!term||name.includes(term);const show=matchFilter&&matchSearch;card.classList.toggle('hidden',!show);if(show)visible++});$$('[data-project-filter]').forEach(b=>b.classList.toggle('active',b.dataset.projectFilter===filter));const counter=$('#projectsCounter');if(counter)counter.textContent=`${visible} ${visible===1?'projeto':'projetos'}`;const empty=$('#projectsEmpty');if(empty)empty.classList.toggle('hidden',visible!==0)}
function setEventFilter(filter){eventUIState={filter};applyEventFilters()}
function applyEventFilters(){const cards=$$('[data-event-card]');if(!cards.length)return;const filter=eventUIState.filter||'Todos';const term=($('#eventsSearch')?.value||'').trim().toLowerCase();let visible=0;cards.forEach(card=>{const type=card.dataset.eventType||'';const search=card.dataset.eventSearch||'';const matchFilter=filter==='Todos'||type===filter;const matchSearch=!term||search.includes(term);const show=matchFilter&&matchSearch;card.classList.toggle('hidden',!show);if(show)visible++});$$('[data-event-filter]').forEach(b=>b.classList.toggle('active',b.dataset.eventFilter===filter));const counter=$('#eventsCounter');if(counter)counter.textContent=`${visible} ${visible===1?'evento':'eventos'}`;const empty=$('#eventsEmpty');if(empty)empty.classList.toggle('hidden',visible!==0)}
function setClientFilter(filter){clientUIState={filter};applyClientFilters()}
function applyClientFilters(){const cards=$$('[data-client-card]');if(!cards.length)return;const filter=clientUIState.filter||'Todos';const term=($('#clientsSearch')?.value||'').trim().toLowerCase();let visible=0;cards.forEach(card=>{const type=card.dataset.clientType||'';const search=card.dataset.clientSearch||'';const matchFilter=filter==='Todos'||(filter==='Empresa'?type==='Empresa':type!=='Empresa');const matchSearch=!term||search.includes(term);const show=matchFilter&&matchSearch;card.classList.toggle('hidden',!show);if(show)visible++});$$('[data-client-filter]').forEach(b=>b.classList.toggle('active',b.dataset.clientFilter===filter));const counter=$('#clientsCounter');if(counter)counter.textContent=`${visible} ${visible===1?'cliente':'clientes'}`;const empty=$('#clientsEmpty');if(empty)empty.classList.toggle('hidden',visible!==0)}
function setSupplierFilter(filter){supplierUIState={filter};applySupplierFilters()}
function applySupplierFilters(){const cards=$$('[data-supplier-card]');if(!cards.length)return;const filter=supplierUIState.filter||'Todos';const term=($('#suppliersSearch')?.value||'').trim().toLowerCase();let visible=0;cards.forEach(card=>{const category=card.dataset.supplierCategory||'';const search=card.dataset.supplierSearch||'';const matchFilter=filter==='Todos'||category===filter;const matchSearch=!term||search.includes(term);const show=matchFilter&&matchSearch;card.classList.toggle('hidden',!show);if(show)visible++});$$('[data-supplier-filter]').forEach(b=>b.classList.toggle('active',b.dataset.supplierFilter===filter));const counter=$('#suppliersCounter');if(counter)counter.textContent=`${visible} ${visible===1?'fornecedor':'fornecedores'}`;const empty=$('#suppliersEmpty');if(empty)empty.classList.toggle('hidden',visible!==0)}

let agendaFilter='Todos',agendaDateFilter='';
function setAgendaMonthYear(month,year){const safeMonth=Math.min(11,Math.max(0,Number(month)||0)),safeYear=Math.min(2100,Math.max(2000,Number(year)||new Date().getFullYear()));storage.setItem('r1_agenda_month',`${safeYear}-${String(safeMonth+1).padStart(2,'0')}`);agendaDateFilter='';render('agenda')}
function removeAgendaItem(id,source=''){if(!id)return;const hidden=readJSON('r1_agenda_hidden',[]);if(!hidden.includes(id))hidden.push(id);storage.setItem('r1_agenda_hidden',JSON.stringify(hidden));toast(source==='Compromisso'?'Compromisso removido da agenda.':'Item removido da agenda sem apagar o registro de origem.');render('agenda');updateAlertCenter()}
function shiftAgendaMonth(delta){const stored=storage.getItem('r1_agenda_month');const base=stored?new Date(stored+'-01T12:00:00'):new Date();base.setDate(1);base.setMonth(base.getMonth()+delta);storage.setItem('r1_agenda_month',`${base.getFullYear()}-${String(base.getMonth()+1).padStart(2,'0')}`);agendaDateFilter='';render('agenda')}
function applyAgendaFilters(){const rows=$$('[data-agenda-row]');if(!rows.length)return;let visible=0;rows.forEach(row=>{const type=row.dataset.agendaType||'',source=row.dataset.agendaSource||'',date=row.dataset.agendaDateRow||'';const typeMatch=agendaFilter==='Todos'||(agendaFilter==='Evento'&&(type==='Evento'||type==='Cronograma'))||(agendaFilter==='Compromisso'&&(source==='Compromisso'||['Compromisso','Pessoal','Planejamento','Cliente','Fornecedor'].includes(type)))||(agendaFilter==='Financeiro'&&(source==='Financeiro'||type==='Finanças'||type==='Pagamento'||type==='Recebimento'))||(agendaFilter==='Checklist'&&source==='Checklist');const dateMatch=!agendaDateFilter||date===agendaDateFilter;const show=typeMatch&&dateMatch;row.classList.toggle('hidden',!show);if(show)visible++});$$('[data-agenda-filter]').forEach(b=>b.classList.toggle('active',b.dataset.agendaFilter===agendaFilter));$$('[data-agenda-date]').forEach(b=>b.classList.toggle('selected',!!agendaDateFilter&&b.dataset.agendaDate===agendaDateFilter));const c=$('#agendaCounter');if(c)c.textContent=`${visible} ${visible===1?'compromisso':'compromissos'}`;const empty=$('#agendaEmpty');if(empty)empty.classList.toggle('hidden',visible!==0)}
function saveAgendaReminder(id){const reminders=readJSON('r1_agenda_reminders',{});const row=document.querySelector(`[data-agenda-remind="${id}"]`)?.closest('[data-agenda-row]');const title=row?.querySelector('h4')?.textContent||'Lembrete da agenda';const detail=row?.querySelector('p')?.textContent||'';reminders[id]={active:true,createdAt:new Date().toISOString(),title,detail,date:row?.dataset.agendaDateRow||''};storage.setItem('r1_agenda_reminders',JSON.stringify(reminders));toast('Lembrete adicionado à Central de Atenção.');updateAlertCenter()}
function alertItems(){
 const today=new Date();today.setHours(0,0,0,0);
 const horizon=new Date(today);horizon.setDate(horizon.getDate()+3);
 const max=horizon.toISOString().slice(0,10),min=today.toISOString().slice(0,10),items=[];
 const hidden=new Set(readJSON('r1_agenda_hidden',[]));
 const reminders=readJSON('r1_agenda_reminders',{});
 Object.entries(reminders).filter(([,r])=>r.active).forEach(([id,r])=>{if(!hidden.has(id))items.push({id,title:r.title||'Lembrete da agenda',detail:r.detail||r.date||'Lembrete manual',kind:'info',nav:'agenda'})});
 getAppointments().forEach(a=>{if(!hidden.has(a.id)&&a.date>=min&&a.date<=max)items.push({id:a.id,title:a.title,detail:`${a.date}${a.time?` • ${a.time}`:''}`,kind:'info',nav:'agenda'})});
 getFinance().filter(f=>f.status==='Pendente'&&f.date<=max&&!hidden.has(`agenda-fin-${f.id}`)).forEach(f=>items.push({id:`agenda-fin-${f.id}`,title:f.description,detail:`${f.type} • ${f.party}`,kind:f.date<min?'danger':'warn',nav:'financeiro'}));
 getChecklist().filter(c=>!c.done&&c.due<=max&&!hidden.has(`agenda-check-${c.id}`)).forEach(c=>items.push({id:`agenda-check-${c.id}`,title:c.title,detail:`Checklist • ${eventNameApp(c.eventId)}`,kind:c.due<min?'danger':'warn',eventId:c.eventId}));
 getEvents().filter(e=>e.date>=min&&e.date<=max&&!hidden.has(`agenda-event-${e.id}`)).forEach(e=>items.push({id:`agenda-event-${e.id}`,title:e.title,detail:`Evento • ${e.client}`,kind:'info',eventId:e.id}));
 const seen=new Set();return items.filter(x=>{const k=`${x.title}|${x.detail}`;if(seen.has(k))return false;seen.add(k);return true}).slice(0,9)
}
function eventNameApp(id){return getEvents().find(e=>e.id===id)?.title||'Evento'}
function updateAlertCenter(){const items=alertItems();const badge=$('#alertsBtn .badge');if(badge){badge.textContent=items.length;badge.classList.toggle('hidden',items.length===0)}}
function populateAlerts(){const items=alertItems();const title=$('#alertsCountTitle');if(title)title.textContent=`${items.length} ${items.length===1?'ponto importante':'pontos importantes'}`;const list=$('#alertsList');if(!list)return;list.innerHTML=items.length?items.map((x,i)=>`<button data-alert-index="${i}"><span class="status-dot ${x.kind}"></span><div><b>${x.title}</b><small>${x.detail}</small></div><em>Abrir</em></button>`).join(''):`<div class="empty-state"><span data-icon="bell"></span><b>Nada crítico agora.</b><small>A agenda e os prazos estão em dia.</small></div>`;hydrateIcons(list);$$('[data-alert-index]').forEach(b=>b.onclick=()=>{const x=items[Number(b.dataset.alertIndex)];$('#alertsDialog').close();if(x.eventId){openSubView('Hub do evento','EVENTOS & EXPERIÊNCIAS',()=>eventHubView(x.eventId),'eventos')}else render(x.nav||'agenda')})}
function openClientHistory(id){const first=getClients().find(x=>x.id===id);if(!first)return;openSubView('Histórico do cliente','CRM',()=>{const client=getClients().find(x=>x.id===id)||first;const events=getEvents().filter(e=>String(e.client).toLowerCase().includes(client.name.toLowerCase())||String(client.secondary||'').length&&String(e.client).toLowerCase().includes(String(client.secondary).toLowerCase()));const finance=getFinance().filter(f=>events.some(e=>e.id===f.eventId));return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">HISTÓRICO DO CLIENTE</span><h3>${client.name}${client.secondary?` & ${client.secondary}`:''}</h3><p>${client.phone} • ${client.email}${client.createdAt?` • Desde: ${finBR(client.createdAt)}`:''}</p></div><button class="btn btn-primary" data-create="event">＋ Novo evento</button></div><section class="metrics"><article class="metric-card" data-open-client-events="${client.id}" data-client-name="${finEsc(client.name)}" style="cursor:pointer"><small>Eventos relacionados</small><strong>${events.length}</strong><span class="metric-meta">Toque para ver na lista de Eventos</span></article><article class="metric-card" data-open-client-finance="${client.id}" style="cursor:pointer"><small>Movimentos financeiros</small><strong>${finance.length}</strong><span class="metric-meta">Toque para ver o resumo</span></article><article class="metric-card"><small>Status</small><select data-client-status="${client.id}" style="font-size:19px;font-weight:800;border:none;background:transparent;color:inherit;width:100%;padding:0;margin:2px 0">${['Ativo','Lead','Em negociação','Inativo',client.status].filter((v,i,a)=>v&&a.indexOf(v)===i).map(s=>`<option value="${s}" ${client.status===s?'selected':''}>${s}</option>`).join('')}</select><span class="metric-meta">Toque pra mudar</span></article></section><section class="panel"><div class="panel-head"><h3>Eventos</h3></div>${events.length?events.map(e=>`<div class="list-row"><span class="status-dot info"></span><div><b>${e.title}</b><small>${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • ${e.venue}</small></div><button class="small-btn" data-open-event="${e.id}">Abrir detalhes</button></div>`).join(''):`<p style="color:#6c7887">Nenhum evento vinculado no protótipo.</p>`}</section>`},'clientes')}
function openWhatsapp(phone,name='contato',customMessage=''){const digits=String(phone||'').replace(/\D/g,'');if(!digits){toast('Telefone não disponível.');return}const message=customMessage||`Olá, ${name}. Estou entrando em contato pelo sistema.`;window.open(`https://wa.me/55${digits.replace(/^55/,'')}?text=${encodeURIComponent(message)}`,'_blank');}
function registerEvidence(id){toast('Evidência registrada no protótipo. Em seguida, abra “Nova hipótese” para detalhar o teste.');render('validacao')}
function activatePresentationSection(section,btn){$$('[data-presentation-section]').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');const title=$('.deck-slide h2');const subtitle=$('.deck-slide p');if(title&&subtitle){subtitle.textContent=`Seção ativa: ${section}`;toast(`Seção “${section}” destacada.`)}}

applyWorkspace(currentWorkspace);
hydrateIcons();
$('#searchBtn').innerHTML=iconSvg('search');$('#alertsBtn').childNodes[0].textContent='';$('#alertsBtn').insertAdjacentHTML('afterbegin',iconSvg('bell'));$('#installBtn').innerHTML=`${iconSvg('download')} Instalar aplicativo`;

function onlyDigits(v){return String(v||'').replace(/\D/g,'')}
function maskPhoneBR(v){
 const d=onlyDigits(v).slice(0,11);
 let out='';
 if(d.length>0)out='('+d.slice(0,2);
 if(d.length>2)out+=') ';
 if(d.length>2){
  const rest=d.slice(2);
  if(d.length>10){out+=rest.slice(0,5)+(rest.length>5?'-'+rest.slice(5):'')}
  else{out+=rest.slice(0,4)+(rest.length>4?'-'+rest.slice(4):'')}
 }
 return out;
}
function maskCpfCnpj(v){
 const d=onlyDigits(v).slice(0,14);
 if(d.length<=11){
  let out=d.slice(0,3);
  if(d.length>3)out+='.'+d.slice(3,6);
  if(d.length>6)out+='.'+d.slice(6,9);
  if(d.length>9)out+='-'+d.slice(9,11);
  return out;
 }
 let out=d.slice(0,2);
 if(d.length>2)out+='.'+d.slice(2,5);
 if(d.length>5)out+='.'+d.slice(5,8);
 if(d.length>8)out+='/'+d.slice(8,12);
 if(d.length>12)out+='-'+d.slice(12,14);
 return out;
}
function isValidCPF(v){
 const c=onlyDigits(v);
 if(c.length!==11||/^(\d)\1{10}$/.test(c))return false;
 let sum=0;for(let i=0;i<9;i++)sum+=Number(c[i])*(10-i);
 let rev=11-(sum%11);if(rev>=10)rev=0;
 if(rev!==Number(c[9]))return false;
 sum=0;for(let i=0;i<10;i++)sum+=Number(c[i])*(11-i);
 rev=11-(sum%11);if(rev>=10)rev=0;
 return rev===Number(c[10]);
}
function isValidCNPJ(v){
 const c=onlyDigits(v);
 if(c.length!==14||/^(\d)\1{13}$/.test(c))return false;
 const calc=(base,weights)=>{let s=0;for(let i=0;i<base.length;i++)s+=Number(base[i])*weights[i];const r=s%11;return r<2?0:11-r};
 const d1=calc(c.slice(0,12),[5,4,3,2,9,8,7,6,5,4,3,2]);
 if(d1!==Number(c[12]))return false;
 const d2=calc(c.slice(0,13),[6,5,4,3,2,9,8,7,6,5,4,3,2]);
 return d2===Number(c[13]);
}
function isValidCpfCnpj(v){const c=onlyDigits(v);if(!c.length)return true;if(c.length===11)return isValidCPF(c);if(c.length===14)return isValidCNPJ(c);return false}
const forms={
 project:{title:'Novo projeto',store:'r1_extra_projects',fields:[['name','Nome','text','Ex.: Novo App'],['category','Categoria','text','Tecnologia / Negócio'],['status','Status','select','Ideia|Levantamento de informações|Precificação (custo)|Análise|Desenvolvimento|Teste|Produção|Comercialização|Resultado $'],['url','URL','url','https://'],['owner','Responsável','text',''],['description','Descrição','textarea','Objetivo do projeto...']]},
 projectAgenda:{title:'Novo lançamento de agenda',store:'r1_extra_project_agenda',fields:[['projectId','Projeto','projectselect',''],['startDate','Data inicial','date',''],['endDate','Data final','date',''],['notes','Observação','textarea','O que aconteceu ou está previsto para este período...']]},
 idea:{title:'Nova ideia',store:'r1_extra_ideas',fields:[['name','Nome da ideia','text',''],['stage','Estágio','select','IDEIA|ANÁLISE|VALIDAÇÃO|PROTÓTIPO|PRODUÇÃO'],['problem','Problema que resolve','textarea',''],['audience','Público','text',''],['potential','Potencial','select','Baixo|Médio|Alto|Muito alto'],['complexity','Complexidade','select','Baixa|Média|Alta'],['next','Próximo passo','text','']]},
 task:{title:'Nova tarefa',store:'r1_extra_tasks',fields:[['title','Título','text',''],['project','Projeto / Evento','text',''],['owner','Responsável','text',''],['date','Prazo','date',''],['priority','Prioridade','select','Baixa|Média|Alta|Crítica'],['description','Descrição','textarea','']]},
 goal:{title:'Novo objetivo estratégico',store:'r1_extra_goals',fields:[['title','Objetivo','text',''],['area','Projeto / Área','text',''],['priority','Prioridade','select','Alta|Média|Baixa'],['status','Status','select','Não iniciado|Em andamento|Concluído|Pausado'],['date','Prazo','date',''],['indicator','Indicador de sucesso','text',''],['target','Meta','text',''],['rationale','Por que isso importa','textarea','O problema ou oportunidade que motiva este objetivo...'],['risks','Principais riscos / obstáculos','textarea','O que pode atrapalhar, ou já está atrapalhando...'],['nextSteps','Próximos passos','textarea','As próximas ações concretas para avançar...'],['description','Descrição / contexto','textarea','Detalhes adicionais sobre o objetivo...']]},
 event:{title:'Novo evento',store:'r1_extra_events',fields:[['title','Nome do evento','text','Ex.: 15 Anos • Laura'],['type','Tipo','eventTypeSelect','Casamento|Debutante|Corporativo|Aniversário|Formatura|Outro'],['client','Contratante','clientpicker',''],['date','Data do evento','date',''],['venue','Local','text',''],['guests','Convidados','number',''],['tablesQty','Quantidade de mesas','tablesqty',''],['budget','Orçamento previsto','money',''],['manager','Responsável interno','text','']]},
 client:{title:'Novo cliente / contratante',store:'r1_extra_clients',fields:[['name','Nome principal','text',''],['secondary','Segundo contratante / empresa','text',''],['type','Tipo','select','Pessoa física|Casal|Empresa'],['document','CPF / CNPJ','cpfcnpj',''],['phone','WhatsApp','phone',''],['phone2','Telefone','phone',''],['city','Cidade','text',''],['state','Estado','select','|AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO'],['email','E-mail','email',''],['createdAt','Cliente desde','date',''],['notes','Observações','textarea','Preferências, aprovações e informações úteis...']]},
 supplier:{title:'Novo fornecedor',store:'r1_extra_suppliers',fields:[['name','Nome do fornecedor','text',''],['category','Categoria','supplierCategorySelect','Buffet|DJ & Música|Decoração|Foto & Vídeo|Som & Luz|Bar & Bebidas|Espaço|Segurança|Outro'],['createdAt','Fornecedor desde','date',''],['contact','Contato responsável','text',''],['phone','WhatsApp','text',''],['email','E-mail','email',''],['price','Referência de preço','text',''],['status','Status','select','Homologado|Preferencial|Em avaliação|Bloqueado'],['notes','Observações','textarea','Histórico, condições e pontos de atenção...']]},
 finance:{title:'Novo lançamento financeiro',store:'r1_extra_finance',fields:[['eventId','Evento','eventselect',''],['date','Data','date',''],['type','Tipo','select','Receita|Despesa'],['category','Categoria','text','Contrato / Buffet / DJ / Decoração'],['description','Descrição','text',''],['party','Cliente / Fornecedor','text',''],['value','Valor','number',''],['status','Status','select','Pendente|Pago']]},
 tasting:{title:'Nova degustação',store:'r1_extra_tastings',fields:[['eventId','Evento','eventselect',''],['kind','O que será provado','select','Cardápio / buffet|Bebidas e drinks|Doces e bolo|Outro'],['date','Data da degustação','date',''],['time','Horário','time',''],['supplier','Fornecedor','supplierpicker',''],['menu','Cardápio / itens provados','menupicker','Digite para buscar no catálogo'],['approved','Aprovado?','select','Pendente|Sim|Não'],['notes','Observações da prova','textarea','O que o cliente gostou, o que precisa ajustar, quantidades...'],['file','Arquivo (foto ou PDF do cardápio / ficha da prova)','filedoc','']]},
  checklist:{title:'Novo item de checklist',store:'r1_extra_checklist',fields:[['eventId','Evento','eventselect',''],['group','Grupo','grouppicker','Ex.: Buffet / Cliente / Produção'],['title','Item','itempicker',''],['owner','Responsável','text',''],['due','Prazo','date',''],['critical','Crítico?','select','Não|Sim']]},
 guest:{title:'Novo convidado',store:'r1_extra_guests',fields:[['eventId','Evento','eventselect',''],['name','Nome do convidado','text',''],['status','Status','select','Pendente|Confirmado|Recusado'],['phone','Telefone/WhatsApp','tel',''],['table','Mesa','tablepicker','']]},
 timeline:{title:'Novo marco do cronograma',store:'r1_extra_timeline',fields:[['eventId','Evento','eventselect',''],['time','Horário','time',''],['title','Atividade','text',''],['owner','Responsável','text',''],['location','Local','text',''],['status','Status','select','Pendente|Confirmado']]},
 catalog:{title:'Novo item do catálogo',store:'r1_extra_catalog',fields:[['name','Nome da opção','text',''],['category','Categoria','catalogCategorySelect','Cardápio|Decoração|DJ & Música|Foto & Vídeo|Bar & Bebidas|Som & Luz|Outro'],['supplier','Fornecedor','supplierpicker',''],['price','Preço de referência','money',''],['unit','Unidade','text','por pessoa / pacote / projeto'],['description','Descrição','textarea','O que está incluso...'],['tags','Tags','text','Premium, Debutante, Jantar'],['image','Imagem de capa','file','']]},
 contract:{title:'Novo contrato',store:'r1_extra_contracts',fields:[['title','Tipo / título','text','Contrato de Produção de Evento'],['client','Contratante','text',''],['event','Projeto / evento','text',''],['value','Valor contratado','money',''],['payment','Condições de pagamento','text','30% sinal + parcelas'],['object','Objeto do contrato','textarea','Descreva o escopo...']]},
 presentation:{title:'Nova apresentação',store:'r1_extra_presentations',fields:[['title','Título','text','Projeto de Experiência'],['event','Projeto / evento','text',''],['client','Cliente','text',''],['theme','Conceito / tema','text','Contemporâneo elegante'],['notes','Objetivo','textarea','Cardápio, decoração, música, fornecedores e investimento.']]},
 personalGoal:{title:'Novo objetivo pessoal',store:'r1_extra_personal_goals',fields:[['title','Objetivo','text',''],['area','Área','select','Organização|Finanças|Viagens|Estudos|Família|Pessoal'],['progress','Progresso inicial (%)','number','0'],['due','Prazo','date',''],['status','Status','select','Planejamento|Em andamento|Concluído']]},
 routine:{title:'Nova rotina',store:'r1_extra_routine',fields:[['title','Rotina / tarefa recorrente','text',''],['period','Periodicidade','select','Diário|Segunda|Terça|Quarta|Quinta|Sexta|Sábado|Domingo|Semanal']]},
 appointment:{title:'Novo compromisso / lembrete',store:'r1_extra_appointments',fields:[['title','Compromisso','text',''],['type','Tipo','appointmentTypeSelect','Compromisso|Pessoal|Planejamento|Evento|Cliente|Fornecedor|Financeiro|Outro'],['date','Data','date',''],['time','Hora','time',''],['contactRef','Vincular pessoa / empresa','contactselect',''],['relatedName','Nome relacionado','text','Cliente, fornecedor ou responsável'],['phone','WhatsApp do contato','text','(11) 99999-9999'],['priority','Prioridade','select','Normal|Alta'],['notes','Observações','textarea','Informações, local, contexto ou mensagem...']]},
 personalFinance:{title:'Novo lançamento pessoal',store:'r1_extra_personal_finance',fields:[['type','Tipo','select','Entrada|Saída'],['category','Categoria','text',''],['description','Descrição','text',''],['value','Valor','number',''],['status','Status','select','Previsto|Pago']]},
 personalDoc:{title:'Registrar documento',store:'r1_extra_personal_docs',fields:[['name','Nome / pasta','text',''],['category','Categoria','text','Identificação / Viagens / Contratos'],['status','Status','select','Organizado|Revisar|Em uso']]},
 validation:{title:'Nova hipótese de validação',store:'r1_extra_validations',fields:[['idea','Ideia / projeto','text',''],['hypothesis','Hipótese','textarea','O que precisa ser verdade?'],['status','Status','select','Planejado|Em validação|Validado|Invalidado'],['evidence','Evidências iniciais','number','0']]},
 decision:{title:'Nova decisão',store:'r1_extra_decisions',fields:[['title','Decisão','text',''],['context','Contexto / motivo','textarea','Por que essa decisão foi tomada?'],['date','Data','date',''],['status','Status','select','Aprovado|Em revisão|Substituído']]}
};

function getChecklistGroups(){const a=readJSON('r1_checklist_groups',[]);return Array.isArray(a)?a:[]}
function saveChecklistGroups(l){storage.setItem('r1_checklist_groups',JSON.stringify(l))}
function tpGroups(){const m=new Map();getChecklist().forEach(c=>{const g=String(c.group||'').trim();if(!g)return;const k=gsNorm(g),o=m.get(k)||{name:g,n:0};o.n++;m.set(k,o)});getChecklistGroups().forEach(g=>{const k=gsNorm(g);if(k&&!m.has(k))m.set(k,{name:g,n:0})});return [...m.values()].sort((a,b)=>a.name.localeCompare(b.name)).map(o=>({name:o.name,sub:o.n?o.n+(o.n===1?' tarefa':' tarefas'):'novo, ainda sem tarefas'}))}
function tpItems(){const m=new Map();getChecklist().forEach(c=>{const t=String(c.title||'').trim();if(!t)return;const k=gsNorm(t);if(!m.has(k))m.set(k,{name:t,sub:String(c.group||'').trim()})});return [...m.values()].sort((a,b)=>a.name.localeCompare(b.name))}
function tpAddGroup(g){const l=getChecklistGroups();if(!l.some(x=>gsNorm(x)===gsNorm(g))){l.push(g);saveChecklistGroups(l)}}
function renderField([key,label,kind,ph],eventId='',rawValue){
 const val=rawValue===true?'Sim':rawValue===false?'Não':(rawValue===undefined||rawValue===null?'':rawValue);
 if(kind==='select'||kind==='eventTypeSelect'||kind==='supplierCategorySelect'||kind==='catalogCategorySelect'||kind==='appointmentTypeSelect'){
  const vis=(lk,arr)=>{const h=ajHidden(lk);return arr.filter(n=>!h.has(n)||n===val)};
  const opts=kind==='eventTypeSelect'?getEventTypes().map(t=>t.name):kind==='supplierCategorySelect'?[...vis('supplierCategories',getSupplierCategories()),'Outro']:kind==='catalogCategorySelect'?[...vis('catalogCategories',getCatalogCategories()),'Outro']:kind==='appointmentTypeSelect'?[...vis('appointmentTypes',getAppointmentTypes()),'Outro']:ph.split('|');
  const isOtherOpt=o=>/^outro(s)?$/i.test(String(o).trim());
  const hasOther=opts.some(isOtherOpt);
  const isCustom=hasOther && val!==undefined && val!==null && val!=='' && !opts.map(String).includes(String(val));
  const selectVal=isCustom?opts.find(isOtherOpt):val;
  return `<div class="form-field"><label>${label}</label><select name="${key}" ${hasOther?`data-other-select="${key}"`:''}>${opts.map(x=>`<option ${String(x)===String(selectVal)?'selected':''}>${x}</option>`).join('')}</select>${hasOther?`<input type="text" name="${key}__other" placeholder="Escreva aqui..." value="${String(isCustom?val:'').replace(/"/g,'&quot;')}" style="margin-top:6px;width:100%;${isCustom?'':'display:none'}" data-other-input="${key}">`:''}</div>`;
 }
 if(kind==='eventselect')return `<div class="form-field"><label>${label}</label><select name="${key}">${getEvents().map(e=>`<option value="${e.id}" ${e.id===(val||eventId)?'selected':''}>${e.title}</option>`).join('')}</select></div>`;
 if(kind==='projectselect')return `<div class="form-field"><label>${label}</label><select name="${key}">${getProjects().map(p=>`<option value="${p.id}" ${p.id===(val||eventId)?'selected':''}>${p.name}</option>`).join('')}</select></div>`;
 if(kind==='clientpicker')return `<div class="form-field full"><label>${label}</label><input type="text" name="${key}" autocomplete="off" placeholder="Digite o nome ou o telefone para buscar um cliente..." value="${String(val).replace(/"/g,'&quot;')}" data-client-search><div data-client-results style="display:none;margin-top:6px;border:1px solid #e3e8ef;border-radius:10px;max-height:170px;overflow-y:auto;background:#fff"></div><div data-client-new style="display:none;margin-top:8px;padding:10px;background:#f6f8fc;border-radius:10px"><small>Nenhum cliente encontrado. Cadastrar rapidamente:</small><input type="text" placeholder="Nome do cliente" data-client-new-name style="margin-top:6px;width:100%"><input type="text" placeholder="WhatsApp / telefone" data-client-new-phone style="margin-top:6px;width:100%"><button type="button" class="btn btn-secondary" data-client-new-save style="margin-top:8px">＋ Cadastrar e usar este cliente</button></div></div>`;
 if(kind==='tablesqty')return `<div class="form-field"><label>${label}</label><input type="number" name="${key}" min="0" max="100" step="1" inputmode="numeric" placeholder="Ex.: 12" value="${finEsc(val)}"><small style="display:block;color:#6b7a93;font-size:11.5px;line-height:1.5;margin-top:4px">Cria as mesas vazias no <b>Mapa de mesas</b> (Mesa 1, Mesa 2…). Pode deixar em branco e criar depois.</small></div>`;
 if(kind==='filedoc')return `<div class="form-field full"><label>${label}</label><input name="${key}" type="file" accept="image/*,application/pdf"><small>${rawValue?'Já existe um arquivo salvo — envie outro apenas se quiser substituí-lo.':'Foto ou PDF (até 1 MB; fotos grandes são reduzidas sozinhas).'}</small></div>`;
 if(kind==='tablepicker')return `<div class="form-field full"><label>${label}</label>${tableChooserHTML({name:key,eventId:eventId||'',current:val||''})}<small style="display:block;color:#6b7a93;font-size:11.5px;line-height:1.5;margin-top:4px">Escolha a mesa agora ou deixe “Sem mesa” e organize depois no Mapa de mesas.</small></div>`;
 if(kind==='menupicker')return `<div class="form-field full"><label>${label}</label><small class="field-hint" style="display:block;color:#6b7a93;font-size:11.5px;line-height:1.5;margin:-2px 0 6px">O <b>cardápio</b> que será provado na degustação. Digite para buscar nos cardápios do catálogo (os do fornecedor escolhido aparecem primeiro) ou inclua um novo — ele também entra no Catálogo comercial.</small><input type="text" name="${key}" autocomplete="off" placeholder="${finEsc(ph)}" value="${finEsc(val)}" data-menu-search><div data-menu-results style="display:none;margin-top:6px;border:1px solid #e3e8ef;border-radius:10px;max-height:190px;overflow-y:auto;background:#fff"></div></div>`;
 if(kind==='grouppicker'||kind==='itempicker'){const g=kind==='grouppicker';
  const dica=g?'O <b>grupo</b> é o título do bloco onde a tarefa aparece no checklist (ex.: Cliente, Buffet, Produção) — tarefas do mesmo grupo ficam juntas. Digite para buscar um grupo que já existe ou inclua um novo.':'O <b>item</b> é a tarefa em si — o que precisa ser feito (ex.: Aprovar cardápio final). Digite para buscar uma tarefa que já existe em outro evento ou escreva uma nova.';
  return `<div class="form-field full"><label>${label}</label><small class="field-hint" style="display:block;color:#6b7a93;font-size:11.5px;line-height:1.5;margin:-2px 0 6px">${dica}</small><input type="text" name="${key}" autocomplete="off" placeholder="${g?finEsc(ph):'Digite para buscar ou escrever uma nova tarefa'}" value="${finEsc(val)}" data-tp="${g?'group':'item'}"><div data-tp-results style="display:none;margin-top:6px;border:1px solid #e3e8ef;border-radius:10px;max-height:190px;overflow-y:auto;background:#fff"></div></div>`}
 if(kind==='supplierpicker')return `<div class="form-field full"><label>${label}</label><input type="text" name="${key}" autocomplete="off" placeholder="Digite o nome ou o telefone para buscar um fornecedor..." value="${String(val).replace(/"/g,'&quot;')}" data-supplier-search><div data-supplier-results style="display:none;margin-top:6px;border:1px solid #e3e8ef;border-radius:10px;max-height:170px;overflow-y:auto;background:#fff"></div><div data-supplier-new style="display:none;margin-top:8px;padding:10px;background:#f6f8fc;border-radius:10px"><small>Nenhum fornecedor encontrado. Cadastrar rapidamente:</small><input type="text" placeholder="Nome do fornecedor" data-supplier-new-name style="margin-top:6px;width:100%"><input type="text" placeholder="WhatsApp / telefone" data-supplier-new-phone style="margin-top:6px;width:100%"><button type="button" class="btn btn-secondary" data-supplier-new-save style="margin-top:8px">＋ Cadastrar e usar este fornecedor</button></div></div>`;
 if(kind==='contactselect'){const opts=[...getClients().map(c=>({type:'Cliente',id:c.id,name:c.secondary?`${c.name} & ${c.secondary}`:c.name,phone:c.phone||''})),...getSuppliers().map(v=>({type:'Fornecedor',id:v.id,name:v.name,phone:v.phone||''}))];return `<div class="form-field full"><label>${label}</label><select name="${key}" id="appointmentContactSelect"><option value="">Sem vínculo / preencher manualmente</option>${opts.map(o=>`<option value="${o.type}|${o.id}" data-name="${o.name.replace(/"/g,'&quot;')}" data-phone="${o.phone}">${o.type} • ${o.name}${o.phone?` • ${o.phone}`:''}</option>`).join('')}</select><small>Ao escolher um cadastro, nome e WhatsApp são preenchidos automaticamente.</small></div>`}
 if(kind==='textarea')return `<div class="form-field full"><label>${label}</label><textarea name="${key}" rows="4" placeholder="${ph}">${String(val).replace(/</g,'&lt;')}</textarea></div>`;
 if(kind==='file')return `<div class="form-field full"><label>${label}</label><input name="${key}" type="file" accept="image/*"><small>${rawValue?'Já existe um arquivo salvo — envie um novo apenas se quiser substituí-lo.':'Imagem opcional. No protótipo, use arquivos pequenos.'}</small></div>`;
 if(kind==='phone')return `<div class="form-field"><label>${label}</label><input name="${key}" type="tel" placeholder="(11) 99999-9999" value="${maskPhoneBR(val)}" data-mask="phone" inputmode="numeric"></div>`;
 if(kind==='money')return `<div class="form-field"><label>${label}</label><input name="${key}" type="text" inputmode="decimal" data-money-field placeholder="0,00" value="${val?finFmtNum(Math.round(Number(val)*100)):''}"></div>`;
 if(kind==='cpfcnpj')return `<div class="form-field"><label>${label}</label><input name="${key}" type="text" placeholder="CPF ou CNPJ" value="${maskCpfCnpj(val)}" data-mask="cpfcnpj" inputmode="numeric"><small class="field-error-msg" data-error-for="${key}" style="display:none;color:#c0392b;margin-top:4px">Valor informado inválido.</small></div>`;
 return `<div class="form-field"><label>${label}</label><input name="${key}" type="${kind}" placeholder="${ph}" value="${String(val).replace(/"/g,'&quot;')}"></div>`;
}
const dedicatedOverrides={finance:'r1_finance_overrides',checklist:'r1_checklist_overrides',timeline:'r1_timeline_overrides',routine:'r1_routine_overrides'};
function updateRecord(type,obj){
 const f=forms[type];if(!f||!f.store)return;
 histTrack(type,obj);
 if(type==='event'&&obj.title){try{const oe=getEvents().find(x=>x.id===obj.id);if(oe&&oe.title!==obj.title)presRelink(oe,obj.title)}catch(err){}}
 const extras=readJSON(f.store,[]);
 const idx=extras.findIndex(x=>x.id===obj.id);
 if(idx>=0){extras[idx]={...extras[idx],...obj};storage.setItem(f.store,JSON.stringify(extras));return}
 const key=dedicatedOverrides[type]||overridesKeyFor(f.store);
 const overrides=readJSON(key,{});
 overrides[obj.id]={...(overrides[obj.id]||{}),...obj};
 storage.setItem(key,JSON.stringify(overrides));
}
function applyTypeDefaults(type,obj,isNew){
 if(type==='project'){obj.cat=obj.category||'Projeto';if(isNew){obj.version='v0.1';obj.health=70;obj.issues=0;obj.progress=5;obj.next='v0.2';obj.update='Agora'}}
 if(type==='event'){obj.guests=Number(obj.guests||0);obj.budget=Number(obj.budget||0);if(isNew){obj.progress=5;obj.status='Em produção';obj.critical=0}}
 if(type==='client'&&isNew){obj.events=0;obj.status='Ativo'}
 if(type==='tasting'){obj.approved=(obj.approved==='Sim'||obj.approved==='Não')?obj.approved:'Pendente';if(!obj.kind)obj.kind='Cardápio / buffet'}
 if(type==='supplier'&&isNew){obj.rating=0;obj.events=0}
 if(type==='finance'||type==='personalFinance'){obj.value=Number(obj.value||0)}
 if(type==='checklist'){obj.critical=obj.critical==='Sim';if(isNew)obj.done=false}
 if(type==='routine'&&isNew){obj.done=false}
 if(type==='goal'&&isNew){obj.createdAt=Date.now()}
 if(type==='personalGoal'){obj.progress=Number(obj.progress||0)}
 if(type==='validation'){obj.evidence=Number(obj.evidence||0)}
 if(type==='contract'){obj.value=Number(obj.value||0);obj.updated=new Date().toLocaleDateString('pt-BR');if(isNew){obj.number=`2026-${String(getContracts().length+43).padStart(3,'0')}`;obj.status='Rascunho'}}
 if(type==='presentation'&&isNew){obj.sections=8;obj.assets=0;obj.status='Em edição'}
 if(type==='catalog'){obj.price=Number(obj.price||0);obj.tags=(obj.tags||'').split(',').map(x=>x.trim()).filter(Boolean)}
 if(type==='idea'){obj.meta=obj.audience||obj.problem||'Ideia registrada'}
 return obj;
}
/* ===== AJUSTES (Configurações) — V:1.06.0 =====
   Consultor, Acessibilidade, Plano, Avisos, Ajuda (+ backup), Segurança/Login, Sobre. */
function ajCfg(){return readJSON('r1_consultor_profile',{nome:'',cargo:'',telefone:'',email:'',foto:''})}
function ajZoom(){return Number(storage.getItem('r1_zoom')||'1')}
function ajApplyZoom(){const z=ajZoom();document.documentElement.style.setProperty('--app-zoom',z);document.body.style.zoom=z;syncTopbarH()}
function ajAvisos(){return readJSON('r1_avisos_cfg',{atrasado:true,hoje:true,d7:false,d3:true,d1:true})}
function ajLogin(){return readJSON('r1_login_cfg',{email:'demo@rizzieri.one',senha:'123456'})}
function ajEventBell(){return readJSON('r1_event_bell_cfg',{warnDays:15,urgentDays:7})}
function ajTemplates(){return readJSON('r1_wa_templates',{event:'',checklist:'',timeline:'',guests:''})}
function ajLastBackup(){return storage.getItem('r1_last_backup')||null}
function ajDiasDesdeBackup(){const d=ajLastBackup();if(!d)return null;return Math.max(0,Math.floor((new Date(finLocalISO()+'T12:00:00')-new Date(d+'T12:00:00'))/86400000))}
function ajApplyLogin(){const l=ajLogin();const ei=document.querySelector('#loginForm input[type="email"]'),pi=document.querySelector('#loginForm #password');if(ei)ei.value=l.email;if(pi)pi.value=l.senha}
/* ---- backup: exporta/restaura só as chaves do app (prefixo r1_) ---- */
function ajBackupBuild(){const data={};const todasChaves=new Set([...Object.keys(memoryStore||{}),...(function(){try{return Object.keys(globalThis.localStorage||{})}catch{return[]}})()]);[...todasChaves].forEach(k=>{if(k.startsWith('r1_')&&!isPlainKey(k))data[k]=storage.getItem(k)});return {app:'RIZZIERI ONE',version:APP_VERSION,exportedAt:new Date().toISOString(),data}}
function ajBackupApply(payload){if(!payload||typeof payload!=='object'||!payload.data)return {ok:false,msg:'Arquivo de backup inválido.'};
 Object.keys(payload.data).forEach(k=>{if(k.startsWith('r1_')&&!isPlainKey(k))storage.setItem(k,payload.data[k])});
 return {ok:true,qtd:Object.keys(payload.data).length}}
function ajDownloadBackup(){const payload=ajBackupBuild();const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`rizzieri-one-backup-${finLocalISO()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);storage.setItem('r1_last_backup',finLocalISO());toast('Backup baixado.')}
const AJ_PRESERVE_KEYS=['r1_consultor_profile','r1_zoom','r1_login_cfg','r1_avisos_cfg','r1_event_bell_cfg','r1_wa_templates','r1_last_backup','rizzieri_one_demo'];
function ajApagarTudo(){
 if(!confirm('Isso apaga projetos, eventos, financeiro, clientes e fornecedores deste navegador (seu perfil, zoom e login continuam) e não pode ser desfeito. Você baixou um backup recente? Tem certeza que quer continuar?'))return;
 const todasChaves=new Set([...Object.keys(memoryStore||{}),...(function(){try{return Object.keys(globalThis.localStorage||{})}catch{return[]}})()]);
 [...todasChaves].filter(k=>k.startsWith('r1_')&&!AJ_PRESERVE_KEYS.includes(k)&&!isPlainKey(k)).forEach(k=>storage.removeItem(k));
 toast('Dados apagados. Recarregando...');
 setTimeout(()=>location.reload(),900);
}
function ajRestoreFile(file){const reader=new FileReader();reader.onload=()=>{let payload;try{payload=JSON.parse(reader.result)}catch(e){toast('Arquivo inválido (não é um JSON de backup).');return}
 if(!finConfirm('Restaurar este backup vai SUBSTITUIR os dados atuais deste aparelho. Continuar?'))return;
 const r=ajBackupApply(payload);if(!r.ok){toast(r.msg);return}
 toast(`Backup restaurado (${r.qtd} chave(s)). Recarregando…`);setTimeout(()=>location.reload(),900)};
 reader.readAsText(file)}
function ajSwitch(id,label,checked){return `<label style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid #eef1f6"><span>${finEsc(label)}</span><input type="checkbox" data-aj-aviso="${id}" ${checked?'checked':''}></label>`}
function ajustesView(){const c=ajCfg(),z=ajZoom(),av=ajAvisos(),lg=ajLogin(),bell=ajEventBell(),tpl=ajTemplates(),diasBk=ajDiasDesdeBackup(),evTypes=getEventTypes(),supCats=getSupplierCategories(),catCats=getCatalogCategories(),apptTypes=getAppointmentTypes();
 return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">CONFIGURAÇÕES</span><h3>Ajustes</h3><p>Seu perfil, acessibilidade, avisos, ajuda e segurança — tudo em um lugar, disponível em qualquer workspace.</p></div></div>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>👤 Consultor</h3></div>
 <div class="form-grid">
  <div class="profile-logo-zone full"><div id="ajFotoPreview" class="company-logo-preview">${c.foto?`<img src="${c.foto}" alt="Foto">`:'<span>Sua foto</span>'}</div><label class="upload-logo">Adicionar foto<input id="ajFoto" type="file" accept="image/*"></label></div>
  <div class="form-field"><label>Nome</label><input id="ajNome" value="${finEsc(c.nome)}"></div>
  <div class="form-field"><label>Como quer ser chamado no app</label><input id="ajCargo" placeholder="Ex.: Consultor, Gestor, Fundador…" value="${finEsc(c.cargo)}"></div>
  <div class="form-field"><label>Telefone</label><input id="ajTelefone" placeholder="(11) 99999-9999" value="${finEsc(c.telefone)}"></div>
  <div class="form-field"><label>E-mail</label><input id="ajEmail" type="email" value="${finEsc(c.email)}"></div>
  <div class="form-actions full"><div class="aj-actions" style="width:100%"><button class="btn btn-secondary" data-aj-discard style="width:auto">Descartar</button><button class="btn btn-primary" id="ajSalvarConsultor" style="width:auto">Gravar</button></div></div>
 </div></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>💬 Mensagens</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:10px">Texto que entra na frente do resumo quando você usa os botões de WhatsApp. Deixe em branco pra enviar só o resumo.</p>
 <div class="form-grid">
  <div class="form-field full"><label>Ao compartilhar um evento</label><textarea id="ajTplEvent" rows="2" placeholder="Ex.: Oi! Segue o resumo do nosso evento:">${finEsc(tpl.event)}</textarea></div>
  <div class="form-field full"><label>Ao compartilhar o checklist</label><textarea id="ajTplChecklist" rows="2" placeholder="Ex.: Pessoal, segue o que falta pra fechar:">${finEsc(tpl.checklist)}</textarea></div>
  <div class="form-field full"><label>Ao compartilhar o cronograma</label><textarea id="ajTplTimeline" rows="2" placeholder="Ex.: Equipe, aqui está a ordem do dia:">${finEsc(tpl.timeline)}</textarea></div>
  <div class="form-field full"><label>Ao compartilhar a lista de convidados</label><textarea id="ajTplGuests" rows="2" placeholder="Ex.: Atualização de confirmações:">${finEsc(tpl.guests)}</textarea></div>
  <div class="form-actions full"><div class="aj-actions" style="width:100%"><button class="btn btn-secondary" data-aj-discard style="width:auto">Descartar</button><button class="btn btn-primary" id="ajSalvarTemplates" style="width:auto">Gravar</button></div></div>
 </div></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>♿ Acessibilidade</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:10px">Tamanho da tela (zoom). Aumente para enxergar com mais facilidade. Vale para o app inteiro e fica salvo.</p>
 <div style="display:flex;align-items:center;gap:12px"><button class="btn btn-secondary" id="ajZoomMenos" style="flex:1;font-size:20px;font-weight:800">A −</button><div style="min-width:70px;text-align:center"><b id="ajZoomPct" style="font-size:19px">${Math.round(z*100)}%</b></div><button class="btn btn-primary" id="ajZoomMais" style="flex:1;font-size:20px;font-weight:800">A +</button></div>
 <button class="btn btn-secondary" id="ajZoomReset" style="margin-top:10px">Voltar ao padrão (100%)</button></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>💠 Plano</h3></div>
 ${planCardHTML()}</section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>🔔 Avisos</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:4px">O sino avisa sobre o financeiro em aberto. Escolha quais avisos você quer ver no painel inicial:</p>
 ${ajSwitch('atrasado','Lançamentos atrasados',av.atrasado)}${ajSwitch('hoje','Compromissos de hoje',av.hoje)}
 <p style="font-size:12px;color:#6b7a93;margin:10px 0 4px">Avisar com quantos dias de antecedência:</p>
 ${ajSwitch('d7','7 dias antes',av.d7)}${ajSwitch('d3','3 dias antes',av.d3)}${ajSwitch('d1','1 dia antes',av.d1)}
 <div style="border-top:1px dashed #e3e8ef;margin:14px 0 10px;padding-top:12px"><b style="font-size:13px">🔔 Sino de contagem regressiva dos eventos</b><p style="font-size:12px;color:#6b7a93;margin:4px 0 10px">O sino ao lado da data, na lista de Eventos, usa estes prazos.</p>
 <div class="form-grid">
  <div class="form-field"><label>Avisar a partir de quantos dias</label><input id="ajBellWarn" type="number" min="1" max="60" value="${bell.warnDays}"></div>
  <div class="form-field"><label>Piscar a partir de quantos dias (com pendência no checklist)</label><input id="ajBellUrgent" type="number" min="1" max="60" value="${bell.urgentDays}"></div>
  <div class="form-actions full"><div class="aj-actions" style="width:100%"><button class="btn btn-secondary" data-aj-discard style="width:auto">Descartar</button><button class="btn btn-primary" id="ajSalvarBell" style="width:auto">Gravar</button></div></div>
 </div></div></section>
 <section class="panel"><div class="panel-head"><h3>🏷️ Tipos de evento</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">Controla quais tipos aparecem como filtro na tela de Eventos. ✏️ renomeia (e atualiza todos os eventos que usam), 🚫 esconde só o botão de filtro, 🗑️ exclui (se algum evento usa, você escolhe pra qual tipo ele passa).</p>
 <div class="aj-list" style="margin-top:10px">${ajListRowsHTML('eventTypes')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewEventType" placeholder="Nome do novo tipo (ex.: Chá de bebê)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddEventType" style="width:auto">＋ Adicionar tipo</button></div>
 </section>
 <section class="panel"><div class="panel-head"><h3>🧰 Categorias de fornecedor</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">A lista que aparece pra escolher ao cadastrar um fornecedor. Adicione quantas quiser — ficam disponíveis pra sempre, sem precisar digitar de novo toda vez.</p>
 <div class="aj-list" style="margin-top:10px">${ajListRowsHTML('supplierCategories')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewSupplierCategory" placeholder="Nome da nova categoria (ex.: Florista)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddSupplierCategory" style="width:auto">＋ Adicionar categoria</button></div>
 </section>

 <section class="panel"><div class="panel-head"><h3>📖 Categorias de catálogo</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">A lista que aparece pra escolher ao cadastrar um item do catálogo. Adicione quantas quiser — ficam disponíveis pra sempre, sem precisar digitar de novo toda vez.</p>
 <div class="aj-list" style="margin-top:10px">${ajListRowsHTML('catalogCategories')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewCatalogCategory" placeholder="Nome da nova categoria (ex.: Doces finos)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddCatalogCategory" style="width:auto">＋ Adicionar categoria</button></div>
 </section>

 <section class="panel"><div class="panel-head"><h3>🗓️ Tipos de compromisso</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">A lista que aparece pra escolher ao cadastrar um compromisso na agenda. Adicione quantos quiser — ficam disponíveis pra sempre, sem precisar digitar de novo toda vez.</p>
 <div class="aj-list" style="margin-top:10px">${ajListRowsHTML('appointmentTypes')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewAppointmentType" placeholder="Nome do novo tipo (ex.: Reunião de equipe)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddAppointmentType" style="width:auto">＋ Adicionar tipo</button></div>
 </section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>🆘 Ajuda</h3></div>
 <button class="btn btn-secondary" id="ajInstalar" style="margin-bottom:8px">📲 Instalar o app neste aparelho</button>
 <button class="btn btn-secondary" id="ajTutorial" style="margin-bottom:8px">📖 Ver tutorial completo</button>
 <button class="btn btn-secondary" id="ajPermissoes">🔒 Sobre as permissões</button>
 <div id="ajPermissoesInfo" style="display:none;margin-top:10px;padding:12px;background:#f8fafc;border:1px solid #e3e8ef;border-radius:12px;font-size:12px;color:#6b7a93;line-height:1.6">
  <b style="color:#273142;display:block;margin-bottom:4px">📷 Câmera / Galeria</b>
  Usada só quando você escolhe adicionar uma foto (ex.: foto do Consultor). O navegador pergunta na hora — se você recusar, o resto do app continua funcionando normalmente, só sem a foto.
  <b style="color:#273142;display:block;margin:10px 0 4px">🔔 Avisos</b>
  O sino de Avisos é só dentro do app (não é notificação do celular/navegador) — por isso não pede nenhuma permissão do aparelho.
  <b style="color:#273142;display:block;margin:10px 0 4px">📲 Instalar</b>
  Instalar como aplicativo não pede permissão especial, só confirma se você quer o atalho na tela inicial.
 </div></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>💾 Backup e proteção de dados</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin:0 0 8px">Os dados ficam só neste navegador (protótipo local). Baixe um backup regularmente e guarde em local seguro.</p>
 <p style="font-size:12px;margin:0 0 10px">${diasBk===null?'<b style="color:#c0392b">Você ainda não fez nenhum backup.</b>':diasBk>=7?`<b style="color:#c0392b">Último backup há ${diasBk} dia(s) — considere baixar um novo.</b>`:`Último backup há ${diasBk} dia(s).`}</p>
 <button class="btn btn-primary" id="ajBackupBaixar" style="margin-bottom:8px">⬇️ Baixar backup (.json)</button>
 <label class="upload-logo" style="display:block;text-align:center">⬆️ Restaurar de um arquivo de backup<input id="ajBackupArquivo" type="file" accept="application/json"></label></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>🔒 Segurança / Login</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:8px">Credenciais da tela de entrada deste protótipo (ficam salvas só neste navegador).</p>
 <div class="form-grid"><div class="form-field"><label>E-mail de acesso</label><input id="ajLoginEmail" type="email" value="${finEsc(lg.email)}"></div><div class="form-field"><label>Senha de acesso</label><input id="ajLoginSenha" value="${finEsc(lg.senha)}"></div>
 <div class="form-actions full"><div class="aj-actions" style="width:100%"><button class="btn btn-secondary" data-aj-discard style="width:auto">Descartar</button><button class="btn btn-primary" id="ajSalvarLogin" style="width:auto">Gravar</button></div></div></div>
 <button class="link-btn" data-nav="seguranca" style="margin-top:6px">Ver arquitetura de segurança completa (produção) →</button>
 ${hasPassword()?`
 <div style="margin-top:14px;padding:12px;background:#eafbf1;border:1px solid #b9e8cc;border-radius:12px">
  <div style="font-size:13px;font-weight:700;color:#1f8a4c;margin-bottom:4px">🔐 Senha de acesso ativa</div>
  <p style="font-size:12px;color:#4a5568;margin:0 0 10px">Seus dados ficam criptografados neste aparelho. Sem a senha, o app não abre e ninguém consegue ler o que está salvo.</p>
  <p style="font-size:11.5px;color:#6b7a93;margin:0 0 10px">Ao trocar, vale a mesma regra: de 4 a 50 caracteres, com maiúscula, minúscula, número e símbolo.</p>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-secondary" id="ajTrocarSenha" style="width:auto">Trocar senha</button><button class="btn btn-secondary" id="ajRemoverSenha" style="width:auto;color:#c0392b;border-color:#f3c9c4">Remover senha</button></div>
 </div>`:`
 <div style="margin-top:14px;padding:12px;background:#f8fafc;border:1px solid #e3e8ef;border-radius:12px">
  <div style="font-size:13px;font-weight:700;color:#273142;margin-bottom:4px">🔐 Senha de acesso</div>
  <p style="font-size:12px;color:#6b7a93;margin:0 0 10px">Ainda não ativada — qualquer pessoa com acesso a este aparelho pode abrir o app. Criar uma senha criptografa tudo (eventos, clientes, financeiro) e passa a exigi-la pra abrir.</p>
   <p style="font-size:11.5px;color:#6b7a93;margin:0 0 10px"><b>Regra da senha</b>: de 4 a 50 caracteres, com 1 maiúscula, 1 minúscula, 1 número e 1 símbolo. Ao criar, você pode mandar uma cópia pro seu WhatsApp.</p>
  <button class="btn btn-primary" id="ajCriarSenha" style="width:auto">🔒 Criar senha de acesso</button>
 </div>`}
 </section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>🗑️ Dados</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:10px">Apaga projetos, eventos, financeiro, clientes e fornecedores deste navegador. Não afeta seu perfil, zoom ou login.</p>
 <button class="btn btn-secondary" id="ajApagarTudo" style="color:#c0392b;border-color:#f3c9c4">Apagar todos os dados do protótipo</button></section>

 <section class="panel"><div class="panel-head"><h3>ℹ️ Sobre</h3></div>
 <p style="font-size:13px"><b>RIZZIERI ONE</b> — Life, Business & Projects</p>
 <p style="font-size:12px;color:#6b7a93;margin-top:4px">Central única para administrar projetos, aplicativos, estratégia, eventos, finanças e vida pessoal em quatro workspaces: Negócios, Eventos, Pessoal e Ideias.</p>
 <p style="font-size:11px;color:#6b7a93;margin-top:8px">Versão ${APP_VERSION} · Protótipo local (localStorage)</p></section>
 <button class="link-btn" data-back style="margin-top:6px">← Voltar</button>`}
function ajWire(){
 const $$q=sel=>[...document.querySelectorAll(sel)];
 const byId=id=>document.getElementById(id);
 if(!byId('ajZoomMenos'))return;
 byId('ajZoomMenos').onclick=()=>{storage.setItem('r1_zoom',String(Math.max(0.8,ajZoom()-0.1)));ajApplyZoom();finRebuild()};
 byId('ajZoomMais').onclick=()=>{storage.setItem('r1_zoom',String(Math.min(1.6,ajZoom()+0.1)));ajApplyZoom();finRebuild()};
 byId('ajZoomReset').onclick=()=>{storage.setItem('r1_zoom','1');ajApplyZoom();finRebuild()};
 byId('ajFoto').onchange=async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;if(file.size>1500000){toast('Use uma foto de até 1,5 MB.');e.target.value='';return}const data=await fileToDataURL(file);byId('ajFotoPreview').innerHTML=`<img src="${data}" alt="Foto">`;byId('ajFotoPreview').dataset.foto=data};
 byId('ajSalvarConsultor').onclick=()=>{const foto=byId('ajFotoPreview').dataset.foto||ajCfg().foto||'';storage.setItem('r1_consultor_profile',JSON.stringify({nome:byId('ajNome').value.trim(),cargo:byId('ajCargo').value.trim(),telefone:byId('ajTelefone').value.trim(),email:byId('ajEmail').value.trim(),foto}));toast('Consultor salvo.');goBack();};
 $$q('[data-aj-list-hide]').forEach(b=>b.onclick=()=>{ajListToggleHide(b.dataset.list,b.dataset.name);ajRefresh()});
 $$q('[data-aj-list-rename]').forEach(b=>b.onclick=()=>ajListDialog('rename',b.dataset.list,b.dataset.name));
 $$q('[data-aj-list-del]').forEach(b=>b.onclick=()=>ajListDialog('del',b.dataset.list,b.dataset.name));
 $$q('[data-aj-discard]').forEach(b=>b.onclick=()=>{toast('Alterações descartadas.');goBack()});
 $$q('[data-aj-aviso]').forEach(inp=>inp.onchange=()=>{const av=ajAvisos();av[inp.dataset.ajAviso]=inp.checked;storage.setItem('r1_avisos_cfg',JSON.stringify(av));toast('Preferência de aviso salva.')});
 byId('ajInstalar').onclick=()=>byId('installBtn').click();
 byId('ajTutorial').onclick=()=>render('tutorial');
 if(byId('ajPermissoes'))byId('ajPermissoes').onclick=()=>{const info=byId('ajPermissoesInfo');info.style.display=info.style.display==='none'?'block':'none'};
 byId('ajBackupBaixar').onclick=()=>ajDownloadBackup();
 byId('ajBackupArquivo').onchange=e=>{const file=e.target.files&&e.target.files[0];if(file)ajRestoreFile(file)};
 byId('ajSalvarLogin').onclick=()=>{const email=byId('ajLoginEmail').value.trim()||'demo@rizzieri.one',senha=byId('ajLoginSenha').value||'123456';storage.setItem('r1_login_cfg',JSON.stringify({email,senha}));ajApplyLogin();toast('Credenciais atualizadas.');goBack();};
 if(byId('ajSalvarTemplates'))byId('ajSalvarTemplates').onclick=()=>{storage.setItem('r1_wa_templates',JSON.stringify({event:byId('ajTplEvent').value,checklist:byId('ajTplChecklist').value,timeline:byId('ajTplTimeline').value,guests:byId('ajTplGuests').value}));toast('Mensagens salvas.');goBack();};
 if(byId('ajSalvarBell'))byId('ajSalvarBell').onclick=()=>{const warnDays=Math.max(1,Number(byId('ajBellWarn').value)||15),urgentDays=Math.max(1,Number(byId('ajBellUrgent').value)||7);storage.setItem('r1_event_bell_cfg',JSON.stringify({warnDays,urgentDays}));toast('Prazos do sino salvos.');goBack();};
 if(byId('ajApagarTudo'))byId('ajApagarTudo').onclick=ajApagarTudo;
 $$('[data-ev-type-toggle]').forEach(b=>b.onclick=()=>{const list=getEventTypes().slice();const i=Number(b.dataset.evTypeToggle);list[i]={...list[i],visible:!list[i].visible};saveEventTypes(list);openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)});
 if(byId('ajAddEventType'))byId('ajAddEventType').onclick=()=>{const inp=byId('ajNewEventType');const name=(inp.value||'').trim();if(!name){toast('Digite o nome do tipo.');return}const list=getEventTypes().slice();if(list.some(t=>t.name.toLowerCase()===name.toLowerCase())){toast('Esse tipo já existe.');return}list.push({name,visible:true});saveEventTypes(list);toast('Tipo adicionado.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajAddSupplierCategory'))byId('ajAddSupplierCategory').onclick=()=>{const inp=byId('ajNewSupplierCategory');const name=(inp.value||'').trim();if(!name){toast('Digite o nome da categoria.');return}const list=getSupplierCategories().slice();if(list.some(c=>c.toLowerCase()===name.toLowerCase())){toast('Essa categoria já existe.');return}list.push(name);saveSupplierCategories(list);toast('Categoria adicionada.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajAddCatalogCategory'))byId('ajAddCatalogCategory').onclick=()=>{const inp=byId('ajNewCatalogCategory');const name=(inp.value||'').trim();if(!name){toast('Digite o nome da categoria.');return}const list=getCatalogCategories().slice();if(list.some(c=>c.toLowerCase()===name.toLowerCase())){toast('Essa categoria já existe.');return}list.push(name);saveCatalogCategories(list);toast('Categoria adicionada.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajAddAppointmentType'))byId('ajAddAppointmentType').onclick=()=>{const inp=byId('ajNewAppointmentType');const name=(inp.value||'').trim();if(!name){toast('Digite o nome do tipo.');return}const list=getAppointmentTypes().slice();if(list.some(t=>t.toLowerCase()===name.toLowerCase())){toast('Esse tipo já existe.');return}list.push(name);saveAppointmentTypes(list);toast('Tipo adicionado.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajPlanoCopiar'))byId('ajPlanoCopiar').onclick=planCopyDev;
 if(byId('ajPlanoWhats'))byId('ajPlanoWhats').onclick=()=>{if(!planProfileReady())openPlanProfile(planOpenWhats);else planOpenWhats()};
 if(byId('ajPlanoAtivar'))byId('ajPlanoAtivar').onclick=()=>openProDialog('');
 if(byId('ajCriarSenha'))byId('ajCriarSenha').onclick=()=>{$('#pwSetupTitle').textContent='Criar senha de acesso';$('#pwSetupBtn').textContent='Criar senha e ativar';$('#pwSetupPass').value='';$('#pwSetupPass2').value='';$('#pwSetupErr').textContent='';$('#pwSetupMatch').textContent='';checkPwRules();$('#pwSetupDialog').showModal()};
 if(byId('ajTrocarSenha'))byId('ajTrocarSenha').onclick=()=>{$('#pwSetupTitle').textContent='Trocar senha de acesso';$('#pwSetupBtn').textContent='Trocar senha';$('#pwSetupPass').value='';$('#pwSetupPass2').value='';$('#pwSetupErr').textContent='';$('#pwSetupMatch').textContent='';checkPwRules();$('#pwSetupDialog').showModal()};
 if(byId('ajRemoverSenha'))byId('ajRemoverSenha').onclick=()=>{$('#pwRemoveDialog').showModal()};
}

const fieldAliases={project:{category:'cat'}};
async function openForm(type,eventId='',record=null){if(type==='finance'||type==='personalFinance')return finOpenForm({ws:type==='personalFinance'?'Pessoal':undefined,eventId,id:record?record.id:null});const f=forms[type]||forms.task;$('#formTitle').textContent=record?(/^Nov[oa]\s+/i.test(f.title)?f.title.replace(/^Nov[oa]\s+/i,'Editar '):`Editar — ${f.title}`):f.title;$('#dynamicForm').innerHTML=f.fields.filter(field=>!(field[2]==='tablesqty'&&record&&getEventTables(record.id).length>0)).map(field=>{const alias=(fieldAliases[type]||{})[field[0]];const prefill=record?(record[field[0]]!==undefined?record[field[0]]:(alias?record[alias]:undefined)):undefined;return renderField(field,eventId||(record?record.eventId:''),prefill)}).join('')+`<div class="form-actions"><button type="button" class="btn btn-secondary" data-cancel>Cancelar</button><button class="btn btn-primary" type="submit">${record?'Salvar alterações':'Salvar'}</button></div>`;
 $$('#dynamicForm [data-mask="phone"]').forEach(inp=>{inp.oninput=()=>{inp.value=maskPhoneBR(inp.value)}});
 $$('#dynamicForm [data-other-select]').forEach(sel=>{const other=sel.parentElement.querySelector(`[data-other-input="${sel.name}"]`);if(!other)return;sel.onchange=()=>{const isOther=/^outro(s)?$/i.test(sel.value.trim());other.style.display=isOther?'block':'none';if(isOther)other.focus()}});
 $$('#dynamicForm [data-money-field]').forEach(inp=>{inp.oninput=()=>finMaskMoeda(inp,false)});
 $$('#dynamicForm [data-client-search]').forEach(inp=>{
  const box=inp.parentElement.querySelector('[data-client-results]'),newBox=inp.parentElement.querySelector('[data-client-new]');
  const search=()=>{const q=inp.value.trim().toLowerCase(),qd=onlyDigits(inp.value);
   if(!q){box.style.display='none';newBox.style.display='none';return}
   const matches=getClients().filter(c=>c.name.toLowerCase().includes(q)||(c.secondary&&c.secondary.toLowerCase().includes(q))||(qd&&onlyDigits(c.phone).includes(qd)));
   if(matches.length){box.innerHTML=matches.map(c=>`<div data-pick-client="${c.name.replace(/"/g,'&quot;')}" style="padding:8px 10px;cursor:pointer;border-bottom:1px solid #f0f2f6"><b>${c.name}${c.secondary?` & ${c.secondary}`:''}</b> <small style="color:#8a95a1">${c.phone}</small></div>`).join('');box.style.display='block';newBox.style.display='none';
    box.querySelectorAll('[data-pick-client]').forEach(row=>row.onclick=()=>{inp.value=row.dataset.pickClient;box.style.display='none'})}
   else{box.style.display='none';newBox.style.display='block';const nameField=newBox.querySelector('[data-client-new-name]');if(!nameField.value&&!/\d/.test(q))nameField.value=inp.value}};
  inp.oninput=search;inp.onfocus=search;
  const saveBtnC=newBox.querySelector('[data-client-new-save]');
  saveBtnC.onclick=()=>{const name=newBox.querySelector('[data-client-new-name]').value.trim(),phone=maskPhoneBR(newBox.querySelector('[data-client-new-phone]').value);
   if(!name){toast('Informe o nome do cliente.');return}
   saveExtra('r1_extra_clients',{id:`client-${Date.now()}`,name,secondary:'',type:'Pessoa física',document:'',phone,phone2:'',city:'',state:'',email:'',createdAt:finLocalISO(),notes:'Cadastrado rapidamente pelo evento.',status:'Ativo'});
   inp.value=name;box.style.display='none';newBox.style.display='none';toast('Cliente cadastrado e selecionado.')};
 });
 $$('#dynamicForm [data-supplier-search]').forEach(inp=>{
  const box=inp.parentElement.querySelector('[data-supplier-results]'),newBox=inp.parentElement.querySelector('[data-supplier-new]');
  const search=()=>{const q=inp.value.trim().toLowerCase(),qd=onlyDigits(inp.value);
   if(!q){box.style.display='none';newBox.style.display='none';return}
   const matches=getSuppliers().filter(s=>s.name.toLowerCase().includes(q)||(qd&&onlyDigits(s.phone).includes(qd)));
   if(matches.length){box.innerHTML=matches.map(s=>`<div data-pick-supplier="${s.name.replace(/"/g,'&quot;')}" style="padding:8px 10px;cursor:pointer;border-bottom:1px solid #f0f2f6"><b>${s.name}</b> <small style="color:#8a95a1">${s.category} • ${s.phone}</small></div>`).join('');box.style.display='block';newBox.style.display='none';
    box.querySelectorAll('[data-pick-supplier]').forEach(row=>row.onclick=()=>{inp.value=row.dataset.pickSupplier;box.style.display='none'})}
   else{box.style.display='none';newBox.style.display='block';const nameField=newBox.querySelector('[data-supplier-new-name]');if(!nameField.value&&!/\d/.test(q))nameField.value=inp.value}};
  inp.oninput=search;inp.onfocus=search;
  const saveBtn=newBox.querySelector('[data-supplier-new-save]');
  saveBtn.onclick=()=>{const name=newBox.querySelector('[data-supplier-new-name]').value.trim(),phone=maskPhoneBR(newBox.querySelector('[data-supplier-new-phone]').value);
   if(!name){toast('Informe o nome do fornecedor.');return}
   saveExtra('r1_extra_suppliers',{id:`supplier-${Date.now()}`,name,category:'Outro',createdAt:finLocalISO(),contact:'',phone,email:'',price:'',status:'Em avaliação',rating:0,events:0,notes:'Cadastrado rapidamente pelo catálogo.'});
   inp.value=name;box.style.display='none';newBox.style.display='none';toast('Fornecedor cadastrado e selecionado.')};
 });
 $$('#dynamicForm [data-tp]').forEach(inp=>{
  const box=inp.parentElement.querySelector('[data-tp-results]'),isGroup=inp.dataset.tp==='group';
  const row="padding:8px 10px;cursor:pointer;border-bottom:1px solid #f0f2f6";
  const search=()=>{const raw=inp.value.trim(),q=gsNorm(raw),opts=isGroup?tpGroups():tpItems();
   const m=(q?opts.filter(o=>gsNorm(o.name).includes(q)||gsNorm(o.sub||'').includes(q)):opts).slice(0,40);
   const exato=!!q&&opts.some(o=>gsNorm(o.name)===q);
   let h=m.map(o=>`<div data-tp-pick="${finEsc(o.name)}" data-tp-sub="${finEsc(isGroup?'':o.sub||'')}" style="${row}"><b>${finEsc(o.name)}</b>${o.sub?` <small style="color:#8a95a1">${finEsc(o.sub)}</small>`:''}</div>`).join('');
   if(raw&&!exato)h+=`<div data-tp-new style="${row};color:#a15b1f;font-weight:700">＋ Incluir «${finEsc(raw)}» como ${isGroup?'novo grupo':'novo item'}</div>`;
   if(!h){box.style.display='none';return}
   box.innerHTML=h;box.style.display='block';
   box.querySelectorAll('[data-tp-pick]').forEach(r=>r.onmousedown=ev=>{ev.preventDefault();inp.value=r.dataset.tpPick;box.style.display='none';if(!isGroup){const gf=$('#dynamicForm [name="group"]');if(gf&&!gf.value.trim()&&r.dataset.tpSub)gf.value=r.dataset.tpSub}});
   const nw=box.querySelector('[data-tp-new]');if(nw)nw.onmousedown=ev=>{ev.preventDefault();inp.value=raw;box.style.display='none';if(isGroup){tpAddGroup(raw);toast('Grupo incluído.')}else toast('Novo item — será cadastrado ao gravar.')};
  };
  inp.oninput=search;inp.onfocus=search;inp.onblur=()=>setTimeout(()=>{box.style.display='none'},160);
 });
 wireTableChoosers($('#dynamicForm'));
 {const evSel=$('#dynamicForm [name="eventId"]'),tbox=$('#dynamicForm [data-table-chooser]');if(evSel&&tbox&&type==='guest')evSel.onchange=()=>{const sel=tbox.querySelector('[data-table-select]'),keep=sel.value==='__nova__'?'':sel.value,tabs=guestTables(evSel.value,'');sel.innerHTML=tableOptionsHTML(tabs,'');sel.value=tabs.includes(keep)?keep:'';tbox.querySelector('[data-table-new]').hidden=true}}
 $$('#dynamicForm [data-menu-search]').forEach(inp=>{
  const box=inp.parentElement.querySelector('[data-menu-results]'),row="padding:8px 10px;cursor:pointer;border-bottom:1px solid #f0f2f6";
  const search=()=>{const raw=inp.value.trim(),q=gsNorm(raw),supEl=$('#dynamicForm [name="supplier"]'),sup=gsNorm(supEl?supEl.value:'');
   const kEl=$('#dynamicForm [name="kind"]'),kd=gsNorm(kEl?kEl.value:''),cats=kd.startsWith('bebida')?['bar & bebidas']:kd.startsWith('cardapio')?['cardapio']:null,itens=getCatalog().filter(c=>!cats||cats.includes(gsNorm(c.category||''))),doFor=c=>!!sup&&gsNorm(c.supplier||'')===sup;
   const m=(q?itens.filter(c=>gsNorm(c.name||'').includes(q)||gsNorm(c.supplier||'').includes(q)||gsNorm(c.description||'').includes(q)):itens).slice().sort((a,b)=>(doFor(b)-doFor(a))||String(a.name).localeCompare(String(b.name))).slice(0,40);
   const exato=!!q&&itens.some(c=>gsNorm(c.name||'')===q);
   let h=m.map(c=>`<div data-menu-pick="${finEsc(c.name)}" data-menu-sup="${finEsc(c.supplier||'')}" style="${row}"><b>${finEsc(c.name)}</b> <small style="color:#8a95a1">${finEsc(c.supplier||'sem fornecedor')}${doFor(c)?' • deste fornecedor':''}</small></div>`).join('');
   if(raw&&!exato)h+=`<div data-menu-new style="${row};color:#a15b1f;font-weight:700">＋ Incluir «${finEsc(raw)}» como novo cardápio</div>`;
   if(!h){box.style.display='none';return}
   box.innerHTML=h;box.style.display='block';
   box.querySelectorAll('[data-menu-pick]').forEach(r=>r.onmousedown=ev=>{ev.preventDefault();inp.value=r.dataset.menuPick;box.style.display='none';const sf=$('#dynamicForm [name="supplier"]');if(sf&&!sf.value.trim()&&r.dataset.menuSup)sf.value=r.dataset.menuSup});
   const nw=box.querySelector('[data-menu-new]');if(nw)nw.onmousedown=ev=>{ev.preventDefault();const sf=$('#dynamicForm [name="supplier"]');saveExtra('r1_extra_catalog',{id:`catalog-${Date.now()}`,name:raw,category:(/^bebida/.test(gsNorm(($('#dynamicForm [name="kind"]')||{}).value||''))?'Bar & Bebidas':'Cardápio'),supplier:sf?sf.value.trim():'',price:0,unit:'por pessoa',description:'Cadastrado pela degustação.'});inp.value=raw;box.style.display='none';toast('Cardápio incluído no Catálogo comercial.')};
  };
  inp.oninput=search;inp.onfocus=search;inp.onblur=()=>setTimeout(()=>{box.style.display='none'},160);
 });
 $$('#dynamicForm [data-mask="cpfcnpj"]').forEach(inp=>{
  const errBox=inp.parentElement.querySelector(`[data-error-for="${inp.name}"]`);
  const check=()=>{inp.value=maskCpfCnpj(inp.value);const ok=isValidCpfCnpj(inp.value);inp.style.borderColor=ok?'':'#c0392b';if(errBox)errBox.style.display=ok?'none':'block';return ok};
  inp.oninput=check;inp.onblur=check;
 });
 const contactSelect=$('#appointmentContactSelect');if(contactSelect)contactSelect.onchange=()=>{const opt=contactSelect.selectedOptions?.[0];const name=$('#dynamicForm [name="relatedName"]'),phone=$('#dynamicForm [name="phone"]');if(opt?.value){if(name)name.value=opt.dataset.name||'';if(phone)phone.value=opt.dataset.phone||''}};
 if(type==='appointment'&&!record&&agendaDateFilter){const dateInput=$('#dynamicForm [name="date"]');if(dateInput)dateInput.value=agendaDateFilter}
 if((type==='client'||type==='supplier')&&!record){const createdInput=$('#dynamicForm [name="createdAt"]');if(createdInput)createdInput.value=finLocalISO()}
 $('#dynamicForm').onsubmit=async e=>{e.preventDefault();const invalidDoc=$$('#dynamicForm [data-mask="cpfcnpj"]').find(inp=>!isValidCpfCnpj(inp.value));if(invalidDoc){toast('CPF/CNPJ inválido. Corrija o valor antes de salvar.');invalidDoc.focus();return}const fd=new FormData(e.currentTarget);const obj={};for(const [k,v] of fd.entries()){if(v instanceof File){if(v.size){let fx=v;if(fx.size>1000000)fx=await compressImageFile(fx);if(fx.size>1000000){toast('Use um arquivo (imagem ou PDF) de até 1 MB.');return}obj[k]=await fileToDataURL(fx);if(type==='tasting'&&k==='file')obj.fileName=v.name}else obj[k]=(record&&record[k])?record[k]:''}else obj[k]=v}
 $$('#dynamicForm [data-other-select]').forEach(sel=>{const isOther=/^outro(s)?$/i.test(String(obj[sel.name]||'').trim());const customVal=(obj[sel.name+'__other']||'').trim();if(isOther&&customVal)obj[sel.name]=customVal;delete obj[sel.name+'__other']});
 (f.fields||[]).filter(fl=>fl[2]==='money').forEach(fl=>{obj[fl[0]]=finParseMoeda(obj[fl[0]])/100});
 const tq=Math.floor(Number(obj.tablesQty));delete obj.tablesQty;
 if(Number.isFinite(tq)&&tq>100){toast('Use até 100 mesas. Você pode adicionar outras depois no Mapa de mesas.');return}
 if(type==='guest'){const tn=(obj.table__nova||'').trim();delete obj.table__nova;if(obj.table==='__nova__'){if(!tn){toast('Digite o nome da nova mesa (ou escolha “Sem mesa”).');const ni=$('#dynamicForm [name="table__nova"]');if(ni)ni.focus();return}obj.table=tn}if(obj.table)ensureEventTable(obj.eventId,obj.table)}
 (f.fields||[]).forEach(fl=>{
  const cfg=MANAGED_LIST_FIELDS[fl[2]];if(!cfg)return;
  const val=String(obj[fl[0]]??'').trim();
  if(!val)return;
  const list=cfg.get().slice();
  const already=cfg.isObj?list.some(x=>x.name.toLowerCase()===val.toLowerCase()):list.some(x=>x.toLowerCase()===val.toLowerCase());
  if(!already){list.push(cfg.isObj?{name:val,visible:true}:val);cfg.save(list)}
 });
 if(f.store){obj.id=record?record.id:`${type}-${Date.now()}`;applyTypeDefaults(type,obj,!record);if(record)updateRecord(type,obj);else saveExtra(f.store,obj)}
 $('#formDialog').close();toast(record?'Alterações salvas.':(type==='goal'?'Objetivo salvo e exibido na estratégia.':'Registro salvo no protótipo.'));
 if(type==='tasting')tastingSyncChecklist(obj.id);
 if(type==='event'&&tq>0){createEventTables(obj.id,tq);toast(`Evento salvo e ${tq} mesa(s) criada(s) no Mapa de mesas.`)}
 const rerender={project:'projetos',idea:'ideias',event:'eventos',client:'clientes',supplier:'fornecedores',finance:'financeiro',catalog:'catalogo',contract:'contratos',presentation:'apresentacoes',goal:'estrategia',personalGoal:'objetivos',routine:'rotina',appointment:'agenda',personalFinance:'financas-pessoais',personalDoc:'documentos-pessoais',validation:'validacao',decision:'decisoes'}[type];if(record)currentScreenRebuild()();else if(rerender)render(rerender);else currentScreenRebuild()();
 };
 $('#dynamicForm [data-cancel]').onclick=()=>$('#formDialog').close();$('#formDialog').showModal();
}

function toggleChecklist(id,done){const overrides=readJSON('r1_checklist_overrides',{});overrides[id]={...(overrides[id]||{}),done};storage.setItem('r1_checklist_overrides',JSON.stringify(overrides));const row=getChecklist().find(x=>x.id===id);
 if(row&&row.tastingId){const tt=getTastings().find(x=>x.id===row.tastingId);if(tt){const novo=done?'Sim':(tt.approved==='Sim'?'Pendente':tt.approved);if(tt.approved!==novo)updateRecord('tasting',{id:tt.id,approved:novo});tastingSyncChecklist(tt.id)}}
 toast(done?'Item concluído.':'Item reaberto.');if(row)openSubView('Checklist do evento','EXECUÇÃO RIGOROSA',()=>checklistView(row.eventId),'eventos')}
function toggleTimeline(id){const overrides=readJSON('r1_timeline_overrides',{}),row=getTimeline().find(x=>x.id===id);if(!row)return;overrides[id]={...(overrides[id]||{}),status:row.status==='Confirmado'?'Pendente':'Confirmado'};storage.setItem('r1_timeline_overrides',JSON.stringify(overrides));toast('Status do cronograma atualizado.');openSubView('Cronograma do dia','EXECUÇÃO DO EVENTO',()=>timelineView(row.eventId),'eventos')}
function duplicateEvent(id){const orig=getEvents().find(x=>x.id===id);if(!orig)return;
 const newId=`event-${Date.now()}`;
 const newEvent={id:newId,title:`Cópia de ${orig.title}`,type:orig.type,client:orig.client,date:'',venue:orig.venue,guests:orig.guests,budget:orig.budget,progress:0,status:'Planejamento',manager:orig.manager,critical:0};
 saveExtra('r1_extra_events',newEvent);
 const ck=getChecklist(orig.id).filter(i=>!i.tastingId);
 ck.forEach((item,i)=>saveExtra('r1_extra_checklist',{id:`chk-${newId}-${i}`,eventId:newId,group:item.group,title:item.title,owner:item.owner,due:item.due,done:false,critical:!!item.critical}));
 const tl=getTimeline(orig.id);
 tl.forEach((item,i)=>saveExtra('r1_extra_timeline',{id:`tl-${newId}-${i}`,eventId:newId,time:item.time,title:item.title,owner:item.owner,location:item.location,status:'Pendente'}));
 toast(`Evento duplicado: checklist (${ck.length} itens) e cronograma (${tl.length} marcos) copiados. Ajuste título e data.`);
 openForm('event','',newEvent);
}
const shareWhatsApp=text=>window.open(`https://wa.me/?text=${encodeURIComponent(text)}`,'_blank');
function generateClientPortal(eventId){
 const e=getEvents().find(x=>x.id===eventId);if(!e)return;
 const p=getProfile();
 const guests=getGuests(e.id),conf=guests.filter(x=>x.status==='Confirmado'),pend=guests.filter(x=>x.status==='Pendente'),rec=guests.filter(x=>x.status==='Recusado');
 const tl=getTimeline(e.id).slice().sort((a,b)=>a.time.localeCompare(b.time));
 const finEvento=getFinance().filter(f=>f.eventId===e.id&&f.type==='Receita');
 const finTotal=finEvento.reduce((a,f)=>a+f.value,0),finPago=finEvento.filter(f=>f.status==='Pago').reduce((a,f)=>a+f.value,0);
 const hoje=finLocalISO();
 const finAtraso=finEvento.some(f=>f.status==='Pendente'&&f.date<hoje);
 const finPct=finTotal>0?Math.round((finPago/finTotal)*100):0;
 const finStatusHtml=finTotal<=0?'':finAtraso?'<span class="s no">⚠️ Parcela em atraso</span>':finPct>=100?'<span class="s ok">✅ Pagamento em dia</span>':'<span class="s pd">⏳ Pagamento em andamento</span>';
 const gerado=new Date().toLocaleString('pt-BR');
 const guestRow=g=>`<tr><td>${g.name}</td><td><span class="s ${g.status==='Confirmado'?'ok':g.status==='Recusado'?'no':'pd'}">${g.status}</span></td><td>${g.table||'—'}</td></tr>`;
 const html=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e.title} — Portal do cliente</title><style>
 body{font-family:Poppins,Arial,sans-serif;background:#f4f1ec;color:#273142;margin:0;padding:24px}
 .wrap{max-width:720px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08)}
 header{background:#1f2b3a;color:#fff;padding:28px 28px 22px}
 header small{opacity:.7;letter-spacing:.08em;text-transform:uppercase;font-size:11px}
 header h1{margin:6px 0 4px;font-size:26px}
 header p{margin:0;opacity:.85;font-size:14px}
 main{padding:24px 28px}
 .progress{height:10px;background:#e7e2d8;border-radius:100px;overflow:hidden;margin:10px 0 4px}
 .progress i{display:block;height:100%;background:linear-gradient(90deg,#c17a3e,#e2a86a)}
 .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}
 .card{background:#f8f6f1;border-radius:12px;padding:12px;text-align:center}
 .card b{display:block;font-size:22px}
 .card small{color:#8a95a1;font-size:11px}
 h2{font-size:16px;border-top:1px solid #eee;padding-top:18px;margin-top:22px}
 table{width:100%;border-collapse:collapse;font-size:13px}
 td{padding:6px 4px;border-bottom:1px solid #f0f0f0}
 .s{padding:2px 8px;border-radius:100px;font-size:11px;font-weight:700}
 .s.ok{background:#e4f7ec;color:#1f9d55}.s.pd{background:#fdf1e3;color:#a15b1f}.s.no{background:#fbe9e7;color:#c0392b}
 footer{padding:16px 28px;color:#8a95a1;font-size:11px;border-top:1px solid #f0f0f0}
 </style></head><body><div class="wrap">
 <header><small>${p.businessName||'RIZZIERI ONE'}</small><h1>${e.title}</h1><p>${e.client} • ${e.venue} • ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')}</p></header>
 <main>
 <p><b>${daysUntil(e.date)} dias</b> para o grande dia.</p>
 <div class="progress"><i style="width:${e.progress}%"></i></div><small>${e.progress}% da produção concluída</small>
 ${finTotal>0?`<h2 style="border-top:none;margin-top:14px;padding-top:0">Pagamento</h2><p>${finStatusHtml} <small style="color:#8a95a1">• ${finPct}% do valor contratado já foi pago</small></p><div class="progress"><i style="width:${finPct}%;background:linear-gradient(90deg,#1f9d55,#4fcf84)"></i></div>`:''}
 <div class="grid"><div class="card"><b>${conf.length}</b><small>Confirmados</small></div><div class="card"><b>${pend.length}</b><small>Pendentes</small></div><div class="card"><b>${rec.length}</b><small>Recusados</small></div></div>
 <h2>Convidados</h2>
 <table><tr><td><b>Nome</b></td><td><b>Status</b></td><td><b>Mesa</b></td></tr>${guests.length?guests.map(guestRow).join(''):'<tr><td colspan="3">Lista de convidados ainda não cadastrada.</td></tr>'}</table>
 <h2>Cronograma do dia</h2>
 <table>${tl.length?tl.map(x=>`<tr><td><b>${x.time}</b></td><td>${x.title}</td></tr>`).join(''):'<tr><td colspan="2">Cronograma ainda não definido.</td></tr>'}</table>
 </main>
 <footer>Gerado em ${gerado} • Este é um retrato do evento nesta data — para ver novidades, peça um portal atualizado ao seu produtor.</footer>
 </div></body></html>`;
 const blob=new Blob([html],{type:'text/html'});
 const url=URL.createObjectURL(blob);
 const a=document.createElement('a');
 a.href=url;a.download=`portal-${e.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.html`;
 document.body.appendChild(a);a.click();document.body.removeChild(a);
 setTimeout(()=>URL.revokeObjectURL(url),2000);
 toast('Portal do cliente gerado — veja o arquivo baixado.');
}
const ajTemplatePrefix=key=>{const t=(ajTemplates()[key]||'').trim();return t?`${t}\n\n`:''};
function shareEventWhatsApp(id){const e=getEvents().find(x=>x.id===id);if(!e)return;
 const ck=getChecklist(e.id),done=ck.filter(x=>x.done).length,crit=ck.filter(x=>x.critical&&!x.done).length,fin=getFinance().filter(x=>x.eventId===e.id),pend=fin.filter(x=>x.status==='Pendente').length;
 const txt=`${ajTemplatePrefix('event')}*${e.title}*\n${e.client} • ${e.venue}\nData: ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} (${daysUntil(e.date)} dias)\nProdução: ${e.progress}%\nChecklist: ${done}/${ck.length} concluídos${crit?` (${crit} crítico(s) em aberto)`:''}\nFinanceiro: ${pend} lançamento(s) pendente(s)\n\n_Enviado pelo RIZZIERI ONE_`;
 shareWhatsApp(txt);
}
function shareGuestsWhatsApp(id){const e=getEvents().find(x=>x.id===id);if(!e)return;const rows=getGuests(e.id);
 const conf=rows.filter(x=>x.status==='Confirmado').length,pend=rows.filter(x=>x.status==='Pendente').length,rec=rows.filter(x=>x.status==='Recusado').length;
 const txt=`${ajTemplatePrefix('guests')}*Lista de convidados — ${e.title}*\nConfirmados: ${conf}\nPendentes: ${pend}\nRecusados: ${rec}\nTotal na lista: ${rows.length} (${e.guests||0} previstos)\n\n_Enviado pelo RIZZIERI ONE_`;
 shareWhatsApp(txt);
}
function shareChecklistWhatsApp(id){const e=getEvents().find(x=>x.id===id);if(!e)return;const rows=getChecklist(e.id),abertos=rows.filter(x=>!x.done);
 const linhas=abertos.slice(0,15).map(x=>`• ${x.title}${x.critical?' ⚠️':''} — ${x.owner}${x.due?` (até ${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')})`:''}`).join('\n');
 const txt=`${ajTemplatePrefix('checklist')}*Checklist — ${e.title}*\n${rows.filter(x=>x.done).length}/${rows.length} concluídos\n\n*Pendentes:*\n${linhas||'Nenhum item pendente 🎉'}${abertos.length>15?`\n+ ${abertos.length-15} outro(s) item(ns)`:''}\n\n_Enviado pelo RIZZIERI ONE_`;
 shareWhatsApp(txt);
}
function shareTimelineWhatsApp(id){const e=getEvents().find(x=>x.id===id);if(!e)return;const rows=getTimeline(e.id).slice().sort((a,b)=>a.time.localeCompare(b.time));
 const linhas=rows.map(x=>`${x.time} — ${x.title} (${x.owner})`).join('\n');
 const txt=`${ajTemplatePrefix('timeline')}*Cronograma do dia — ${e.title}*\n${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')}\n\n${linhas||'Nenhum marco cadastrado ainda.'}\n\n_Enviado pelo RIZZIERI ONE_`;
 shareWhatsApp(txt);
}
function addCatalogToEvent(itemId,eventIdOverride=null){const select=document.querySelector(`[data-catalog-event="${itemId}"]`);const eventId=eventIdOverride||select?.value||getEvents()[0]?.id;if(!eventId)return;const key=`r1_event_catalog_${eventId}`,arr=readJSON(key,[]);if(!arr.includes(itemId))arr.push(itemId);storage.setItem(key,JSON.stringify(arr));const item=getCatalog().find(x=>x.id===itemId);toast(`${item?.name||'Item'} adicionado a ${getEvents().find(x=>x.id===eventId)?.title||'evento'}.`)}

function openProfile(){const p=getProfile(),f=$('#companyProfileForm'),set=(name,v)=>{const el=f.querySelector(`[name="${name}"]`);if(el)el.value=v};set('businessName',p.businessName||'');set('legalName',p.legalName||'');set('document',maskCpfCnpj(p.document||''));set('phone',maskPhoneBR(p.phone||''));set('email',p.email||'');set('address',p.address||'');set('website',p.website||'');set('footer',p.footer||'');const preview=$('#companyLogoPreview');preview.innerHTML=p.logo?`<img src="${p.logo}" alt="Logo">`:'<span>Seu logo</span>';preview.dataset.logo=p.logo||'';$('#companyProfileDialog').showModal()}
$('#companyProfileForm [name="phone"]').oninput=e=>{e.target.value=maskPhoneBR(e.target.value)};
$('#companyProfileForm [name="document"]').addEventListener('input',e=>{e.target.value=maskCpfCnpj(e.target.value);const ok=isValidCpfCnpj(e.target.value);e.target.style.borderColor=ok?'':'#c0392b';const err=$('#companyProfileForm [data-error-for="document"]');if(err)err.style.display=ok?'none':'block'});
$('#companyLogo').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;if(file.size>1500000){toast('Use uma imagem de logo com até 1,5 MB.');e.target.value='';return}const data=await fileToDataURL(file);$('#companyLogoPreview').innerHTML=`<img src="${data}" alt="Logo">`;$('#companyLogoPreview').dataset.logo=data});
$('#companyProfileForm').addEventListener('submit',e=>{e.preventDefault();const docField=$('#companyProfileForm [name="document"]');if(!isValidCpfCnpj(docField.value)){toast('CPF/CNPJ inválido. Corrija o valor antes de salvar.');docField.focus();return}const fd=new FormData(e.currentTarget),obj=Object.fromEntries(fd.entries());obj.logo=$('#companyLogoPreview').dataset.logo||getProfile().logo||'';storage.setItem('r1_company_profile',JSON.stringify(obj));$('#companyProfileDialog').close();toast('Identidade salva. Os próximos PDFs usarão esses dados.')});

function fileToDataURL(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
function handleAssets(e){presentationAssets=[...e.target.files];const gallery=$('#assetGallery');if(!gallery)return;gallery.innerHTML='';presentationAssets.forEach(file=>{const item=document.createElement('div');item.className='asset-item';if(file.type.startsWith('image/')){const img=document.createElement('img');img.src=URL.createObjectURL(file);item.appendChild(img)}else item.innerHTML=`<div class="pdf-thumb">PDF</div><small>${file.name}</small>`;gallery.appendChild(item)});toast(`${presentationAssets.length} arquivo(s) adicionado(s).`)}
function openPresentationMode(){const d=$('#presentationModeDialog'),p=getPresentations()[0];d.querySelector('.presentation-stage').innerHTML=`<span class="eyebrow">PROJETO DE EXPERIÊNCIA</span><h1>${p.title}</h1><p>${p.theme}</p><div class="stage-assets">${presentationAssets.length?presentationAssets.slice(0,3).map(f=>f.type.startsWith('image/')?`<img src="${URL.createObjectURL(f)}" alt="Referência">`:`<div class="stage-pdf">PDF<br><small>${f.name}</small></div>`).join(''):'<div class="stage-placeholder">Adicione imagens e PDFs no editor para montar o moodboard.</div>'}</div>`;d.showModal()}

function profileHeader(p){return `<header class="print-brand">${p.logo?`<img src="${p.logo}" alt="Logo">`:`<div class="print-logo">LOGO</div>`}<div><h1>${p.businessName}</h1><p>${p.legalName} • ${p.document}</p><p>${p.phone} • ${p.email} • ${p.website}</p></div></header>`}
function printDocument(kind,id){const p=getProfile();let html='';
 if(kind==='contract'){const c=getContracts().find(x=>x.id===id)||getContracts()[0];html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">CONTRATO ${c.number}</div><h2>${c.title}</h2><p><b>CONTRATANTE:</b> ${c.client}</p><p><b>PROJETO / EVENTO:</b> ${c.event}</p><p><b>VALOR:</b> ${moneyApp(c.value)}</p><h3>1. Objeto</h3><p>Prestação dos serviços descritos na proposta aprovada e no escopo vinculado a este contrato.</p><h3>2. Obrigações</h3><p>A CONTRATADA executará os serviços dentro do escopo acordado. O CONTRATANTE deverá fornecer aprovações, dados e pagamentos nos prazos definidos.</p><h3>3. Pagamentos</h3><p>Condições conforme negociação comercial e cronograma financeiro registrado.</p><h3>4. Alterações e cancelamento</h3><p>Alterações de escopo, datas, fornecedores ou quantidades poderão exigir aditivo.</p><p><small>Modelo demonstrativo. Deve ser revisado juridicamente antes do uso comercial.</small></p><div class="signature-grid"><div>CONTRATADA<br><span>________________________________</span></div><div>CONTRATANTE<br><span>________________________________</span></div></div></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='presentation'){const pr=getPresentations().find(x=>x.id===id)||getPresentations()[0];html=`${profileHeader(p)}<main class="print-doc presentation-print"><div class="print-kicker">APRESENTAÇÃO DE PROJETO</div><h2>${pr.title}</h2><p class="lead">${pr.theme} • ${pr.client}</p><h3>Conceito</h3><p>Projeto construído para alinhar estética, experiência, operação e investimento.</p><h3>Cardápio</h3><p>Opções gastronômicas e serviço conforme briefing e orçamento.</p><h3>Decoração & experiência</h3><p>Paleta, ambientação, mobiliário, iluminação e cenografia.</p><h3>Música & entretenimento</h3><p>DJ, repertório, atrações e estrutura.</p><h3>Investimento</h3><p>Valores e itens opcionais vinculados ao catálogo comercial.</p></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='checklist'){const e=getEvents().find(x=>x.id===id)||getEvents()[0],rows=getChecklist(e.id);html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">CHECKLIST OPERACIONAL</div><h2>${e.title}</h2><p>${e.client} • ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • ${e.venue}</p><table><tr><th>Status</th><th>Grupo</th><th>Item</th><th>Responsável</th><th>Prazo</th><th>Cliente (0–10)</th></tr>${rows.map(x=>`<tr><td>${x.done?'✓':'○'}</td><td>${x.group}</td><td>${x.title}${x.critical?' • CRÍTICO':''}</td><td>${x.owner}</td><td>${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')}</td><td>${(()=>{const sc=getScore(e.id,x.tastingId?'tasting':'checklist',x.tastingId||x.id);return sc===null?'—':sc+'/10'})()}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='timeline'){const e=getEvents().find(x=>x.id===id)||getEvents()[0],rows=getTimeline(e.id).sort((a,b)=>a.time.localeCompare(b.time));html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">CRONOGRAMA DO DIA</div><h2>${e.title}</h2><p>${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • ${e.venue}</p><table><tr><th>Hora</th><th>Atividade</th><th>Responsável</th><th>Local</th><th>Status</th></tr>${rows.map(x=>`<tr><td>${x.time}</td><td>${x.title}</td><td>${x.owner}</td><td>${x.location}</td><td>${x.status}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='suppliers'){const rows=getSuppliers();html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">REDE DE FORNECEDORES</div><h2>Lista de fornecedores</h2><table><tr><th>Categoria</th><th>Fornecedor</th><th>Contato</th><th>Referência</th><th>Status</th></tr>${rows.map(x=>`<tr><td>${x.category}</td><td>${x.name}</td><td>${x.contact}<br>${x.phone}</td><td>${x.price}</td><td>${x.status}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='finance'){const evId=id||'',evx=evId?getEvents().find(x=>x.id===evId):null,rows=getFinance().filter(x=>!evId||x.eventId===evId);html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">${evx?'MAPA FINANCEIRO DO EVENTO':'MAPA FINANCEIRO'}</div><h2>${evx?finEsc(evx.title)+' — ':''}Receitas e despesas</h2><table><tr><th>Data</th><th>Evento</th><th>Descrição</th><th>Tipo</th><th>Valor</th><th>Status</th></tr>${rows.map(x=>`<tr><td>${new Date(x.date+'T12:00:00').toLocaleDateString('pt-BR')}</td><td>${getEvents().find(e=>e.id===x.eventId)?.title||''}</td><td>${x.description}</td><td>${x.type}</td><td>${moneyApp(x.value)}</td><td>${x.status}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else {const e=getEvents().find(x=>x.id===id)||getEvents()[0];html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">RESUMO OPERACIONAL</div><h2>${e.title}</h2><p><b>Cliente:</b> ${e.client}</p><p><b>Data:</b> ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • <b>Local:</b> ${e.venue}</p><p><b>Convidados:</b> ${e.guests} • <b>Orçamento:</b> ${moneyApp(e.budget)}</p><h3>Produção</h3><p>Checklist: ${getChecklist(e.id).filter(x=>x.done).length}/${getChecklist(e.id).length} concluídos • Cronograma: ${getTimeline(e.id).length} marcos • Catálogo: ${getEventCatalog(e.id).length} itens selecionados.</p>${eventSummaryExtraHTML(e)}</main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 $('#printRoot').innerHTML=html;document.body.classList.add('printing');setTimeout(()=>{window.print();setTimeout(()=>document.body.classList.remove('printing'),500)},100)
}

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e});
$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else toast('No iPhone: Compartilhar → Adicionar à Tela de Início. No Android/Chrome: menu → Instalar app.')};
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
if(storage.getItem('rizzieri_one_demo')==='1')showApp();
ajApplyZoom();ajApplyLogin();


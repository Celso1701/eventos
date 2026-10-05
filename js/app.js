
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
const APP_VERSION='V:1.18.1';
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
function finSave(entry){if(finIsSeed(entry.id)){const ov=readJSON(FIN_OV,{});ov[entry.id]={...entry};storage.setItem(FIN_OV,JSON.stringify(ov));return}
 const ex=readJSON(FIN_STORE,[]),i=ex.findIndex(x=>x.id===entry.id);if(i>=0)ex[i]=entry;else ex.push(entry);storage.setItem(FIN_STORE,JSON.stringify(ex))}
function finAdd(list){const ex=readJSON(FIN_STORE,[]);list.forEach(e=>ex.push(e));storage.setItem(FIN_STORE,JSON.stringify(ex))}
function finRemove(id){if(finIsSeed(id)){const del=readJSON(FIN_DEL,[]);if(!del.includes(id))del.push(id);storage.setItem(FIN_DEL,JSON.stringify(del))}else storage.setItem(FIN_STORE,JSON.stringify(readJSON(FIN_STORE,[]).filter(x=>x.id!==id)))}
function finCfg(){return readJSON(FIN_CFG,{caixa:{},diaCartao:0})}
/* adaptadores: o resto do app continua enxergando o formato antigo */
const finToLegacy=e=>({id:e.id,eventId:e.eventId||'',date:e.data,type:e.ws==='Pessoal'?(e.tipo==='rec'?'Entrada':'Saída'):(e.tipo==='rec'?'Receita':'Despesa'),category:e.categoria,description:e.descricao,party:e.parte||'',value:e.valorCent/100,status:e.dataReal?'Pago':(e.ws==='Pessoal'?'Previsto':'Pendente'),ws:e.ws});
/* ---- estado de tela ---- */
const finState={};
const finSt=scope=>finState[scope]||(finState[scope]={view:'mes',mOff:0,ini:'',fim:'',dia:'',ri:'',rf:'',ws:'Todos',filtro:'all'});
const finNet=list=>list.reduce((a,e)=>a+(e.tipo==='rec'?e.valorCent:-e.valorCent),0);
const finSum=(list,tipo)=>list.filter(e=>e.tipo===tipo).reduce((a,e)=>a+e.valorCent,0);
const finByDate=(a,b)=>String(a.data).localeCompare(String(b.data));
function finScopeList(scope){const st=finSt(scope);return finAll().filter(e=>scope==='*'?(st.ws==='Todos'||e.ws===st.ws):e.ws===scope)}
function finCaixa(list,scope){const cfg=finCfg(),st=finSt('*'),wsl=scope==='*'?(st.ws==='Todos'?FIN_WS:[st.ws]):[scope];
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
 const nome=scope==='*'?'Consolidado':scope,pessoal=scope==='Pessoal';
 const head=`${scope==='*'?'<button class="link-btn" data-back>← Voltar</button>':''}<div class="section-title"><div><span class="eyebrow">FINANCEIRO ${nome.toUpperCase()}</span><h3>${scope==='*'?'Financeiro consolidado':pessoal?'Finanças pessoais':'Receitas, despesas e fluxo de caixa'}</h3><p>${scope==='*'?'Negócios, Eventos e Pessoal no mesmo modelo de lançamento.':'Lançamentos em aberto e realizados, com fluxo diário e caixa.'}</p></div><div class="event-head-actions"><button class="btn btn-secondary" data-fin-act="new" data-tipo="rec">＋ Receita</button><button class="btn btn-secondary" data-fin-act="new" data-tipo="desp">＋ Despesa</button>${scope!=='*'?`<button class="btn btn-primary" data-create="${pessoal?'personalFinance':'finance'}">＋ Novo lançamento</button>`:''}${(scope==='Negócios'||scope==='Eventos')?'<button class="copper-btn" data-print="finance">Extrato PDF</button>':''}<button class="small-btn" data-fin-act="cfg" title="Saldo inicial de caixa e dia do cartão">⚙️</button></div></div>`;
 const cards=`<section class="metrics"><article class="metric-card fin-clickable" data-fin-card-summary="caixa" data-fin-scope="${scope}"><small>Caixa atual</small><strong>${finFmt(caixa)}</strong><span class="metric-meta">Saldo inicial + realizados</span></article><article class="metric-card fin-clickable" data-fin-card-summary="receber" data-fin-scope="${scope}"><small>A receber (em aberto)</small><strong>${finFmt(rec)}</strong><span class="metric-meta">${abertos.filter(e=>e.tipo==='rec').length} lançamento(s)</span></article><article class="metric-card fin-clickable" data-fin-card-summary="pagar" data-fin-scope="${scope}"><small>A pagar (em aberto)</small><strong>${finFmt(desp)}</strong><span class="metric-meta">${abertos.filter(e=>e.tipo==='desp').length} lançamento(s)</span></article><article class="metric-card fin-clickable" data-fin-card-summary="atrasados" data-fin-scope="${scope}"><small>Atrasados</small><strong>${atr.length}</strong><span class="metric-meta">Receber ${finFmt(finSum(atr,'rec'))} · Pagar ${finFmt(finSum(atr,'desp'))}</span></article></section>`;
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
 if(act==='new')return finOpenForm({tipo:t.dataset.tipo,scope});
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
 getChecklist().filter(x=>!x.done).forEach(c=>rows.push({id:`agenda-check-${c.id}`,date:c.due,time:'',title:c.title,type:'Checklist',source:'Checklist',detail:`${eventName(c.eventId)} • ${c.owner}`,phone:contactPhone(c.owner),person:c.owner,priority:c.critical?'Alta':'Normal',edit:`checklist::${c.id}`}));
 getTimeline().filter(x=>x.status!=='Confirmado').forEach(t=>{const ev=getEvents().find(e=>e.id===t.eventId);if(!ev)return;rows.push({id:`agenda-time-${t.id}`,date:ev.date,time:t.time||'',title:t.title,type:'Cronograma',source:'Evento',detail:`${ev.title} • ${t.location} • ${t.owner}`,phone:contactPhone(t.owner),person:t.owner,priority:'Normal',edit:`timeline::${t.id}`})});
 getStrategicGoals().forEach(g=>{if(g.date)rows.push({id:`agenda-goal-${g.id}`,date:g.date,time:'',title:g.title,type:'Meta',source:'Estratégia',detail:`${g.area||'Estratégia'} • Meta: ${g.target||'a definir'}`,phone:'',person:'',priority:'Normal',edit:`goal::${g.id}`})});
 getPersonalGoals().forEach(g=>{if(g.due)rows.push({id:`agenda-pgoal-${g.id}`,date:g.due,time:'',title:g.title,type:'Meta pessoal',source:'Pessoal',detail:`${g.area} • ${g.progress}%`,phone:'',person:'',priority:'Normal',edit:`personalGoal::${g.id}`})});
 getProjectAgenda().forEach(pa=>{const proj=getProjects().find(p=>p.id===pa.projectId);const d=pa.endDate||pa.startDate;if(!d)return;rows.push({id:`agenda-proj-${pa.id}`,date:d,time:'',title:proj?proj.name:'Projeto',type:'Projeto',source:'Projetos',detail:`${pa.startDate?`${new Date(pa.startDate+'T12:00:00').toLocaleDateString('pt-BR')} → `:''}${pa.notes||''}`,phone:'',person:'',priority:'Normal',edit:`projectAgenda::${pa.id}`})});
 const hidden=new Set(safeReadJSON('r1_agenda_hidden',[]));
 return rows.filter(x=>x.date&&!hidden.has(x.id)).sort((a,b)=>`${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
};
const agendaTypeClass=type=>({'Evento':'event','Compromisso':'appointment','Pessoal':'appointment','Planejamento':'planning','Finanças':'finance','Recebimento':'income','Pagamento':'expense','Checklist':'checklist','Cronograma':'timeline','Meta':'goal','Meta pessoal':'goal','Projeto':'planning'}[type]||'appointment');

function dashboardView(workspace='Negócios'){
 const allProjects=getProjects(),ideaBoard=getIdeasBoard(),events=getEvents().slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))),finance=getFinance(),suppliers=getSuppliers(),clients=getClients(),pending=finance.filter(x=>x.status==='Pendente');
 if(workspace==='Eventos') return `
 <section class="workspace-banner"><div><span class="eyebrow">WORKSPACE EVENTOS</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.18.1</span><h3>Produção rigorosa do briefing ao último convidado.</h3><p>Eventos, clientes, fornecedores, contratos, catálogo, financeiro, checklist e cronograma trabalhando no mesmo fluxo.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="eventos"><span data-icon="calendar-heart"></span> Abrir central de eventos</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
 <section class="metrics"><article class="metric-card"><small>Eventos ativos</small><strong>${events.length}</strong><span class="metric-meta">Em produção</span>${spark([22,34,48,58,68,80],true)}</article><article class="metric-card"><small>Itens de checklist</small><strong>${getChecklist().filter(x=>!x.done).length}</strong><span class="metric-meta">Ainda em aberto</span>${spark([70,58,50,42,34,26])}</article><article class="metric-card"><small>Fornecedores</small><strong>${suppliers.length}</strong><span class="metric-meta">Rede operacional</span>${spark([28,38,48,58,68,78],true)}</article><article class="metric-card"><small>Pendências financeiras</small><strong>${pending.length}</strong><span class="metric-meta">Cobrar ou pagar</span>${spark([60,54,46,38,32,24])}</article></section>
 <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Eventos em andamento</h3><button class="link-btn" data-nav="eventos">Ver todos</button></div><div class="event-mini-grid">${events.map(e=>`<article class="event-mini"><div><span class="event-type">${e.type}</span><span class="event-mini-date">${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')}</span><h4>${e.title}</h4><p>${e.venue} • ${e.guests} convidados</p></div><div class="event-mini-foot"><div><small>Produção</small><b>${e.progress}%</b></div><div class="progress"><i style="width:${e.progress}%"></i></div><button class="small-btn" data-open-event="${e.id}">Abrir detalhes</button></div></article>`).join('')}</div></div><div class="stack"><div class="panel"><div class="panel-head"><h3>Atalhos de produção</h3></div><div class="quick-grid"><button data-nav="catalogo"><span data-icon="book-open"></span><span>Catálogo</span></button><button data-nav="fornecedores"><span data-icon="briefcase"></span><span>Fornecedores</span></button><button data-nav="contratos"><span data-icon="file-signature"></span><span>Contratos</span></button><button data-nav="apresentacoes"><span data-icon="presentation"></span><span>Apresentações</span></button><button data-create="event"><span data-icon="plus-circle"></span><span>Novo evento</span></button><button data-nav="financeiro"><span data-icon="wallet"></span><span>Financeiro</span></button></div></div><div class="panel"><div class="panel-head"><h3>Atenção agora</h3></div><div class="attention-list"><button data-open-event="ev-ana-lucas"><span class="status-dot danger"></span><div><b>Casamento • Ana & Lucas</b><small>5 pontos críticos ainda em produção</small></div><em>Hoje</em></button><button data-nav="financeiro"><span class="status-dot warn"></span><div><b>Financeiro</b><small>${pending.length} lançamentos pendentes</small></div><em>Agora</em></button></div></div></div></section>`;
 if(workspace==='Pessoal'){
   const goals=getPersonalGoals(),routine=getRoutine(),appointments=getAppointments(),pf=getPersonalFinance();
   return `<section class="workspace-banner"><div><span class="eyebrow">WORKSPACE PESSOAL</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.18.1</span><h3>Sua vida organizada sem misturar com a operação profissional.</h3><p>Objetivos, rotina, agenda, documentos e finanças pessoais em um ambiente separado e visualmente identificável.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="objetivos"><span data-icon="target"></span> Ver objetivos</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
   <section class="metrics"><article class="metric-card"><small>Objetivos ativos</small><strong>${goals.length}</strong><span class="metric-meta">Metas pessoais</span>${spark([30,38,48,58,66,74])}</article><article class="metric-card"><small>Rotinas pendentes</small><strong>${routine.filter(x=>!x.done).length}</strong><span class="metric-meta">Nesta semana</span>${spark([62,54,46,38,30,24])}</article><article class="metric-card"><small>Próximos compromissos</small><strong>${appointments.length}</strong><span class="metric-meta">Agenda pessoal</span>${spark([24,34,46,56,64,72],true)}</article><article class="metric-card"><small>Saldo demonstrativo</small><strong>${money(pf.filter(x=>x.type==='Entrada').reduce((a,x)=>a+x.value,0)-pf.filter(x=>x.type==='Saída').reduce((a,x)=>a+x.value,0))}</strong><span class="metric-meta">Prévia pessoal</span>${spark([34,44,54,62,72,80])}</article></section>
   <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Objetivos em andamento</h3><button class="link-btn" data-nav="objetivos">Abrir objetivos</button></div>${goals.map(g=>`<div class="goal-row"><div><b>${g.title}</b><small>${g.area} • até ${new Date(g.due+'T12:00:00').toLocaleDateString('pt-BR')}</small></div><span>${g.progress}%</span><div class="progress"><i style="width:${g.progress}%"></i></div></div>`).join('')}</div><div class="panel"><div class="panel-head"><h3>Rotina da semana</h3><button class="link-btn" data-nav="rotina">Abrir rotina</button></div><div class="routine-list">${routine.map(r=>`<label class="routine-row ${r.done?'done':''}"><input type="checkbox" data-routine-toggle="${r.id}" ${r.done?'checked':''}><span class="custom-check"></span><div><b>${r.title}</b><small>${r.period}</small></div></label>`).join('')}</div></div></section>`;
 }
 if(workspace==='Ideias'){
   const validations=getValidations(),decisions=getDecisions();
   return `<section class="workspace-banner"><div><span class="eyebrow">WORKSPACE IDEIAS</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.18.1</span><h3>Capture, valide e transforme ideias em projetos executáveis.</h3><p>Canvas, hipóteses, evidências, decisões e roadmap antes de gastar energia no desenvolvimento.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="ideias"><span data-icon="lightbulb"></span> Abrir incubadora</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
   <section class="metrics"><article class="metric-card"><small>Ideias no funil</small><strong>${Object.values(ideaBoard).flat().length}</strong><span class="metric-meta">Da ideia à produção</span>${spark([26,36,48,58,68,82],true)}</article><article class="metric-card"><small>Validações</small><strong>${validations.length}</strong><span class="metric-meta">Hipóteses em teste</span>${spark([18,28,38,48,58,70])}</article><article class="metric-card"><small>Decisões registradas</small><strong>${decisions.length}</strong><span class="metric-meta">Histórico rastreável</span>${spark([28,34,42,52,64,76],true)}</article><article class="metric-card"><small>Em produção</small><strong>${ideaBoard['PRODUÇÃO'].length}</strong><span class="metric-meta">Ideias que viraram produto</span>${spark([22,30,42,54,68,84])}</article></section>
   <section class="main-grid"><div class="panel"><div class="panel-head"><h3>Funil de ideias</h3><button class="link-btn" data-nav="ideias">Abrir incubadora</button></div><div class="idea-pipeline">${Object.entries(ideaBoard).map(([stage,arr])=>`<div><span>${stage}</span><b>${arr.length}</b></div>`).join('')}</div></div><div class="panel"><div class="panel-head"><h3>Últimas decisões</h3><button class="link-btn" data-nav="decisoes">Ver decisões</button></div>${decisions.map(d=>`<div class="decision-row"><b>${d.title}</b><small>${d.context}</small><span>${d.status}</span></div>`).join('')}</div></section>`;
 }
 return `<section class="workspace-banner"><div><span class="eyebrow">WORKSPACE NEGÓCIOS</span><span class="ws-version-badge" style="display:inline-block;vertical-align:middle;margin-left:8px;background:#fdf1e3;border:1px solid #eccb9c;color:#a15b1f;font-size:9px;font-weight:800;letter-spacing:.05em;padding:2px 8px;border-radius:100px">V:1.18.1</span><h3>Comande projetos, produtos, clientes e resultados em um único painel.</h3><p>Visão executiva para administrar aplicativos, estratégia, finanças e operação sem misturar com os demais contextos.</p></div><div class="workspace-banner-actions" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end"><button class="btn btn-primary" data-nav="projetos"><span data-icon="grid"></span> Abrir portfólio</button><button class="btn btn-secondary" data-open-consolidado style="width:auto;margin-top:0"><span data-icon="bar-chart-3"></span> Consolidado</button></div></section>
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
 return `<article class="event-card" data-event-card data-event-type="${e.type}" data-event-search="${`${e.title} ${e.client} ${e.venue}`.toLowerCase()}"><div class="event-card-head"><div><span class="event-type">${e.type}</span><h4>${e.title}</h4><p>${e.client}</p></div>${eventStatus(e.status)}</div><div class="event-stats"><div><small>Data</small><b>${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} ${bell}</b><em>${d} dias</em></div><div><small>Local</small><b>${e.venue}</b></div><div><small>Convidados</small><b>${e.guests}</b></div><div><small>Orçamento</small><b>${money(e.budget)}</b></div></div><div class="progress"><i style="width:${e.progress}%"></i></div><div class="event-card-foot"><span>${e.progress}% produzido • ${e.critical} críticos</span><button class="small-btn" data-open-event="${e.id}">Abrir detalhes</button><button class="small-btn" data-edit="event::${e.id}">✏️ Editar</button></div></article>`}).join('')}</div><div id="eventsEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum evento encontrado.</b><small>Altere os filtros ou cadastre um novo evento.</small></div>`}
function eventHubView(id){const e=getEvents().find(x=>x.id===id)||getEvents()[0],ck=getChecklist(e.id),tl=getTimeline(e.id),fin=getFinance().filter(x=>x.eventId===e.id),selected=getEventCatalog(e.id);const done=ck.filter(x=>x.done).length, paid=fin.filter(x=>x.status==='Pago').reduce((a,x)=>a+Number(x.value),0);return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">HUB DO EVENTO</span><h3>${e.title}</h3><p>${e.client} • ${e.venue} • ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')}</p></div><div class="event-head-actions"><button class="small-btn" data-edit="event::${e.id}">✏️ Editar evento</button><button class="small-btn" data-duplicate-event="${e.id}">⧉ Duplicar evento</button><button class="small-btn" data-share-event="${e.id}">📲 WhatsApp</button><button class="copper-btn" data-print="event" data-id="${e.id}">Gerar resumo PDF</button><button class="btn btn-primary" data-nav="apresentacoes">Abrir apresentação</button></div></div><section class="hero-grid"><div class="hero-card"><span class="eyebrow">CONTAGEM REGRESSIVA</span><h3>${daysUntil(e.date)} dias <span style="font-size:18px;color:var(--silver)">para a execução</span></h3><div class="progress"><i style="width:${e.progress}%"></i></div><p>${e.progress}% da produção concluída. Responsável: <b>${e.manager}</b>.</p><div class="hero-actions"><button class="copper-btn" data-open-checklist="${e.id}">✓ Checklist</button><button class="copper-btn" data-open-timeline="${e.id}">⏱ Cronograma</button><button class="copper-btn" data-open-guests="${e.id}">🎟 Convidados</button><button class="copper-btn" data-open-seating="${e.id}">🪑 Mapa de mesas</button><button class="copper-btn" data-open-portal="${e.id}">🔗 Portal do cliente</button><button class="copper-btn" data-nav="fornecedores">👥 Fornecedores</button><button class="copper-btn" data-nav="financeiro">◈ Financeiro</button></div></div><div class="panel"><div class="panel-head"><h3>Resumo operacional</h3><span class="pill warn">${e.critical} críticos</span></div><div class="summary-list"><div><small>Checklist</small><b>${done}/${ck.length} concluídos</b></div><div><small>Cronograma do dia</small><b>${tl.length} marcos</b></div><div><small>Convidados</small><b>${getGuests(e.id).filter(x=>x.status==='Confirmado').length} confirmados de ${e.guests||0} previstos</b></div><div><small>Catálogo escolhido</small><b>${selected.length} itens</b></div><div><small>Movimento financeiro</small><b>${money(paid)} baixado</b></div></div></div></section><section class="metrics"><article class="metric-card"><small>Checklist</small><strong>${ck.length?Math.round(done/ck.length*100):0}%</strong><span class="metric-meta">${done} de ${ck.length} itens concluídos</span>${spark([18,26,38,50,64,74])}</article><article class="metric-card"><small>Fornecedores</small><strong>${getSuppliers().length}</strong><span class="metric-meta">Catálogo reutilizável</span>${spark([28,34,42,52,64,76],true)}</article><article class="metric-card"><small>Financeiro</small><strong>${fin.filter(x=>x.status==='Pendente').length}</strong><span class="metric-meta">Lançamentos pendentes</span>${spark([18,32,40,52,58,61])}</article><article class="metric-card"><small>Catálogo</small><strong>${selected.length}</strong><span class="metric-meta">Itens adicionados ao projeto</span>${spark([22,30,42,54,64,72],true)}</article></section><section class="two-col"><div class="panel"><div class="panel-head"><h3>Linha do tempo do dia</h3><button class="link-btn" data-open-timeline="${e.id}">Abrir cronograma</button></div><div class="timeline-list">${tl.slice(0,5).map(x=>`<div><b>${x.time}</b><span>${x.title}</span><em>${x.owner}</em></div>`).join('')}</div></div><div class="panel"><div class="panel-head"><h3>Próximas ações</h3><button class="link-btn" data-open-checklist="${e.id}">Abrir checklist</button></div><div class="attention-list">${ck.filter(x=>!x.done).slice(0,4).map(x=>`<div class="list-row"><span class="status-dot ${x.critical?'danger':'warn'}"></span><div><b>${x.title}</b><small>${x.group} • ${x.owner}</small></div><strong>${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')}</strong></div>`).join('')}</div></div></section>`}

function clientsView(){const list=getClients();return `<div class="section-title"><div><span class="eyebrow">CRM DE CLIENTES</span><h3>Clientes & contratantes</h3><p>Cadastre pessoas, casais e empresas com histórico, eventos, documentos e contatos centralizados.</p></div><button class="btn btn-primary" data-create="client">＋ Novo cliente</button></div><section class="metrics"><article class="metric-card"><small>Clientes ativos</small><strong>${list.length}</strong><span class="metric-meta">Base única para contratos e eventos</span>${spark([24,32,44,58,68,78])}</article><article class="metric-card"><small>Eventos vinculados</small><strong>${list.reduce((a,x)=>a+Number(x.events||0),0)}</strong><span class="metric-meta">Relacionamento por projeto</span>${spark([18,26,38,50,62,72],true)}</article><article class="metric-card"><small>Perfis PF</small><strong>${list.filter(x=>x.type!=='Empresa').length}</strong><span class="metric-meta">Casais, famílias e pessoas</span>${spark()}</article><article class="metric-card"><small>Perfis PJ</small><strong>${list.filter(x=>x.type==='Empresa').length}</strong><span class="metric-meta">Corporativos e parceiros</span>${spark([30,36,42,52,58,66],true)}</article></section><div class="toolbar"><input id="clientsSearch" class="search-input" placeholder="Buscar cliente, telefone, e-mail..."><button class="filter-chip active" data-client-filter="Todos">Todos</button><button class="filter-chip" data-client-filter="Pessoa física">Pessoa física</button><button class="filter-chip" data-client-filter="Empresa">Empresa</button><span id="clientsCounter" class="toolbar-counter">${list.length} clientes</span></div><div class="client-crm-grid" id="clientsGrid">${list.map(c=>`<article class="crm-card" data-client-card data-client-type="${c.type}" data-client-search="${`${c.name} ${c.secondary||''} ${c.phone||''} ${c.email||''} ${c.city||''} ${c.state||''}`.toLowerCase()}"><div class="crm-avatar">${c.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div class="crm-main"><span class="eyebrow">${c.type}</span><h4>${c.name}${c.secondary?` & ${c.secondary}`:''}</h4><p>${c.phone} • ${c.email}</p><div class="crm-meta"><span>${c.city}${c.state?` • ${c.state}`:''}</span><span>${c.events} evento(s)</span>${c.createdAt?`<span>Desde: ${finBR(c.createdAt)}</span>`:''}<span class="pill info">${c.status}</span></div><small>${c.notes||''}</small></div><div class="crm-actions"><button class="small-btn" data-open-client-history="${c.id}">Abrir histórico</button><button class="small-btn" data-edit="client::${c.id}">✏️ Editar</button><button class="small-btn" data-create="event">Novo evento</button></div></article>`).join('')}</div><div id="clientsEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum cliente encontrado.</b><small>Tente outro termo ou cadastre um novo cliente.</small></div>`}

function suppliersView(){const list=getSuppliers();const cats=[...new Set(list.map(x=>x.category))];return `<div class="section-title"><div><span class="eyebrow">REDE DE FORNECEDORES</span><h3>Parceiros que executam o projeto</h3><p>Contato, categoria, preço, avaliação, contratos e histórico de uso em eventos.</p></div><div class="event-head-actions"><button class="copper-btn" data-print="suppliers">Gerar lista PDF</button><button class="btn btn-primary" data-create="supplier">＋ Novo fornecedor</button></div></div><section class="metrics"><article class="metric-card"><small>Fornecedores</small><strong>${list.length}</strong><span class="metric-meta">Base reutilizável</span>${spark()}</article><article class="metric-card"><small>Homologados</small><strong>${list.filter(x=>x.status==='Homologado'||x.status==='Preferencial').length}</strong><span class="metric-meta">Prontos para contratação</span>${spark([28,38,48,58,68,80],true)}</article><article class="metric-card"><small>Categorias</small><strong>${cats.length}</strong><span class="metric-meta">Cobertura operacional</span>${spark([22,32,40,52,62,74])}</article><article class="metric-card"><small>Avaliação média</small><strong>${(list.reduce((a,x)=>a+Number(x.rating||0),0)/Math.max(1,list.length)).toFixed(1)}</strong><span class="metric-meta">Histórico demonstrativo</span>${spark([60,68,72,80,86,92],true)}</article></section><div class="toolbar"><input id="suppliersSearch" class="search-input" placeholder="Buscar fornecedor, serviço ou contato..."><button class="filter-chip active" data-supplier-filter="Todos">Todos</button>${cats.map(x=>`<button class="filter-chip" data-supplier-filter="${x}">${x}</button>`).join('')}<span id="suppliersCounter" class="toolbar-counter">${list.length} fornecedores</span></div><div class="supplier-grid" id="suppliersGrid">${list.map(s=>`<article class="supplier-card" data-supplier-card data-supplier-category="${s.category}" data-supplier-search="${`${s.name} ${s.category} ${s.contact||''} ${s.phone||''} ${s.email||''}`.toLowerCase()}"><div class="supplier-head"><div class="supplier-icon">${s.category==='Buffet'?'🍽️':s.category.includes('DJ')?'🎧':s.category==='Decoração'?'🌿':s.category.includes('Foto')?'📷':s.category.includes('Bar')?'🍸':'⚙️'}</div><div><span class="eyebrow">${s.category}</span><h4>${s.name}</h4></div><span class="pill ${s.status==='Em avaliação'?'warn':'info'}">${s.status}</span></div><p>${s.notes}</p><div class="supplier-facts"><div><small>Contato</small><b>${s.contact}</b><span>${s.phone}</span></div>${s.createdAt?`<div><small>Desde</small><b>${finBR(s.createdAt)}</b></div>`:''}<div><small>Referência</small><b>${s.price}</b><span>${s.events} eventos</span></div><div><small>Avaliação</small><b>★ ${s.rating}</b><span>${s.email}</span></div></div><div class="project-actions"><button class="small-btn" data-whatsapp="${s.phone}" data-name="${s.name}">WhatsApp</button><button class="small-btn" data-edit="supplier::${s.id}">✏️ Editar</button><button class="small-btn" data-create="contract">Contrato</button></div></article>`).join('')}</div><div id="suppliersEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum fornecedor encontrado.</b><small>Ajuste a busca ou o filtro selecionado.</small></div>`}


function checklistView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],rows=getChecklist(e.id),done=rows.filter(x=>x.done).length,pct=rows.length?Math.round(done/rows.length*100):0;const groups=[...new Set(rows.map(x=>x.group))];
 const critItems=rows.filter(x=>x.critical&&!x.done),openItems=rows.filter(x=>!x.done),doneItems=rows.filter(x=>x.done);
 const preview=list=>list.length?finEsc(list.slice(0,2).map(x=>x.title).join(', '))+(list.length>2?` +${list.length-2}`:''):'Nenhum';
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">CHECKLIST REAL</span><h3>${e.title}</h3><p>Itens obrigatórios, responsáveis, prazos e criticidade.</p></div><div class="event-head-actions"><button class="small-btn" data-share-checklist="${e.id}">📲 WhatsApp</button><button class="copper-btn" data-print="checklist" data-id="${e.id}">Checklist PDF</button><button class="btn btn-primary" data-create="checklist" data-event-id="${e.id}">＋ Novo item</button></div></div><section class="hero-grid compact"><div class="hero-card"><span class="eyebrow">PROGRESSO OPERACIONAL</span><h3>${pct}% concluído</h3><div class="progress"><i style="width:${pct}%"></i></div><p>${done} de ${rows.length} itens concluídos. ${critItems.length} itens críticos ainda abertos.</p></div><div class="panel"><div class="summary-list"><div><small>Críticos</small><b>${critItems.length}</b><span class="metric-meta" style="display:block;margin-top:4px">${preview(critItems)}</span></div><div><small>Em aberto</small><b>${openItems.length}</b><span class="metric-meta" style="display:block;margin-top:4px">${preview(openItems)}</span></div><div><small>Concluídos</small><b>${done}</b><span class="metric-meta" style="display:block;margin-top:4px">${preview(doneItems)}</span></div></div></div></section><div class="checklist-board">${groups.map(g=>`<section class="check-group"><div class="panel-head"><h3>${g}</h3><span class="pill">${rows.filter(x=>x.group===g).length}</span></div>${rows.filter(x=>x.group===g).map(x=>`<div style="display:flex;align-items:center;gap:8px"><label class="check-row ${x.done?'done':''}" style="flex:1"><input type="checkbox" data-checklist-toggle="${x.id}" ${x.done?'checked':''}><span class="custom-check"></span><div><b>${x.title}</b><small>${x.owner} • prazo ${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')}</small></div>${x.critical?'<span class="pill warn">Crítico</span>':''}</label><button class="small-btn" data-edit="checklist::${x.id}">✏️</button></div>`).join('')}</section>`).join('')}</div>`}

function timelineView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],rows=getTimeline(e.id).sort((a,b)=>a.time.localeCompare(b.time));return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">CRONOGRAMA DO DIA</span><h3>${e.title}</h3><p>Horários, responsáveis, locais e confirmação de cada marco operacional.</p></div><div class="event-head-actions"><button class="small-btn" data-share-timeline="${e.id}">📲 WhatsApp</button><button class="copper-btn" data-print="timeline" data-id="${e.id}">Cronograma PDF</button><button class="btn btn-primary" data-create="timeline" data-event-id="${e.id}">＋ Novo marco</button></div></div><section class="timeline-command"><div class="timeline-summary"><div><small>Primeiro acesso</small><b>${rows[0]?.time||'—'}</b></div><div><small>Abertura</small><b>${rows.find(x=>x.title.toLowerCase().includes('recep'))?.time||'—'}</b></div><div><small>Marcos</small><b>${rows.length}</b></div><div><small>Confirmados</small><b>${rows.filter(x=>x.status==='Confirmado').length}</b></div></div><div class="day-timeline">${rows.map(x=>`<article class="day-item ${x.status==='Confirmado'?'confirmed':''}"><div class="time-badge">${x.time}</div><div class="day-line"></div><div class="day-content"><div><span class="eyebrow">${x.location}</span><h4>${x.title}</h4><p>Responsável: ${x.owner}</p></div><button class="timeline-status" data-timeline-toggle="${x.id}">${x.status==='Confirmado'?'✓ Confirmado':'Confirmar'}</button><button class="small-btn" data-edit="timeline::${x.id}">✏️</button></div></article>`).join('')}</div></section>`}

function catalogView(){const list=getCatalog(),events=getEvents();const cats=[...new Set(list.map(x=>x.category))];return `<div class="section-title"><div><span class="eyebrow">CATÁLOGO COMERCIAL</span><h3>Opções que viram proposta e operação</h3><p>Agora os filtros são executáveis: escolha uma categoria, abra o detalhe e vincule a opção ao evento.</p></div><button class="btn btn-primary" data-create="catalog"><span data-icon="plus-circle"></span> Novo item</button></div><section class="hero-grid compact"><div class="hero-card"><span class="eyebrow">VENDA + EXECUÇÃO</span><h3>Um catálogo que alimenta <span class="accent-text">apresentação, orçamento e produção.</span></h3><p>Clique em uma categoria para filtrar. Abra o item para ver detalhes, selecionar o evento e registrar a escolha.</p></div><div class="panel"><div class="summary-list"><div><small>Itens</small><b>${list.length}</b></div><div><small>Categorias</small><b>${cats.length}</b></div><div><small>Fornecedores vinculados</small><b>${new Set(list.map(x=>x.supplier)).size}</b></div></div></div></section><div class="toolbar catalog-toolbar"><button class="filter-chip active" data-catalog-filter="Todos">Todos</button>${cats.map(c=>`<button class="filter-chip" data-catalog-filter="${c}">${c}</button>`).join('')}<span id="catalogFilterCount" class="toolbar-counter">${list.length} itens</span></div><div class="catalog-grid" id="catalogGrid">${list.map(item=>`<article class="catalog-card" data-catalog-category="${item.category}" data-catalog-id="${item.id}"><button class="catalog-visual ${item.image?'has-image':''}" data-catalog-open="${item.id}" ${item.image?`style="background-image:url('${item.image}')"`:''}><span>${item.category}</span><i data-icon="arrow-up-right"></i></button><div class="catalog-body"><span class="eyebrow">${item.supplier}</span><h4>${item.name}</h4><p>${item.description}</p><div class="catalog-tags">${(item.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div><div class="catalog-price"><strong>${money(item.price)}</strong><small>${item.unit}</small></div><div class="catalog-actions"><button class="small-btn" data-catalog-open="${item.id}"><span data-icon="eye"></span> Detalhes</button><button class="small-btn" data-edit="catalog::${item.id}">✏️ Editar</button><select class="catalog-event-select" data-catalog-event="${item.id}">${events.map(e=>`<option value="${e.id}">${e.title}</option>`).join('')}</select><button class="btn btn-primary" data-add-catalog="${item.id}"><span data-icon="plus-circle"></span> Adicionar ao projeto</button></div></div></article>`).join('')}</div><div id="catalogEmpty" class="empty-state hidden"><span data-icon="search"></span><b>Nenhum item nesta categoria.</b><small>Cadastre uma nova opção ou escolha outro filtro.</small></div>`}

function presentationsView(){const list=getPresentations();return `<div class="section-title"><div><span class="eyebrow">APRESENTAÇÕES & PROPOSTAS VISUAIS</span><h3>Apresente o projeto antes de executar</h3><p>Conceito, cardápio, decoração, DJ, imagens, PDFs, investimento e próximos passos.</p></div><button class="btn btn-primary" data-create="presentation">＋ Nova apresentação</button></div><section class="hero-grid"><div class="hero-card"><span class="eyebrow">PROJETO VISUAL</span><h3>Transforme briefing em uma <span style="color:var(--copper2)">apresentação que vende.</span></h3><p>Use o catálogo comercial, fotos, referências e PDFs para montar cenários completos.</p><div class="hero-actions"><button class="copper-btn" data-nav="catalogo">Abrir catálogo</button><button class="copper-btn" data-profile>Personalizar marca</button></div></div><div class="panel summary-card"><div class="summary-list"><div><small>1</small><b>Capa & conceito</b></div><div><small>2–6</small><b>Decoração • Menu • Música • Foto • Experiência</b></div><div><small>7–8</small><b>Investimento & próximos passos</b></div></div></div></section><div class="presentation-grid">${list.map(p=>`<article class="presentation-card"><div class="presentation-cover"><span>${p.theme}</span><strong>${p.title}</strong><small>${p.client}</small></div><div class="presentation-info"><div><small>Evento</small><b>${p.event}</b></div><div class="presentation-meta"><span>${p.sections} seções</span><span>${p.assets} arquivos</span><span class="pill">${p.status}</span></div><div class="project-actions"><button class="small-btn" data-open-presentation="${p.id}">Editar / apresentar</button><button class="small-btn" data-edit="presentation::${p.id}">✏️ Dados básicos</button><button class="small-btn" data-print="presentation" data-id="${p.id}">PDF</button></div></div></article>`).join('')}</div>`}
function presentationBuilderView(id){const p=getPresentations().find(x=>x.id===id)||getPresentations()[0];return `<button class="link-btn" data-back>← Voltar</button><div class="section-title"><div><span class="eyebrow">EDITOR DE APRESENTAÇÃO</span><h3>${p.title}</h3><p>${p.event} • ${p.client}</p></div><div class="event-head-actions"><button class="copper-btn" data-nav="catalogo">Catálogo comercial</button><button class="copper-btn" data-print="presentation" data-id="${p.id}">Gerar PDF</button><button class="btn btn-primary" id="presentModeBtn">Modo apresentação</button></div></div><section class="presentation-editor"><aside class="presentation-sections"><h4>Seções</h4>${['Capa','Conceito & moodboard','Cardápio','Decoração','DJ & experiência sonora','Foto & vídeo','Investimento','Próximos passos'].map((x,i)=>`<button class="${i===0?'active':''}"><span>${String(i+1).padStart(2,'0')}</span>${x}</button>`).join('')}</aside><div class="presentation-canvas"><div class="deck-slide"><span class="eyebrow">PROJETO DE EXPERIÊNCIA</span><h2>${p.title}</h2><p>${p.theme}</p><div class="mood-grid" id="assetGallery"><div class="mood-placeholder">Adicionar imagem</div><div class="mood-placeholder">Adicionar referência</div><div class="mood-placeholder">Adicionar PDF</div></div><div class="deck-footer"><span>${p.client}</span><b>Projeto personalizado</b></div></div></div><aside class="presentation-tools"><h4>Conteúdo</h4><label class="upload-zone" for="assetUpload"><input id="assetUpload" type="file" accept="image/*,application/pdf" multiple><b>＋ Adicionar arquivos</b><span>Imagens e PDFs</span></label><button class="tool-row" data-nav="catalogo">▣ <span>Catálogo comercial</span></button><button class="tool-row">🎨 <span>Estilo visual</span></button><button class="tool-row">🍽️ <span>Cardápio</span></button><button class="tool-row">🎧 <span>DJ / música</span></button><button class="tool-row">🌿 <span>Decoração</span></button><button class="tool-row">💰 <span>Investimento</span></button><small class="tool-note">No protótipo, os arquivos ficam na sessão atual. Na versão com backend, irão para storage privado.</small></aside></section>`}

function guestsView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],rows=getGuests(e.id).slice().sort((a,b)=>a.name.localeCompare(b.name));
 const conf=rows.filter(x=>x.status==='Confirmado').length,pend=rows.filter(x=>x.status==='Pendente').length,rec=rows.filter(x=>x.status==='Recusado').length;
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">LISTA DE CONVIDADOS</span><h3>${e.title}</h3><p>Confirmação de presença, telefone e mesa de cada convidado.</p></div><div class="event-head-actions"><button class="small-btn" data-share-guests="${e.id}">📲 WhatsApp</button><button class="btn btn-primary" data-create="guest" data-event-id="${e.id}">＋ Novo convidado</button></div></div><section class="metrics"><article class="metric-card"><small>Confirmados</small><strong>${conf}</strong><span class="metric-meta">de ${rows.length} na lista • ${e.guests||0} previstos</span>${spark([20,30,42,54,66,78])}</article><article class="metric-card"><small>Pendentes</small><strong>${pend}</strong><span class="metric-meta">aguardando resposta</span>${spark([44,38,34,30,26,22],true)}</article><article class="metric-card"><small>Recusados</small><strong>${rec}</strong><span class="metric-meta">não comparecerão</span>${spark([12,12,12,12,12,12])}</article></section><div class="panel"><div class="panel-head"><h3>Adicionar vários de uma vez</h3></div><p style="color:#6c7887;margin:0 0 10px">Cole uma lista de nomes, um por linha — todos entram como "Pendente".</p><textarea id="guestBulkInput" rows="3" placeholder="Ex.:
Maria Silva
João Pereira" style="width:100%;resize:vertical"></textarea><button class="btn btn-secondary" id="guestBulkAdd" data-event-id="${e.id}" style="margin-top:8px">＋ Adicionar à lista</button></div><input type="text" id="guestSearch" placeholder="Buscar convidado por nome ou telefone..." style="margin:16px 0 10px;width:100%"/><div class="guest-list">${rows.length?rows.map(g=>`<article class="guest-row" data-guest-row data-guest-search="${`${g.name} ${g.phone||''}`.toLowerCase()}"><div class="guest-main"><b>${g.name}</b><small>${g.phone||'sem telefone'}${g.table?' • '+g.table:''}</small></div><div class="guest-status-group"><button class="guest-status-btn ${g.status==='Confirmado'?'active confirmado':''}" data-guest-set="${g.id}" data-status="Confirmado" title="Confirmado">✓</button><button class="guest-status-btn ${g.status==='Pendente'?'active pendente':''}" data-guest-set="${g.id}" data-status="Pendente" title="Pendente">?</button><button class="guest-status-btn ${g.status==='Recusado'?'active recusado':''}" data-guest-set="${g.id}" data-status="Recusado" title="Recusado">✕</button></div><button class="small-btn" data-edit="guest::${g.id}">✏️</button></article>`).join(''):'<p style="color:#6c7887">Nenhum convidado cadastrado ainda. Cole uma lista acima ou use "Novo convidado".</p>'}</div>`}
const getEventTables=eventId=>readJSON(`r1_event_tables_${eventId}`,[]);
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
 supplierCategorySelect:{get:getSupplierCategories,save:saveSupplierCategories,isObj:false},
 catalogCategorySelect:{get:getCatalogCategories,save:saveCatalogCategories,isObj:false},
 appointmentTypeSelect:{get:getAppointmentTypes,save:saveAppointmentTypes,isObj:false}
};
function seatingView(eventId){const e=getEvents().find(x=>x.id===eventId)||getEvents()[0],guests=getGuests(e.id);
 const tables=[...new Set([...getEventTables(e.id),...guests.map(g=>g.table).filter(Boolean)])].sort();
 const semMesa=guests.filter(g=>!g.table);
 const chip=g=>`<div class="seat-chip" draggable="true" data-guest-id="${g.id}"><span>${g.name}</span><select data-seat-select="${g.id}"><option value="">Sem mesa</option>${tables.map(t=>`<option value="${t}" ${g.table===t?'selected':''}>${t}</option>`).join('')}</select></div>`;
 return `<button class="link-btn" data-back>← Voltar ao evento</button><div class="section-title"><div><span class="eyebrow">MAPA DE MESAS</span><h3>${e.title}</h3><p>Arraste um convidado para uma mesa, ou use o menu de cada card.</p></div></div><div class="panel" style="margin-bottom:14px;display:flex;gap:8px;flex-wrap:wrap;align-items:center"><input type="text" id="seatNewTableName" placeholder="Nome da nova mesa (ex.: Mesa 7)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="seatAddTable" data-seating-event="${e.id}" style="width:auto">＋ Adicionar mesa</button></div><div class="seating-board" data-seating-event="${e.id}"><div class="seating-table seating-pool" data-table-zone=""><h4>Sem mesa <span>${semMesa.length}</span></h4><div class="seating-chips">${semMesa.map(chip).join('')||'<p class="seating-empty">Nenhum convidado sem mesa.</p>'}</div></div>${tables.map(t=>`<div class="seating-table" data-table-zone="${t}"><h4>${t} <span>${guests.filter(g=>g.table===t).length}</span></h4><div class="seating-chips">${guests.filter(g=>g.table===t).map(chip).join('')||'<p class="seating-empty">Arraste alguém aqui.</p>'}</div></div>`).join('')}</div>`}
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
  {keepDialog:true,target:'#dynamicForm [name="notes"]',title:'Guarde o histórico',text:'Registre condições comerciais, pontos fortes, restrições e observações de operação.',tip:'Isso evita depender apenas da memória da equipe.'}
 ]},
 event:{title:'Criar um evento',group:'Eventos',workspace:'Eventos',icon:'calendar-heart',minutes:5,description:'Abra um evento e organize cliente, data, local, convidados, orçamento e responsável.',steps:[
  {workspace:'Eventos',nav:'eventos',target:'[data-create="event"]',title:'Crie um novo evento',text:'Todo projeto de casamento, debutante, aniversário ou corporativo começa aqui.',tip:'O evento vira o dossiê central da produção.'},
  {action:'form:event',target:'#formDialog',title:'Preencha as informações-base',text:'Defina nome, tipo, contratante, data, local, convidados, orçamento e responsável.',tip:'Esses dados alimentam o hub, PDFs e indicadores.'},
  {keepDialog:true,target:'#dynamicForm [name="date"]',title:'Defina a data',text:'A data é usada para contagem regressiva, cronograma e acompanhamento de prazo.',tip:'Confirme a data antes de começar a produção detalhada.'},
  {keepDialog:true,target:'#dynamicForm [name="budget"]',title:'Registre o orçamento previsto',text:'O orçamento ajuda a comparar contratação, despesas e evolução financeira.',tip:'Use o valor total previsto do projeto.'},
  {action:'eventHub',target:'[data-duplicate-event]',title:'Duplique um evento parecido',text:'Copia checklist e cronograma inteiros pro evento novo (tudo volta como pendente), com o formulário já aberto pra ajustar título e data.',tip:'Ótimo pra um segundo casamento com a mesma estrutura do primeiro.'},
  {action:'eventHub',target:'[data-share-event]',title:'Compartilhe pelo WhatsApp',text:'Gera um resumo do evento (data, progresso, checklist, financeiro pendente) e já abre o WhatsApp pronto pra enviar.',tip:'O mesmo botão existe no checklist, no cronograma e na lista de convidados.'},
  {action:'eventHub',target:'[data-open-portal]',title:'Gere o portal do cliente',text:'Baixa um arquivo .html independente com o resumo do evento, convidados e cronograma — pronto pra enviar ou hospedar onde preferir.',tip:'É um retrato daquele momento, não uma página que atualiza sozinha; gere de novo quando quiser compartilhar algo mais recente.'}
 ]},
 checklist:{title:'Checklist operacional',group:'Eventos',workspace:'Eventos',icon:'check-square',minutes:5,description:'Organize tudo que precisa ser concluído antes do evento e acompanhe responsáveis e prazos.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-checklist]',title:'Entre no hub do evento',text:'O hub reúne produção, financeiro, catálogo e execução. Abra Checklist para controlar pendências.',tip:'O tutorial usa o primeiro evento cadastrado como exemplo.'},
  {action:'checklist',target:'.check-group, .checklist-board',title:'Veja os itens por grupo',text:'Itens podem ser separados por cliente, produção, decoração, contratos e outros grupos.',tip:'Marque um item quando ele estiver realmente concluído.'},
  {target:'[data-create="checklist"]',title:'Adicione um novo item',text:'Use Novo item para registrar uma pendência com responsável, prazo e criticidade.',tip:'Marque como crítico somente o que realmente pode comprometer a execução.'},
  {action:'checklist',target:'[data-share-checklist]',title:'Envie os pendentes pelo WhatsApp',text:'Lista os itens em aberto (com ⚠️ nos críticos) num texto pronto pra enviar à equipe ou ao fornecedor.',tip:'Útil pra cobrar pendências sem precisar abrir o app na frente de ninguém.'}
 ]},
 timeline:{title:'Cronograma do dia',group:'Eventos',workspace:'Eventos',icon:'calendar',minutes:5,description:'Monte a sequência operacional do evento por horário, responsável, local e status.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-timeline]',title:'Abra o cronograma pelo evento',text:'O cronograma do dia organiza a operação em ordem temporal.',tip:'Use o mesmo hub do evento para acessar a execução.'},
  {action:'timeline',target:'.day-timeline',title:'Leia a linha do tempo',text:'Cada marco mostra horário, atividade, responsável, local e confirmação.',tip:'No dia do evento, esta tela pode evoluir para o Modo Execução.'},
  {target:'[data-create="timeline"]',title:'Crie um novo marco',text:'Adicione montagem, chegada de fornecedores, soundcheck, recepção, cerimônia e desmontagem.',tip:'Evite horários vagos em tarefas críticas.'},
  {action:'timeline',target:'[data-share-timeline]',title:'Envie a ordem do dia pelo WhatsApp',text:'Gera a lista de horários e atividades, pronta pra compartilhar com a equipe no dia do evento.',tip:'Mande na véspera pra todo mundo saber o próprio horário.'}
 ]},
 guests:{title:'Lista de convidados',group:'Eventos',workspace:'Eventos',icon:'users',minutes:5,description:'Controle confirmação de presença, telefone e mesa de cada convidado.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-guests]',title:'Abra a lista pelo hub do evento',text:'A lista de convidados fica junto com checklist e cronograma, no hub de cada evento.',tip:'O número de "convidados" do evento é só a previsão — esta lista é o controle de verdade.'},
  {action:'guests',target:'#guestBulkInput, #guestBulkAdd',title:'Adicione vários de uma vez',text:'Cole uma lista de nomes, um por linha, e todos entram como "Pendente" — sem precisar cadastrar um por um.',tip:'Bom pra começar a lista a partir de uma planilha ou de uma lista que o cliente já tinha.'},
  {action:'guests',target:'.guest-status-group',title:'Confirme presença com um toque',text:'Os três botões (✓ ? ✕) trocam o status na hora, sem precisar abrir formulário.',tip:'Use a busca acima da lista quando o evento tiver muitos convidados.'},
  {action:'guests',target:'[data-share-guests]',title:'Compartilhe o resumo pelo WhatsApp',text:'Envia a contagem de confirmados, pendentes e recusados pro cliente ou pra equipe.',tip:'O mesmo contador aparece no resumo do hub do evento.'}
 ]},
 settings:{title:'Ajustes do app',group:'Administração',workspace:'Negócios',icon:'sliders',minutes:4,description:'Personalize mensagens de WhatsApp, prazos do sino de eventos e proteja seus dados com backup.',steps:[
  {target:'[data-open-ajustes]',title:'Abra os Ajustes',text:'Fica em qualquer workspace, ao lado do seu nome, no topo.',tip:'Reúne perfil, mensagens, acessibilidade, avisos, backup e segurança num só lugar.'},
  {target:'#ajTplEvent, #ajTplChecklist',title:'Personalize as mensagens de WhatsApp',text:'O texto que você escrever aqui entra na frente de todo resumo compartilhado — do evento, checklist, cronograma ou convidados.',tip:'Deixe em branco pra enviar só o resumo automático, sem introdução.'},
  {target:'#ajBellWarn, #ajBellUrgent',title:'Ajuste os prazos do sino de eventos',text:'Controla quando o sino aparece do lado da data (aviso simples) e quando ele pisca (evento próximo com pendência no checklist).',tip:'O padrão é avisar com 15 dias e piscar com 7 — mude se sua operação precisar de mais ou menos antecedência.'},
  {target:'#ajBackupBaixar',title:'Baixe um backup regularmente',text:'Os dados ficam só neste navegador. A tela avisa há quantos dias foi o último backup, pra você não esquecer.',tip:'Baixe antes de trocar de celular ou de navegador.'},
  {target:'#ajPermissoes',title:'Veja o que o app realmente acessa',text:'Câmera/galeria só quando você escolhe uma foto, e os avisos são só dentro do app — nada de permissão de notificação do celular.',tip:'Bom pra responder rápido quando alguém perguntar "esse app acessa o quê?".'},
  {target:'[data-ev-type-toggle]',title:'Escolha quais tipos de evento aparecem no filtro',text:'Esconder um tipo não apaga os eventos que já usam ele — só tira aquele botão de filtro da tela de Eventos.',tip:'Dá pra adicionar tipos novos (ex.: Chá de bebê) logo abaixo da lista.'},
  {target:'#ajNewSupplierCategory, #ajAddSupplierCategory',title:'Adicione categorias de fornecedor permanentes',text:'Uma vez cadastrada (ex.: Florista), a categoria fica disponível pra sempre ao cadastrar fornecedores — sem precisar usar "Outro" de novo a cada vez.',tip:'A tela de Fornecedores mostra o filtro automaticamente assim que existir pelo menos um fornecedor com aquela categoria.'},
  {target:'#ajNewCatalogCategory, #ajAddCatalogCategory',title:'Categorias de catálogo permanentes',text:'Mesma lógica: cadastre uma categoria nova (ex.: Doces finos) e ela fica disponível pra sempre ao cadastrar itens do catálogo.',tip:'Também funciona digitando em "Outro" na hora de cadastrar o item — o app registra sozinho pra próxima vez.'},
  {target:'#ajNewAppointmentType, #ajAddAppointmentType',title:'Tipos de compromisso permanentes',text:'E o mesmo vale pros tipos de compromisso da agenda — cadastre um tipo novo (ex.: Reunião de equipe) e ele fica disponível pra sempre.',tip:'Em qualquer um dos três (tipo de evento, categoria de fornecedor, categoria de catálogo ou tipo de compromisso), digitar em "Outro" já cadastra automaticamente — essa tela é só pra quem prefere cadastrar antes, com calma.'}
 ]},
 seating:{title:'Mapa de mesas',group:'Eventos',workspace:'Eventos',icon:'layout-grid',minutes:4,description:'Organize qual convidado senta em qual mesa, arrastando ou pelo menu de cada card.',steps:[
  {workspace:'Eventos',nav:'eventos',action:'eventHub',target:'[data-open-seating]',title:'Abra o mapa pelo hub do evento',text:'O mapa de mesas usa a mesma lista de convidados — cadastre os convidados primeiro.',tip:'Convidados sem mesa aparecem na coluna "Sem mesa".'},
  {action:'seating',target:'.seat-chip',title:'Arraste ou use o menu',text:'Em computador, arraste o card do convidado até a mesa. No celular, use o menu suspenso dentro do próprio card.',tip:'As duas formas fazem exatamente a mesma coisa — use a que for mais prática na hora.'},
  {action:'seating',target:'#seatAddTable',title:'Crie mesas vazias antecipadamente',text:'Dá pra criar "Mesa 7", por exemplo, antes mesmo de decidir quem senta nela.',tip:'Assim você já deixa a numeração pronta pra organizar depois com calma.'}
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
  {action:'form:finance',target:'#formDialog',title:'Crie um lançamento',text:'Escolha evento, data, tipo, categoria, descrição, parte envolvida, valor e status.',tip:'Vincule corretamente o evento para ter relatórios úteis.'},
  {keepDialog:true,target:'#dynamicForm [name="type"]',title:'Receita ou despesa',text:'Receita representa valor recebido/previsto do cliente. Despesa representa custos e fornecedores.',tip:'Use categorias consistentes para facilitar análise.'},
  {keepDialog:true,target:'#dynamicForm [name="status"]',title:'Controle o status',text:'Pendente e Pago ajudam a separar previsão de caixa e valores já baixados.',tip:'A tela permite marcar pagamentos posteriormente.'}
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
 security:{title:'Segurança e privacidade',group:'Administração',workspace:'Negócios',icon:'shield',minutes:4,description:'Entenda o que é protótipo local e o que será protegido na versão comercial.',steps:[
  {workspace:'Negócios',nav:'seguranca',target:'.security-grid',title:'Arquitetura de segurança',text:'A tela resume MFA, isolamento multi-tenant, criptografia e arquivos privados.',tip:'O preview local não deve receber dados pessoais reais ou confidenciais.'},
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
const storage={
 getItem(key){
  if(key in memoryStore)return memoryStore[key];
  try{return globalThis.localStorage?.getItem(key)??null}catch{return null}
 },
 setItem(key,value){
  const normalized=String(value);
  memoryStore[key]=normalized;
  if(_cryptoKey&&key!==R1_AUTH_KEY&&key.indexOf('r1_')===0){
   encryptForStorage(_cryptoKey,normalized).then(enc=>{try{globalThis.localStorage?.setItem(key,enc)}catch{}}).catch(()=>{});
  }else{
   try{globalThis.localStorage?.setItem(key,normalized)}catch{}
  }
  return normalized;
 },
 removeItem(key){try{globalThis.localStorage?.removeItem(key)}catch{}delete memoryStore[key]}
};
// Descriptografa tudo que estiver cifrado em localStorage pra memoryStore (chamado 1x ao desbloquear).
// Dados ainda em texto puro (de antes da senha existir) continuam legíveis normalmente.
async function unlockAllData(key){
 let names=[];try{names=Object.keys(globalThis.localStorage||{})}catch(e){names=[]}
 const alvo=names.filter(k=>k.indexOf('r1_')===0&&k!==R1_AUTH_KEY);
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
 const alvo=names.filter(k=>k.indexOf('r1_')===0&&k!==R1_AUTH_KEY);
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
 const alvo=names.filter(k=>k.indexOf('r1_')===0&&k!==R1_AUTH_KEY);
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
 const chaves=[...alvo].filter(k=>k.indexOf('r1_')===0&&k!==R1_AUTH_KEY);
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
 [...alvo].filter(k=>k.startsWith('r1_')).forEach(k=>storage.removeItem(k));
 try{globalThis.sessionStorage?.removeItem('r1_unlocked')}catch(e){}
 location.reload();
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
 current=id;currentMainNav=id;navStack=[];currentDescriptor={kind:'nav',id};renderNav();const item=id==='tutorial'?['','','Tutorial','CENTRAL DE APRENDIZADO']:(nav.find(x=>x[0]===id)||['','','Visão geral','ECOSSISTEMA']);
 $('#pageTitle').textContent=item[2]==='Início'?'Visão geral':item[2];$('#sectionEyebrow').textContent=item[3];
 $('#content').innerHTML=id==='dashboard'?dashboardView(currentWorkspace):id==='mais'?moreView(currentWorkspace):id==='tutorial'?tutorialCenterView():(views[id]||(()=>dashboardView(currentWorkspace)))();
 if(id==='dashboard')$('#content').insertAdjacentHTML('beforeend',finDashBlock());
 bindContent();hydrateIcons($('#content'));window.scrollTo({top:0,behavior:'instant'});
}
function drawSubView(title,eyebrow,htmlOrFn,parent){
 const html=typeof htmlOrFn==='function'?htmlOrFn():htmlOrFn;
 current=parent;renderNav();$('#pageTitle').textContent=title;$('#sectionEyebrow').textContent=eyebrow;$('#content').innerHTML=html;
 currentDescriptor={kind:'sub',parent,rebuild:typeof htmlOrFn==='function'?()=>drawSubView(title,eyebrow,htmlOrFn,parent):null};
 bindContent();hydrateIcons($('#content'));window.scrollTo({top:0,behavior:'instant'});
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

function bindContent(){
 if(document.getElementById('ajZoomMenos'))ajWire();
 $$('[data-nav]').forEach(b=>b.onclick=()=>render(b.dataset.nav));
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
 }
 $$('[data-duplicate-event]').forEach(b=>b.onclick=()=>duplicateEvent(b.dataset.duplicateEvent));
 $$('[data-share-event]').forEach(b=>b.onclick=()=>shareEventWhatsApp(b.dataset.shareEvent));
 $$('[data-share-guests]').forEach(b=>b.onclick=()=>shareGuestsWhatsApp(b.dataset.shareGuests));
 $$('[data-share-checklist]').forEach(b=>b.onclick=()=>shareChecklistWhatsApp(b.dataset.shareChecklist));
 $$('[data-share-timeline]').forEach(b=>b.onclick=()=>shareTimelineWhatsApp(b.dataset.shareTimeline));
 const guestBulkAdd=$('#guestBulkAdd');
 if(guestBulkAdd)guestBulkAdd.onclick=()=>{
  const ta=$('#guestBulkInput'),names=ta.value.split('\n').map(x=>x.trim()).filter(Boolean);
  if(!names.length){toast('Cole ao menos um nome.');return}
  names.forEach((name,i)=>saveExtra('r1_extra_guests',{id:`guest-${Date.now()}-${i}`,eventId:guestBulkAdd.dataset.eventId,name,status:'Pendente',phone:'',table:''}));
  toast(`${names.length} convidado(s) adicionado(s).`);
  openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(guestBulkAdd.dataset.eventId),'eventos');
 };
 $$('[data-guest-set]').forEach(b=>b.onclick=()=>{const g=getGuests().find(x=>x.id===b.dataset.guestSet);if(!g)return;updateRecord('guest',{id:g.id,status:b.dataset.status});openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(g.eventId),'eventos')});
 const guestSearch=$('#guestSearch');
 if(guestSearch)guestSearch.oninput=()=>{const term=guestSearch.value.trim().toLowerCase();$$('[data-guest-row]').forEach(r=>r.style.display=r.dataset.guestSearch.includes(term)?'':'none')};
 $$('[data-open-presentation]').forEach(b=>b.onclick=()=>openSubView('Editor de apresentação','PROJETOS VISUAIS',()=>presentationBuilderView(b.dataset.openPresentation),'apresentacoes'));
 $$('[data-open-contract]').forEach(b=>b.onclick=()=>openSubView('Contrato','DOCUMENTOS',()=>contractDetailView(b.dataset.openContract),'contratos'));
 $$('[data-create]').forEach(b=>b.onclick=()=>openForm(b.dataset.create,b.dataset.eventId||''));
 $$('[data-edit]').forEach(b=>b.onclick=()=>{const [type,id]=String(b.dataset.edit).split('::');if(type==='finance'||type==='personalFinance')return finOpenForm({id});const getters={project:getProjects,event:getEvents,client:getClients,supplier:getSuppliers,catalog:getCatalog,contract:getContracts,presentation:getPresentations,finance:getFinance,checklist:()=>getChecklist(),timeline:()=>getTimeline(),personalGoal:getPersonalGoals,routine:getRoutine,appointment:getAppointments,personalFinance:getPersonalFinance,personalDoc:getPersonalDocs,validation:getValidations,decision:getDecisions,goal:getStrategicGoals,projectAgenda:()=>getProjectAgenda(),idea:()=>getIdeasBoardList()};const getter=getters[type];const record=getter?getter().find(x=>x.id===id):null;if(record)openForm(type,record.eventId||record.projectId||'',record);else toast('Não foi possível localizar este registro para edição.')});
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
 else if(action==='checklist'){const e=getEvents()[0];if(e)openSubView('Checklist do evento','EXECUÇÃO RIGOROSA',()=>checklistView(e.id),'eventos')}
 else if(action==='timeline'){const e=getEvents()[0];if(e)openSubView('Cronograma do dia','EXECUÇÃO DO EVENTO',()=>timelineView(e.id),'eventos')}
 else if(action==='guests'){const e=getEvents()[0];if(e)openSubView('Lista de convidados','EVENTOS & EXPERIÊNCIAS',()=>guestsView(e.id),'eventos')}
 else if(action==='seating'){const e=getEvents()[0];if(e)openSubView('Mapa de mesas','EVENTOS & EXPERIÊNCIAS',()=>seatingView(e.id),'eventos')}
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
 if(hasPassword()&&!sessionUnlocked()){$('#lockView').classList.remove('hidden');setTimeout(()=>$('#lockPass')?.focus(),200);return}
 proceedIntoApp();
}
function proceedIntoApp(){
 $('#loginView').classList.add('hidden');$('#lockView').classList.add('hidden');
 $('#appView').classList.remove('hidden');applyWorkspace(currentWorkspace);render('dashboard');updateAlertCenter();
 if(!storage.getItem('r1_tutorial_welcome_seen'))setTimeout(()=>{const d=$('#tutorialWelcomeDialog');if(d&&!d.open){d.showModal();hydrateIcons(d)}},450);
}
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();showApp()});
$('#demoLogin').onclick=showApp;
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
  'Eventos':[['event','calendar-heart','Evento'],['client','users','Cliente'],['supplier','briefcase','Fornecedor'],['finance','wallet','Lançamento'],['catalog','book-open','Item catálogo'],['contract','file-signature','Contrato'],['presentation','presentation','Apresentação'],['checklist','check-square','Checklist'],['timeline','calendar','Cronograma']],
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
 event:{title:'Novo evento',store:'r1_extra_events',fields:[['title','Nome do evento','text','Ex.: 15 Anos • Laura'],['type','Tipo','eventTypeSelect','Casamento|Debutante|Corporativo|Aniversário|Formatura|Outro'],['client','Contratante','clientpicker',''],['date','Data do evento','date',''],['venue','Local','text',''],['guests','Convidados','number',''],['budget','Orçamento previsto','money',''],['manager','Responsável interno','text','']]},
 client:{title:'Novo cliente / contratante',store:'r1_extra_clients',fields:[['name','Nome principal','text',''],['secondary','Segundo contratante / empresa','text',''],['type','Tipo','select','Pessoa física|Casal|Empresa'],['document','CPF / CNPJ','cpfcnpj',''],['phone','WhatsApp','phone',''],['phone2','Telefone','phone',''],['city','Cidade','text',''],['state','Estado','select','|AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO'],['email','E-mail','email',''],['createdAt','Cliente desde','date',''],['notes','Observações','textarea','Preferências, aprovações e informações úteis...']]},
 supplier:{title:'Novo fornecedor',store:'r1_extra_suppliers',fields:[['name','Nome do fornecedor','text',''],['category','Categoria','supplierCategorySelect','Buffet|DJ & Música|Decoração|Foto & Vídeo|Som & Luz|Bar & Bebidas|Espaço|Segurança|Outro'],['createdAt','Fornecedor desde','date',''],['contact','Contato responsável','text',''],['phone','WhatsApp','text',''],['email','E-mail','email',''],['price','Referência de preço','text',''],['status','Status','select','Homologado|Preferencial|Em avaliação|Bloqueado'],['notes','Observações','textarea','Histórico, condições e pontos de atenção...']]},
 finance:{title:'Novo lançamento financeiro',store:'r1_extra_finance',fields:[['eventId','Evento','eventselect',''],['date','Data','date',''],['type','Tipo','select','Receita|Despesa'],['category','Categoria','text','Contrato / Buffet / DJ / Decoração'],['description','Descrição','text',''],['party','Cliente / Fornecedor','text',''],['value','Valor','number',''],['status','Status','select','Pendente|Pago']]},
 checklist:{title:'Novo item de checklist',store:'r1_extra_checklist',fields:[['eventId','Evento','eventselect',''],['group','Grupo','text','Ex.: Buffet / Cliente / Produção'],['title','Item','text',''],['owner','Responsável','text',''],['due','Prazo','date',''],['critical','Crítico?','select','Não|Sim']]},
 guest:{title:'Novo convidado',store:'r1_extra_guests',fields:[['eventId','Evento','eventselect',''],['name','Nome do convidado','text',''],['status','Status','select','Pendente|Confirmado|Recusado'],['phone','Telefone/WhatsApp','tel',''],['table','Mesa','text','Ex.: Mesa 5']]},
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

function renderField([key,label,kind,ph],eventId='',rawValue){
 const val=rawValue===true?'Sim':rawValue===false?'Não':(rawValue===undefined||rawValue===null?'':rawValue);
 if(kind==='select'||kind==='eventTypeSelect'||kind==='supplierCategorySelect'||kind==='catalogCategorySelect'||kind==='appointmentTypeSelect'){
  const opts=kind==='eventTypeSelect'?getEventTypes().map(t=>t.name):kind==='supplierCategorySelect'?[...getSupplierCategories(),'Outro']:kind==='catalogCategorySelect'?[...getCatalogCategories(),'Outro']:kind==='appointmentTypeSelect'?[...getAppointmentTypes(),'Outro']:ph.split('|');
  const isOtherOpt=o=>/^outro(s)?$/i.test(String(o).trim());
  const hasOther=opts.some(isOtherOpt);
  const isCustom=hasOther && val!==undefined && val!==null && val!=='' && !opts.map(String).includes(String(val));
  const selectVal=isCustom?opts.find(isOtherOpt):val;
  return `<div class="form-field"><label>${label}</label><select name="${key}" ${hasOther?`data-other-select="${key}"`:''}>${opts.map(x=>`<option ${String(x)===String(selectVal)?'selected':''}>${x}</option>`).join('')}</select>${hasOther?`<input type="text" name="${key}__other" placeholder="Escreva aqui..." value="${String(isCustom?val:'').replace(/"/g,'&quot;')}" style="margin-top:6px;width:100%;${isCustom?'':'display:none'}" data-other-input="${key}">`:''}</div>`;
 }
 if(kind==='eventselect')return `<div class="form-field"><label>${label}</label><select name="${key}">${getEvents().map(e=>`<option value="${e.id}" ${e.id===(val||eventId)?'selected':''}>${e.title}</option>`).join('')}</select></div>`;
 if(kind==='projectselect')return `<div class="form-field"><label>${label}</label><select name="${key}">${getProjects().map(p=>`<option value="${p.id}" ${p.id===(val||eventId)?'selected':''}>${p.name}</option>`).join('')}</select></div>`;
 if(kind==='clientpicker')return `<div class="form-field full"><label>${label}</label><input type="text" name="${key}" autocomplete="off" placeholder="Digite o nome ou o telefone para buscar um cliente..." value="${String(val).replace(/"/g,'&quot;')}" data-client-search><div data-client-results style="display:none;margin-top:6px;border:1px solid #e3e8ef;border-radius:10px;max-height:170px;overflow-y:auto;background:#fff"></div><div data-client-new style="display:none;margin-top:8px;padding:10px;background:#f6f8fc;border-radius:10px"><small>Nenhum cliente encontrado. Cadastrar rapidamente:</small><input type="text" placeholder="Nome do cliente" data-client-new-name style="margin-top:6px;width:100%"><input type="text" placeholder="WhatsApp / telefone" data-client-new-phone style="margin-top:6px;width:100%"><button type="button" class="btn btn-secondary" data-client-new-save style="margin-top:8px">＋ Cadastrar e usar este cliente</button></div></div>`;
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
function ajApplyZoom(){const z=ajZoom();document.documentElement.style.setProperty('--app-zoom',z);document.body.style.zoom=z}
function ajAvisos(){return readJSON('r1_avisos_cfg',{atrasado:true,hoje:true,d7:false,d3:true,d1:true})}
function ajLogin(){return readJSON('r1_login_cfg',{email:'demo@rizzieri.one',senha:'123456'})}
function ajEventBell(){return readJSON('r1_event_bell_cfg',{warnDays:15,urgentDays:7})}
function ajTemplates(){return readJSON('r1_wa_templates',{event:'',checklist:'',timeline:'',guests:''})}
function ajLastBackup(){return storage.getItem('r1_last_backup')||null}
function ajDiasDesdeBackup(){const d=ajLastBackup();if(!d)return null;return Math.max(0,Math.floor((new Date(finLocalISO()+'T12:00:00')-new Date(d+'T12:00:00'))/86400000))}
function ajApplyLogin(){const l=ajLogin();const ei=document.querySelector('#loginForm input[type="email"]'),pi=document.querySelector('#loginForm #password');if(ei)ei.value=l.email;if(pi)pi.value=l.senha}
/* ---- backup: exporta/restaura só as chaves do app (prefixo r1_) ---- */
function ajBackupBuild(){const data={};const todasChaves=new Set([...Object.keys(memoryStore||{}),...(function(){try{return Object.keys(globalThis.localStorage||{})}catch{return[]}})()]);[...todasChaves].forEach(k=>{if(k.startsWith('r1_')&&k!==R1_AUTH_KEY)data[k]=storage.getItem(k)});return {app:'RIZZIERI ONE',version:APP_VERSION,exportedAt:new Date().toISOString(),data}}
function ajBackupApply(payload){if(!payload||typeof payload!=='object'||!payload.data)return {ok:false,msg:'Arquivo de backup inválido.'};
 Object.keys(payload.data).forEach(k=>{if(k.startsWith('r1_'))storage.setItem(k,payload.data[k])});
 return {ok:true,qtd:Object.keys(payload.data).length}}
function ajDownloadBackup(){const payload=ajBackupBuild();const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`rizzieri-one-backup-${finLocalISO()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);storage.setItem('r1_last_backup',finLocalISO());toast('Backup baixado.')}
const AJ_PRESERVE_KEYS=['r1_consultor_profile','r1_zoom','r1_login_cfg','r1_avisos_cfg','r1_event_bell_cfg','r1_wa_templates','r1_last_backup','rizzieri_one_demo'];
function ajApagarTudo(){
 if(!confirm('Isso apaga projetos, eventos, financeiro, clientes e fornecedores deste navegador (seu perfil, zoom e login continuam) e não pode ser desfeito. Você baixou um backup recente? Tem certeza que quer continuar?'))return;
 const todasChaves=new Set([...Object.keys(memoryStore||{}),...(function(){try{return Object.keys(globalThis.localStorage||{})}catch{return[]}})()]);
 [...todasChaves].filter(k=>k.startsWith('r1_')&&!AJ_PRESERVE_KEYS.includes(k)).forEach(k=>storage.removeItem(k));
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
  <div class="form-actions full"><button class="btn btn-primary" id="ajSalvarConsultor">Salvar consultor</button></div>
 </div></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>💬 Mensagens</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:10px">Texto que entra na frente do resumo quando você usa os botões de WhatsApp. Deixe em branco pra enviar só o resumo.</p>
 <div class="form-grid">
  <div class="form-field full"><label>Ao compartilhar um evento</label><textarea id="ajTplEvent" rows="2" placeholder="Ex.: Oi! Segue o resumo do nosso evento:">${finEsc(tpl.event)}</textarea></div>
  <div class="form-field full"><label>Ao compartilhar o checklist</label><textarea id="ajTplChecklist" rows="2" placeholder="Ex.: Pessoal, segue o que falta pra fechar:">${finEsc(tpl.checklist)}</textarea></div>
  <div class="form-field full"><label>Ao compartilhar o cronograma</label><textarea id="ajTplTimeline" rows="2" placeholder="Ex.: Equipe, aqui está a ordem do dia:">${finEsc(tpl.timeline)}</textarea></div>
  <div class="form-field full"><label>Ao compartilhar a lista de convidados</label><textarea id="ajTplGuests" rows="2" placeholder="Ex.: Atualização de confirmações:">${finEsc(tpl.guests)}</textarea></div>
  <div class="form-actions full"><button class="btn btn-primary" id="ajSalvarTemplates">Salvar mensagens</button></div>
 </div></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>♿ Acessibilidade</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:10px">Tamanho da tela (zoom). Aumente para enxergar com mais facilidade. Vale para o app inteiro e fica salvo.</p>
 <div style="display:flex;align-items:center;gap:12px"><button class="btn btn-secondary" id="ajZoomMenos" style="flex:1;font-size:20px;font-weight:800">A −</button><div style="min-width:70px;text-align:center"><b id="ajZoomPct" style="font-size:19px">${Math.round(z*100)}%</b></div><button class="btn btn-primary" id="ajZoomMais" style="flex:1;font-size:20px;font-weight:800">A +</button></div>
 <button class="btn btn-secondary" id="ajZoomReset" style="margin-top:10px">Voltar ao padrão (100%)</button></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>💠 Plano</h3></div>
 <div class="card" style="background:#EAF9EF;border:1.5px solid #8FD9A8;border-radius:14px;padding:14px">
  <span style="background:#16a34a;color:#fff;font-size:11px;font-weight:800;padding:3px 10px;border-radius:100px">USO INTERNO</span>
  <p style="font-size:12.5px;color:#4a5568;margin-top:8px">O RIZZIERI ONE é uma ferramenta interna, sem plano pago nem período de teste — aqui não existe trava de funcionalidade por assinatura.</p>
  <div style="font-size:11px;color:#6b7a93;margin-top:8px">Versão instalada: <b>${APP_VERSION}</b></div>
 </div></section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>🔔 Avisos</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:4px">O sino avisa sobre o financeiro em aberto. Escolha quais avisos você quer ver no painel inicial:</p>
 ${ajSwitch('atrasado','Lançamentos atrasados',av.atrasado)}${ajSwitch('hoje','Compromissos de hoje',av.hoje)}
 <p style="font-size:12px;color:#6b7a93;margin:10px 0 4px">Avisar com quantos dias de antecedência:</p>
 ${ajSwitch('d7','7 dias antes',av.d7)}${ajSwitch('d3','3 dias antes',av.d3)}${ajSwitch('d1','1 dia antes',av.d1)}
 <div style="border-top:1px dashed #e3e8ef;margin:14px 0 10px;padding-top:12px"><b style="font-size:13px">🔔 Sino de contagem regressiva dos eventos</b><p style="font-size:12px;color:#6b7a93;margin:4px 0 10px">O sino ao lado da data, na lista de Eventos, usa estes prazos.</p>
 <div class="form-grid">
  <div class="form-field"><label>Avisar a partir de quantos dias</label><input id="ajBellWarn" type="number" min="1" max="60" value="${bell.warnDays}"></div>
  <div class="form-field"><label>Piscar a partir de quantos dias (com pendência no checklist)</label><input id="ajBellUrgent" type="number" min="1" max="60" value="${bell.urgentDays}"></div>
  <div class="form-actions full"><button class="btn btn-primary" id="ajSalvarBell">Salvar prazos do sino</button></div>
 </div></div></section>
 <section class="panel"><div class="panel-head"><h3>🏷️ Tipos de evento</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">Controla quais tipos aparecem como filtro na tela de Eventos. Esconder um tipo não apaga os eventos que já usam ele — só tira o botão de filtro da tela.</p>
 <div class="summary-list" style="margin-top:10px">${evTypes.map((t,i)=>`<div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><b>${t.name}</b><button class="small-btn" data-ev-type-toggle="${i}">${t.visible?'👁️ Visível':'🚫 Escondido'}</button></div>`).join('')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewEventType" placeholder="Nome do novo tipo (ex.: Chá de bebê)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddEventType" style="width:auto">＋ Adicionar tipo</button></div>
 </section>
 <section class="panel"><div class="panel-head"><h3>🧰 Categorias de fornecedor</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">A lista que aparece pra escolher ao cadastrar um fornecedor. Adicione quantas quiser — ficam disponíveis pra sempre, sem precisar digitar de novo toda vez.</p>
 <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${supCats.map(cat=>`<span class="pill">${cat}</span>`).join('')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewSupplierCategory" placeholder="Nome da nova categoria (ex.: Florista)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddSupplierCategory" style="width:auto">＋ Adicionar categoria</button></div>
 </section>

 <section class="panel"><div class="panel-head"><h3>📖 Categorias de catálogo</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">A lista que aparece pra escolher ao cadastrar um item do catálogo. Adicione quantas quiser — ficam disponíveis pra sempre, sem precisar digitar de novo toda vez.</p>
 <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${catCats.map(cat=>`<span class="pill">${cat}</span>`).join('')}</div>
 <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><input type="text" id="ajNewCatalogCategory" placeholder="Nome da nova categoria (ex.: Doces finos)" style="flex:1;min-width:160px;margin:0"><button class="btn btn-secondary" id="ajAddCatalogCategory" style="width:auto">＋ Adicionar categoria</button></div>
 </section>

 <section class="panel"><div class="panel-head"><h3>🗓️ Tipos de compromisso</h3></div><p style="font-size:12.5px;color:#4a5568;margin-top:0">A lista que aparece pra escolher ao cadastrar um compromisso na agenda. Adicione quantos quiser — ficam disponíveis pra sempre, sem precisar digitar de novo toda vez.</p>
 <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${apptTypes.map(t=>`<span class="pill">${t}</span>`).join('')}</div>
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
 <div class="form-actions full"><button class="btn btn-primary" id="ajSalvarLogin">Salvar credenciais</button></div></div>
 <button class="link-btn" data-nav="seguranca" style="margin-top:6px">Ver arquitetura de segurança completa (produção) →</button>
 ${hasPassword()?`
 <div style="margin-top:14px;padding:12px;background:#eafbf1;border:1px solid #b9e8cc;border-radius:12px">
  <div style="font-size:13px;font-weight:700;color:#1f8a4c;margin-bottom:4px">🔐 Senha de acesso ativa</div>
  <p style="font-size:12px;color:#4a5568;margin:0 0 10px">Seus dados ficam criptografados neste aparelho. Sem a senha, o app não abre e ninguém consegue ler o que está salvo.</p>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-secondary" id="ajTrocarSenha" style="width:auto">Trocar senha</button><button class="btn btn-secondary" id="ajRemoverSenha" style="width:auto;color:#c0392b;border-color:#f3c9c4">Remover senha</button></div>
 </div>`:`
 <div style="margin-top:14px;padding:12px;background:#f8fafc;border:1px solid #e3e8ef;border-radius:12px">
  <div style="font-size:13px;font-weight:700;color:#273142;margin-bottom:4px">🔐 Senha de acesso</div>
  <p style="font-size:12px;color:#6b7a93;margin:0 0 10px">Ainda não ativada — qualquer pessoa com acesso a este aparelho pode abrir o app. Criar uma senha criptografa tudo (eventos, clientes, financeiro) e passa a exigi-la pra abrir.</p>
  <button class="btn btn-primary" id="ajCriarSenha" style="width:auto">🔒 Criar senha de acesso</button>
 </div>`}
 </section>

 <section class="panel" style="margin-bottom:14px"><div class="panel-head"><h3>🗑️ Dados</h3></div>
 <p style="font-size:12px;color:#6b7a93;margin-bottom:10px">Apaga projetos, eventos, financeiro, clientes e fornecedores deste navegador. Não afeta seu perfil, zoom ou login.</p>
 <button class="btn btn-secondary" id="ajApagarTudo" style="color:#c0392b;border-color:#f3c9c4">Apagar todos os dados do protótipo</button></section>

 <section class="panel"><div class="panel-head"><h3>ℹ️ Sobre</h3></div>
 <p style="font-size:13px"><b>RIZZIERI ONE</b> — Life, Business & Projects</p>
 <p style="font-size:12px;color:#6b7a93;margin-top:4px">Central única para administrar projetos, aplicativos, estratégia, eventos, finanças e vida pessoal em quatro workspaces: Negócios, Eventos, Pessoal e Ideias.</p>
 <p style="font-size:11px;color:#6b7a93;margin-top:8px">Versão ${APP_VERSION} · Protótipo local (localStorage)</p></section>`}
function ajWire(){
 const $$q=sel=>[...document.querySelectorAll(sel)];
 const byId=id=>document.getElementById(id);
 if(!byId('ajZoomMenos'))return;
 byId('ajZoomMenos').onclick=()=>{storage.setItem('r1_zoom',String(Math.max(0.8,ajZoom()-0.1)));ajApplyZoom();finRebuild()};
 byId('ajZoomMais').onclick=()=>{storage.setItem('r1_zoom',String(Math.min(1.6,ajZoom()+0.1)));ajApplyZoom();finRebuild()};
 byId('ajZoomReset').onclick=()=>{storage.setItem('r1_zoom','1');ajApplyZoom();finRebuild()};
 byId('ajFoto').onchange=async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;if(file.size>1500000){toast('Use uma foto de até 1,5 MB.');e.target.value='';return}const data=await fileToDataURL(file);byId('ajFotoPreview').innerHTML=`<img src="${data}" alt="Foto">`;byId('ajFotoPreview').dataset.foto=data};
 byId('ajSalvarConsultor').onclick=()=>{const foto=byId('ajFotoPreview').dataset.foto||ajCfg().foto||'';storage.setItem('r1_consultor_profile',JSON.stringify({nome:byId('ajNome').value.trim(),cargo:byId('ajCargo').value.trim(),telefone:byId('ajTelefone').value.trim(),email:byId('ajEmail').value.trim(),foto}));toast('Consultor salvo.')};
 $$q('[data-aj-aviso]').forEach(inp=>inp.onchange=()=>{const av=ajAvisos();av[inp.dataset.ajAviso]=inp.checked;storage.setItem('r1_avisos_cfg',JSON.stringify(av));toast('Preferência de aviso salva.')});
 byId('ajInstalar').onclick=()=>byId('installBtn').click();
 byId('ajTutorial').onclick=()=>render('tutorial');
 if(byId('ajPermissoes'))byId('ajPermissoes').onclick=()=>{const info=byId('ajPermissoesInfo');info.style.display=info.style.display==='none'?'block':'none'};
 byId('ajBackupBaixar').onclick=()=>ajDownloadBackup();
 byId('ajBackupArquivo').onchange=e=>{const file=e.target.files&&e.target.files[0];if(file)ajRestoreFile(file)};
 byId('ajSalvarLogin').onclick=()=>{const email=byId('ajLoginEmail').value.trim()||'demo@rizzieri.one',senha=byId('ajLoginSenha').value||'123456';storage.setItem('r1_login_cfg',JSON.stringify({email,senha}));ajApplyLogin();toast('Credenciais atualizadas.')};
 if(byId('ajSalvarTemplates'))byId('ajSalvarTemplates').onclick=()=>{storage.setItem('r1_wa_templates',JSON.stringify({event:byId('ajTplEvent').value,checklist:byId('ajTplChecklist').value,timeline:byId('ajTplTimeline').value,guests:byId('ajTplGuests').value}));toast('Mensagens salvas.')};
 if(byId('ajSalvarBell'))byId('ajSalvarBell').onclick=()=>{const warnDays=Math.max(1,Number(byId('ajBellWarn').value)||15),urgentDays=Math.max(1,Number(byId('ajBellUrgent').value)||7);storage.setItem('r1_event_bell_cfg',JSON.stringify({warnDays,urgentDays}));toast('Prazos do sino salvos.')};
 if(byId('ajApagarTudo'))byId('ajApagarTudo').onclick=ajApagarTudo;
 $$('[data-ev-type-toggle]').forEach(b=>b.onclick=()=>{const list=getEventTypes().slice();const i=Number(b.dataset.evTypeToggle);list[i]={...list[i],visible:!list[i].visible};saveEventTypes(list);openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)});
 if(byId('ajAddEventType'))byId('ajAddEventType').onclick=()=>{const inp=byId('ajNewEventType');const name=(inp.value||'').trim();if(!name){toast('Digite o nome do tipo.');return}const list=getEventTypes().slice();if(list.some(t=>t.name.toLowerCase()===name.toLowerCase())){toast('Esse tipo já existe.');return}list.push({name,visible:true});saveEventTypes(list);toast('Tipo adicionado.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajAddSupplierCategory'))byId('ajAddSupplierCategory').onclick=()=>{const inp=byId('ajNewSupplierCategory');const name=(inp.value||'').trim();if(!name){toast('Digite o nome da categoria.');return}const list=getSupplierCategories().slice();if(list.some(c=>c.toLowerCase()===name.toLowerCase())){toast('Essa categoria já existe.');return}list.push(name);saveSupplierCategories(list);toast('Categoria adicionada.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajAddCatalogCategory'))byId('ajAddCatalogCategory').onclick=()=>{const inp=byId('ajNewCatalogCategory');const name=(inp.value||'').trim();if(!name){toast('Digite o nome da categoria.');return}const list=getCatalogCategories().slice();if(list.some(c=>c.toLowerCase()===name.toLowerCase())){toast('Essa categoria já existe.');return}list.push(name);saveCatalogCategories(list);toast('Categoria adicionada.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajAddAppointmentType'))byId('ajAddAppointmentType').onclick=()=>{const inp=byId('ajNewAppointmentType');const name=(inp.value||'').trim();if(!name){toast('Digite o nome do tipo.');return}const list=getAppointmentTypes().slice();if(list.some(t=>t.toLowerCase()===name.toLowerCase())){toast('Esse tipo já existe.');return}list.push(name);saveAppointmentTypes(list);toast('Tipo adicionado.');openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)};
 if(byId('ajCriarSenha'))byId('ajCriarSenha').onclick=()=>{$('#pwSetupTitle').textContent='Criar senha de acesso';$('#pwSetupBtn').textContent='Criar senha e ativar';$('#pwSetupPass').value='';$('#pwSetupPass2').value='';$('#pwSetupErr').textContent='';$('#pwSetupMatch').textContent='';checkPwRules();$('#pwSetupDialog').showModal()};
 if(byId('ajTrocarSenha'))byId('ajTrocarSenha').onclick=()=>{$('#pwSetupTitle').textContent='Trocar senha de acesso';$('#pwSetupBtn').textContent='Trocar senha';$('#pwSetupPass').value='';$('#pwSetupPass2').value='';$('#pwSetupErr').textContent='';$('#pwSetupMatch').textContent='';checkPwRules();$('#pwSetupDialog').showModal()};
 if(byId('ajRemoverSenha'))byId('ajRemoverSenha').onclick=()=>{$('#pwRemoveDialog').showModal()};
}

const fieldAliases={project:{category:'cat'}};
async function openForm(type,eventId='',record=null){if(type==='finance'||type==='personalFinance')return finOpenForm({ws:type==='personalFinance'?'Pessoal':undefined,eventId,id:record?record.id:null});const f=forms[type]||forms.task;$('#formTitle').textContent=record?(/^Nov[oa]\s+/i.test(f.title)?f.title.replace(/^Nov[oa]\s+/i,'Editar '):`Editar — ${f.title}`):f.title;$('#dynamicForm').innerHTML=f.fields.map(field=>{const alias=(fieldAliases[type]||{})[field[0]];const prefill=record?(record[field[0]]!==undefined?record[field[0]]:(alias?record[alias]:undefined)):undefined;return renderField(field,eventId||(record?record.eventId:''),prefill)}).join('')+`<div class="form-actions"><button type="button" class="btn btn-secondary" data-cancel>Cancelar</button><button class="btn btn-primary" type="submit">${record?'Salvar alterações':'Salvar'}</button></div>`;
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
 $$('#dynamicForm [data-mask="cpfcnpj"]').forEach(inp=>{
  const errBox=inp.parentElement.querySelector(`[data-error-for="${inp.name}"]`);
  const check=()=>{inp.value=maskCpfCnpj(inp.value);const ok=isValidCpfCnpj(inp.value);inp.style.borderColor=ok?'':'#c0392b';if(errBox)errBox.style.display=ok?'none':'block';return ok};
  inp.oninput=check;inp.onblur=check;
 });
 const contactSelect=$('#appointmentContactSelect');if(contactSelect)contactSelect.onchange=()=>{const opt=contactSelect.selectedOptions?.[0];const name=$('#dynamicForm [name="relatedName"]'),phone=$('#dynamicForm [name="phone"]');if(opt?.value){if(name)name.value=opt.dataset.name||'';if(phone)phone.value=opt.dataset.phone||''}};
 if(type==='appointment'&&!record&&agendaDateFilter){const dateInput=$('#dynamicForm [name="date"]');if(dateInput)dateInput.value=agendaDateFilter}
 if((type==='client'||type==='supplier')&&!record){const createdInput=$('#dynamicForm [name="createdAt"]');if(createdInput)createdInput.value=finLocalISO()}
 $('#dynamicForm').onsubmit=async e=>{e.preventDefault();const invalidDoc=$$('#dynamicForm [data-mask="cpfcnpj"]').find(inp=>!isValidCpfCnpj(inp.value));if(invalidDoc){toast('CPF/CNPJ inválido. Corrija o valor antes de salvar.');invalidDoc.focus();return}const fd=new FormData(e.currentTarget);const obj={};for(const [k,v] of fd.entries()){if(v instanceof File){if(v.size){if(v.size>1000000){toast('Use uma imagem de até 1 MB no protótipo.');return}obj[k]=await fileToDataURL(v)}else obj[k]=(record&&record[k])?record[k]:''}else obj[k]=v}
 $$('#dynamicForm [data-other-select]').forEach(sel=>{const isOther=/^outro(s)?$/i.test(String(obj[sel.name]||'').trim());const customVal=(obj[sel.name+'__other']||'').trim();if(isOther&&customVal)obj[sel.name]=customVal;delete obj[sel.name+'__other']});
 (f.fields||[]).filter(fl=>fl[2]==='money').forEach(fl=>{obj[fl[0]]=finParseMoeda(obj[fl[0]])/100});
 (f.fields||[]).forEach(fl=>{
  const cfg=MANAGED_LIST_FIELDS[fl[2]];const val=(obj[fl[0]]||'').trim();
  if(!cfg||!val)return;
  const list=cfg.get().slice();
  const already=cfg.isObj?list.some(x=>x.name.toLowerCase()===val.toLowerCase()):list.some(x=>x.toLowerCase()===val.toLowerCase());
  if(!already){list.push(cfg.isObj?{name:val,visible:true}:val);cfg.save(list)}
 });
 if(f.store){obj.id=record?record.id:`${type}-${Date.now()}`;applyTypeDefaults(type,obj,!record);if(record)updateRecord(type,obj);else saveExtra(f.store,obj)}
 $('#formDialog').close();toast(record?'Alterações salvas.':(type==='goal'?'Objetivo salvo e exibido na estratégia.':'Registro salvo no protótipo.'));
 const rerender={project:'projetos',idea:'ideias',event:'eventos',client:'clientes',supplier:'fornecedores',finance:'financeiro',catalog:'catalogo',contract:'contratos',presentation:'apresentacoes',goal:'estrategia',personalGoal:'objetivos',routine:'rotina',appointment:'agenda',personalFinance:'financas-pessoais',personalDoc:'documentos-pessoais',validation:'validacao',decision:'decisoes'}[type];if(record)currentScreenRebuild()();else if(rerender)render(rerender);else currentScreenRebuild()();
 };
 $('#dynamicForm [data-cancel]').onclick=()=>$('#formDialog').close();$('#formDialog').showModal();
}

function toggleChecklist(id,done){const overrides=readJSON('r1_checklist_overrides',{});overrides[id]={...(overrides[id]||{}),done};storage.setItem('r1_checklist_overrides',JSON.stringify(overrides));const row=getChecklist().find(x=>x.id===id);toast(done?'Item concluído.':'Item reaberto.');if(row)openSubView('Checklist do evento','EXECUÇÃO RIGOROSA',()=>checklistView(row.eventId),'eventos')}
function toggleTimeline(id){const overrides=readJSON('r1_timeline_overrides',{}),row=getTimeline().find(x=>x.id===id);if(!row)return;overrides[id]={...(overrides[id]||{}),status:row.status==='Confirmado'?'Pendente':'Confirmado'};storage.setItem('r1_timeline_overrides',JSON.stringify(overrides));toast('Status do cronograma atualizado.');openSubView('Cronograma do dia','EXECUÇÃO DO EVENTO',()=>timelineView(row.eventId),'eventos')}
function duplicateEvent(id){const orig=getEvents().find(x=>x.id===id);if(!orig)return;
 const newId=`event-${Date.now()}`;
 const newEvent={id:newId,title:`Cópia de ${orig.title}`,type:orig.type,client:orig.client,date:'',venue:orig.venue,guests:orig.guests,budget:orig.budget,progress:0,status:'Planejamento',manager:orig.manager,critical:0};
 saveExtra('r1_extra_events',newEvent);
 const ck=getChecklist(orig.id);
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
 else if(kind==='checklist'){const e=getEvents().find(x=>x.id===id)||getEvents()[0],rows=getChecklist(e.id);html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">CHECKLIST OPERACIONAL</div><h2>${e.title}</h2><p>${e.client} • ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • ${e.venue}</p><table><tr><th>Status</th><th>Grupo</th><th>Item</th><th>Responsável</th><th>Prazo</th></tr>${rows.map(x=>`<tr><td>${x.done?'✓':'○'}</td><td>${x.group}</td><td>${x.title}${x.critical?' • CRÍTICO':''}</td><td>${x.owner}</td><td>${new Date(x.due+'T12:00:00').toLocaleDateString('pt-BR')}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='timeline'){const e=getEvents().find(x=>x.id===id)||getEvents()[0],rows=getTimeline(e.id).sort((a,b)=>a.time.localeCompare(b.time));html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">CRONOGRAMA DO DIA</div><h2>${e.title}</h2><p>${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • ${e.venue}</p><table><tr><th>Hora</th><th>Atividade</th><th>Responsável</th><th>Local</th><th>Status</th></tr>${rows.map(x=>`<tr><td>${x.time}</td><td>${x.title}</td><td>${x.owner}</td><td>${x.location}</td><td>${x.status}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='suppliers'){const rows=getSuppliers();html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">REDE DE FORNECEDORES</div><h2>Lista de fornecedores</h2><table><tr><th>Categoria</th><th>Fornecedor</th><th>Contato</th><th>Referência</th><th>Status</th></tr>${rows.map(x=>`<tr><td>${x.category}</td><td>${x.name}</td><td>${x.contact}<br>${x.phone}</td><td>${x.price}</td><td>${x.status}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else if(kind==='finance'){const rows=getFinance();html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">MAPA FINANCEIRO</div><h2>Receitas e despesas</h2><table><tr><th>Data</th><th>Evento</th><th>Descrição</th><th>Tipo</th><th>Valor</th><th>Status</th></tr>${rows.map(x=>`<tr><td>${new Date(x.date+'T12:00:00').toLocaleDateString('pt-BR')}</td><td>${getEvents().find(e=>e.id===x.eventId)?.title||''}</td><td>${x.description}</td><td>${x.type}</td><td>${moneyApp(x.value)}</td><td>${x.status}</td></tr>`).join('')}</table></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 else {const e=getEvents().find(x=>x.id===id)||getEvents()[0];html=`${profileHeader(p)}<main class="print-doc"><div class="print-kicker">RESUMO OPERACIONAL</div><h2>${e.title}</h2><p><b>Cliente:</b> ${e.client}</p><p><b>Data:</b> ${new Date(e.date+'T12:00:00').toLocaleDateString('pt-BR')} • <b>Local:</b> ${e.venue}</p><p><b>Convidados:</b> ${e.guests} • <b>Orçamento:</b> ${moneyApp(e.budget)}</p><h3>Produção</h3><p>Checklist: ${getChecklist(e.id).filter(x=>x.done).length}/${getChecklist(e.id).length} concluídos • Cronograma: ${getTimeline(e.id).length} marcos • Catálogo: ${getEventCatalog(e.id).length} itens selecionados.</p></main><footer class="print-footer">${p.address} • ${p.footer}</footer>`}
 $('#printRoot').innerHTML=html;document.body.classList.add('printing');setTimeout(()=>{window.print();setTimeout(()=>document.body.classList.remove('printing'),500)},100)
}

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e});
$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else toast('No iPhone: Compartilhar → Adicionar à Tela de Início. No Android/Chrome: menu → Instalar app.')};
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
if(storage.getItem('rizzieri_one_demo')==='1')showApp();
ajApplyZoom();ajApplyLogin();


// Injeção de HTML: formulários, impressões, sino, busca, perfil, backup e caminhada pelas telas.
const L=require('./lib.js'),X=require('./xss-leak.js');
const PAYLOAD='"\'><i class="XSS">x</i><u data-xss="1">';
const bad=d=>d.querySelectorAll('.XSS,[data-xss]').length;
async function seeded(){
  const a0=await L.loadApp({login:false,wait:200});await X.seedAll(a0);
  const store={};a0.ev('Object.keys(localStorage)').forEach(k=>store[k]=a0.w.localStorage.getItem(k));a0.w.close();
  store.r1_company_profile=JSON.stringify({businessName:PAYLOAD,legalName:PAYLOAD,document:PAYLOAD,phone:PAYLOAD,email:PAYLOAD,address:PAYLOAD,footer:PAYLOAD,logo:'',website:PAYLOAD});
  store.r1_consultor_profile=JSON.stringify({nome:PAYLOAD,cargo:PAYLOAD,telefone:PAYLOAD,email:PAYLOAD,foto:''});
  return L.loadApp({seed:store,wait:500});
}
async function run(steps){
  L.reset();
  const a=await seeded();const {d,w}=a;w.print=()=>{};
  // 1) formulários de edição: valor preservado e nada injetado
  const tipos=a.ev(`Object.keys(forms).filter(t=>forms[t].store&&t!=='finance'&&t!=='personalFinance')`);
  let abertos=0,roundtrip=0,total=0;
  for(const t of tipos){
    try{a.ev(`(function(){const f=forms['${t}'];const rec=JSON.parse(localStorage.getItem(f.store)||'[]').find(x=>x.id==='x_${t}');if(rec)openForm('${t}','',rec)})()`)}catch(e){}
    await a.sleep(25);
    const dlg=d.querySelector('#formDialog[open]');if(!dlg)continue;abertos++;
    L.check(`form ${t}: nada injetado`,bad(d)===0,bad(d)+' elementos');
    dlg.querySelectorAll('input[type=text],input:not([type]),textarea').forEach(el=>{if(el.value&&el.value.includes('XSS')){total++;if(el.value===PAYLOAD)roundtrip++}});
    a.ev(`document.querySelector('#formDialog').close()`);
    d.querySelectorAll('.XSS,[data-xss]').forEach(x=>x.remove());
  }
  L.check('abriu formulários de edição de vários tipos',abertos>=15,abertos+' de '+tipos.length);
  L.check('texto com aspas/tags volta idêntico dentro dos campos (sem corromper)',total>0&&roundtrip===total,roundtrip+'/'+total);
  // 2) documentos de impressão
  for(const [k,id] of [['contract','x_contract'],['presentation','x_presentation'],['checklist','ex1'],['timeline','ex1'],['suppliers','ex1'],['suppliers',''],['finance','ex1'],['finance',''],['event','ex1']]){
    try{a.ev(`printDocument('${k}','${id}')`)}catch(e){L.check(`impressão ${k} sem erro`,false,e.message);continue}
    L.check(`impressão ${k}/${id||'geral'}: nada injetado`,bad(d)===0,String(bad(d)));
    d.querySelectorAll('.XSS,[data-xss]').forEach(x=>x.remove());
  }
  // 3) sino (central de atenção)
  const sino=d.querySelector('#alertsBtn');if(sino){sino.click();await a.sleep(40);L.check('sino: nada injetado',bad(d)===0,String(bad(d)));d.querySelectorAll('dialog[open]').forEach(x=>x.close())}
  // 4) busca
  const bt=d.querySelector('[data-open-search], #searchBtn');
  a.ev(`(function(){const i=document.querySelector('#searchDialogInput');if(i){i.value=${JSON.stringify(PAYLOAD)};}})()`);
  try{a.ev(`runGlobalSearch()`)}catch(e){}
  await a.sleep(30);L.check('busca: texto digitado e resultados sem injeção',bad(d)===0,String(bad(d)));
  d.querySelectorAll('.XSS,[data-xss]').forEach(x=>x.remove());
  // 5) Ajustes (perfil/consultor)
  try{a.ev(`openSubView('Ajustes','CONFIGURAÇÕES',()=>ajustesView(),currentMainNav)`)}catch(e){}
  await a.sleep(40);L.check('Ajustes com perfil malicioso: nada injetado',bad(d)===0,String(bad(d)));
  d.querySelectorAll('.XSS,[data-xss]').forEach(x=>x.remove());
  // 6) caminhada longa
  const r=await X.walk(a,steps||250,11);
  L.check(`caminhada de ${steps||250} passos: nada injetado`,r.leaks===0,r.ctx.slice(0,3).join(' || '));
  L.check('caminhada: sem erros de JavaScript',a.errs.length===0,a.errs.slice(0,2).join(' | '));
  return L.summary('XSS');
}
module.exports={run};
if(require.main===module)run(+process.argv[2]||250).then(r=>process.exit(r.fail?1:0));

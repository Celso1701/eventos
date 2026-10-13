// Nenhuma caixa nativa (confirm/alert/prompt) e confirmações do app funcionando (sim/não).
const L=require('./lib.js');
async function answer(a,yes){ // espera o diálogo do app abrir e responde
  for(let i=0;i<40;i++){const d=a.d.querySelector('#askConfirmDialog[open]');if(d){(yes?a.d.querySelector('#askConfirmYes'):a.d.querySelector('#askConfirmNo')).click();await a.sleep(30);return true}await a.sleep(15)}
  return false;
}
async function run(){
  L.reset();
  const a=await L.loadApp({wait:300});
  const mkFin=()=>{a.ev(`['t1','t2','t3'].forEach((id,i)=>finSave({id,tipo:'rec',valorCent:100000+i,data:'2026-10-2'+i,categoria:'Série X',ws:'Eventos',grupoId:'g-test'}))`)};
  const ids=()=>a.ev(`finAll().filter(x=>x.grupoId==='g-test').map(x=>x.id).sort().join(',')`);
  mkFin();L.check('3 lançamentos de teste criados',ids()==='t1,t2,t3',ids());

  // excluir: cancelar mantém tudo
  let p=a.ev(`finDelete('t1')`);L.check('finDelete devolve promessa (confirmação é do app)',p&&typeof p.then==='function');
  L.check('abre o diálogo do app (não o nativo)',await answer(a,false));await p;
  L.check('cancelar mantém os 3',ids()==='t1,t2,t3',ids());
  // excluir: sim, e "Só esta" na série
  p=a.ev(`finDelete('t1')`);await answer(a,true);   // confirma excluir
  const abriuSerie=await answer(a,false);            // "Só esta" -> não exclui a série
  await p;
  L.check('perguntou sobre a série',abriuSerie);
  L.check('"Só esta" exclui só uma parcela',ids()==='t2,t3',ids());
  // excluir: sim + série inteira
  p=a.ev(`finDelete('t2')`);await answer(a,true);await answer(a,true);await p;
  L.check('"Excluir também" remove as outras em aberto',ids()==='',ids());
  // textos do botão
  mkFin();p=a.ev(`finDelete('t1')`);await answer(a,true);
  const txtNo=a.d.querySelector('#askConfirmNo').textContent,txtYes=a.d.querySelector('#askConfirmYes').textContent;
  L.check('pergunta da série usa rótulos claros ("Só esta"/"Excluir também")',txtNo==='Só esta'&&txtYes==='Excluir também',txtNo+'/'+txtYes);
  await answer(a,false);await p;

  // apagar tudo
  a.w.localStorage.setItem('r1_extra_clients',JSON.stringify([{id:'c9',name:'Zé'}]));
  p=a.ev(`ajApagarTudo()`);L.check('"Apagar tudo" abre o diálogo do app',await answer(a,false));await p;
  L.check('"Apagar tudo" cancelado mantém os dados',a.w.localStorage.getItem('r1_extra_clients')!==null);

  // restaurar backup
  const file=new a.w.File([JSON.stringify({data:{r1_extra_clients:'[{"id":"c1","name":"Novo"}]'}})],'b.json',{type:'application/json'});
  a.ev(`ajRestoreFile`);a.w.__f=file;a.ev(`ajRestoreFile(window.__f)`);
  L.check('restaurar backup abre o diálogo do app',await answer(a,false));
  await a.sleep(50);
  L.check('restaurar cancelado não altera os dados',(a.w.localStorage.getItem('r1_extra_clients')||'').includes('Zé'));

  // esqueci a senha
  a.d.querySelector('#pwForgotWipeBtn').click();
  L.check('"esqueci a senha → apagar" abre o diálogo do app',await answer(a,false));

  L.check('nenhuma caixa NATIVA (confirm/prompt) foi usada',a.w.__nativeDialogs.length===0,a.w.__nativeDialogs.join(' | '));
  L.check('texto do diálogo não interpreta HTML (usa textContent)',(()=>{a.ev(`askConfirm({title:'<b>x</b>',text:'<img src=x onerror=1>',ok:'ok'})`);const t=a.d.querySelector('#askConfirmText');const ok=t.children.length===0&&t.textContent.includes('<img');a.d.querySelector('#askConfirmNo').click();return ok})());
  return L.summary('diálogos');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

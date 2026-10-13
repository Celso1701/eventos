// Teste de injeção de HTML: todo campo de texto de usuário recebe um payload; nenhum elemento .XSS pode surgir.
const L=require('./lib.js');
const PAYLOAD='"\'><i class="XSS">x</i><u data-xss="1">';
const DESTRUCTIVE=/exclu|apag|delet|remov|limpar|reset|sair|logout|zerar|encerrar|restaur|backup|novo c[oó]digo|ativar/i;
function rng(seed){let s=seed;return()=>{s=(s*1664525+1013904223)%4294967296;return s/4294967296}}
async function seedAll(a){
  // monta registros com payload em todos os campos de cada formulário
  a.ev(`(function(){
    const P=${JSON.stringify(PAYLOAD)};
    const keepDate=k=>/date|data|due|prazo|start|end|time|hora|createdAt/i.test(k);
    for(const t in forms){const f=forms[t];if(!f.store)continue;
      const rec={id:'x_'+t,eventId:'ex1',event:'ex1',projectId:'px1',project:'px1'};
      (f.fields||[]).forEach(fd=>{const k=fd[0],ty=fd[2];
        if(k==='eventId'||k==='projectId')return;
        if(ty==='date'||keepDate(k)){rec[k]='2026-10-20';return}
        if(ty==='number'||ty==='money'){rec[k]=100;return}
        rec[k]=(k==='tags')?[P]:P});
      const cur=JSON.parse(localStorage.getItem(f.store)||'[]');cur.push(rec);localStorage.setItem(f.store,JSON.stringify(cur));
    }
    const ev=JSON.parse(localStorage.getItem('r1_extra_events')||'[]');
    ev.push({id:'ex1',title:P,client:P,place:P,venue:P,date:'2026-10-20',guests:50,budget:1000,status:'Planejamento',manager:P});
    localStorage.setItem('r1_extra_events',JSON.stringify(ev));
    const pr=JSON.parse(localStorage.getItem('r1_extra_projects')||'[]');
    pr.push({id:'px1',name:P,category:P,status:'Ideia',description:P,owner:P,url:'https://x.y',health:50});
    localStorage.setItem('r1_extra_projects',JSON.stringify(pr));
    const fin=JSON.parse(localStorage.getItem('r1_fin_v')||'null');
  })()`);
}
async function walk(b,steps,seed){
  const {d}=b;const rand=rng(seed);let leaks=0;const ctx=[];
  const scan=(where)=>{const els=[...d.querySelectorAll('.XSS,[data-xss]')];if(els.length){leaks+=els.length;
    const seen=new Set();els.forEach(x=>{const p=x.parentElement;const o=((p&&p.outerHTML)||'').replace(/\s+/g,' ').slice(0,200);if(!seen.has(o.slice(0,50))){seen.add(o.slice(0,50));ctx.push(where+'  ::  '+o)}});
    els.forEach(x=>{try{x.remove()}catch(e){}})}};
  const closeDialogs=()=>d.querySelectorAll('dialog[open]').forEach(x=>{try{x.close()}catch(e){x.removeAttribute('open')}});
  const wss=[...new Set([...d.querySelectorAll('[data-workspace],[data-ws]')].map(x=>x.dataset.workspace||x.dataset.ws))];
  for(const ws of ['',...wss]){
    if(ws){const bt=d.querySelector(`[data-workspace="${ws}"],[data-ws="${ws}"]`);bt&&bt.click();await L.sleep(20)}
    for(const t of [...new Set([...d.querySelectorAll('[data-nav]')].map(x=>x.dataset.nav))]){
      const bt=d.querySelector(`[data-nav="${t}"]`);if(!bt)continue;bt.click();await L.sleep(15);scan(`nav:${ws}/${t}`)}
  }
  for(let i=0;i<steps;i++){
    const els=[...d.querySelectorAll('button,a,[data-nav],[data-open],[role=button],.tab,.chip,[data-fin-act]')].filter(e=>!e.disabled&&!(e.closest('dialog')&&!e.closest('dialog[open]'))&&!e.closest('.hidden,[hidden],[style*="display:none"]')&&!DESTRUCTIVE.test(e.textContent+' '+(e.className||'')+' '+[...e.attributes].map(x=>x.name+x.value).join(' ')));
    if(!els.length){closeDialogs();continue}
    const el=els[Math.floor(rand()*els.length)];
    const label=(el.textContent||'').trim().slice(0,30)+' <'+el.tagName+' '+[...el.attributes].filter(x=>/^data-/.test(x.name)).map(x=>x.name+'='+x.value).join(' ').slice(0,60)+'>';
    try{el.click()}catch(e){}
    await L.sleep(8);scan(label);
    if(i%7===0)closeDialogs();
  }
  return{leaks,ctx};
}
async function run(steps=700,seed=7){
  L.reset();
  const a=await L.loadApp({login:false,wait:200});
  await seedAll(a);
  const keys=a.ev('Object.keys(localStorage)');const store={};keys.forEach(k=>store[k]=a.w.localStorage.getItem(k));
  a.w.close();
  const b=await L.loadApp({seed:store,wait:500});
  const r=await walk(b,steps,seed);
  console.log('vazamentos:',r.leaks);r.ctx.slice(0,+process.env.SHOW||12).forEach(c=>console.log(' *',c));
  L.check('nenhum HTML injetado vaza em '+steps+' passos',r.leaks===0);
  L.check('sem erros de JavaScript durante a caminhada',b.errs.length===0,b.errs.slice(0,3).join(' | '));
  return L.summary('xss-leak');
}
module.exports={run,seedAll,walk};
if(require.main===module)run(+process.argv[2]||700,+process.argv[3]||7).then(r=>process.exit(r.fail?1:0));

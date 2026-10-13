// Navegação por todas as telas dos 4 workspaces: sem erro de JS e sem texto quebrado (entidades, tags soltas, undefined/NaN).
const L=require('./lib.js');
const BROKEN=/&amp;|&lt;|&gt;|&quot;|&#39;|<\/?(div|span|b|button|small|p|h\d|section|svg|path|input|label)\b|\bundefined\b|\bNaN\b|\[object |\bnull\b/;
async function run(){
  L.reset();
  const a=await L.loadApp({wait:300});const {d}=a;
  const wss=[...new Set([...d.querySelectorAll('[data-workspace],[data-ws]')].map(x=>x.dataset.workspace||x.dataset.ws))];
  L.check('encontrou os 4 workspaces',wss.filter(w=>['Negócios','Eventos','Pessoal','Ideias'].includes(w)).length===4,wss.join(','));
  let telas=0;const quebrados=[];
  const visit=async(lbl)=>{telas++;const root=d.querySelector('#appView');const txt=(root?root.textContent:'').replace(/\s+/g,' ');const m=BROKEN.exec(txt);if(m)quebrados.push(lbl+' -> …'+txt.slice(Math.max(0,m.index-40),m.index+60)+'…')};
  for(const ws of wss){
    const b=d.querySelector(`[data-workspace="${ws}"],[data-ws="${ws}"]`);b&&b.click();await a.sleep(25);await visit(ws+'/início');
    for(const t of [...new Set([...d.querySelectorAll('[data-nav]')].map(x=>x.dataset.nav))]){
      const bt=d.querySelector(`[data-nav="${t}"]`);if(!bt)continue;bt.click();await a.sleep(20);await visit(ws+'/'+t)}
  }
  L.check('visitou pelo menos 30 telas',telas>=30,String(telas));
  L.check('nenhum texto quebrado nas telas',quebrados.length===0,quebrados.slice(0,3).join(' || '));
  L.check('nenhum erro de JavaScript',a.errs.length===0,a.errs.slice(0,3).join(' | '));
  // diálogos principais abrem sem erro
  for(const sel of ['#alertsBtn','[data-open-ajustes]','[data-open-consolidado]']){const e=d.querySelector(sel);if(e){e.click();await a.sleep(30);d.querySelectorAll('dialog[open]').forEach(x=>x.close())}}
  L.check('sino, Ajustes e Consolidado abrem sem erro',a.errs.length===0,a.errs.slice(0,2).join(' | '));
  // caminhada aleatória: hubs, formulários e diálogos também não podem mostrar texto quebrado
  let seed=5;const rnd=()=>((seed=(seed*1664525+1013904223)%4294967296)/4294967296);
  const DESTR=/exclu|apag|delet|remov|limpar|reset|sair|logout|zerar|encerrar|restaur|backup|ativar/i;
  const quebradosW=[];
  for(let i=0;i<260;i++){
    const els=[...d.querySelectorAll('button,a,[data-nav],[data-open],[role=button],.tab,.chip,[data-fin-act]')].filter(e=>!e.disabled&&!(e.closest('dialog')&&!e.closest('dialog[open]'))&&!e.closest('.hidden,[hidden],[style*="display:none"]')&&!DESTR.test(e.textContent+' '+[...e.attributes].map(x=>x.name+x.value).join(' ')));
    if(!els.length){d.querySelectorAll('dialog[open]').forEach(x=>x.close());continue}
    const el=els[Math.floor(rnd()*els.length)];try{el.click()}catch(e){}await a.sleep(8);
    const txt=[...d.querySelectorAll('#appView,dialog[open]')].map(x=>x.textContent).join(' ').replace(/\s+/g,' ');
    const m=BROKEN.exec(txt);if(m)quebradosW.push('passo '+i+' -> …'+txt.slice(Math.max(0,m.index-40),m.index+60)+'…');
    if(i%6===0)d.querySelectorAll('dialog[open]').forEach(x=>x.close());
  }
  L.check('caminhada de 260 cliques: nenhum texto quebrado (entidade, tag solta, undefined, NaN)',quebradosW.length===0,quebradosW.slice(0,3).join(' || '));
  L.check('caminhada de 260 cliques: nenhum erro de JavaScript',a.errs.length===0,a.errs.slice(0,3).join(' | '));
  return L.summary('navegação');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

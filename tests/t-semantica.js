// Semântica das conversões de escape: busca sem escape duplo, soma numérica, &&/|| sem "false"/"0" indevidos.
const L=require('./lib.js');
async function run(){
  L.reset();
  const a=await L.loadApp({wait:300});
  const r=a.ev(`(function(){
    localStorage.setItem('r1_extra_events',JSON.stringify([{id:'ev_sem',title:'Tom & Jerry',client:'Ana "B" <i>',venue:'Sítio',type:'Casamento',date:'2030-01-10',status:'Confirmado',guests:10}]));
    const o={};
    try{const d=document.createElement('div');d.innerHTML=eventsView();const c=[...d.querySelectorAll('[data-event-card]')].find(x=>/Tom/.test(x.textContent));
      o.busca=c?c.getAttribute('data-event-search'):null;o.titulo=c?c.textContent.includes('Tom & Jerry'):false}catch(e){o.erro=String(e)}
    o.esc0=esc(0);o.escL=[escL(0),escL(''),escL(null),escL('<')];
    return o})()`);
  L.check('busca: texto minúsculo, escapado uma única vez',r.busca&&r.busca.startsWith('tom & jerry ana "b" <i>')&&!r.busca.includes('&amp;'),JSON.stringify(r));
  L.check('busca: nome com & aparece correto no card',r.titulo===true);
  L.check('esc(0) mostra "0"',r.esc0==='0');
  L.check('escL preserva falsy e escapa truthy',r.escL[0]===0&&r.escL[1]===''&&r.escL[2]===null&&r.escL[3]==='&lt;',JSON.stringify(r.escL));
  const f=a.ev(`(function(){const d=document.createElement('div');d.innerHTML=finTotalsBar(1000,400,'Mês');return d.textContent.replace(/\\s+/g,' ')})()`);
  L.check('finTotalsBar: totais corretos e sem "false"/"undefined"',/Receitas/.test(f)&&!/false|undefined|NaN/.test(f),f.slice(0,160));
  const st=require('fs').readFileSync(__dirname+'/../js/app.js','utf8');
  L.check('sem soma numérica escapada ("esc(i)+1")',!/esc\((i|j|k)\)\+1/.test(st));
  return L.summary('semântica');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

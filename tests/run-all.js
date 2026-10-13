// Roda toda a suíte. Uso: npm install && npm test   (ou: JSDOM_PATH=/caminho/com/node_modules node run-all.js)
const suites=[['estático','./t-estatico'],['financeiro','./t-financeiro'],['diálogos','./t-dialogs'],['licença','./t-license'],['navegação','./t-smoke'],['semântica','./t-semantica'],['manual','./t-manual'],['vazio','./t-vazio'],['XSS','./t-xss']];
(async()=>{let tp=0,tf=0;const falhas=[];const t0=Date.now();
 for(const [nome,mod] of suites){
  const L=require('./lib.js');
  try{const r=await require(mod).run();tp+=r.pass;tf+=r.fail;r.fails.forEach(f=>falhas.push(nome+': '+f))}
  catch(e){tf++;falhas.push(nome+': EXCEÇÃO '+e.message);console.log('EXCEÇÃO em',nome,e.stack)}
 }
 console.log(`\n=== TOTAL: ${tp} verificações ok, ${tf} falhas (${Math.round((Date.now()-t0)/1000)}s) ===`);
 falhas.forEach(f=>console.log(' - '+f));
 process.exit(tf?1:0)})();

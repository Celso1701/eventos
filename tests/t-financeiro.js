// Financeiro: barra "Por mês" (Previsto no mês / Realizado no mês) e totais.
const L=require('./lib.js');
async function run(){
  L.reset();
  const a=await L.loadApp({wait:300});
  const out=a.ev(`(function(){
    const now=new Date(),ym=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');const nx=new Date(now.getFullYear(),now.getMonth()+1,15);const ym2=nx.getFullYear()+'-'+String(nx.getMonth()+1).padStart(2,'0');
    const L=[{tipo:'rec',valorCent:1350000,data:ym+'-25',dataReal:ym+'-03'},{tipo:'rec',valorCent:2100000,data:ym+'-28'},{tipo:'desp',valorCent:50000,data:ym+'-27',dataReal:ym+'-05'},{tipo:'rec',valorCent:1050000,data:ym2+'-10'}];
    return [0,1].map(m=>{const h=finMesBody('x',L,{mOff:m});const d=document.createElement('div');d.innerHTML=h;return d.textContent.replace(/\\s+/g,' ')});
  })()`);
  const has=(s,t)=>s.includes(t);
  L.check('mês atual: rótulo "Previsto no mês"',has(out[0],'Previsto no mês'));
  L.check('mês atual: não existe mais o rótulo solto "Saldo"',!/\bSaldo\b/.test(out[0].replace('Saldo do dia','')),out[0].slice(0,120));
  L.check('mês atual: Previsto = R$ 21.000,00',/Previsto no mês\s*R\$ 21\.000,00/.test(out[0]),out[0].slice(0,160));
  L.check('mês atual: linha "Realizado no mês" presente',has(out[0],'Realizado no mês'));
  L.check('mês atual: Recebido R$ 13.500,00',/Recebido\s*R\$ 13\.500,00/.test(out[0]));
  L.check('mês atual: Pago R$ 500,00',/Pago\s*R\$ 500,00/.test(out[0]));
  L.check('mês atual: Realizado = R$ 13.000,00',/Realizado no mês\s*R\$ 13\.000,00/.test(out[0]),out[0].slice(0,300));
  L.check('próximo mês: Previsto R$ 10.500,00',/Previsto no mês\s*R\$ 10\.500,00/.test(out[1]));
  L.check('próximo mês: Realizado R$ 0,00',/Realizado no mês\s*R\$ 0,00/.test(out[1]));
  return L.summary('financeiro');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

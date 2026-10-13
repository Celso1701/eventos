// Utilitários de teste do RIZZIERI ONE: carrega o app no jsdom com polyfill de <dialog>.
const fs=require('fs'),path=require('path');
function req(m){try{return require(m)}catch(e){if(process.env.JSDOM_PATH)return require(path.join(process.env.JSDOM_PATH,'node_modules',m));throw e}}
const {JSDOM,VirtualConsole}=req('jsdom');
const ROOT=path.resolve(__dirname,'..');
const PREVIEW=path.join(ROOT,'..','preview-standalone.html');
function buildHtml(jsOverride,pubJwk){
  // Monta o HTML único a partir de index.html + css + js (mesmo que tools/build-preview.py)
  const g=ROOT;let h=fs.readFileSync(path.join(g,'index.html'),'utf8');
  const css=fs.readFileSync(path.join(g,'css/app.css'),'utf8'),js=jsOverride?fs.readFileSync(jsOverride,'utf8'):fs.readFileSync(path.join(g,'js/app.js'),'utf8');
  let js2=null;
  h=h.replace('<link rel="stylesheet" href="./css/app.css"/>',()=>'<style>'+css+'</style>');
  let jsx=js;if(pubJwk){const n=jsx.replace(/const PLAN_PUBKEY=\{[^}]*\};/,()=>'const PLAN_PUBKEY='+JSON.stringify(pubJwk)+';');if(n===jsx)throw new Error('PLAN_PUBKEY nao encontrada');jsx=n}
  h=h.replace(/\s*<meta http-equiv="Content-Security-Policy"[^>]*>/,'');
  h=h.replace('<script src="./js/app.js"></script>',()=>'<script>'+jsx+'</script>');return h;
}
async function loadApp(opts={}){
  const errs=[];const vc=new VirtualConsole();
  vc.on('jsdomError',e=>{if(!/scrollTo|not implemented/i.test(e.message))errs.push(String(e.message).slice(0,200))});
  const dom=new JSDOM(buildHtml(opts.appJs||process.env.APP_JS,opts.pubJwk),{runScripts:'dangerously',pretendToBeVisual:true,url:opts.url||'http://localhost/',virtualConsole:vc,
    beforeParse(w){
      const P=w.HTMLDialogElement&&w.HTMLDialogElement.prototype;
      if(P){P.showModal=function(){this.setAttribute('open','')};P.show=P.showModal;P.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'))}}
      w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=function(){};
      w.matchMedia=w.matchMedia||(()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}));
      if(!w.crypto||!w.crypto.subtle){const wc=require('crypto').webcrypto;Object.defineProperty(w,'crypto',{value:wc,configurable:true})}
      if(!w.TextEncoder){w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder}
      w.URL.createObjectURL=()=>'blob:teste';w.URL.revokeObjectURL=()=>{};w.print=()=>{};
      w.alert=()=>{};w.open=()=>null;
      w.__nativeDialogs=[];w.confirm=m=>{w.__nativeDialogs.push('confirm:'+m);return opts.confirmAnswer!==undefined?opts.confirmAnswer:true};
      w.prompt=m=>{w.__nativeDialogs.push('prompt:'+m);return null};
      if(opts.seed)for(const k in opts.seed)w.localStorage.setItem(k,typeof opts.seed[k]==='string'?opts.seed[k]:JSON.stringify(opts.seed[k]));
    }});
  const w=dom.window,d=w.document;
  await sleep(opts.wait||400);
  const login=d.querySelector('#loginForm');
  if(login&&opts.login!==false){login.dispatchEvent(new w.Event('submit',{cancelable:true,bubbles:true}));await sleep(60)}
  return {dom,w,d,errs,ev:code=>w.eval(code),sleep,click:async el=>{el.click();await sleep(15)}};
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
// Contador de verificações
let pass=0,fail=0;const fails=[];
function check(name,cond,extra){if(cond){pass++}else{fail++;fails.push(name+(extra?' -> '+extra:''));console.log('  FALHOU:',name,extra||'')}}
function summary(label){console.log(`${label}: ${pass} ok, ${fail} falhas`);return{pass,fail,fails}}
function reset(){pass=0;fail=0;fails.length=0}
module.exports={loadApp,check,summary,reset,sleep,ROOT,buildHtml};

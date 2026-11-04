// Verificações estáticas do pacote: CSP, sem handlers inline, sem eval, sem recursos externos, versões coerentes.
const fs=require('fs'),path=require('path'),L=require('./lib.js');
async function run(){
  L.reset();
  const R=L.ROOT,rd=f=>fs.readFileSync(path.join(R,f),'utf8');
  const idx=rd('index.html'),js=rd('js/app.js'),css=rd('css/app.css'),sw=rd('sw.js'),readme=rd('README.md'),man=JSON.parse(rd('manifest.json'));
  const csp=(idx.match(/Content-Security-Policy"\s+content="([^"]+)"/)||[])[1]||'';
  L.check('index.html tem Content-Security-Policy',!!csp);
  L.check('CSP: scripts só do próprio site (sem unsafe-inline/eval)',/script-src 'self'(;|$)/.test(csp)&&!/script-src[^;]*unsafe/.test(csp),csp);
  L.check("CSP: object-src 'none', base-uri e form-action restritos",/object-src 'none'/.test(csp)&&/base-uri 'self'/.test(csp)&&/form-action 'self'/.test(csp));
  L.check('CSP: conexões só para o próprio site e https://*.supabase.co',/connect-src 'self'( https:\/\/\*\.supabase\.co)?;/.test(csp));
  L.check('sem scripts inline no index.html',![...idx.matchAll(/<script\b([^>]*)>/g)].some(m=>!/\bsrc=/.test(m[1])&&!/type="application\/ld\+json"/.test(m[1])));
  L.check('SEO: título, descrição, canonical, Open Graph, JSON-LD válido',/<title>[^<]{30,}<\/title>/.test(idx)&&/name="description" content="[^"]{80,}/.test(idx)&&/rel="canonical" href="https:\/\/www\.diadoevento\.com\.br\/"/.test(idx)&&/property="og:title"/.test(idx)&&(()=>{try{const j=JSON.parse(idx.match(/application\/ld\+json">([\s\S]*?)<\/script>/)[1]);return j['@type']==='SoftwareApplication'}catch(e){return false}})());
  {const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..');const rb=fs.existsSync(path.join(root,'robots.txt'))?fs.readFileSync(path.join(root,'robots.txt'),'utf8'):'',sm=fs.existsSync(path.join(root,'sitemap.xml'))?fs.readFileSync(path.join(root,'sitemap.xml'),'utf8'):'';L.check('SEO: robots.txt libera tudo e aponta o sitemap; sitemap lista a home',/Allow: \//.test(rb)&&/Sitemap: https:\/\/www\.diadoevento\.com\.br\/sitemap\.xml/.test(rb)&&/<loc>https:\/\/www\.diadoevento\.com\.br\/<\/loc>/.test(sm))}
  L.check('sem atributos on*="" (handlers inline) no HTML e no JS',!/\son(click|change|input|submit|load|error|mouseover|focus|keydown)=["']/.test(idx)&&!/\son(click|change|input|submit|load|error|mouseover|focus|keydown)=\\?["']/.test(js));
  L.check('sem javascript: nem eval/new Function no JS',!/javascript:/.test(js)&&!/\beval\(/.test(js)&&!/new Function\(/.test(js));
  const lkIni=js.indexOf('/* ═══ Registro em uso'),lkFim=js.indexOf('baseModeInit();',lkIni),fora=lkIni>0?js.slice(0,lkIni)+js.slice(lkFim):js;
  L.check('sem fetch/XMLHttpRequest/WebSocket fora da camada opcional do Supabase (app local por padrão)',!/\bfetch\(|XMLHttpRequest|new WebSocket|sendBeacon/.test(fora));
  L.check('rede só quando o Supabase é conectado e só para https://….supabase.co',/lkMode\(\)==='sb'/.test(js)&&/\^https:\\\/\\\/\[a-z0-9-\]\+\\\.supabase\\\.co\$/.test(js));
  L.check('nenhum recurso externo carregado (script/link/img src http)',!/(src|href)=["']https?:\/\/(?!wa\.me)/.test(idx.replace(/<link rel="canonical"[^>]*>/,''))&&!/url\(["']?https?:/.test(css));
  L.check('nenhuma caixa nativa confirm/alert/prompt no JS',!/(^|[^.\w])(confirm|alert|prompt)\(/.test(js.replace(/\/\/.*$/gm,'')));
  // versões
  const ver=(js.match(/const APP_VERSION='V:([\d.]+)'/)||[])[1];
  L.check('APP_VERSION definida',!!ver,String(ver));
  L.check('sw.js usa a mesma versão',sw.includes('v'+ver),sw.split('\n')[0]);
  L.check('README cita a mesma versão',readme.includes('V:'+ver));
  L.check('index.html cita a mesma versão',idx.includes('V:'+ver));
  const jsSemComentarios=js.replace(/\/\*[\s\S]*?\*\//g,'');
  L.check('nenhuma versão antiga sobrando no app.js (fora de comentários)',!(jsSemComentarios.match(/V:1\.\d+\.\d+/g)||[]).some(v=>v!=='V:'+ver),[...new Set(jsSemComentarios.match(/V:1\.\d+\.\d+/g)||[])].join(','));
  // PWA
  L.check('manifest com nome, start_url e 3 ícones',man.name&&man.start_url&&man.icons.length===3);
  man.icons.forEach(i=>L.check('ícone existe: '+i.src,fs.existsSync(path.join(R,i.src))));
  const assets=[...sw.matchAll(/'(\.\/[^']*)'/g)].map(m=>m[1]).filter(x=>x!=='./');
  assets.forEach(x=>L.check('arquivo do cache offline existe: '+x,fs.existsSync(path.join(R,x))));
  // o que NÃO pode ir para o repositório público
  const files=[];(function w(d){fs.readdirSync(d,{withFileTypes:true}).forEach(e=>{const p=path.join(d,e.name);e.isDirectory()?w(p):files.push(path.relative(R,p))})})(R);
  L.check('repositório sem gerador de códigos nem chave privada',!files.some(f=>/gerador|priv|\.jwk|\.pem|\.key$/i.test(f)),files.filter(f=>/gerador|priv|jwk|pem/i.test(f)).join(','));
  L.check('JS não contém chave privada (campo "d" de JWK)',!/"d"\s*:\s*"[A-Za-z0-9_-]{40,}"/.test(js));
  L.check('chave pública presente no app (EC P-256)',/const PLAN_PUBKEY=\{"kty":\s*"EC",\s*"crv":\s*"P-256"/.test(js));
  L.check('código antigo por checksum removido',!/RIZZIERIONEPRO/.test(js));
  return L.summary('estático');
}
module.exports={run};
if(require.main===module)run().then(r=>process.exit(r.fail?1:0));

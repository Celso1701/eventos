// E2E em navegador real (Chromium/Playwright): gerador -> código -> ativação no app com CSP ligada.
// Uso: node e2e-browser.js <url-do-app> <caminho-do-gerador.html>      (o gerador NÃO faz parte do repositório)
const PW=process.env.PLAYWRIGHT_PATH||'playwright';
const {chromium}=require(PW);
const URL_APP=process.argv[2]||'http://localhost:8771/index.html',GERADOR=process.argv[3];
let ok=0,bad=0;const chk=(n,c,x)=>{if(c)ok++;else{bad++;console.log('  FALHOU:',n,x||'')}};
(async()=>{
 const b=await chromium.launch({args:['--no-sandbox'],executablePath:process.env.CHROME_PATH||undefined});
 const ctx=await b.newContext({viewport:{width:430,height:900}});const page=await ctx.newPage();
 const viol=[];page.on('console',m=>{if(/Content Security Policy|Refused to/i.test(m.text()))viol.push(m.text().slice(0,160))});
 const errs=[];page.on('pageerror',e=>errs.push(e.message));
 await page.goto(URL_APP);await page.waitForTimeout(600);
 // teste grátis já vencido + perfil + senha simulada (o fluxo de senha já é coberto em outros testes)
 await page.evaluate(()=>{localStorage.setItem('r1_trial',JSON.stringify({active:false,startedAt:'2000-01-01',expiresAt:'2000-01-01'}));localStorage.setItem('rizzieri_trial_used','1');localStorage.setItem('r1_consultor_profile',JSON.stringify({nome:'Teste',telefone:'(11) 99999-9999'}))});
 await page.reload();await page.waitForTimeout(600);
 await page.click('#loginForm .btn-primary, #loginForm button[type=submit]').catch(()=>{});await page.waitForTimeout(700);
 const dev=await page.evaluate(()=>planDevId());chk('ID do aparelho gerado',/^[A-Z0-9]{4}$/.test(dev),dev);
 // gerador (chave privada real) em outra aba
 let code='';
 if(GERADOR){
  const g=await ctx.newPage();await g.goto('file://'+GERADOR);
  await g.fill('#dev','AP-'+dev);await g.selectOption('#plano','1');await g.click('#gen');await g.waitForTimeout(400);
  code=(await g.textContent('#out')).trim();chk('gerador devolve código longo (≈140 caracteres com hífens)',code.length>=130&&code.length<=150,String(code.length));
  // formato do link
  await g.fill('#site','https://exemplo.github.io/rizzieri/');
  await g.close();
 }
 // ativação pela interface
 await page.evaluate(()=>{window.hasPassword=()=>true;showProDialog('')});await page.waitForTimeout(200);
 await page.fill('#proCode',code);await page.click('#proActivateBtn');await page.waitForTimeout(900);
 const st=await page.evaluate(()=>{const s=planState();return{pro:s.pro,dias:s.diasPro}});
 chk('ativou o Pro pela tela',st.pro===true,JSON.stringify(st));chk('≈ 1 mês de validade',st.dias>=28&&st.dias<=31,String(st.dias));
 // recarrega: verificação real de assinatura no boot
 await page.reload();await page.waitForTimeout(700);
 await page.click('#loginForm .btn-primary, #loginForm button[type=submit]').catch(()=>{});await page.waitForTimeout(900);
 chk('continua Pro depois de recarregar (assinatura reconferida)',await page.evaluate(()=>planState().pro));
 // adultera o vencimento
 await page.evaluate(()=>{const l=JSON.parse(localStorage.getItem('r1_license'));l.expiresAt='2099-12-31';localStorage.setItem('r1_license',JSON.stringify(l))});
 await page.reload();await page.waitForTimeout(700);
 await page.click('#loginForm .btn-primary, #loginForm button[type=submit]').catch(()=>{});await page.waitForTimeout(900);
 const exp=await page.evaluate(()=>(JSON.parse(localStorage.getItem('r1_license')||'{}')).expiresAt);
 chk('vencimento adulterado é corrigido no boot',exp&&exp<'2030-01-01',String(exp));
 // forja total
 await page.evaluate(()=>localStorage.setItem('r1_license',JSON.stringify({pro:true,expiresAt:'2099-12-31'})));
 await page.reload();await page.waitForTimeout(700);
 await page.click('#loginForm .btn-primary, #loginForm button[type=submit]').catch(()=>{});await page.waitForTimeout(900);
 chk('licença forjada é derrubada',await page.evaluate(()=>!planState().pro));
 chk('nenhuma violação de CSP',viol.length===0,viol.join(' | '));
 chk('nenhum erro de JavaScript',errs.length===0,errs.join(' | '));
 console.log(`e2e navegador: ${ok} ok, ${bad} falhas`);await b.close();process.exit(bad?1:0);
})().catch(e=>{console.log('FALHA E2E',e.message);process.exit(1)});

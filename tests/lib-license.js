// Gera códigos Pro de TESTE com um par de chaves descartável (a chave real nunca entra nos testes).
const {webcrypto:C}=require('crypto');
const EPOCH=Date.UTC(2026,0,1),B32='ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
function b32(bytes){let bits=0,val=0,o='';for(const b of bytes){val=(val<<8)|b;bits+=8;while(bits>=5){bits-=5;o+=B32[(val>>bits)&31];val&=(1<<bits)-1}}if(bits>0)o+=B32[(val<<(5-bits))&31];return o}
async function newKeys(){
  const k=await C.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},true,['sign','verify']);
  const pub=await C.subtle.exportKey('jwk',k.publicKey);
  return{pub:{kty:pub.kty,crv:pub.crv,x:pub.x,y:pub.y},priv:k.privateKey};
}
// diasAtras: quantos dias atrás o código foi "gerado" (para testar a janela de ativação)
async function makeCode(priv,dev,idx=1,diasAtras=0){
  const now=new Date(),local=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
  const days=Math.round((local-EPOCH)/86400000)-diasAtras;
  const msg=new Uint8Array(10);msg[0]=1;for(let i=0;i<4;i++)msg[1+i]=dev.charCodeAt(i);
  msg[5]=idx;msg[6]=(days>>8)&255;msg[7]=days&255;C.getRandomValues(msg.subarray(8,10));
  const sig=new Uint8Array(await C.subtle.sign({name:'ECDSA',hash:'SHA-256'},priv,msg));
  const all=new Uint8Array(74);all.set(msg,0);all.set(sig,10);
  return b32(all).replace(/(.{6})(?=.)/g,'$1-');
}
module.exports={newKeys,makeCode};

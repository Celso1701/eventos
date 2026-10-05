# RIZZIERI ONE — V:1.06.0

PWA "Life, Business & Projects" — central única para projetos, eventos, financeiro e vida pessoal em quatro workspaces (Negócios, Eventos, Pessoal, Ideias).

## Estrutura deste repositório

```
index.html          página única do app
css/app.css          todo o estilo (extraído do protótipo de arquivo único)
js/app.js             toda a lógica (extraído do protótipo de arquivo único)
manifest.json        manifesto do PWA
sw.js                 service worker (cache offline básico)
assets/icons/         ícones do PWA (gerados agora — ver nota abaixo)
SECURITY.md           arquitetura de segurança necessária para uso em produção
```

Esta é a mesma versão testada do `preview-standalone.html` (arquivo único), só que dividida em
`index.html` + `css/app.css` + `js/app.js` — estrutura padrão para publicar como site no GitHub Pages
e mais fácil de acompanhar por diff em cada versão.

## Como publicar no GitHub Pages

```
git init
git add .
git commit -m "RIZZIERI ONE V:1.06.0"
git remote add origin <seu-repositorio>
git push -u origin main
```

Depois, em **Settings → Pages**, escolha a branch `main` e a pasta raiz (`/`). O site fica em
`https://<seu-usuario>.github.io/<repositorio>/`.

## Sobre os ícones

Os `assets/icons/*.png` referenciados no `manifest.json` nunca tinham sido enviados — o app funcionava,
mas não tinha ícone real para instalar como PWA. Gerei três ícones simples (fundo `#071624`, emblema "R1")
só para o manifesto parar de apontar para arquivos inexistentes. Se você já tem um logo definitivo, é só
substituir esses três arquivos (mesmos nomes e tamanhos: 192×192, 512×512, 512×512 maskable).

## Dados

O app guarda tudo em `localStorage` do navegador (protótipo local, sem backend — ver `SECURITY.md` para o
que muda em produção). Use **Ajustes → Ajuda → Baixar backup (.json)**, dentro do próprio app, antes de
trocar de navegador/aparelho ou de atualizar os arquivos.

## Versão

V:1.06.0 — auditoria e changelog completos em `AUDITORIA-V1.06.0.txt` (na entrega anterior, fora deste
repositório) e nas conversas anteriores.

## Direitos autorais

Todos os direitos reservados. Ver arquivo `LICENSE`. O repositório é público apenas para permitir a
hospedagem gratuita via GitHub Pages — isso não autoriza uso, cópia ou redistribuição do código.


## Senha de acesso (opcional) e criptografia local
- Em **Ajustes → Segurança** você pode criar uma senha. Com ela, todos os dados do app (eventos, clientes, financeiro, convidados…) ficam **criptografados neste aparelho** (PBKDF2 com 150.000 iterações + AES-256-GCM). A senha nunca é gravada; o app só guarda uma "prova" cifrada pra conferir.
- Regra da senha (igual ao corsyncimoveis): de 4 a 50 caracteres, com 1 maiúscula, 1 minúscula, 1 número e 1 símbolo. Errou 5 vezes: espera 30 segundos.
- **Sem a senha os dados não podem ser recuperados.** Ao criar, o app oferece mandar uma cópia pro seu próprio WhatsApp (a mensagem leva a senha em texto — guarde com cuidado).
- O backup (Ajustes → Backup) é um arquivo legível, sem a senha, a licença nem o ID do aparelho. Guarde-o em local seguro.

## Plano: teste grátis de 30 dias e Pro
- Na primeira abertura começa o **teste grátis de 30 dias** com tudo liberado. Depois do teste o app fica só para consulta por 1 dia e então pede o código Pro (com opção de baixar um backup antes). **Nada é apagado.**
- O **Pro de 1 mês custa R$ 90,00** e é assinado pelo WhatsApp. O código tem o formato `RZ-XXXX-0000`, é gerado para o **ID do aparelho** (Ajustes → Plano) e só funciona nele.
- Quem gera os códigos usa o arquivo `gerador-codigo-pro-rizzieri.html` (fica **fora** da pasta `github/` — não publique).
- A licença e o teste não entram no backup.

# RIZZIERI ONE — V:1.25.1

PWA "Life, Business & Projects" — central única para projetos, eventos, financeiro e vida pessoal em quatro workspaces (Negócios, Eventos, Pessoal, Ideias).

## Estrutura deste repositório

```
index.html          página única do app
css/app.css          todo o estilo
js/app.js             toda a lógica
manifest.json        manifesto do PWA
sw.js                 service worker (cache offline básico)
assets/icons/         ícones do PWA
SECURITY.md           arquitetura de segurança necessária para uso em produção
```

É a mesma versão testada do `preview-standalone.html` (arquivo único), só que dividida em `index.html` + `css/app.css` + `js/app.js` — estrutura padrão para publicar como site no GitHub Pages.

## Como publicar no GitHub Pages

```
git init
git add .
git commit -m "RIZZIERI ONE V:1.25.1"
git remote add origin <seu-repositorio>
git push -u origin main
```

Depois, em **Settings → Pages**, escolha a branch `main` e a pasta raiz (`/`). O site fica em `https://<seu-usuario>.github.io/<repositorio>/`.

## Principais recursos do workspace Eventos

- **Hub do evento**, na ordem de produção: 🍽️ Degustação → ✓ Checklist → ⭐ Aprovação do cliente → ⏱ Cronograma → 🎟 Convidados → 🪑 Mapa de mesas → 🔗 Portal do cliente → 👥 Fornecedores deste evento → ◈ Financeiro.
- **Degustações (várias por evento):** cada uma com tipo (cardápio/buffet, bebidas, doces e bolo, outro), data, horário, fornecedor, cardápio, observações, arquivo (foto ou PDF de até 1 MB) e botões **Aprovado Sim/Não**. Fornecedor e cardápio têm busca (e permitem incluir o que não existe).
- **Checklist:** cada degustação vira um item do grupo "Degustação", que aparece primeiro e é concluído quando ela é aprovada (marcar o item no checklist também aprova a degustação).
- **Aprovação do cliente de 0 a 10** em todos os itens (degustações, checklist, itens escolhidos do catálogo e cronograma), com tela própria, média no resumo do evento e nos PDFs.
- **Convidados:** status com texto (Confirmado / Pendente / Recusado) e escolha da mesa ao cadastrar (um, vários ou importando planilha).
- **Mapa de mesas:** o nome de quem está na mesa aparece na linha do título (✓ confirmado, ✕ recusou); mesa vazia oferece "Escolher convidado" (abre a lista de convidados do evento, com busca) ou "Manter vazia"; também dá para arrastar ou usar o menu de cada convidado.
- **Fornecedores deste evento:** só quem está ligado ao evento (itens de catálogo escolhidos, degustações, despesas do evento e os que você incluir à mão), com busca, PDF e etiquetas de origem.
- **Novo evento** já pergunta a quantidade de mesas e cria Mesa 1…N no Mapa de mesas.
- **Financeiro do evento:** receitas, despesas e fluxo de caixa só do evento, com o nome dele em destaque; plano de pagamento, orçamento em PDF e histórico de alterações.
- **Projetos (workspace Negócios):** cada cartão tem Hub, Editar, Abrir e **Excluir** (com confirmação; o roadmap do projeto sai junto e os lançamentos financeiros ficam).
- **Tutorial guiado pelos botões:** na Central de Aprendizado cada rotina mostra o "Caminho dos botões" e o botão "👆 Guiar pelos botões": o app destaca, um por vez, os botões reais que você toca até chegar na rotina (celular e computador, de qualquer workspace).

## Sobre os ícones

Os `assets/icons/*.png` são ícones simples (fundo `#071624`, emblema "R1"). Se você já tem um logo definitivo, substitua os três arquivos (mesmos nomes e tamanhos: 192×192, 512×512, 512×512 maskable).

## Dados

O app guarda tudo em `localStorage` do navegador (protótipo local, sem backend — ver `SECURITY.md` para o que muda em produção). Os arquivos anexados às degustações também ficam ali e **ocupam o espaço limitado do navegador** (cerca de 5 MB no total): se o aparelho avisar "sem espaço", faça um backup e remova anexos grandes. Use **Ajustes → Backup**, dentro do próprio app, antes de trocar de navegador/aparelho ou de atualizar os arquivos.

## Versão

V:1.25.1 — auditoria e lista do que mudou em `LEIA-ISTO-V1.25.1.txt` (na entrega, fora deste repositório).

## Direitos autorais

Todos os direitos reservados. Ver arquivo `LICENSE`. O repositório é público apenas para permitir a hospedagem gratuita via GitHub Pages — isso não autoriza uso, cópia ou redistribuição do código.

## Senha de acesso (opcional) e criptografia local

- Em **Ajustes → Segurança** você pode criar uma senha. Com ela, todos os dados do app (eventos, clientes, financeiro, convidados…) ficam **criptografados neste aparelho** (PBKDF2 com 150.000 iterações + AES-256-GCM). A senha nunca é gravada; o app só guarda uma "prova" cifrada pra conferir.
- Regra da senha: de 4 a 50 caracteres, com 1 maiúscula, 1 minúscula, 1 número e 1 símbolo. Errou 5 vezes: espera 30 segundos.
- **Sem a senha os dados não podem ser recuperados.** Ao criar, o app oferece mandar uma cópia pro seu próprio WhatsApp (a mensagem leva a senha em texto — guarde com cuidado).
- O backup (Ajustes → Backup) é um arquivo legível, sem a senha, a licença nem o ID do aparelho. Guarde-o em local seguro.

## Plano: teste grátis de 30 dias e Pro

- Na primeira abertura começa o **teste grátis de 30 dias** com tudo liberado. Depois do teste o app fica só para consulta por 1 dia e então pede o código Pro (com opção de baixar um backup antes). **Nada é apagado.**
- O **Pro de 1 mês custa R$ 90,00** e é assinado pelo WhatsApp. O código tem o formato `RZ-XXXX-0000`, é gerado para o **ID do aparelho** (Ajustes → Plano) e só funciona nele.
- Quem gera os códigos usa o arquivo `gerador-codigo-pro-rizzieri.html` (fica **fora** da pasta `github/` — não publique).
- A licença e o teste não entram no backup.

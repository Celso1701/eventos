RIZZIERI ONE v0.6 — Agenda Universal

# RIZZIERI ONE — v0.4 (codename)

Protótipo PWA do ecossistema universal de organização e gestão.

## Foco da v0.4
Esta versão transforma os workspaces em ambientes executáveis e melhora a interface para um visual mais claro, profissional e comercial.

### Workspaces reais
- **Negócios** — azul: projetos, clientes, financeiro, estratégia, administração e segurança.
- **Eventos** — cobre: eventos, clientes, fornecedores, catálogo, financeiro, apresentações e contratos.
- **Pessoal** — verde/teal: objetivos, rotina, agenda, finanças pessoais e documentos.
- **Ideias** — violeta: incubadora, canvas, validação, roadmap e decisões.

Ao trocar de workspace, o menu, o conteúdo da Home, os atalhos, o botão “Novo” e a cor dos blocos mudam de contexto.

## Catálogo comercial executável
- filtros por categoria funcionando;
- contador de resultados;
- detalhe do item em modal;
- seleção do evento;
- inclusão no projeto do evento;
- inclusão demonstrativa em apresentação;
- cadastro de novos itens com imagem de capa.

## Interface
- fundo geral claro;
- tipografia revisada com stack Aptos / Segoe UI / Inter;
- ícones vetoriais SVG internos, sem dependência externa;
- cores por workspace;
- cards, menus e botões refinados;
- responsividade para desktop, tablet e celular.

## Cadastros demonstrativos adicionais
- novos projetos;
- objetivos pessoais;
- rotinas;
- compromissos;
- finanças pessoais;
- documentos pessoais;
- hipóteses de validação;
- decisões.

## Atenção sobre dados
A versão standalone usa `localStorage` apenas para demonstrar fluxos. Não deve receber dados reais/confidenciais em produção. A versão comercial deve usar backend autenticado, RLS, Storage privado, MFA, trilha de auditoria e as práticas descritas em `SECURITY.md`.

## Execução
Para produção, publique a pasta inteira em HTTPS. O arquivo `preview-standalone.html` é uma versão de demonstração em arquivo único para navegação rápida.

## Tutorial guiado (v0.5)
A aplicação agora inclui uma Central de Aprendizado acessível pelo botão **Tutorial completo** na barra lateral ou pelo ícone de ajuda no topo.

Os tutoriais são interativos: ao iniciar um roteiro, o sistema muda para o workspace correto, abre a tela necessária, destaca o controle relevante e apresenta instruções passo a passo. O usuário pode preencher os formulários reais durante o treinamento. O progresso dos tutoriais é salvo localmente no navegador do protótipo.

Tutoriais disponíveis nesta fase: tour essencial, identidade da empresa e PDFs, clientes, fornecedores, eventos, checklist, cronograma, catálogo, apresentações, financeiro, contratos/PDF, projetos/apps, workspace Pessoal, workspace Ideias e segurança/privacidade.

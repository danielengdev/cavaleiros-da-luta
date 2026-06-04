# Plano de Implementacao

## Objetivo

Organizar a implementacao dos documentos SDD em uma estrutura coerente com o projeto Angular, separando componentes reutilizaveis em shared e a composicao da Home em feature.

## Diretriz estrutural

- Itens 01 a 06 devem ser implementados em uma pasta shared.
- Item 07 deve ser implementado em uma pasta feature.
- A Home deve importar e orquestrar os componentes shared, concentrando apenas composicao, fluxo da tela e integracao entre blocos.
- O app deve possuir um shell principal com barra superior fixa, barra inferior fixa e `router-outlet` central para carregar as rotas principais.

## Mapeamento de implementacao

### Shared

- Shell principal de layout
  - responsabilidade: manter cabecalho superior, navegacao inferior e regiao central de roteamento persistentes
  - sugestao de componente: shared/components/app-shell

- 01 Feature barra no topo
  - responsabilidade: cabecalho superior com menu, saudacao, nome e avatar
  - sugestao de componente: shared/components/top-bar

- 02 Feature data
  - responsabilidade: bloco de data formatada logo abaixo do cabecalho
  - sugestao de componente: shared/components/current-date

- 03 Feature carousel
  - responsabilidade: vitrine de banners com indicadores
  - sugestao de componente: shared/components/home-carousel

- 04 Feature servicos
  - responsabilidade: secao de servicos e grade de cards
  - sugestao de componentes: shared/components/services-section e shared/components/service-card

- 05 Feature perfil
  - responsabilidade: modelo visual e dados resumidos do usuario reutilizados por header e navegacao
  - sugestao de artefatos: shared/models/profile, shared/components/profile-avatar

- 06 Feature notificacoes
  - responsabilidade: item de navegacao e estado resumido de notificacoes
  - sugestao de componente: shared/components/notifications-tab

### Feature

- 07 Feature home
  - responsabilidade: montar a tela principal e integrar os componentes shared
  - sugestao de local: feature/home
  - sugestao de artefatos: page component, container component, facade ou service de orquestracao

## Ordem recomendada

1. Implementar os modelos e contratos compartilhados de perfil, banner, servico e notificacao.
2. Implementar o shell principal com barra no topo, barra inferior e regiao central de roteamento.
3. Implementar os componentes shared mais simples: barra no topo e data.
4. Implementar carousel com dados mockados e fallback visual.
5. Implementar secao de servicos e card de servico.
6. Implementar artefatos compartilhados de perfil e notificacoes para alimentar header e navegacao.
7. Implementar a feature Home compondo apenas o conteudo central.
8. Integrar roteamento, estados de carregamento e dados reais.

## Responsabilidades por camada

- Shared
  - conter componentes apresentacionais e blocos reutilizaveis
  - receber dados por input ou servicos leves de apoio
  - evitar regra de orquestracao da tela completa

- Feature
  - controlar composicao do conteudo central da Home
  - coordenar carregamento dos dados da pagina
  - decidir ordem visual, fallback e navegacao entre blocos

## Dependencias tecnicas sugeridas

- modelos tipados para banner, servico, perfil e notificacao
- service ou facade para prover dados da Home
- integracao com router para Perfil, Notificacoes e catalogo de servicos
- mocks iniciais para acelerar desenvolvimento visual

## Checklist de entrega

- componentes 01 a 06 criados em shared
- Home criada em feature consumindo shared
- layout mobile aderente a referencia visual
- estados vazio, loading e fallback mapeados
- navegacao principal funcionando

## Criterios de pronto

- Nenhum componente shared depende diretamente da Home para funcionar.
- A Home consegue montar a tela apenas compondo as features compartilhadas.
- A troca de dados mockados para dados reais nao exige refatoracao estrutural dos componentes.
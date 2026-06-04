# Feature - Home

## Visao geral

Tela principal do aplicativo, composta pela orquestracao das features de barra no topo, data, carousel, servicos, perfil e notificacoes.

## Objetivo

Oferecer uma entrada central para o usuario autenticado, reunindo contexto, comunicacao visual e acessos rapidos aos servicos mais importantes.

## Escopo

Inclui:

- composicao das features de cabecalho
- data atual
- banner em carousel
- secao de servicos
- barra inferior com abas de Inicio, Perfil e Notificacoes

Nao inclui:

- detalhes profundos de cada modulo de servico
- configuracao administrativa da Home

## Requisitos funcionais

- Deve carregar as features em ordem visual coerente.
- Deve priorizar experiencia mobile first.
- Deve apresentar a aba Inicio como estado ativo por padrao.
- Deve permitir navegacao para Perfil e Notificacoes pela barra inferior.
- Deve manter a Home funcional mesmo quando uma feature secundaria falhar.

## Regras de negocio

- A Home e acessivel apenas para usuario autenticado, salvo definicao contraria de produto.
- Falhas isoladas em carousel ou servicos nao devem bloquear cabecalho e navegacao principal.
- Conteudos da Home devem respeitar perfil e permissoes do usuario quando aplicavel.

## Estrutura de interface

- barra superior fixa visualmente no topo
- data centralizada abaixo do cabecalho
- carousel principal em destaque
- secao de servicos com CTA de navegacao estendida
- barra inferior persistente com tres entradas principais

## Estilo visual de referencia

- tela mobile com fundo cinza muito claro
- composicao vertical com blocos bem separados por respiros visuais
- destaque de cor concentrado no cabecalho, nos indicadores ativos e nos icones principais
- cards e banners com cantos arredondados e sombra discreta
- navegacao inferior fixa com tres itens e estado ativo em azul
- referencia central: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Composicao de features

- Barra no topo: contexto e acessos primarios
- Data: contexto temporal
- Carousel: destaque e comunicacao
- Servicos: atalho para funcionalidades
- Perfil: identidade e conta do usuario
- Notificacoes: alertas e atualizacoes

## Estados e interacoes

- carregamento inicial da Home
- renderizacao parcial com fallbacks por feature
- interacoes de navegacao por toque
- troca de aba inferior sem perda de consistencia visual

## Dependencias

- autenticacao do usuario
- roteamento principal do app
- fontes de dados para perfil, banners, servicos e notificacoes

## Diretriz de implementacao

- Esta feature deve ser implementada na camada feature do projeto.
- A Home deve compor os componentes documentados nos itens 01 a 06, implementados em shared.
- A responsabilidade desta feature e integrar dados, estados da pagina e navegacao entre blocos.

## Criterios de aceite

- A Home renderiza todas as features definidas nesta pasta.
- A ordem visual segue a referencia da imagem.
- A navegacao inferior permite alternar entre Inicio, Perfil e Notificacoes.
- O layout permanece legivel e funcional em dispositivos moveis.

## Itens em aberto

- Definir quais dados serao mockados e quais virao da API na primeira entrega.
- Definir comportamento de cache e refresh da Home.
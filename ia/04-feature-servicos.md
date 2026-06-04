# Feature - Servicos com Lista de Cards

## Visao geral

Secao da Home responsavel por apresentar um conjunto de servicos acessiveis por meio de cards em grade.

## Objetivo

Permitir acesso rapido aos principais servicos do aplicativo por uma navegacao visual simples e previsivel.

## Escopo

Inclui:

- titulo da secao "Servicos"
- acao secundaria "Ver mais"
- grade de cards com icone e titulo
- lista resumida dos servicos prioritarios

Nao inclui:

- pagina completa do catalogo de servicos
- motores de busca avancada dentro da Home

## Requisitos funcionais

- Deve exibir cards de servico em grade responsiva.
- Cada card deve conter ao menos icone e titulo.
- Cada card deve ser clicavel.
- Deve existir CTA "Ver mais" para navegar ao catalogo completo.
- A lista inicial deve priorizar os servicos mais usados.

## Regras de negocio

- O conjunto inicial pode ser limitado por configuracao, por exemplo 6, 8 ou 9 itens.
- Servicos indisponiveis podem ser ocultados ou exibidos como desabilitados, conforme regra de produto.
- Titulos longos devem quebrar em ate duas linhas sem perder legibilidade.
- A ordenacao inicial deve seguir prioridade de negocio.

## Estrutura de interface

- cabecalho da secao com titulo e link de apoio
- grid de cards com espacamento uniforme
- cada card contendo:
  - icone ilustrativo
  - titulo do servico
  - area de toque integral

## Estilo visual de referencia

- titulo "Servicos" alinhado a esquerda e acao "Ver mais" alinhada a direita
- cards brancos com sombra suave e cantos arredondados
- grade com tres colunas em mobile largo, respeitando espacamento uniforme
- icones em azul institucional e titulos centralizados em duas linhas quando necessario
- referencia: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Modelo sugerido do card

- id
- titulo
- icone
- rota
- ordem
- habilitado
- destaque opcional

## Estados e interacoes

- estado padrao com lista carregada
- estado de carregamento com skeleton dos cards
- estado vazio com mensagem curta e CTA para catalogo
- toque no card navega para o servico correspondente

## Dependencias

- fonte de dados de servicos
- roteamento interno
- possivel controle por permissao de usuario

## Criterios de aceite

- A secao e exibida abaixo do carousel.
- Os cards mantem alinhamento e dimensoes consistentes.
- O toque em um card leva ao fluxo correto.
- O CTA "Ver mais" leva ao catalogo completo.

## Itens em aberto

- Definir quantidade exata de cards na Home.
- Definir se havera personalizacao por perfil de usuario.
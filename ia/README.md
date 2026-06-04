# IA - Especificacoes SDD

## Objetivo

Centralizar a documentacao funcional da tela Home e de suas features derivadas com um padrao SDD simples, reutilizavel e orientado a implementacao.

## Padrao adotado

Cada documento segue a mesma estrutura:

1. Visao geral
2. Objetivo
3. Escopo
4. Requisitos funcionais
5. Regras de negocio
6. Estrutura de interface
7. Estados e interacoes
8. Dependencias
9. Criterios de aceite
10. Itens em aberto

## Documentos

- [01-feature-barra-topo.md](./01-feature-barra-topo.md)
- [02-feature-data.md](./02-feature-data.md)
- [03-feature-carousel.md](./03-feature-carousel.md)
- [04-feature-servicos.md](./04-feature-servicos.md)
- [05-feature-perfil.md](./05-feature-perfil.md)
- [06-feature-notificacoes.md](./06-feature-notificacoes.md)
- [07-feature-home.md](./07-feature-home.md)
- [08-plano-implementacao.md](./08-plano-implementacao.md)

## Contexto visual de referencia

A base desta especificacao considera a interface mostrada na imagem enviada, com:

- cabecalho azul com menu, saudacao, nome do usuario e avatar
- data centralizada abaixo do cabecalho
- carousel com indicadores
- secao de servicos em grade de cards
- barra inferior com atalhos para Inicio, Perfil e Notificacoes

## Convencoes

- textos em portugues
- foco mobile first
- componentes desacoplados para composicao na Home
- dados de servicos e perfil preparados para futura integracao com API

## Diretriz de implementacao

- Os documentos 01 a 06 representam componentes reutilizaveis e devem ser implementados em uma pasta shared.
- O documento 07 representa a composicao da tela Home e deve ser implementado em uma pasta feature.
- A Home deve consumir os componentes shared sem duplicar responsabilidades visuais ou de estado.
- A disposicao principal do app deve usar um shell de layout com barra no topo fixa, barra no footer fixa e `router-outlet` central para carregar o destino de cada link.
- O plano detalhado de entrega esta em [08-plano-implementacao.md](./08-plano-implementacao.md).

## Referencia visual oficial

- A referencia visual consolidada da Home esta em [referencias/home-mobile-referencia.md](./referencias/home-mobile-referencia.md).
- Os documentos 01 a 07 devem ser implementados respeitando essa referencia visual, especialmente hierarquia, proporcao, espacamento e linguagem visual mobile.
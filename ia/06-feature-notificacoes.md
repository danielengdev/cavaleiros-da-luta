# Feature - Notificacao

## Visao geral

Feature responsavel pelo acesso as notificacoes do usuario a partir da barra inferior e, futuramente, por sinalizar novidades ou pendencias.

## Objetivo

Centralizar alertas, comunicados e eventos relevantes ao usuario em um ponto de acesso simples.

## Escopo

Inclui:

- item de navegacao "Notificacoes" na barra inferior
- tela ou area listando notificacoes
- possibilidade de indicar existencia de itens nao lidos

Nao inclui:

- push notification nativa neste documento
- preferencias avancadas de notificacao

## Requisitos funcionais

- Deve existir um atalho de notificacoes na barra inferior.
- O usuario deve conseguir abrir a lista de notificacoes.
- A feature deve suportar estado lido e nao lido.

## Regras de negocio

- Notificacoes nao lidas podem ser sinalizadas por badge numerico ou ponto de destaque.
- Ao abrir uma notificacao, seu estado pode ser atualizado para lida.
- Mensagens mais recentes devem aparecer primeiro.

## Estrutura de interface

- item dedicado na navegacao inferior
- lista cronologica de notificacoes
- componentes de item com titulo, resumo e data

## Estilo visual de referencia

- item de notificacoes presente na barra inferior ao lado de Inicio e Perfil
- icone simples, monocromatico, com legenda curta
- possibilidade de badge discreto sem poluir o rodape
- referencia: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Estados e interacoes

- estado com notificacoes disponiveis
- estado vazio com mensagem amigavel
- estado de carregamento com skeleton
- clique no item abre detalhe ou destino associado

## Dependencias

- servico de notificacoes
- autenticacao do usuario
- roteamento da aba Notificacoes

## Criterios de aceite

- A aba Notificacoes aparece na barra inferior.
- O usuario consegue acessar a lista de notificacoes a partir da Home.
- O estado vazio e tratado sem quebrar a navegacao.

## Itens em aberto

- Definir se o badge sera obrigatorio na primeira versao.
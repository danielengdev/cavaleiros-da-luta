# Feature - Perfil

## Visao geral

Feature responsavel pelos dados resumidos do usuario exibidos na navegacao principal e pelo destino da aba Perfil na barra inferior.

## Objetivo

Permitir que o usuario visualize e acesse rapidamente suas informacoes pessoais e configuracoes basicas da conta.

## Escopo

Inclui:

- nome do usuario
- foto ou avatar
- rota principal de perfil
- integracao com barra superior e barra inferior

Nao inclui:

- todos os formularios de manutencao cadastral
- gestao completa de configuracoes complexas

## Requisitos funcionais

- Deve fornecer nome e avatar para a barra superior.
- Deve estar acessivel pela aba Perfil na navegacao inferior.
- Deve permitir abrir a tela completa de perfil.

## Regras de negocio

- O usuario precisa estar autenticado para acessar o perfil.
- Na ausencia de foto, um avatar padrao deve ser gerado.
- O nome exibido deve seguir o cadastro principal do usuario.

## Estrutura de interface

- resumo visual consumido pela barra superior
- entrada dedicada na barra inferior
- tela de destino com dados do usuario e atalhos relacionados

## Estilo visual de referencia

- avatar circular pequeno no topo com destaque visual e sombra
- aba de perfil na barra inferior com icone simples e legenda curta
- estado ativo da navegacao deve ser facilmente perceptivel por cor
- referencia: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Estados e interacoes

- estado carregado com dados do usuario
- estado de carregamento com placeholders
- estado de erro com fallback minimo

## Dependencias

- servico de autenticacao
- fonte de dados do usuario
- roteamento da aba Perfil

## Criterios de aceite

- Nome e avatar aparecem corretamente na Home.
- O clique no avatar e na aba Perfil leva ao mesmo contexto funcional.
- O fallback visual e exibido quando nao houver foto.

## Itens em aberto

- Definir campos exibidos na tela completa de perfil.
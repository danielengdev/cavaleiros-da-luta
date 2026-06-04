# Feature - Barra no Topo

## Visao geral

Barra superior da Home responsavel por contextualizar o usuario autenticado e oferecer acesso rapido ao menu lateral e ao perfil.

## Objetivo

Apresentar identidade visual, saudacao personalizada e entradas principais de navegacao no topo da experiencia mobile.

## Escopo

Inclui:

- icone de menu lateral no canto esquerdo
- saudacao com texto curto
- nome completo ou nome social do usuario
- avatar ou foto do perfil no canto direito

Nao inclui:

- implementacao do drawer lateral
- edicao do perfil nesta area

## Requisitos funcionais

- Deve exibir a saudacao fixa "Ola," acima do nome do usuario.
- Deve exibir o nome do usuario vindo da feature de perfil.
- Deve renderizar um avatar clicavel.
- Deve renderizar um botao de menu clicavel.
- Deve permanecer visivel no topo da Home.

## Regras de negocio

- Se nao houver foto cadastrada, exibir avatar padrao com iniciais do usuario.
- Se o nome for longo, aplicar truncamento visual sem quebrar o layout.
- O clique no avatar deve navegar para Perfil.
- O clique no menu deve abrir a navegacao lateral ou um menu contextual.

## Estrutura de interface

- container principal com fundo azul e cantos inferiores arredondados
- area esquerda com botao de menu
- area central com saudacao e nome
- area direita com avatar destacado

## Estilo visual de referencia

- fundo azul vivo com presenca dominante no topo da tela
- cantos inferiores arredondados para criar um bloco visual unico
- saudacao em menor destaque e nome do usuario em maior peso visual
- avatar circular com sombra suave e contorno claro
- espacamento horizontal equilibrado entre menu, textos e avatar
- referencia: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Estados e interacoes

- estado padrao com dados carregados
- estado de carregamento com placeholder para nome e avatar
- estado de erro com avatar padrao e nome generico do usuario

## Dependencias

- dados da feature de perfil
- roteamento para tela de perfil
- possivel drawer ou componente de navegacao lateral

## Criterios de aceite

- Usuario autenticado visualiza saudacao e nome no topo.
- Avatar continua clicavel mesmo quando a imagem nao carrega.
- Layout nao quebra em telas estreitas.
- Menu e avatar possuem area de toque adequada para mobile.

## Itens em aberto

- Definir se a saudacao variara por horario.
- Definir comportamento final do menu lateral.
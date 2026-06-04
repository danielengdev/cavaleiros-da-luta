# Feature - Carousel

## Visao geral

Area de destaque visual usada para banners promocionais, comunicados ou conteudos institucionais na Home.

## Objetivo

Exibir mensagens importantes em formato rotativo, com foco visual alto e consumo rapido.

## Escopo

Inclui:

- banner principal em destaque
- colecao de slides com imagem, titulo opcional e acao opcional
- indicadores de pagina

Nao inclui:

- editor administrativo do carousel
- analytics de campanha nesta etapa

## Requisitos funcionais

- Deve exibir ao menos um slide ativo.
- Deve suportar multiplos slides.
- Deve indicar visualmente a posicao atual.
- Deve permitir navegacao por swipe ou troca automatica, conforme definicao tecnica.
- Cada slide pode conter redirecionamento para uma rota ou link.

## Regras de negocio

- Se houver apenas um item, os indicadores podem continuar visiveis, mas sem navegacao adicional.
- Se nenhuma imagem estiver disponivel, exibir placeholder institucional.
- A proporcao visual do banner deve se manter estavel em diferentes larguras de tela.

## Estrutura de interface

- card horizontal com bordas arredondadas
- imagem responsiva ocupando a area principal
- indicadores posicionados abaixo do banner

## Estilo visual de referencia

- banner principal com proporcao horizontal larga e altura moderada
- bordas arredondadas evidentes
- imagem ocupando o card inteiro sem distorcao
- indicadores em formato de pequenas capsulas abaixo do card
- slide ativo destacado em azul e os demais em cinza claro
- referencia: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Estados e interacoes

- estado carregado com banners disponiveis
- estado vazio com banner padrao
- estado de erro com fallback visual
- clique no slide pode executar navegacao configurada

## Dependencias

- fonte de dados de banners
- roteamento interno ou link externo
- suporte a gesto touch, se aplicavel

## Criterios de aceite

- O carousel aparece logo abaixo da data.
- O slide ativo e identificado visualmente pelos indicadores.
- O componente funciona em mobile sem distorcer a imagem.
- O fallback aparece quando nao houver dados.

## Itens em aberto

- Definir autoplay ou navegacao apenas manual.
- Definir origem dos banners: estatica ou administrativa.
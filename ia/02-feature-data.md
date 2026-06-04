# Feature - Data

## Visao geral

Bloco textual simples exibido logo abaixo da barra superior para informar a data corrente ao usuario.

## Objetivo

Reforcar contexto temporal da Home e organizar visualmente o inicio do conteudo principal.

## Escopo

Inclui:

- exibicao da data atual por extenso
- alinhamento centralizado
- atualizacao conforme localidade definida pela aplicacao

Nao inclui:

- selecao manual de data
- calendario interativo

## Requisitos funcionais

- Deve exibir dia, mes e ano por extenso.
- Deve respeitar o idioma portugues do Brasil.
- Deve carregar automaticamente ao abrir a Home.

## Regras de negocio

- O formato padrao deve seguir o estilo "03 de junho de 2026".
- A data deve considerar o timezone do dispositivo ou configuracao oficial da aplicacao.
- A feature nao depende de backend para o caso basico.

## Estrutura de interface

- texto centralizado
- peso visual maior que um texto comum, mas inferior ao titulo principal da tela
- espacamento vertical entre cabecalho e carousel

## Estilo visual de referencia

- data centralizada em fundo claro
- texto escuro com boa leitura e peso semibold
- distancia curta em relacao ao topo e ao carousel, funcionando como respiro visual
- referencia: [home-mobile-referencia.md](./referencias/home-mobile-referencia.md)

## Estados e interacoes

- estado padrao com data formatada
- estado de fallback com formato numerico caso a localizacao falhe

## Dependencias

- utilitario de formatacao de data
- configuracao de locale da aplicacao

## Criterios de aceite

- A data aparece imediatamente na Home.
- O formato exibido esta em portugues.
- A exibicao permanece consistente apos recarregar a tela.

## Itens em aberto

- Confirmar se a data deve refletir servidor ou dispositivo.
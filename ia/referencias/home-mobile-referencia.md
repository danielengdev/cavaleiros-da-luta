# Referencia Visual - Home Mobile

## Origem

Esta referencia foi consolidada a partir da imagem enviada pelo usuario durante a definicao da Home.

## Objetivo

Transformar a imagem de referencia em uma base visual objetiva para implementacao, reduzindo ambiguidades entre design, documentacao e codigo.

## Direcao visual

- interface mobile first
- linguagem visual institucional e limpa
- uso dominante de azul no topo e nos elementos interativos principais
- fundo claro com alta legibilidade
- sombras suaves e cantos arredondados para destacar blocos

## Hierarquia da tela

1. cabecalho azul com menu, saudacao, nome e avatar
2. data centralizada
3. banner principal em carousel
4. indicadores do carousel
5. secao de servicos com acao "Ver mais"
6. grade de cards de servicos
7. barra inferior com Inicio, Perfil e Notificacoes

## Tokens visuais sugeridos

- cor primaria: azul institucional forte
- cor de apoio: branco para cards e superficies elevadas
- cor de fundo: cinza muito claro
- cor de texto principal: quase preto
- cor de texto secundario: cinza medio
- raio do topo: arredondamento alto na base do cabecalho
- raio de cards: arredondamento medio
- sombra de cards: baixa a media, sem contraste agressivo

## Regras de composicao

- o cabecalho deve ocupar a largura total e funcionar como primeiro bloco de identidade
- a data deve ficar isolada visualmente entre topo e carousel
- o carousel deve ser um card largo com boa presenca horizontal
- a grade de servicos deve priorizar leitura rapida por icone e nome
- a barra inferior deve permanecer visualmente simples, com um unico item ativo destacado

## Comportamento esperado por componente

- barra no topo
  - fundo azul
  - avatar circular no canto direito
  - menu hamburguer no canto esquerdo
  - saudacao e nome alinhados ao centro do bloco textual

- data
  - texto centralizado
  - sem bordas ou container proprio destacado

- carousel
  - imagem principal com cantos arredondados
  - indicadores em capsulas curtas
  - slide ativo com cor primaria

- servicos
  - cards brancos com icone azul
  - titulos centralizados
  - espacamento vertical generoso entre linhas de cards

- perfil e notificacoes
  - representados na navegacao inferior
  - estado ativo e inativo claramente diferenciados por cor

## Observacoes de implementacao

- a primeira versao pode usar dados mockados para banners, usuario, servicos e badge de notificacoes
- o foco inicial deve ser reproduzir composicao, hierarquia e proporcao antes de ajustes finos de pixel
- se a imagem original for adicionada ao repositorio futuramente, este documento deve continuar como traducao textual oficial da referencia
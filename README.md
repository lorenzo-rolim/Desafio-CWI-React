# MARVEL COMICS

Para construção do projeto usei, React, Styled-Components, EmailJS para disparar o email com o conteúdo, React Router Dom para a navegação, Axios para as requisições, Jest com foco nos testes e Mock Service Worker para mock de api.

## Scripts

### `npm start`

Você pode usar o para start o projeto local na sua máquina no LocalHostPadrão - [http://localhost:3000](http://localhost:3000)

### `npm test`

Você pode usar este script para rodar os testes realizados na aplicação.

### Resolução

- Iniciei o projeto com foco em deixar os componentes bem separados, cada um cumprindo sua função, custom hooks, constants, essa aplicação se trata de pagina Home Principal aqui são carregados a maioria dos componentes onde são estruturados, inicialmente com cabeçalho e icone centralizados, full banner com desenho em quadrinhos, logo abaixo com um input de filtragem, onde é possível filtrar pelos quadrinhos desejados, em seguida o componente de grid onde são mapeados e carregados no DOM da aplicação os dados fornecidos pela API da Marvel, são distribuidos, tratados e inseridos, conta também com a tela de loading, onde exibe a grid somente após a requisição ter sido concluída, tela de erro tratando uma possível falha durante a requição, não permite que a aplicação quebre, e uma tela quadros inexistentes, fazendo com que caso a api retorne sem dados também não quebre o site, além disso durante a parte de renderização da GRID, evita rederização de dados específicos, caso algum deles retorne nulo ou indefinido, ademais, com hover ou click sobre os cards é possível exibir um MODAL com as informações do quadrinho selecionado, informações de título, descrição, criadores etc, modal exibe imagem referente ao quadrinho selecionado, mais abaixo um Form de e-mail, funcionalidade de disparar um e-mail template usando E-mailJS, trata alguns possíveis erros como Input em branco, ou erro durante a requisição do E-mail, etc..., adicionado página Not Found nas rotas, captura qualquer acesso em alguma URL inválida e exibe uma página de erro junto com link para a home do projeto, adicionei também uma página separada exclusiva para o conteúdo informativo da comic, não por julgar extremamente necessário, mas para demostrar meu conhecimento utilizando React-Router-Dom.

- No que diz respeito a testes, usei o Jest para testar os componentes da aplicação, dei prioridade para os componentes que julguei com maior prioridade e impacto na aplicação, aqueles que que são core do projeto e não podem falhar de jeito nenhum, para realizar o mock e interceptação da api da MARVEL utilizei MSW (Mock Service Worker) retornando so dados necessários para o teste.

#### GitHubPages

- Projeto Disponível diretamente no GitHub pages através do link - https://lorenzo-rolim.github.io/Desafio-CWI-React/

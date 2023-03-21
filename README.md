## :pizza: API Pizza Delivery


<p>Este projeto foi desenvolvido na conclusão do módulo de Back-end do curso de Desenvolvimento Full Stack da iTalents, seguindo as orientações transmitidas nas aulas do professor Leonardo Orabona. Trata-se de uma API RESTful criada em JavaScript, que utiliza diversos pacotes Node.js, tais como Express, Mongoose, JSON Web Tokens, Dotenv, Nodemon, Bcrypt, Swagger UI e CORS.

A aplicação adota o banco de dados MongoDB e segue o padrão MVC (Model-View-Controller), com todas as operações CRUD (Create, Read, Update e Delete) implementadas.

| Pacote          | Descrição                                                                                                                                                | Versão |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Express         | Principal framework web para Node.js, permite que rotas, middlewares e outras funcionalidades importantes sejam implementadas de forma simples e eficiente | 4.18.2  |
| Mongoose        | Modela e interage com o banco de dados MongoDB, fornecendo uma API simples e uma maneira de realizar validações antes de salvar dados                    | 7.0.2   |
| JSON Web Tokens | Autentica usuários e fornece segurança adicional ao sistema                                                                                              | 9.0.0   |
| Dotenv          | Gerencia variáveis de ambiente                                                                                                                            | 16.0.3  |
| Nodemon         | Monitora alterações no código e reinicia automaticamente o servidor durante o desenvolvimento                                                           | 2.0.21  |
| Bcrypt          | Biblioteca para criptografar senhas                                                                                                                        | 5.1.0   |
| Swagger UI      | Interface visual para a documentação da API                                                                                                              | 4.6.2   |
| CORS            | Permite solicitações de diferentes origens                                                                                                               | 2.8.5   |


## :rocket: Funcionalidades


– Criação, busca, atualização e remoção de usuários;

– Adição e remoção de endereços e produtos favoritos do usuário;

– Criação, busca, atualização e remoção de produtos;

– Adição e remoção de categorias nos produtos;

– Criação, busca, atualização e remoção de categoria, carrinho e pedido.



## :computer: Instalação


1. Faça o download do código completo;

2. Abra o terminal do VS Code;

3. Execute `npm i`;

4. Rode usando `npm run dev`.

5. Para testar as rotas, use a extensão Thunder Client.


## :globe_with_meridians: Requisições HTTP


As requisições HTTP suportadas pela API incluem:


| Requisição | Descrição                                                                     |
| -------------- | --------------------------------------------------------------------------------- |
| GET          | Solicita uma informação.                                                      |
| POST         | Envia uma informação ou executa uma ação que não pode ser repetida.        |
| PUT          | Substitui completamente uma informação existente pelo novo conteúdo enviado. |
| PATCH        | Altera parcialmente uma informação existente.                                 |
| DELETE       | Remove uma informação.                                                        |


## :page_with_curl:  Respostas HTTP


As respostas HTTP fornecidas pela API incluem:


| Código | Descrição                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| 200     | OK - A solicitação foi bem sucedida.                                                                             |
| 201     | Created - A solicitação foi bem sucedida e um novo recurso foi criado.                                           |
| 400     | Bad Request - A solicitação foi mal formada ou inválida.                                                        |
| 404     | Not Found - O recurso solicitado não foi encontrado.                                                              |
| 500     | Internal Server Error - O servidor encontrou uma situação inesperada que o impediu de completar a solicitação. |


## :tada: Agradecimento


Agradeço ao professor Leonardo Orabona por sua orientação valiosa durante as aulas!

Comprometo-me a aprimorar a API e sua documentação constantemente e a aplicar o conhecimento adquirido em meu desenvolvimento profissional.

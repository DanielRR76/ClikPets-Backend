# ClikPets — API Backend

[English version](README.en.md)

API REST para cadastro de usuários e pets, consulta de animais disponíveis e gerenciamento do fluxo de adoção. A API foi desenvolvida em TypeScript com Express, persiste os dados em PostgreSQL usando Prisma e armazena imagens no Cloudinary.

## Recursos

- Cadastro, login, consulta e atualização de usuários.
- Cadastro, consulta, edição e remoção de pets.
- Listagem de pets cadastrados pelo usuário e de adoções associadas à conta.
- Agendamento e conclusão de adoções.
- Upload de imagens de perfil e de pets.
- Documentação interativa da API com Swagger UI e OpenAPI.

## Tecnologias

- Node.js e TypeScript
- Express 5
- PostgreSQL 15 e Prisma 7
- Cloudinary para imagens
- JWT em cookie `HttpOnly` para autenticação
- tsup para build e ESLint para lint

## Arquitetura e estrutura

O projeto separa o transporte HTTP, as regras de negócio e a persistência. As rotas Express encaminham as requisições aos controllers; os controllers convertem os dados recebidos em DTOs e chamam os serviços; os serviços aplicam as regras de negócio e usam contratos para acessar repositórios, autenticação e mídia. Os repositórios Prisma fazem a persistência no PostgreSQL.

```text
src/
├── controllers/   # Entrada HTTP e respostas
├── contracts/     # Interfaces de serviços, repositórios e servidor
├── domain/        # Entidades e validações de domínio
├── dtos/          # Dados de entrada e saída
├── errors/        # Erros específicos do domínio e da aplicação
├── middlewares/   # Autenticação e upload de arquivos
├── repositories/  # Persistência com Prisma
├── routes/        # Rotas de usuários e pets
├── server/        # Implementação HTTP com Express
├── services/      # Regras de negócio e integrações
└── types/         # Tipos compartilhados

prisma/            # Schema e migrações do banco
public/openapi.yaml # Especificação OpenAPI servida pela API
```

## Pré-requisitos

- Node.js e npm
- Docker com Docker Compose, ou uma instância PostgreSQL acessível
- Uma conta e credenciais do Cloudinary para operações com imagens

## Configuração local

1. Instale as dependências:

    ```bash
    npm install
    ```

2. Crie o arquivo de ambiente a partir do exemplo:

    ```bash
    cp .env.example .env
    ```

3. Preencha as variáveis no `.env`:

    | Variável                | Uso                                                                                          |
    | ----------------------- | -------------------------------------------------------------------------------------------- |
    | `DATABASE_URL`          | URL de conexão PostgreSQL, por exemplo `postgresql://usuario:senha@localhost:5432/get_a_pet` |
    | `DATABASE_SCHEMA`       | Nome do banco criado pelo Docker Compose                                                     |
    | `DATABASE_USER`         | Usuário PostgreSQL criado pelo Docker Compose                                                |
    | `DATABASE_PASSWORD`     | Senha PostgreSQL criada pelo Docker Compose                                                  |
    | `CLOUDINARY_CLOUD_NAME` | Nome da conta Cloudinary                                                                     |
    | `CLOUDINARY_API_KEY`    | Chave de API Cloudinary                                                                      |
    | `CLOUDINARY_API_SECRET` | Segredo de API Cloudinary                                                                    |
    | `JWT_SECRET`            | Segredo usado para assinar tokens JWT                                                        |
    | `CORS_ORIGIN`           | Origem permitida para chamadas cross-origin com credenciais                                  |

    Para usar o banco do Compose, configure `DATABASE_URL` com o mesmo usuário, senha e banco informados nas variáveis `DATABASE_USER`, `DATABASE_PASSWORD` e `DATABASE_SCHEMA`. O Compose publica o PostgreSQL na porta `5432`.

4. Se for usar o banco local do Docker Compose, inicie-o:

    ```bash
    npm run compose:up
    ```

    Esse comando inicia o serviço do banco definido em `docker-compose.yml`. Se usar uma instância PostgreSQL externa, pule esta etapa.

5. Gere o cliente Prisma e aplique as migrações existentes:

    ```bash
    npm run generate
    npm run migrate:deploy
    ```

6. Inicie a API em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

A API escuta na porta `3000`. Com ela em execução, acesse `http://localhost:3000/docs` para abrir a documentação interativa. A especificação OpenAPI está disponível em `http://localhost:3000/openapi.yaml`.

Para iniciar a versão compilada, execute `npm run build` e depois `npm start`.

## Scripts disponíveis

| Comando                  | Descrição                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `npm run dev`            | Compila em modo watch e inicia novamente o servidor após alterações.               |
| `npm run build`          | Gera o bundle de produção em `dist/`.                                              |
| `npm start`              | Inicia `dist/server.js`; requer build prévio.                                      |
| `npm run prod`           | Executa build e inicia o servidor compilado.                                       |
| `npm run vercel-build`   | Gera o Prisma Client, aplica migrações e compila a aplicação para build na Vercel. |
| `npm run generate`       | Gera o Prisma Client.                                                              |
| `npm run migrate:deploy` | Aplica migrações pendentes.                                                        |
| `npm run migrate:dev`    | Cria/aplica migrações para desenvolvimento.                                        |
| `npm run migrate:reset`  | Reinicia o banco e reaplica migrações; apaga os dados existentes.                  |
| `npm run compose:up`     | Inicia os serviços do Docker Compose com a opção `--build`.                        |
| `npm run compose:down`   | Para os serviços do Docker Compose.                                                |
| `npm run lint`           | Executa ESLint com correção automática nos arquivos TypeScript de `src/`.          |
| `npm run release:patch`  | Cria uma versão patch e atualiza o changelog.                                      |
| `npm run release:minor`  | Cria uma versão minor e atualiza o changelog.                                      |
| `npm run release:major`  | Cria uma versão major e atualiza o changelog.                                      |

## API

As rotas são agrupadas sob `/users` e `/pets`:

| Grupo    | Endpoints                                                                                                                                                                                                         | Acesso                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Usuários | `POST /users/register`, `POST /users/login`, `POST /users/logout`, `GET /users/checkuser`, `GET /users/:id`, `PATCH /users/edit`                                                                                  | Cadastro, login e consulta pública por ID; logout, sessão e edição autenticados.   |
| Pets     | `GET /pets`, `GET /pets/colors`, `GET /pets/:id`, `POST /pets/create`, `GET /pets/mypets`, `GET /pets/myadoptions`, `PATCH /pets/:id`, `DELETE /pets/:id`, `PATCH /pets/schedule/:id`, `PATCH /pets/complete/:id` | Consulta pública para listagem, cores e pet por ID; demais operações autenticadas. |

Cadastro e login definem o cookie `accessToken`. As rotas autenticadas esperam esse cookie, que contém um JWT com validade de uma hora e é configurado como `HttpOnly`, `Secure` e `SameSite=none`. Como o cookie é usado para autenticação, clientes web em outra origem devem enviar requisições com credenciais; configure `CORS_ORIGIN` para a origem do cliente.

Criação de pets aceita de 1 a 5 arquivos no campo `images`; a atualização de pets aceita até 5 imagens. A edição de usuário aceita uma imagem no campo `image`. As imagens são carregadas no Cloudinary.

Consulte todos os esquemas, parâmetros, respostas e códigos HTTP no [arquivo OpenAPI](public/openapi.yaml) ou na interface `/docs` quando a API estiver em execução.

## Modelo de dados

- **User**: nome, e-mail único, senha armazenada como hash bcrypt, telefone e imagem opcional.
- **Pet**: nome, idade, peso, cor, imagens, disponibilidade e relações com o usuário proprietário e, quando agendada, com o adotante.

Um usuário pode cadastrar vários pets e ter vários pets associados a adoções. A conclusão de uma adoção transfere a propriedade do pet para o adotante.

## Observações

- O servidor usa a porta `3000`, definida na inicialização em `src/server.ts`.
- `JWT_SECRET` tem um valor padrão destinado a desenvolvimento no código. Configure um segredo próprio e seguro em qualquer ambiente compartilhado ou de produção.
- As credenciais do Cloudinary são necessárias para os fluxos que enviam imagens.

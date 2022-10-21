## Descrição
```bash
$ npm install
```

## Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Descrição

Framework utilizado: [Nest](https://github.com/nestjs/nest)

## Instalação

```bash
$ npm install
```

## Estrutura

Sempre, ao criar uma nova entidade, crie uma pasta em `src` com o nome da entidade ( Ex: `src/courses` ).
Dentro da pasta, deve possuir a seguinte estrutura:

- `courses`
  - `courses.module.ts`
  - `controllers` ( Todos os controllers relacionados ao curso )
    - `courses.controller.ts`
  - `services` ( Todos os serviços relacionados ao curso )
    - `courses.service.ts`
  - `repositories` ( Todos os repositórios relacionados ao curso )
    - `courses.service.ts`
  - `models` ( Proxys, payloads e interfaces relacionados ao curso )
    - `create-course.payload.ts`
    - `update-course.payload.ts`
  - `entities` ( Todas as entidades relativas a esse modulo, **SEMPRE** devem possuir o `.entity.ts` para mapear a entidade no banco de dados )
    - `product.entity.ts

### SQLite

Instale as dependências necessárias com:

```shell
sudo apt-get install sqlite3 libsqlite3-dev
```

E depois inicie uma banco de dados inicial com:

```shell
sqlite3 example.db "VACUUM;"
```

Por fim, crie o arquivo contendo as configurações iniciais:

```shell
cp .env.sqlite.example .env
```

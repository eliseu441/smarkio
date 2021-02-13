## Objetivo
Desenvolver uma aplicação web em ​Node.js​ com banco de dados ​MySQL​. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário.
## Ferramentas para Execução

Para que o programa funcione serão necessarias as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Sqlite3](https://www.npmjs.com/package/sqlite3), [Typeorm](https://www.npmjs.com/package/typeorm) e [VSCode](https://code.visualstudio.com/) .

## Iniciando o projeto
```bash
# Clone este repositório
$ git clone https://github.com/lbbergamo/smarkio/

# Acesse a pasta do projeto no terminal/cmd
$ cd smarkio

# Acesse a pasta do backend no terminal/cmd
$ cd backend

# Após estar na pasta instale todas as dependências 
$ npm install

# Cria todas as tabelas do banco de dados
$ npx typeorm migration:run

# Inicie o modo de desenvolvimento no backend
$ npm start

# Acesse a pasta do frontend no terminal/cmd
$ cd frontend

# Após estar na pasta instale todas as dependências 
$ npm install

# Inicie o modo de desenvolvimento no frontend
$ npm start
```


##  Tecnologias

- [Git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express) 
- [Watson](https://www.npmjs.com/package/ibm-watson)
- [Sqlite3](https://www.npmjs.com/package/sqlite3)
- [Typeorm](https://www.npmjs.com/package/typeorm)
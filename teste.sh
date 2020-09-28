#!/bin/bash

echo "Iniciando processo";

# Para alterar o repositório fonte dos testes basta alterar o link abaixo:
git clone --branch master https://github.com/tryber/sd-07-block5-project-pixels-art.git ./project-tests;

rm -rf ./project-tests/.git;

cp -r ./project-tests/cypress ./project-tests/cypress.json ./project-tests/package-lock.json ./project-tests/package.json ./project-tests/reporter.json .;

npm install;

node_modules/.bin/cypress run;

# apagando arquivos de teste e dependências
rm -rf project-tests;

rm -rf cypress cypress.json package-lock.json package.json reporter.json;

# Projeto Integrador: Desenvolvimento de Sistemas Orientado a Dispositivos Móveis e Baseados na Web

## NutriPet POC

## Equipe

- Júlio Gabriel Moreira Rocha
- Laura Cristina Angioletto Martins
- Pedro Favoreto Gaya

## Como instalar/executar

    Clone o repositório.

    > cd backend/nutripet

    > mvn clean package

    > abra o terminal na pasta onde tenha o arquivo docker-compose

    > execute este comando no terminal: docker-compose up --build

<<<<<<< HEAD
    > Baixe o MongoDBCompass para poder utilizar as collections;

    > Com o MongoDBCompass baixado, seguir o passo a passo para importar as collections que estao na pasta collections mongo:

    1- Abra o MongoDB Compass;

    2- Selecione o banco nutripet.

    3- Clique em "Adicionar Dados" na barra de ferramentas e selecione "Importar Arquivo" no menu.

    4- Escolha o tipo de arquivo que você está importando em JSON, localize o arquivo de dados exportado no seu computador;

    5- Clique em "Importar" para começar o processo de importação dos dados para o banco de dados selecionado.
=======
    > Recomendamos o download do programa postman, para utilizar as collections inseridas aqui com o nome nutripet.postman_collection.json

    > Com o postman baixado e as collections feitas, popular o banco, com as creations conforme a imaginaçao porém, seguindo a ordem: Veterinario, Cadastro, Loja e Produto.
>>>>>>> 12d043597edf422385f75f3f955d796d07cc6420

    Acesse a aplicação em um navegador na URL: http://localhost:3000/ e divirta-se :)

## Tecnologias Utilizadas

- Maven
- SpringBoot
- MongoDB
- React.JS
- Docker-compose
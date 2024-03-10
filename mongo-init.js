db = db.getSiblingDB("nutripetdb");

db.createCollection("veterinarios");
db.veterinarios.insertMany([
  {
    _id: 1,
    nome: "Breno Cláudio Thomas Baptista",
    especialidade: "Cães e Gatos",
    telefone: "(51) 2796-2254",
    email: "breno_baptista@lynce.com.br",
  },
  {
    _id: 2,
    nome: "Ester Bianca Cardoso",
    especialidade: "Aves",
    telefone: "(51) 3810-6800",
    email: "ester_cardoso@ticem.com.br",
  },
  {
    _id: 3,
    nome: "Jéssica Catarina Drumond",
    especialidade: "Cães e Gatos",
    telefone: "(51) 3750-5465",
    email: "jessica_drumond@idesc.com.br",
  },
  {
    _id: 4,
    nome: "Clarice Rosa Caldeira",
    especialidade: "Cães e Gatos",
    telefone: "(51) 3946-3993",
    email: "clarice_caldeira@dr.com",
  },
  {
    _id: 5,
    nome: "Enzo André Elias Barros",
    especialidade: "Animais de Grande Porte",
    telefone: "(51) 2778-7649",
    email: "enzo_barros@vivax.com.br",
  },
]);

db.createCollection("lojas");
db.lojas.insertMany([
  {
    _id: 1,
    email: "petalegria@email.com",
    nome: "Pet Shop Alegria",
    cidade: "Porto Alegre",
    endereco: "Rua Soely Nunes Rosa 400, Restinga",
    _class: "com.br.nutripet.domain.entity.Loja",
  },
  {
    _id: 2,
    email: "meubichinho@email.com",
    nome: "Meu Bichinho",
    cidade: "Porto Alegre",
    endereco: "Rua Paulo Bento Lobato 110, Jardim Lindóia",
    _class: "com.br.nutripet.domain.entity.Loja",
  },
  {
    _id: 3,
    email: "espacocaesgatos@email.com",
    nome: "Espaço Cães e Gatos",
    cidade: "Porto Alegre",
    endereco: "Rua Patrimonio 43, Coronel Aparício Borges",
    _class: "com.br.nutripet.domain.entity.Loja",
  },
]);

db.createCollection("produtos");
db.produtos.insertMany([
  // Loja 1
  {
    _id: 1,
    nome: "Ração Regular Cães Adulto 5kg",
    preco: "42.90",
    idLoja: 1,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 2,
    nome: "Ração Regular Cães Adulto 10kg",
    preco: "82.00",
    idLoja: 1,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 3,
    nome: "Ração Especial Cães Adulto 5kg",
    preco: "70.00",
    idLoja: 1,
    disponibilidade: "sobEncomenda",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 4,
    nome: "Ração Especial Cães Adulto 10kg",
    preco: "135.00",
    idLoja: 1,
    disponibilidade: "emFalta",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 5,
    nome: "Ração Regular Cães Filhote 3kg",
    preco: "38.00",
    idLoja: 1,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 6,
    nome: "Ração Regular Cães Filhote 6kg",
    preco: "63.00",
    idLoja: 1,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 7,
    nome: "Ração Especial Alergias 5kg",
    preco: "81.00",
    idLoja: 1,
    disponibilidade: "sobEncomenda",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  // Loja 2
  {
    _id: 8,
    nome: "Osso de Borracha",
    preco: "22.00",
    idLoja: 2,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 9,
    nome: "Ursinho",
    preco: "40.00",
    idLoja: 2,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
  {
    _id: 10,
    nome: "Kit Bolinha Pet",
    preco: "9.90",
    idLoja: 2,
    disponibilidade: "prontaEntrega",
    _class: "com.br.nutripet.domain.entity.Produto",
  },
]);

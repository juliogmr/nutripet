import React from "react";
import "./ProdutosListPage.css";
import BackButton from "../Components/BackButton";

export default function ProdutosListPage() {
  const produtos = [
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
    {
      id: 1,
      nome: "Produto A",
      preco: 2.90
    },
  ];

  const produtosItems = produtos.map((produto) => {
    let curr = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'});

    return (
      <li className="ProdutoEntry">
        <img className="ProdutoIcon" src="../pet_food_icon.png" alt="Vet" />
        <div className="ProdutoDados">
          <p className="ProdutoNome">{produto.nome}</p>
          <p>{curr.format(produto.preco)}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="ProdutosListPage">
      <BackButton prevPage="/main" />
      <h1>Produtos</h1>
      <ul className="ProdutosList">{produtosItems}</ul>
    </div>
  );
}

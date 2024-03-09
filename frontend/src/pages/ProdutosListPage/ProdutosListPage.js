import React, { useEffect, useState } from "react";
import "./ProdutosListPage.css";
import BackButton from "../Components/BackButton";
import getProdutos from "../../services/produtos";

export default function ProdutosListPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos().then((produtos) => {
      setProdutos(produtos);

      produtos.sort((a, b) => {
        return (a.disponibilidade === "emFalta");
      })
    });
  }, []);

  const curr = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'});


  const produtosItems = produtos.map((produto) => {
  
    switch(produto.disponibilidade) {
      case "prontaEntrega":
        produto.disponibilidadeDesc = "Pronta Entrega";
        break;
      
      case "sobEncomenda":
        produto.disponibilidadeDesc = "Sob encomenda";
        break;

      case "emFalta":
        produto.disponibilidadeDesc = "Em Falta";
        break;

      default:
        produto.disponibilidadeDesc = "Erro disponibilidade";
    }

    return (
      <li className={"ProdutoEntry " + (produto.disponibilidade === "emFalta" ? "EmFalta" : "")}>
        <img className="ProdutoIcon" src="../pet_food_icon.png" alt="Vet" />
        <div className="ProdutoDados">
          <p className="ProdutoNome">{produto.nome}</p>
          <p className="ProdutoDisponibilidade">{produto.disponibilidadeDesc}</p>
          <p>{curr.format(produto.preco)}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="ProdutosListPage">
      <BackButton prevPage="/" />
      <h1>Produtos</h1>
      <ul className="ProdutosList">{
        produtos.length > 0 ? produtosItems
          : <li className="ProdutoEntry Error">Nenhum produto encontrado</li>
      }</ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ProdutosListPage.css";
import BackButton from "../Components/BackButton";
import { getProdutosPorLoja } from "../../services/produtos";

export default function ProdutosListPage() {
  const { idLoja } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const location = useLocation();
  const { loja } = location.state;

  useEffect(() => {
    getProdutosPorLoja(idLoja).then((produtos) => {
      setProdutos(produtos);
      setCarregando(false);

      produtos.sort((a, b) => {
        return a.disponibilidade === "emFalta";
      });
    });
  }, []);

  const curr = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const produtosItems = produtos.map((produto) => {
    switch (produto.disponibilidade) {
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
      <li
        key={produto.idProduto}
        className={
          "ProdutoEntry " +
          (produto.disponibilidade === "emFalta" ? "EmFalta" : "")
        }
      >
        <img className="ProdutoIcon" src="../pet_food_icon.png" alt="Vet" />
        <div className="ProdutoDados">
          <p className="ProdutoNome">{produto.nome}</p>
          <p className="ProdutoDisponibilidade">
            {produto.disponibilidadeDesc}
          </p>
          <p>{curr.format(produto.preco)}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="ProdutosListPage">
      <BackButton prevPage="/lojas" />
      <h1>{loja.nome}</h1>
      <div className="LojaInfo">
        <p><b>Tel:</b> {loja.telefone}</p>
        <p><b>Email:</b> {loja.email}</p>
        <p><b>Endereço:</b></p>
        <p>
          {loja.endereco} - {loja.cidade}
        </p>
      </div>
      <h2>Produtos</h2>
      <ul className="ProdutosList">
        {produtos.length > 0 ? (
          produtosItems
        ) : carregando ? <li>Carregando dados...</li>
            : <li className="ProdutoEntry Error">Nenhum produto encontrado</li>
        }
      </ul>
    </div>
  );
}

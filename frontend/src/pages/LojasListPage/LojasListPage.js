import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LojasListPage.css";
import BackButton from "../Components/BackButton";
import { getLojas } from "../../services/lojas";

export default function LojasListPage() {
  const [lojas, setLojas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getLojas().then((lojas) => {
      setLojas(lojas);
      setCarregando(false);
    });
  }, []);

  const lojasItems = lojas.map((loja) => {
    return (
      <li key={loja.idLoja}>
        <Link to={"/lojas/" + loja.idLoja}
            state={{ loja: loja }}>
          <div className="LojaEntry">
            <img className="LojaIcon" src="../loja_icon.png" alt="Vet" />
            <div className="LojaDados">
              <p className="LojaNome">{loja.nome}</p>
              <p>
                {loja.endereco} - {loja.cidade}
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="LojasListPage">
      <BackButton prevPage="/" />
      <h1>Lojas</h1>
      <ul className="LojasList">
        {lojas.length > 0 ? (
          lojasItems
        ) : carregando ? <li>Carregando dados...</li>
            : <li className="ProdutoEntry Error">Nenhuma loja encontrada</li>
        }
      </ul>
    </div>
  );
}

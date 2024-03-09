import React from "react";
import "./ArticlesListPage.css";
import TextBox from "../Components/TextBox";
import BackButton from "../Components/BackButton";

import { Link } from "react-router-dom";

export default function ArticlesListPage() {
  const articlesList = [
    {
      id: "descubra-como-proteger-seu-cachorro-de-pulgas",
      title:
        "Descubra as melhores formas de proteger seu cachorro de pulgas e carrapatos. Entenda como a coleita antipulgas pode ser uma ótima aliada nesse verão.",
    },
    {
      id: "quais-frutas-podem-ser-incluidas-na-dieta-de-seu-gatinho",
      title:
        "Você sabe quais frutas podem ser incluídas na dieta do seu gatinho sem prejudicar sua saúde? Feja aqui uma lista.",
    },
    {
      id: "sinais-que-seu-animalziho-esta-estressado",
      title:
        "Sinais de que seu animalzinho está estressado e precisa de uma atenção extra! Nem sempre a coceira indica uma alergia, confira.",
    },
    {
      id: "test",
      title: "Test",
    },
  ];

  const articleItems = articlesList.map((article) => {
    return (
      <li key={article.id}>
        <Link to={article.id}>
          <TextBox text={article.title} />
        </Link>
      </li>
    );
  });

  return (
    <div className="ArticlesListPage">
      <BackButton prevPage="/" />
      <h1>Blog</h1>
      <div className="ArticlesList">
        <ul>{articleItems}</ul>
      </div>
    </div>
  );
}

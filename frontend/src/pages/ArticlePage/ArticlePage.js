import React from "react";
import "./ArticlePage.css";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import articlesList from "./articles.json";

import BackButton from "../Components/BackButton";

export default function ArticlePage() {
  const { articleId } = useParams();

  const currentArticle = articlesList.filter(
    (article) => article.id === articleId
  )[0];

  if (currentArticle) {
    const sanitizedContent = DOMPurify.sanitize(currentArticle.content);

    return (
      <div className="ArticlePage">
        <BackButton prevPage="/dicas" />
        <div className="ArticleArea">
          <h1>{currentArticle.title}</h1>
          <div
            className="ArticleContent"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="ArticlePage">
        <BackButton prevPage="/dicas" />
        <div className="ArticleArea">
          <h1>Artigo não encontrado!</h1>
          <p>
            Não foi possível carregar o artigo selecionado. Por favor, retorne a
            página e selecione outro.
          </p>
        </div>
      </div>
    );
  }
}

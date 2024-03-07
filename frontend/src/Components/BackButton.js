import React from "react";
import "./BackButton.css";

import { Link } from "react-router-dom";

export default function BackButton({ prevPage }) {
  return (
    <Link to={prevPage} className="BackButton">
      <img src="/botao_voltar.png" alt="Voltar" />
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./FormEnviado.css";

import BackButton from "../Components/BackButton";
import DarkButton from "../Components/DarkButton";

export default function FormEnviado() {
  return (
    <div className="FormEnviadoPage">
      <BackButton prevPage="/" />
      <h2>
        Formulário recebido com sucesso!
      </h2>
      <h3>Em breve você receberá um orçamento em
        seu e-mail.
      </h3>
      <img className="Logo" alt="Logo" src="/logo_nutri_pet.png" />
      <Link to="/">
        <DarkButton text="Voltar" />
      </Link>
    </div>
  );
}

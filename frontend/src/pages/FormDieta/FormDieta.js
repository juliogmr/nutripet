import React from "react";
import { Link } from "react-router-dom";
import "./FormDieta.css";
import InputBox from "../Components/InputBox";
import BackButton from "../Components/BackButton";
import DarkButton from "../Components/DarkButton";

export default function FormDieta() {
  const headerText =
    "Formulário solicitação de orçamento de dieta personalizada";

  return (
    <div className="FormDieta">
      <BackButton prevPage="/" />
      <h1>{headerText}</h1>
      <form>
        <div className="FormArea">
          <div className="FormRow">
            <InputBox
              name="nome_tutor"
              type="text"
              placeholder="Nome do tutor"
              backgroundType="Light"
              size="Large"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="cpf_tutor"
              type="text"
              placeholder="CPF do tutor"
              backgroundType="Light"
              size="Small"
            />
            <InputBox
              name="telefone"
              type="tel"
              placeholder="Telefone"
              backgroundType="Light"
              size="Small"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="email"
              type="email"
              placeholder="E-mail"
              backgroundType="Light"
              size="Large"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="nome_animal"
              type="text"
              placeholder="Nome do animal"
              backgroundType="Light"
              size="Small"
            />
            <InputBox
              name="idade_animal"
              type="number"
              min="0"
              placeholder="Idade do animal"
              backgroundType="Light"
              size="Small"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="num_refeicoes"
              type="number"
              min="1"
              placeholder="Nº de refeições diárias"
              backgroundType="Light"
              size="Small"
            />
            <InputBox
              name="raca"
              type="text"
              placeholder="Raça"
              backgroundType="Light"
              size="Small"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="objetivo"
              type="text"
              placeholder="Objetivo da dieta"
              backgroundType="Light"
              size="Large"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="restricoes"
              type="text"
              placeholder="Restrições alimentares"
              backgroundType="Light"
              size="Large"
            />
          </div>
          <div className="FormRow">
            <InputBox
              name="ingredientes_essenciais"
              type="text"
              placeholder="Ingredientes essenciais"
              backgroundType="Light"
              size="Large"
            />
          </div>
        </div>
        <Link to="/form_enviado">
          <DarkButton type="submit" text="Enviar" />
        </Link>
      </form>
    </div>
  );
}

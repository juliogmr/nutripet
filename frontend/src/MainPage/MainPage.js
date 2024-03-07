import React from "react";
import "./MainPage.css";
import SearchBar from "./SearchBar";
import SectionButton from "./SectionButton";
import TextBox from "../Components/TextBox";

import { Link } from "react-router-dom";

export default function MainPage() {
  const firstBanner =
    "Assine a versão premium e garanta consultas nutricionais ilimitadas";
  const secondBanner =
    "Adquira o clube de vantagens com cupons de desconto exclusivos";

  return (
    <div className="MainPage">
      <SearchBar />
      <div className="SectionButtonsContainer">
        <Link to="/form_dieta">
          <SectionButton
            image="../icone_dieta_personalizada.png"
            text="Dieta Personalizada"
          />
        </Link>
        <Link to="/main">
          <SectionButton image="../icone_veterinario.png" text="Veterinário" />
        </Link>
        <Link to="/main">
          <SectionButton
            image="../icone_pronta_entrega.png"
            text="Pronta Entrega"
          />
        </Link>
        <Link to="/dicas">
          <SectionButton
            image="../icone_dicas_de_saude.png"
            text="Dicas de saúde"
          />
        </Link>
      </div>
      <TextBox text={firstBanner} height="78px" width="289px" />
      <TextBox text={secondBanner} height="78px" width="289px" />
    </div>
  );
}

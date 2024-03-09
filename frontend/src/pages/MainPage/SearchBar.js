import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input id="query" name="query" placeholder="Pesquisar Endereço" />
      <button className="SearchButton" type="submit">
        <img src="/lupa.png" alt="Lupa" />
      </button>
    </div>
  );
}

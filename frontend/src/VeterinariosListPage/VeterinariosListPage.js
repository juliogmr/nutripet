import React from "react";
import "./VeterinariosListPage.css";
import BackButton from "../Components/BackButton";

import { Link } from "react-router-dom";

export default function VeterinariosListPage() {
  const veterinarios = [
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.com",
    },
  ];

  const veterinariosItems = veterinarios.map((veterinario) => {
    return (
      <li className="VeterinarioEntry">
        <img className="VetIcon" src="../vet_icon.png" alt="Vet" />
        <div className="VetDados">
          <p className="VetName">{veterinario.nome}</p>
          <p>Tel: {veterinario.telefone}</p>
          <p>Email: {veterinario.email}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="VeterinariosListPage">
      <BackButton prevPage="/main" />
      <h1>Veterinários</h1>
      <div className="VeterinariosList">
        <ul>{veterinariosItems}</ul>
      </div>
    </div>
  );
}

import React from "react";
import "./VeterinariosListPage.css";
import BackButton from "../Components/BackButton";

export default function VeterinariosListPage() {
  const veterinarios = [
    {
      id: 1,
      nome: "Veterinario A",
      telefone: "11111111",
      email: "veterinarioA@email.comaaaaa",
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
          <p>Email: <a href={"mailto:" + veterinario.email}>{veterinario.email}</a></p>
        </div>
      </li>
    );
  });

  return (
    <div className="VeterinariosListPage">
      <BackButton prevPage="/main" />
      <h1>Veterinários</h1>
      <ul className="VeterinariosList">{veterinariosItems}</ul>
    </div>
  );
}

import React, {useEffect, useState} from "react";
import "./VeterinariosListPage.css";
import BackButton from "../Components/BackButton";
import getVeterinarios from "../../services/veterinarios";

export default function VeterinariosListPage() {
  const [veterinarios, setVeterinarios] = useState([]);

  useEffect(() => {
    getVeterinarios().then((vets) => {
      setVeterinarios(vets);
    });
  }, []);
  
  const veterinariosItems = veterinarios.map((veterinario) => {
    return (
      <li className="VeterinarioEntry">
        <img className="VetIcon" src="../../vet_icon.png" alt="Vet" />
        <div className="VetDados">
          <p className="VetName">{veterinario.nome}</p>
          <p>Especialidade: {veterinario.especialidade}</p>
          <p>Tel: {veterinario.telefone}</p>
          <p>Email: <a href={"mailto:" + veterinario.email}>{veterinario.email}</a></p>
        </div>
      </li>
    );
  });


  return (
    <div className="VeterinariosListPage">
      <BackButton prevPage="/" />
      <h1>Veterinários</h1>
      <ul className="VeterinariosList">{
        veterinarios.length > 0 ? veterinariosItems
          : <li className="VeterinarioEntry Error">Nenhum veterinário encontrado</li>
      }</ul>
    </div>
  );
}

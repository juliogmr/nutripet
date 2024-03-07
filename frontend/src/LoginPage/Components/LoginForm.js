import React from "react";
import InputBox from "../../Components/InputBox";
import DarkButton from "../../Components/DarkButton";
import "./LoginForm.css";

function LoginForm() {
  // async function login(formData) {
  //   const user = formData.get("user");
  //   const password = formData.get("password");
  //   alert(`Initializing login with ${user} : ${password}`);
  // }

  return (
    <form method="GET" className="LoginForm">
      <InputBox name="user" type="text" placeholder="E-mail ou CPF" />
      <InputBox name="password" type="password" placeholder="Senha" />
      <p>
        Esqueceu sua senha?{" "}
        <b>
          <u>Clique aqui.</u>
        </b>
      </p>
      <DarkButton type="submit" text="Entrar" />
    </form>
  );
}

export default LoginForm;

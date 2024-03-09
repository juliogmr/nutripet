import React from "react";
import LoginForm from "./Components/LoginForm";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <img className="Logo" alt="Logo" src="/logo_nutri_pet.png" />

      <LoginForm />
      <div className="SocialMediaBar">
        <img
          id="instagramIcon"
          className="SocialMediaIcon"
          alt="Ícone do Instagram"
          src="../instagram_logo.png"
        />
        <img
          id="facebookIcon"
          className="SocialMediaIcon"
          alt="Ícone do Facebook"
          src="../facebook_logo.png"
        />
        <img
          id="whatsappIcon"
          className="SocialMediaIcon"
          alt="Ícone do What's App"
          src="../whatsapp_logo.png"
        />
      </div>
    </div>
  );
}

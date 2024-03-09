import React from "react";
import "./DarkButton.css";

export default function DarkButton({ text, type }) {
  return (
    <button className="DarkButton" type={type}>
      {text}
    </button>
  );
}

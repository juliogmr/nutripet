import React from "react";
import "./TextBox.css";

export default function TextBox({ text, width = "248px", height = "auto" }) {
  return (
    <div className="TextBox" style={{ width: width, height: height }}>
      <p>{text}</p>
    </div>
  );
}

import React from "react";
import "./SectionButton.css";

export default function SectionButton({ image, text }) {
  return (
    <button className="SectionButton">
      <img className="SectionIcon" src={image} alt={text} />
      <p className="SectionLabel">{text}</p>
    </button>
  );
}

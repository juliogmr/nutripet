import React from "react";
import "./InputBox.css";

export default function InputBox({
  name,
  placeholder,
  type,
  min,
  backgroundType = "Dark",
  size = "Large",
  required = true,
}) {
  return (
    <input
      className={`InputBox ${backgroundType} ${size}`}
      name={name}
      type={type}
      placeholder={placeholder}
      min={min}
      required={required}
    />
  );
}

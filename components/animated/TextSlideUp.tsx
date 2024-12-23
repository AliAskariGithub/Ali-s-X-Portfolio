"use client";

import React from "react";
import "./TextSlideUp.css";

interface TextSlideUpProps {
  text?: string;
}

const TextSlideUp: React.FC<TextSlideUpProps> = ({ text = "Ali Askari" }) => {
  return (
    <div className="slide-up-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`slide-up-letter ${char === " " ? "space" : ""}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextSlideUp;

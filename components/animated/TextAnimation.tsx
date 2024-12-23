"use client";

import React from "react";
import "./TextAnimation.css"; // Import the CSS styles

const TextAnimation: React.FC = () => {
  const text = "ᖴᖇᗝᑎ丅- ᗴᑎᗪ ᗪᗴᐯᗴᒪᗝᑭᗴᖇ";

  return (
    <div className="text-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`text-letter ${char === " " ? "space" : ""} text-xl`}
          style={{
            animationDelay: `${index * 0.09}s`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;

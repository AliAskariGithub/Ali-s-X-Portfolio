"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const RotatingText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer", "UI/UX Designer", "Figma Designer"], 
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} />;
};

export default RotatingText;

import React from "react";
import "./Missanga.scss";

// Faixa decorativa inspirada nas missangas e no xibelani machangana
export default function Missanga({thin = false}) {
  return (
    <div
      className={thin ? "missanga missanga-thin" : "missanga"}
      aria-hidden="true"
    />
  );
}

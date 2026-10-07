import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import Missanga from "../missanga/Missanga";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade fraction={0} bottom duration={1000} distance="5px">
      <div className="footer-div">
        <Missanga />
        <p className="footer-kanimambo">Kanimambo!</p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Feito com ❤️ em Moçambique por Stélvio Chibuco")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Baseado no{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>{" "}
          de Saad Pasta
        </p>
      </div>
    </Fade>
  );
}

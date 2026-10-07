import React, {useContext, useEffect, useRef} from "react";
import "./twitter.scss";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// Carrega o widget oficial do X. Se for bloqueado, fica o link para o perfil.
function loadWidgets(container) {
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load(container);
    return;
  }
  let script = document.getElementById("twitter-wjs");
  if (!script) {
    script = document.createElement("script");
    script.id = "twitter-wjs";
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }
  script.addEventListener("load", () => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(container);
    }
  });
}

export default function Twitter() {
  const {isDark} = useContext(StyleContext);
  const containerRef = useRef(null);
  const userName = (twitterDetails.userName || "").replace(/^@/, "");

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !userName) return;
    container.innerHTML = "";
    const link = document.createElement("a");
    link.className = "twitter-timeline";
    link.href = `https://x.com/${userName}`;
    link.rel = "noopener noreferrer";
    link.target = "_blank";
    link.dataset.height = "400";
    link.dataset.theme = isDark ? "dark" : "light";
    link.dataset.chrome = "nofooter";
    link.textContent = `Ver publicações de @${userName} no X`;
    container.appendChild(link);
    loadWidgets(container);
  }, [isDark, userName]);

  if (!twitterDetails.display || !userName) {
    return null;
  }
  return (
    <div className="tw-main-div" id="twitter">
      <div className="centerContent" ref={containerRef} />
    </div>
  );
}

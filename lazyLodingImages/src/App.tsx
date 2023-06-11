import React, { useEffect } from "react";
import Main from "./pages/Main";
import "./styles.css";

import e from "./images/e.jpg";
import f from "./images/f.jpg";
import g from "./images/g.jpg";
import ee from "./images/e.jpg";
import ff from "./images/f.jpg";
import gg from "./images/g.jpg";

import lowE from "./images/resize_imges/e.jpg";
import lowF from "./images/resize_imges/f.jpg";
import lowG from "./images/resize_imges/g.jpg";

function App() {
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur_load");
    console.log("blurDivs", blurDivs);

    blurDivs.forEach((div) => {
      const img = div.querySelector("img");
      console.log("img", img);

      function loaded() {
        console.log("loaded");

         div.classList.add("loaded");
      }
      if (img?.complete) {
        loaded();
      } else {
        img?.addEventListener("load", loaded);
      }
    });
  }, []);

  return (
    <div className="grid">
      <div className="blur_load" style={{ backgroundImage: `url(${lowE})` }}>
        <img src={e} width={300} height={300} alt="" loading="lazy" />
      </div>

      <div className="blur_load" style={{ backgroundImage: `url(${lowF})` }}>
        <img src={f} width={300} height={300} alt="" loading="lazy" />
      </div>
      <div className="blur_load" style={{ backgroundImage: `url(${lowG})` }}>
        <img src={g} width={300} height={300} alt="" loading="lazy" />
      </div>
    </div>
  );
}

export default App;

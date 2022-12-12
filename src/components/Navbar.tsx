import React, { useRef } from "react";

import { useEffect, useState } from "react";
import * as s from "./Navbar.module.scss";
import logo from "../images/mousse_logo_transparent.png";
import gsap from "gsap";

function Navbar() {
  const [checked, setChecked] = useState(false);
  const nav: any = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setChecked(false);
      console.log(window.scrollY);
      if (window.scrollY > 400) {
        gsap.to([nav.current], {
          backgroundColor: "#b82050",
          duration: 0.7,
          zIndex: 999,
        });
      }
    });
  });

  return (
    <>
      <div className={s.navbar} ref={nav}>
        <img className={s.logo} src={logo} />

        <div className={s.wrapper} id={"burger"}>
          <div id={s.menuToggle}>
            <input
              type="checkbox"
              id={"toggle"}
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
            <span></span>
            <span></span>
            <span></span>

            <ul id={s.menu}>
              <a href="/#about">
                <li>Records</li>
              </a>
              <a href="/#projects">
                <li>Shows</li>
              </a>
              <a href="#">
                <li>Merch</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

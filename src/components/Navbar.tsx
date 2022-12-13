import React, { useRef } from "react";

import { useEffect, useState } from "react";
import * as s from "./Navbar.module.scss";
import logo from "../images/mousse_logo_transparent.svg";
import logoFull from "../images/mousse_logo_white.svg";
import gsap from "gsap";

function Navbar() {
  const [checked, setChecked] = useState(false);
  const nav: any = useRef();
  const initialImg: any = useRef();
  const scrollImg: any = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setChecked(false);
      // gsap.to([nav.current], {
      //   display: "none",
      // });
      // if (window.scrollY > 30) {
      //   gsap.to([initialImg.current], {
      //     display: "none",
      //   });
      //   // gsap.to([scrollImg.current], {
      //   //   display: "inherit",
      //   // });
      // }
    });
  });

  return (
    <>
      <div className={s.navbar} ref={nav}>
        <img className={s.logo} src={logo} ref={initialImg} />
        <img className={s.logoFull} src={logoFull} ref={scrollImg} />

        {/* <div className={s.wrapper} id={"burger"}>
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
        </div> */}
      </div>
    </>
  );
}

export default Navbar;

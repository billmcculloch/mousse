import { url } from "inspector";
import React from "react";
import * as s from "./Hero.module.scss";
import logo from "../images/mousse_name_white.svg";

function Hero() {
  return (
    <>
      <div className={s.wrapper}>
        <img className={s.logo} src={logo} />
      </div>
    </>
  );
}

export default Hero;

// useEffect(() => {
//   gsap.fromTo(
//     [lightRef.current],
//     { y: -200, opacity: 0 },
//     { y: 0, opacity: 1, duration: 1.5 }
//   );
//   gsap.fromTo(
//     [imageRef.current],
//     { x: -200, opacity: 0 },
//     { x: 0, opacity: 1, duration: 2 }
//   );
//   setTimeout(() => {
//     gsap.fromTo(
//       [computerRef.current],
//       { autoAlpha: 0 },
//       { autoAlpha: 1, duration: 0.5 }
//     );
//   }, 2000);
// });

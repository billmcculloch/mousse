import React from "react";
import * as s from "./Shows.module.scss";
import Show from "./Show";
import Title from "./Title";

function Shows() {
  return (
    <div className={s.wrapper}>
      <div className={s.shows}>
        <Title title={"SHOWS"} />
        <Show date={"12/12/2022"} />
        <Show date={"12/12/2022"} />
        <Show date={"12/12/2022"} />
      </div>
    </div>
  );
}

export default Shows;

// useEffect(() => {
//   const cont = document.getElementById("about");
//   const nav = document.getElementById("burger");
//   window.addEventListener("scroll", () => {
//     if (isVisible(nav, cont)) {
//       console.log("visible in div");
//     } else {
//       console.log("not visible in div");
//     }
//   });
// }, []);
// const isVisible = function (
//   element: HTMLElement | null,
//   container: HTMLElement | null
// ) {
//   if (!element || !container) {
//     return;
//   }
//   const { bottom, height, top } = element.getBoundingClientRect();
//   const containerRect = container.getBoundingClientRect();

//   return top <= containerRect.top
//     ? containerRect.top - top <= height
//     : bottom - containerRect.bottom <= height;
// };

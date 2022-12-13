import React from "react";
import Record from "./Record";
import Title from "./Title";
import * as s from "./Records.module.scss";
import LOL from "../images/LadyOfLeisure.jpg";
import LMF from "../images/LetMeFree.jpg";

function Records() {
  return (
    <div className={s.container}>
      <Title title={"LISTEN"} />
      <div className={s.records}>
        <Record imgUrl={LOL} onClick={() => console.log("clicked LOL")} />
        <Record imgUrl={LMF} onClick={() => console.log("clicked LMF")} />
      </div>
    </div>
  );
}

export default Records;

import React from "react";
import * as s from "./Show.module.scss";

type ShowProps = {
  date: String;
};

function Show({ date }: ShowProps) {
  return (
    <>
      <div className={s.container}>
        <div className={s.child}>{date}</div>
      </div>
    </>
  );
}

export default Show;

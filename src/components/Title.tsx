import React from "react";
import * as s from "./Title.module.scss";

type TitleProps = {
  title: String;
};

function Title({ title }: TitleProps) {
  return (
    <div className={s.title}>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;

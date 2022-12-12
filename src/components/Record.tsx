import React, { MouseEventHandler } from "react";
import * as s from "./Record.module.scss";

type ShowProps = {
  imgUrl: string;
  onClick: MouseEventHandler;
};

function Record({ imgUrl, onClick }: ShowProps) {
  return (
    <>
      <img className={s.record} src={imgUrl} onClick={onClick} />
    </>
  );
}

export default Record;

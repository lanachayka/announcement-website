import React from "react";
import style from "./SimilarItems.module.css";

export default function SimilarItems(props) {
  return (
    <div>
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.text}>{props.description}</p>
      <p className={style.text}>{props.dateAdded}</p>
    </div>
  );
}

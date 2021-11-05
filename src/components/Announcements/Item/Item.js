import React from 'react'
import style from "./Item.module.css";

export default function Item(props) {
    return (
      <div className={style.wrapper}>
        <h3 className={style.title}>{props.title}</h3>
        <p className={style.text}>{props.description}</p>
      </div>
    );
}

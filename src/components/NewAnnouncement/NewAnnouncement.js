import React from 'react'
import style from "./NewAnnouncement.module.css";

export default function NewAnnouncement() {
    return (
      <div className={style.wrapper}>
        <input className={style.input} placeholder="Title..."></input>
        <textarea
          className={style.textarea}
          placeholder="Your announcement..."
        ></textarea>
        <button className={style.btn}>Add new announcement</button>
      </div>
    );
}

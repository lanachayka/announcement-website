import React from 'react'
import style from "./Announcements.module.css";

export default function Announcements() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Notice Board</h1>
        <input className={style.input} placeholder="Title..."></input>
        <textarea
          className={style.textarea}
          placeholder="Write your announcement..."
        ></textarea>
        <button className={style.btn}>Add new announcement</button>
      </div>
    );
}

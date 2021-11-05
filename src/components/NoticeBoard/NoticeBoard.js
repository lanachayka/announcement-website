import React from 'react'
import style from "./NoticeBoard.module.css";

export default function NoticeBoard() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Notice Board</h1>
        <div className={style.mainContetnt}>
          <div className={style.addNew}>
            <input className={style.input} placeholder="Title..."></input>
            <textarea
              className={style.textarea}
              placeholder="Your announcement..."
            ></textarea>
            <button className={style.btn}>Add new announcement</button>
          </div>
          <h1>Here will be other announcements</h1>
        </div>
      </div>
    );
}

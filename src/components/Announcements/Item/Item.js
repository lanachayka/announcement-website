import React from 'react'
import style from "./Item.module.css";
import deleteIcon from "./delete_white_24dp.svg";

export default function Item(props) {
    return (
      <div className={style.wrapper}>
        <div className={style.buttons}>
          <button
            onClick={() => props.deleteAnnouncement(props.id)}
            className={style.btn}
          >
            <img src={deleteIcon} alt="delete icon" />
          </button>
        </div>
        <h3 className={style.title}>{props.title}</h3>
        <p className={style.text}>{props.description}</p>
      </div>
    );
}

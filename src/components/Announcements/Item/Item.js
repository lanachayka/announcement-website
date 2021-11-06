import React from "react";
import style from "./Item.module.css";
import deleteIcon from "./delete_white_24dp.svg";
import editIcon from "./edit_white_24dp.svg";
import { useState } from "react";

export default function Item(props) {
  const [edit, setEdit] = useState(false);
  const startEdit = () => {
    props.updateNewAnnouncementTitle(props.title);
    props.updateNewAnnouncementText(props.description);
    setEdit(true);
  };
  const onTextChange = (event) => {
    props.updateNewAnnouncementText(event.target.value);
  };
  const onTitleChange = (event) => {
    props.updateNewAnnouncementTitle(event.target.value);
  };
  const sumbitChanges = () => {
    props.editAnnouncement(props.id);
    setEdit(false);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.buttons}>
        <button onClick={startEdit} className={style.btn}>
          <img src={editIcon} alt="edit icon" />
        </button>
        <button
          onClick={() => props.deleteAnnouncement(props.id)}
          className={style.btn}
        >
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
      {edit ? (
        <div className={style.edit}>
          <input
            onChange={onTitleChange}
            value={props.newAnnouncementTitle}
          ></input>
          <textarea
            onChange={onTextChange}
            className={style.editPlace}
            value={props.newAnnouncementText}
          ></textarea>
          <button onClick={sumbitChanges} className={style.btn}>
            Submit Changes
          </button>
        </div>
      ) : (
        <div>
          <h3 className={style.title}>{props.title}</h3>
          <p className={style.text}>{props.description}</p>
          <p className={style.text}>{props.dateAdded}</p>
        </div>
      )}
    </div>
  );
}

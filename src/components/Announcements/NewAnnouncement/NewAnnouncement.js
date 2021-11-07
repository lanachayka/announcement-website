import React from "react";
import style from "./NewAnnouncement.module.css";

export default function NewAnnouncement({
  newAnnouncementTitle,
  newAnnouncementText,
  addAnnouncement,
  updateNewAnnouncementTitle,
  updateNewAnnouncementText,
}) {
  const onAddAnnouncement = () => {
    if (newAnnouncementTitle.length > 0 && newAnnouncementText.length > 0) {
      addAnnouncement();
    }
  };
  const onTitleChange = (event) => {
    updateNewAnnouncementTitle(event.target.value);
  };
  const onTextChange = (event) => {
    updateNewAnnouncementText(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <input
        onChange={onTitleChange}
        className={style.input}
        placeholder="Title..."
      ></input>
      <textarea
        onChange={onTextChange}
        className={style.textarea}
        placeholder="Your announcement..."
      ></textarea>
      <button onClick={onAddAnnouncement} className={style.btn}>
        Add new announcement
      </button>
    </div>
  );
}

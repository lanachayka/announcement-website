import React from "react";
import style from "./NewAnnouncement.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addAnnouncement, updateNewAnnouncementTitle, updateNewAnnouncementText } from '../../../redux/announcementsReducer'

export default function NewAnnouncement() {

  const newAnnouncementTitle = useSelector(state => state.announcements.newAnnouncementTitle);
  const newAnnouncementText = useSelector(state => state.announcements.newAnnouncementText);

  const dispatch = useDispatch();

  const onAddAnnouncement = () => {
    if (newAnnouncementTitle.length > 0 && newAnnouncementText.length > 0) {
      dispatch(addAnnouncement());
    }
  };
  const onTitleChange = (event) => {
    dispatch(updateNewAnnouncementTitle(event.target.value));
  };
  const onTextChange = (event) => {
    dispatch(updateNewAnnouncementText(event.target.value));
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

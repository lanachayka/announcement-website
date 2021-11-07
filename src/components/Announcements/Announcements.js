import React from "react";
import Item from "./Item/Item";
import NewAnnouncement from "./NewAnnouncement/NewAnnouncement";
import style from "./Announcements.module.css";
import { useState } from "react";
import SimilarItems from "./SimilarItems/SimilarItems";

export default function Announcements(props) {
  const [filter, setFilter] = useState("");
  const searchByTitle = (event) => {
    setFilter(event.target.value.toLowerCase());
  };
  const [showTitle, setShowTitle] = useState(true);
  const onTitleShow = (event) => {
    setShowTitle(event.target.checked);
  };
  const [showText, setShowText] = useState(true);
  const onTextShow = (event) => {
    setShowText(event.target.checked);
  };
  const [showDate, setShowDate] = useState(true);
  const onDateShow = (event) => {
    setShowDate(event.target.checked);
  };
  return (
    <div className={style.wrapper}>
      <NewAnnouncement
        newAnnouncementTitle={props.newAnnouncementTitle}
        newAnnouncementText={props.newAnnouncementText}
        addAnnouncement={props.addAnnouncement}
        updateNewAnnouncementTitle={props.updateNewAnnouncementTitle}
        updateNewAnnouncementText={props.updateNewAnnouncementText}
      />
      <div>
        <div className={style.search}>
          <p>Search by Title</p>
          <input onChange={searchByTitle} className={style.searchInput}></input>
        </div>
        <div>
          <p>Select Details:</p>
          <label>
            <input
              type="checkbox"
              defaultChecked
              onChange={onTitleShow}
            ></input>
            Title
          </label>
          <label>
            <input type="checkbox" defaultChecked onChange={onTextShow}></input>
            Description
          </label>
          <label>
            <input type="checkbox" defaultChecked onChange={onDateShow}></input>
            Date Added
          </label>
        </div>
        {props.announcementData
          .filter((el) => el.title.toLowerCase().includes(filter))
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={showTitle ? item.title : ""}
              description={showText ? item.description : ""}
              dateAdded={showDate ? item.dateAdded : ""}
              deleteAnnouncement={props.deleteAnnouncement}
              updateNewAnnouncementText={props.updateNewAnnouncementText}
              newAnnouncementText={props.newAnnouncementText}
              updateNewAnnouncementTitle={props.updateNewAnnouncementTitle}
              newAnnouncementTitle={props.newAnnouncementTitle}
              editAnnouncement={props.editAnnouncement}
            />
          ))}
        <hr className={style.line} />
        <SimilarItems />
      </div>
    </div>
  );
}

import React, { createRef } from 'react'
import Item from './Item/Item'
import NewAnnouncement from './NewAnnouncement/NewAnnouncement';
import style from "./Announcements.module.css"
import { useState } from "react";

export default function Announcements(props) {
  const [filter, setFilter] = useState("")
  const searchByTitle = (event) => {
    setFilter(event.target.value.toLowerCase());
  }
  const titleRef = React.createRef();
  const textRef = React.createRef();
  const dateRef = React.createRef();
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
            <input type="checkbox" defaultChecked ref={titleRef}></input>Title
          </label>
          <label>
            <input type="checkbox" defaultChecked ref={textRef}></input>
            Description
          </label>
          <label>
            <input type="checkbox" defaultChecked ref={dateRef}></input>Date
            Added
          </label>
        </div>
        {props.announcementData
          .filter((el) => el.title.toLowerCase().includes(filter))
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              dateAdded={item.dateAdded}
              deleteAnnouncement={props.deleteAnnouncement}
              updateNewAnnouncementText={props.updateNewAnnouncementText}
              newAnnouncementText={props.newAnnouncementText}
              updateNewAnnouncementTitle={props.updateNewAnnouncementTitle}
              newAnnouncementTitle={props.newAnnouncementTitle}
              editAnnouncement={props.editAnnouncement}
            />
          ))}
      </div>
    </div>
  );
}
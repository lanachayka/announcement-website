import React from 'react'
import Item from './Item/Item'
import NewAnnouncement from './NewAnnouncement/NewAnnouncement';
import style from "./Announcements.module.css"

export default function Announcements(props) {
  const searchByTitle = (event) => {
    props.searchAnnouncement(event.target.value);
  }
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
        {props.announcementData.map((item) => (
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
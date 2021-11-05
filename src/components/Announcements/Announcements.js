import React from 'react'
import Item from './Item/Item'
import NewAnnouncement from './NewAnnouncement/NewAnnouncement';
import style from "./Announcements.module.css"

export default function Announcements(props) {
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
        {props.announcementData.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            dateAdded={item.dateAdded}
          />
        ))}
      </div>
    </div>
  );
}
import React from 'react'
import Item from './Item/Item'

export default function Announcements(props) {
  return (
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
  );
}
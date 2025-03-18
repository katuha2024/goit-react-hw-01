import React from 'react';
import FriendListItem from './FriendListItem'; // Імпортуємо компонент FriendListItem
import styles from "./FriendList.module.css";  // Імпортуємо стилі як модуль

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}> {/* Використовуємо styles для модульного CSS */}
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendListItem}> {/* Використовуємо styles і тут */}
          <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} 
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

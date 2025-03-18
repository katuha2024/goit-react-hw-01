import React from 'react';
import styles from './FriendListItem.module.css'; // Модульний CSS
import './reset.css'; // Глобальний CSS для скидання стилів

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}> {/* Використовуємо styles для модульних класів */}
      <img 
        src={avatar} 
        alt={`${name}'s avatar`} 
        className={styles.friendAvatar} 
      />
      <p className={styles.friendName}>{name}</p>
      <span 
        className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default FriendListItem;
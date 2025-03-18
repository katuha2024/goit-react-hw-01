import React from 'react';
import styles from './Profile.module.css'; // Модульний CSS
import './reset.css'; // Глобальний CSS для скидання стилів

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}> {/* Використовуємо styles для модульних класів */}
      <div className={styles.profileHeader}>
        <img
          src={image}
          alt="User avatar"
          className={styles.profileAvatar}
        />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.profileStats}>
        <li className={styles.profileStatItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.profileStatItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.profileStatItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

import React from 'react';
import './FriendListItem.css';
import './reset.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-item">
      <img 
        src={avatar} 
        alt={`${name}'s avatar`} 
        className="friend-avatar" 
      />
      <p className="friend-name">{name}</p>
      <span className={`friend-status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default FriendListItem;

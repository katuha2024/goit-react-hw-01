import React from 'react';
import Profile from './components/Profile'; // Імпорт профілю
import FriendList from './components/FriendList'; // Імпорт компонента списку друзів
import FriendListItem from './components/FriendListItem';
import userData from './userData.json'; // Імпорт даних користувача
import friends from './FriendList.json'; // Імпорт JSON із друзями
import './App.css';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} /> {/* Передаємо friends як проп */}
    </>
  );
}

export default App;

import React from 'react';
import Profile from './components/Profile'; // Імпорт профілю
import FriendList from './components/FriendList'; // Імпорт компонента списку друзів
import TransactionHistory from './components/TransactionHistory';
import FriendListItem from './components/FriendListItem';
import userData from './userData.json'; // Імпорт даних користувача
import friends from './FriendList.json'; // Імпорт JSON із друзями
import transactions from './transactions.json';
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
      <TransactionHistory items={transactions}/>
    </>
  );
}

export default App;

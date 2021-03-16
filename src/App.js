import React from 'react';
import user from './Components/Profile/user.json';
import Profile from './Components/Profile';

import statisticalData from './Components/Statistics/statistical-data.json';
import TitleStat from './Components/Statistics/TitleStat';
import Statistics from './Components/Statistics/Statistics';

import friends from './Components/FriendList/friends.json';
import FriendList from './Components/FriendList';

import transactions from './Components/Transaction-history/transactions.json';
import TransactionHistory from './Components/Transaction-history';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TitleStat title="Upload stats">
        <Statistics stats={statisticalData} />
      </TitleStat>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

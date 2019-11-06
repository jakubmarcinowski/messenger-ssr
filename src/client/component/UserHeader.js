import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';

const UserHeader = ({ userId }) => {
  const fakeDate = Math.floor(Math.random() * 30) + 1;
  const profile = useSelector((state) => state.profile.find((user) => user.id === userId));
  if (profile) {
    return <Header name={profile.name} date={fakeDate} />;
  }
  return <div>Loading...</div>;
};


export default UserHeader;

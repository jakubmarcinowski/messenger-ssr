import React from 'react';

// SSR
import { fetchCommentsAndUsers, fetchProfile } from '../actions';

// Components
import ProfileSelf from '../component/ProfileSelf';
import ProfileComments from '../component/ProfileComments';

import './HomePage.scss';

const a = 3;

const HomePage = () => {
  return (
    <div className="container__wrapper">
      <div className="container">
        <ProfileSelf id={a} />
        <ProfileComments counter="10" />
      </div>
    </div>
  );
};


export default {
  component: HomePage,
  loadData: ({ dispatch }) => {
    return dispatch(fetchProfile(3)).then(() => {
      return dispatch(fetchCommentsAndUsers());
    });
  },
};

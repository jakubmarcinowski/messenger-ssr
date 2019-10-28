import _ from 'lodash';
import jsonProfile from '../api/jsonProfile';

import {
  FETCH_PROFILE,
  FETCH_COMMENTS,
  POST_COMMENT,
} from './types';


export const postComment = comment => {
  return {
    type: POST_COMMENT,
    payload: comment,
  };
};

export const fetchProfile = (id) => async dispatch => {
  const response = await jsonProfile.get(`/users/${id}`);
  dispatch({
    type: FETCH_PROFILE,
    payload: response.data,
  });
};

// to delete for experiment
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export const fetchComments = () => async dispatch => {
  const response = await jsonProfile.get('/posts');

  dispatch({
    type: FETCH_COMMENTS,
    payload: shuffle(response.data),
  });
};

export const fetchCommentsAndUsers = () => async (dispatch, getState) => {
  // Call fetchComments
  await dispatch(fetchComments());
  // Call fetchUser
  _.chain(getState().comments)
    .map('userId') // map users
    .uniq() // only uniqe users
    .forEach(id => dispatch(
      fetchProfile(id),
    )) // call fetch to uniq users
    .value(); // Start chain
};

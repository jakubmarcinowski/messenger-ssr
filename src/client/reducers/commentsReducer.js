import {
  FETCH_COMMENTS,
  POST_COMMENT,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      {
        return [...state, ...action.payload];
      }
    case POST_COMMENT:
      {
        return [{
          id: 101,
          title: action.payload.comment,
          userId: 1,
        }, ...state];
      }
    default:
      return state;
  }
};

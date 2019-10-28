import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from './profileReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  profile: profileReducer,
  form: formReducer,
  comments: commentsReducer,
});

import { createStore, applyMiddleware } from 'redux';
import { composewWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//All the initial states will be in the redcers file
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composewWithDevTools(applyMiddleware(...middleware))
);

export default store;

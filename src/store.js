import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducer from './reducers/employees'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

import {createStore, applyMiddleware, combineReducers} from 'redux';
import employees from './reducers/employees';
import settings from "./reducers/settings";

const store = createStore(combineReducers({employees, settings}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

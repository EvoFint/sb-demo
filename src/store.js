import {createStore, applyMiddleware, combineReducers} from 'redux';
import employees from './reducers/employees';
import appSettings from "./reducers/settings";

const store = createStore(combineReducers({employees, appSettings}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

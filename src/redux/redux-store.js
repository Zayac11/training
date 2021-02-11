import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import testReducer from "./test-reducer";

let reducers = combineReducers({
    test: testReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;

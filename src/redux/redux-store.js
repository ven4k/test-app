import React from 'react';
import {combineReducers, createStore} from "redux";
import commentsReducer from "./commentsReducer";

let reducers = combineReducers({
    commentsBlock: commentsReducer
});

let store = createStore(reducers);


export default store;
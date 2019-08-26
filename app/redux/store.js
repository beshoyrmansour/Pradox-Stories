import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import NewsReducer from "./reducers/NewsReducer";
// Create the redux storeconst middleware = [thunk];
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const store = createStore(NewsReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
export default store;

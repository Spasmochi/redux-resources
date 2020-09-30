import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import { resources, comments } from "./data";

const defaultState = {
  resources: resources,
  comments: comments,
};

export const store = configureStore({ reducer: rootReducer, defaultState });

//Todo Add in browser history with alternate next router implementation
// const history = syncHistoryWithStore(browserHistory, store);

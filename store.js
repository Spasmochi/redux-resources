import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import { resources, comments } from "./data";

const defaultState = {
  resources: resources,
  comments: comments,
};

const store = configureStore({ rootReducer, defaultState });

//Todo Add in browser history with alternate next router implementation
// const history = syncHistoryWithStore(browserHistory, store);

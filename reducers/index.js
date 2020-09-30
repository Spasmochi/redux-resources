import { combineReducers } from "@reduxjs/toolkit";

import { comments } from "./comments";
import { resources } from "./resources";

export const rootReducer = combineReducers({ comments, resources });

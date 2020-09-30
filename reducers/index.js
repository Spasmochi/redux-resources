import { combineReducers } from "@reduxjs/toolkit";

import { comments } from "./comments";
import { resources } from "./resources";

const rootReducer = combineReducers({ comments, resources });

import { combineReducers } from "@reduxjs/toolkit";
import siteSlice from "./siteSlice";
const rootReducer = combineReducers({
    sites: siteSlice
});

export default rootReducer;

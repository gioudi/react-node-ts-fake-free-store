import { combineReducers } from "@reduxjs/toolkit";
import siteSlice from "./siteSlice";
import itemSlice from "./itemSlice";

const rootReducer = combineReducers({
    sites: siteSlice,
    item: itemSlice
});

export default rootReducer;

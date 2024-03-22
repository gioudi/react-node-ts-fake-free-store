import { combineReducers } from "@reduxjs/toolkit";
import siteSlice from "./siteSlice";
import itemSlice from "./itemSlice";
import categorySlice from "./categorySlice";

const rootReducer = combineReducers({
  sites: siteSlice,
  item: itemSlice,
  category: categorySlice,
});

export default rootReducer;

import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;

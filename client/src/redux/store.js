import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import userSliceReducer, { userSlice } from "./users";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

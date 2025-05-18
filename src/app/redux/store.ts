// store.js
'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import themeSlice from "./slices/themeSlice";
import userSlice from "./slices/userSlice";

// const persistConfig = {
//   key: "root",
//   storage:AsyncLocalStorage,
//   whitelist:['mode','user'],
//   blacklist:[''],
// };

const reducers = combineReducers({
  mode: themeSlice,
  user: userSlice
});

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

// export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
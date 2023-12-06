// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, tasksReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //middleware: [thunk]
})

export const persistor = persistStore(store)
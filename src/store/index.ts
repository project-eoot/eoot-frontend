// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // 도메인별 reducer 통합
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { configureStore } from '@reduxjs/toolkit'




// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})
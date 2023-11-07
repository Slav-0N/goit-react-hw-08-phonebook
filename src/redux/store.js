import { configureStore } from '@reduxjs/toolkit';
import { changeContactSlice } from './createSliceContacts';
import { addFilterSlice } from './createSliceFilter';
import { authReducer } from './auth/slice';

// export const store = configureStore({
//   reducer: {
//     contacts: changeContactSlice.reducer,
//     filter: addFilterSlice.reducer,
//     auth: authReducer,
//   },
// });

// export const store = configureStore({
//   reducer: {
//     contacts: changeContactSlice.reducer,
//     filter: addFilterSlice.reducer,
//     auth: authReducer,
//   },
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: changeContactSlice.reducer,
  filter: addFilterSlice.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  // blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

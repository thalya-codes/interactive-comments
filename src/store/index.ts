import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slice';
import {
  loadComments,
  persistComments,
} from './localStorage';

const store = configureStore({
  reducer: { comments: reducer },
  preloadedState: loadComments(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistComments),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

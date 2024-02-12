import { configureStore  } from '@reduxjs/toolkit';
import { reducer } from './slice';
import { loadComments, persistComments } from './localStorage';

export default configureStore({
  reducer: { comments: reducer },
  preloadedState: loadComments(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistComments),
});

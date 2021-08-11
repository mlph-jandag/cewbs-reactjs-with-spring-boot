import {configureStore} from '@reduxjs/toolkit';
import companySlice from './companySlice';
import postSlice from './postSlice';
import serviceSlice from './serviceSlice';

export default configureStore({
  reducer: {
    post: postSlice,
    service: serviceSlice,
    company: companySlice
  },
});

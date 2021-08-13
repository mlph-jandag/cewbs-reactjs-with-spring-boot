import {configureStore} from '@reduxjs/toolkit';
import companySlice from './companySlice';
import postSlice from './postSlice';
import serviceSlice from './serviceSlice';
import authSlice from './authSlice';
import categorySlice from './categorySlice'

export default configureStore({
  reducer: {
    post: postSlice,
    service: serviceSlice,
    company: companySlice,
    auth: authSlice,
    category: categorySlice
  },
});

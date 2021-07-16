import {createSlice} from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'post',

  initialState: {
    edit: ''
  },
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    }
  },
});

export const {setEdit} = serviceSlice.actions;

export default serviceSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'post',

  initialState: {
    update: false
  },
  reducers: {
    setUpdate: (state, action) => {
      state.update = action.payload;
    }
  },
});

export const {setUpdate} = companySlice.actions;

export default companySlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'service',

  initialState: {
    update: false
  },
  reducers: {
    setServiceUpdate: (state, action) => {
      state.update = action.payload;
    }
  },
});

export const {setServiceUpdate} = serviceSlice.actions;

export default serviceSlice.reducer;

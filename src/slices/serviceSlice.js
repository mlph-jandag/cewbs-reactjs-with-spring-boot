import {createSlice} from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'service',

  initialState: {
    update: false,
    search: ''
  },
  reducers: {
    setServiceUpdate: (state, action) => {
      state.update = action.payload;
    }, 
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
});

export const {setServiceUpdate, setSearch} = serviceSlice.actions;

export default serviceSlice.reducer;

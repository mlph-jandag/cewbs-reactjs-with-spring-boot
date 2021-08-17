import {createSlice} from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',

  initialState: {
    update: false,
    search: ''
  },
  reducers: {
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
});

export const {setUpdate, setSearch} = companySlice.actions;

export default companySlice.reducer;

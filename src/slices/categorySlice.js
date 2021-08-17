import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',

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

export const {setUpdate, setSearch} = categorySlice.actions;

export default categorySlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',

  initialState: {
    update: false
  },
  reducers: {
    setUpdate: (state, action) => {
      state.update = action.payload;
    }
  },
});

export const {setUpdate} = categorySlice.actions;

export default categorySlice.reducer;
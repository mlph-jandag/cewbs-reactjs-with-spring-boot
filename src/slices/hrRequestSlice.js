import {createSlice} from '@reduxjs/toolkit';

const hrRequestSlice = createSlice({
  name: 'hrRequest',

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

export const {setUpdate, setSearch} = hrRequestSlice.actions;

export default hrRequestSlice.reducer;
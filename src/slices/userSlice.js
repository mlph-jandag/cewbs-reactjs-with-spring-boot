import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    users: null,
    done: false,
    search: ''
  },
  reducers: {
    setUsers : (state, action) => {
      state.users = action.payload;
    },
    setUserDone : (state) => {
      state.done = ! state.done;
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
});

export const {setUsers, setSearch, setUserDone} = userSlice.actions;

export default userSlice.reducer;

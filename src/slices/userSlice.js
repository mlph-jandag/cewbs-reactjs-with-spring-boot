import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    users: null,
    done: false
  },
  reducers: {
    setUsers : (state, action) => {
      state.users = action.payload;
    },
    setUserDone : (state) => {
      state.done = ! state.done;
    }
  },
});

export const {setUsers, setUserDone} = userSlice.actions;

export default userSlice.reducer;

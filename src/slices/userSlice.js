import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    users: null,
    done: false,
    userEditData: {
      name: '',
      email: '',
      password: '',
      role: 'ADMIN',
      id: null,
    },
  },
  reducers: {
    setUsers : (state, action) => {
      state.users = action.payload;
    },
    setUserDone : (state) => {
      state.done = ! state.done;
    },
    setUserEditData :( state, action) => {
      state.userEditData = action.payload;
    }
  },
});

export const {setUsers, setUserDone, setUserEditData} = userSlice.actions;

export default userSlice.reducer;

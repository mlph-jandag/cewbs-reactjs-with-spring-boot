import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',

  initialState: {
    initializing: false,
    posts: [],
    category: 'all',
    filterPosts: [],
    search: '',
    update: false
  },
  reducers: {
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
    setPost: (state, action) => {
      state.posts = [...action.payload];
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    filterPost: (state, action) => {
        state.filterPosts = state.posts.filter(
          post => (post.data.category === action.payload || state.category === 'all') && post.data.title.includes(state.search),
        );
    },
    searchPost: (state, action) => {
      state.search = action.payload
      state.filterPosts = state.posts.filter(
        post => (post.data.category === state.category || state.category === 'all') && post.data.title.includes(action.payload),
      );
    }
  },
});

export const {setPost, setCategory, setUpdate, filterPost, searchPost} = postSlice.actions;

export default postSlice.reducer;

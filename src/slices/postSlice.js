import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',

  initialState: {
    initializing: false,
    posts: [],
    category: 'all',
    filterPosts: [],
    search: ''
  },
  reducers: {
    setPost: (state, action) => {
      state.posts = [...action.payload];
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    filterPost: (state, action) => {
      if (action.payload === 'all') {
        state.filterPosts = state.posts.filter(
          post => post.data.title.includes(state.search),
        );
      } else {
        state.filterPosts = state.posts.filter(
          post => post.data.category === action.payload && post.data.title.includes(state.search),
        );
      }
    },
    searchPost: (state, action) => {
      state.search = action.payload
      state.filterPosts = state.posts.filter(
        post => post.data.category === state.category && post.data.title.includes(state.search),
      );
    }
  },
});

export const {setPost, setCategory, filterPost, searchPost} = postSlice.actions;

export default postSlice.reducer;

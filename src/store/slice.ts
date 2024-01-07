import { createSlice } from '@reduxjs/toolkit';
import data from '@/data/index.json';

const { comments } = data;

export const slice = createSlice({
  name: 'comments',
  initialState: comments,
  reducers: {},
});

export const reducer = slice.reducer;
export const actions = slice.actions;
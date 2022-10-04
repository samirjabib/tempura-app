import { configureStore } from '@reduxjs/toolkit';
import { AnimeSlice } from './slices/animeSlice';



export const store = configureStore({

  reducer:{
    anime:AnimeSlice.reducer
  }
})
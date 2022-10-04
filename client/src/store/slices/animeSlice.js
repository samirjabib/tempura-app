import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"


const initialState = {
    animes: [],
    animesLoaded:false,
    genres:[],

}

export const AnimeSlice = createSlice({
    name:"Anime",
    initialState,
    extraReducers: (builder) => {},
})
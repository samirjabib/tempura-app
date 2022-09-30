import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    isLoading:false,
    error:null,
}




const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers{
        
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    // Define the name and initial state for the slice
    name: "counter",
    initialState,

    // Define reducers that handle changes to the state
    reducers:{
       increment: (state)=>{
        state.value += 1;
       },
       decrement: (state)=>{
        state.value -= 1;
       },
       reset: (state)=>{
        state.value = 0;
       },
    },
});

// Export the reducer and actions from the slice

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers :{
        toggleGptSeacrView: (state) => {
            state.showGptSearch =!state.showGptSearch;
        }
    }
})



export const {toggleGptSeacrView} = gptSlice.actions;

export default gptSlice.reducer;
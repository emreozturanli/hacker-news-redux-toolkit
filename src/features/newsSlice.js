import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    newsList : [],
    loading: true,
    query: 'react',
    page: 0,
    nbPages:50
}

export const getNews = createAsyncThunk('news/getNews',
            // don't forget ThunkAPI
    async ({query,page}) => {
            const url = `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
        
        try {
            const {data} = await axios(url);
            return data  // don't forget to return
        }
        catch(err){
            console.log(err);
        }
     }
) 

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
        handleSearch: (state,action)=>{
            state.query = action.payload
        },

        prevPage :  (state)=>{
            if(state.page > 0){
                state.page = state.page - 1
            }
        },

        nextPage : (state,action)=>{
            if(state.page < 49){
                state.page = state.page + 1
            }
        },

    },
    extraReducers : {
        [getNews.pending]: (state) =>{
            state.loading= true
        },
        [getNews.fulfilled]: (state,action) =>{
            state.newsList = action.payload.hits
            state.nbPages = action.payload.nbPages
            state.page = action.payload.page
            state.loading= false;
        },
        [getNews.rejected]: (state) =>{
            state.loading= true;
        }
    }
})

export const {handleSearch,prevPage,nextPage} = newsSlice.actions;

export default newsSlice.reducer;
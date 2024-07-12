import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constraint";

const useNowPlayingMovie= () =>{
const dispatch = useDispatch();

const getNowPlayingApi = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    
    
    const json = await data.json();
    
    console.log('movie data', json.results);
    dispatch(addNowPlayingMovies(json.results))

};

useEffect(() => {
    
getNowPlayingApi();

}, [])
};

export default useNowPlayingMovie;
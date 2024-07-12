import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addpopularMoviesMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constraint";

const usePopularMovies= () =>{
const dispatch = useDispatch();

const getPopularMoviesApi = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    
    
    const json = await data.json();
    
    console.log('movie popular', json.results);
    dispatch(addpopularMoviesMovies(json.results))

};

useEffect(() => {
    
    getPopularMoviesApi();
}, [])
};

export default usePopularMovies;
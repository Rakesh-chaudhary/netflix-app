import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer =() =>{


const moviesData = useSelector(store =>store.movies);
    return (
        <div className=" bg-black">

            <div className="-mt-80 relative pl-12 z-22">

            <MovieList  title={"Now Playing"} movies={moviesData.nowPlayingMovies} />
            
            <MovieList  title={"Trending"} movies={moviesData.nowPlayingMovies} />
            
            <MovieList  title={"Popular"} movies={moviesData.popularMovies} />
            
            <MovieList  title={"Upcoming Movies"} movies={moviesData.nowPlayingMovies} />

            <MovieList  title={"Horror Movies"} movies={moviesData.nowPlayingMovies} />

            </div>
        </div>
    )
}

export default SecondaryContainer;
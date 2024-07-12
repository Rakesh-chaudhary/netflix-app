import Header from "./Header";

import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import MainContainer from "./MainContainer";

import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";


const Browse = () =>{



    useNowPlayingMovie();

    usePopularMovies();

    return (
        <div>
    <Header />
            <MainContainer />
            <SecondaryContainer />
            
        
        </div>
    )
}

export default Browse
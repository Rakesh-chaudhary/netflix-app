import Header from "./Header";

import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import MainContainer from "./MainContainer";

import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = () =>{
   const gptSearch = useSelector(store => store.gpt.showGptSearch);


    useNowPlayingMovie();

    usePopularMovies();

    return (
        <div>
    <Header />
    { gptSearch ? ( <GptSearch /> ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
    ) }  
        </div>
    )
}

export default Browse
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer =() =>{

    const movies = useSelector(store =>store.movies?.nowPlayingMovies);

    
 if(movies == null) return;

 const mainMovie = movies[3];

  console.log(movies);
   console.log(mainMovie);
 const {original_title,overview,id} = mainMovie;


    return (
        <div>

            <VideoTitle title={original_title} overiew={overview} />
            <VideoBackground movieId={id}/>

        </div>
    )
}

export default MainContainer;
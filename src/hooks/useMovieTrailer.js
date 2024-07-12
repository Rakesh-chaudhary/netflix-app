import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constraint";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/573435/videos",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const trailersData = json.results.filter((data) => data.type == "Trailer");
     console.log(trailersData);

    const trailer = trailersData.length ? trailersData[3] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieData();
  }, []);

}

export default useMovieTrailer;
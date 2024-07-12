 import { IMG_CDN } from "../utils/constraint";

const MovieCard =({ posterPath }) =>{

    // const cbc = key;
    // console.log(cbc);
    return(
        <div className="w-48 pr-4">
       <img  alt="Movie Card" src={ IMG_CDN+posterPath} />
        </div>
    )
}

export default MovieCard;
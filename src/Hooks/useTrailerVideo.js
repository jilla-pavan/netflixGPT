import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const fetchMainMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    );
    const json = await data.json();
    const trailers = json.results.filter((x) => {
      return x.type === "Trailer";
    });
    const targetTrailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVideo(targetTrailer));
  };

  useEffect(() => {
    fetchMainMovie();
  }, []);
};

export default useTrailerVideo;

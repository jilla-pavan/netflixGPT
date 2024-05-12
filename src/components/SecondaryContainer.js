import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";

function SecondaryContainer() {
  usePopularMovies();
  useTopRatedMovies();
  const nowPlayMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMoviesList = useSelector((store) => store.movies.popularMovies);
  const topRatedMovieList = useSelector((store) => store.movies.topRatedMovies);

  return (
    <div className="bg-black">
      <div className="-mt-[215px] z-20 relative">
        <VideoList Movies={nowPlayMovies} title={"Now Playing Movies"} />
        <VideoList Movies={popularMoviesList} title={"Popular Movies"} />
        <VideoList Movies={topRatedMovieList} title={"Top Rated Movies"} />
      </div>
    </div>
  );
}

export default SecondaryContainer;

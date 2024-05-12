import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return; // early return
  const mainMovie = movies[0];

  return (
    <div className="">
      <VideoTitle title={mainMovie.title} desc={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
}

export default MainContainer;

import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePopularMovies";

function VideoList({ Movies, title }) {
  // console.log(popularMovies);
  return (
    <div className=" text-white">
      <h1 className=" text-xl p-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {Movies &&
            Movies.map((x) => {
              return <VideoCard info={x} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default VideoList;

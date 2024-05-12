import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function VideoCard({ info }) {
  // console.log(info);
  return (
    <div className="w-[180px] m-2">
      <Link to={"/moviePage"}>
        <img
          className="shadow-lg rounded-md"
          src={"https://image.tmdb.org/t/p/w780" + info.poster_path}
        />
      </Link>
    </div>
  );
}

export default VideoCard;

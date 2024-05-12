import React, { useEffect } from "react";

function VideoCard({ info }) {
  // console.log(info);
  return (
    <div className="w-[180px] m-2">
      <img
        className="shadow-lg rounded-md"
        src={"https://image.tmdb.org/t/p/w780" + info.poster_path}
      />
    </div>
  );
}

export default VideoCard;

import { deleteInstallations } from "firebase/installations";
import React from "react";

function VideoTitle({ title, desc }) {
  return (
    <div className="w-screen absolute aspect-video pt-80 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-md py-4 w-1/3">{desc}</p>

      <div className="">
        <button className="px-6 p-3 mx-2 rounded-md bg-white text-black hover:opacity-80">▶ Play</button>
        <button className="bg-gray-500 px-6 rounded-md text-white p-3">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;

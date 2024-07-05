import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumData from "./AlbumData";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-4 text-2xl font-bold">Featured album</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumData
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-4 text-2xl font-bold">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;

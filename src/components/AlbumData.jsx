import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumData = ({ image, name, desc, id }) => {
  let navigate = useNavigate("/");

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] rounded p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.15)]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumData;

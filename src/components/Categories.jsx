import React from "react";
import image from "../images/peace.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Container from "@mui/material/Container";
import Playlists from "./Playlists";
import nextKey from "generate-my-key";

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Focus",
      tagline: "MUsic to help you concentrate",
    },
    {
      id: 2,
      name: "Mood",
      tagline: "Playlist to match your mood",
    },
    {
      id: 3,
      name: "SoundTrack your home",
      tagline: "",
    },
    {
      id: 4,
      name: "Aradddd",
      tagline: "Kick bass this sunday",
    },
  ];
  return (
    <div className="mainInner">
      {dataCategories.map((category) => (
        <div key={nextKey()}>
          <div className="cardsWrap" key={nextKey()}>
            <h2>{category.name}</h2>
            <span className="seeAll">SEE ALL</span>
            <p className="subText">{category.tagline}</p>
            <Playlists category_id={category.id} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Categories;

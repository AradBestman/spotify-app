import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const LikedSongsPage = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  console.log(userData);
  const [playingSong, setPlayingSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const fetchLikedSongs = async () => {
      try {
        const { data: allSongs } = await axios.get(
          "http://localhost:5001/api/v1/songs/library"
        );
        console.log(allSongs);

        setLikedSongs(allSongs);
      } catch (error) {
        console.error("Error fetching liked songs:", error);
      }
    };

    fetchLikedSongs();
  }, [userData]);

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>A Perfect Day</h1>

            <p className="tagline">
              Minimalism, electronica and modern classical to concentrate to.
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>699,428 likes</span>
              <span>4hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayArrowIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <FavoriteIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>

          <ul className="songList">
            {likedSongs.map((likedSong, index) => (
              <li key={index}>
                <div className="songIcon">
                  <MusicNoteIcon className="noteI" />
                  <PlayArrowIcon
                    className="playI"
                    onClick={() => {
                      ``;
                      if (likedSong.path) {
                        const url = `http://localhost:5001/${
                          likedSong.path.split("public/")[1]
                        }`;
                        likedSong.path.split();
                        console.log(likedSong.path.split("public/")[1]);
                        if (playingSong === url) {
                          setPlayingSong(undefined);
                        } else {
                          setPlayingSong(url);
                        }
                      }
                    }}
                  />
                  <FavoriteIcon
                    onClick={() => {
                      handleLikeClick(likedSong._id);
                    }}
                  />
                </div>
                <div className="songDetails">
                  <h3>{likedSong.originalname}</h3>
                  <span>{likedSong.artist}</span>
                </div>
                <div className="songTime">
                  <span>{likedSong.size}</span>
                </div>
              </li>
            ))}
          </ul>

          {playingSong && (
            <ReactPlayer
              style={{ opacity: 0 }}
              url={playingSong}
              controls
              playing
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedSongsPage;

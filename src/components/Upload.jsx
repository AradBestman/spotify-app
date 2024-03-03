import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Upload = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [img, setImg] = useState("");
  const [duration, setDuration] = useState("");

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleUpdateChangesClick = async () => {
    try {
      const formData = new FormData();

      // Add file to FormData
      formData.append("audioFile", audioFile);

      // Add additional properties to FormData

      console.log(formData, "FormDataaaa");
      const { data } = await axios.post(
        "http://localhost:5001/api/v1/songs",
        formData
      );
      toast("Your song upload successfully 👌", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          background: "green",
        },
      });
      console.log("data from response", data);
    } catch (err) {
      console.log(err);
      console.log("err", err.response);
    }
  };

  return (
    <form className="formUpload" encType="multipart/form-data">
      <input
        style={{ color: "white" }}
        type="file"
        name="audioFile"
        onChange={handleFileChange}
      />
      {/* Add additional input fields for other properties */}
      <input
        type="text"
        name="name"
        placeholder="Song Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        name="song"
        placeholder="Song Title"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <input
        type="text"
        name="img"
        placeholder="Image Path"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button type="button" onClick={handleUpdateChangesClick}>
        Upload
      </button>
    </form>
  );
};

export default Upload;

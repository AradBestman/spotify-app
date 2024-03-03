import logo from "./logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import Nav from "../src/components/Nav";
import Main from "../src/components/Main";
import { Fragment, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import LayOutComponent from "./Layout/LayOutComponent";
import { jwtDecode } from "jwt-decode";

import { useDispatch } from "react-redux";
import { getToken } from "./storageToken/storageToken";
import { authActions } from "./store/authSlice";
import axios from "axios";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 'auto login'
    const token = getToken();
    if (token) {
      try {
        const autoLogin = async () => {
          const fetchLikedSongs = async () => {
            try {
              const { data: allSongs } = await axios.get(
                "http://localhost:5001/api/v1/songs/library"
              );
              dispatch(authActions.setLikedSongs(allSongs));
            } catch (error) {
              console.error("Error fetching liked songs:", error);
            }
          };
          dispatch(authActions.login(jwtDecode(token)));
          fetchLikedSongs();
        };
        autoLogin();
      } catch (e) {}
    }
  }, []);

  console.log("Render app ");
  return (
    <div className="outerWrap">
      <div className="App">
        <LayOutComponent>
          <ToastContainer />
          <AppRoutes />
        </LayOutComponent>
      </div>
      <div className="musicControls">Music controls</div>
    </div>
  );
};

export default App;

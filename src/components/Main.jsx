import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { authActions } from "../store/authSlice";
import { getToken } from "../storageToken/storageToken";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ROUTES from "../ROUTES";

const Main = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authSlice.loggedIn);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTxt, setSearchTxt] = useState("");
  const TOKEN = "token";

  const handleLogout = () => {
    const token = getToken();

    if (token) {
      localStorage.removeItem(TOKEN);
      sessionStorage.removeItem(TOKEN);
    }

    dispatch(authActions.logout());
    console.log(loggedIn);
    toast("You logged out successfully ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  const goToNextPage = () => {
    navigate(1);
  };

  const handleTxtChange = (e) => {
    const searchText = e.target.value;
    setSearchTxt(searchText);
    navigate(`${ROUTES.HOME}?filter=${searchText}`);
  };

  return (
    <div className="mainUpper">
      <div className="upperNav">
        <div className="arrows">
          <IconButton style={{ color: "white" }} onClick={goToPreviousPage}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton style={{ color: "white" }} onClick={goToNextPage}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
        <div className="searchInput">
          {location.pathname === "/search" && (
            <input
              type="text"
              placeholder="Search"
              className=""
              onChange={handleTxtChange}
              value={searchTxt}
            />
          )}
        </div>
        <div className="SigninUp">
          <IconButton
            className="SigninUp"
            style={{ color: "white" }}
            onClick={handleLogout}
          >
            {loggedIn ? "Logout" : "Signin & Signup"}
          </IconButton>
        </div>
      </div>
      <div className="mainContent"></div>
    </div>
  );
};

export default Main;

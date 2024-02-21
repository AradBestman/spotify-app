import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import ROUTES from "./ROUTES";
import LoginRegisterPage from "./components/LoginRegisterPage";

import PlaylistPage from "./components/pages/PlaylistPage";
import Upload from "./components/Upload";
import Home from "./components/Home";
import LikedSongsPage from "./components/pages/LikedSongsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginRegisterPage />} />
      <Route path={ROUTES.CATEGORIES} element={<Categories />} />
      <Route path={ROUTES.UPLOAD} element={<Upload />} />
      <Route path={ROUTES.HOME} element={<Categories />} />
      <Route path={`${ROUTES.PLAYLIST}/:id`} element={<PlaylistPage />} />
      <Route path={ROUTES.SEARCH} element={<div>TEST</div>} />
      <Route
        path={ROUTES.LIBRARY}
        element={
          <div>
            <LikedSongsPage />
          </div>
        }
      />
    </Routes>
  );
};
export default AppRoutes;

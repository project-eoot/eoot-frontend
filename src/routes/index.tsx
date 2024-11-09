import { Route, Routes } from "react-router-dom";

import {
  LocationPage,
  LoginPage,
  PostDetailPage,
  PostEditPage,
  PostListPage,
  PostSearchPage,
  PostWritePage,
} from "@/pages";

import AuthRoute from "./AuthRoute";

const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/location/:id"
        element={
          <AuthRoute>
            <LocationPage />
          </AuthRoute>
        }
      />
      <Route
        path="/list"
        element={<PostListPage />}
      />
      <Route
        path="/post/:id"
        element={<PostDetailPage />}
      />
      <Route
        path="/postedit/:id"
        element={
          <AuthRoute>
            <PostEditPage />
          </AuthRoute>
        }
      />
      <Route
        path="/postcreate"
        element={
          <AuthRoute>
            <PostWritePage />
          </AuthRoute>
        }
      />
      <Route
        path="/search"
        element={<PostSearchPage />}
      />
    </Routes>
  );
};

export default RouterComponent;

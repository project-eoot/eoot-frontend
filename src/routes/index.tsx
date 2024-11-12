import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";

import {
  ChattingListPage,
  ChattingRoomPage,
  LocationPage,
  LoginPage,
  NotificationPage,
  PostDetailPage,
  PostEditPage,
  PostListPage,
  PostSearchPage,
  PostWritePage,
  ProfileEditPage,
  ProfilePage,
  SignupPage,
} from "@/pages";

import AuthRoute from "./AuthRoute";
import DefaultLayout from "./Layouts/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    ErrorBoundary: () => {
      throw useRouteError();
    },
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/post"
            replace
          />
        ),
      },
      {
        path: "post",
        children: [
          { index: true, element: <PostListPage /> },
          {
            path: "search",
            element: <PostSearchPage />,
          },
          {
            path: ":postId",
            element: <PostDetailPage />,
          },
          {
            path: "write",
            element: (
              <AuthRoute>
                <PostWritePage />
              </AuthRoute>
            ),
          },
          {
            path: "edit",
            element: (
              <AuthRoute>
                <PostEditPage />
              </AuthRoute>
            ),
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            path: ":userId",
            element: (
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            ),
          },
          {
            path: "edit",
            children: [
              {
                index: true,
                element: <ProfileEditPage />,
              },
              {
                path: "location",
                element: <LocationPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/chat",
        children: [
          { path: "list", element: <ChattingListPage /> },
          {
            path: ":userId",
            element: <ChattingRoomPage />,
          },
        ],
      },
      {
        path: "/notifications",
        element: <NotificationPage />,
      },
      {
        path: "/login",
        // TODO: loader: ~,
        element: <LoginPage />,
      },
      {
        path: "/signup",
        // TODO: loader: ~,
        element: <SignupPage />,
      },
    ],
  },
]);

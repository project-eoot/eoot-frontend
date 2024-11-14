import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";

import {
  ChattingListPage,
  ChattingRoomPage,
  ErrorPage,
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
import PlainLayout from "./Layouts/PlainLayout";

export const router = createBrowserRouter([

  {
    path: "/post/write",
    element: <PlainLayout />,
    children: [
      { path: "", element: <PostWritePage /> },
    ],
  },
  {
    path: "/login",
    element: <PlainLayout />,
    children: [
      { path: "", element: <LoginPage /> },
    ],
  },
  {
    path: "/signup",
    element: <PlainLayout />,
    children: [
      { path: "", element: <SignupPage /> },
    ],
  },
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
        path: "*",
        element: <ErrorPage />
      }
    ],
  },
]);

// src/App.tsx
import React from "react";
import { useSelector } from "react-redux";

import LoginPage from "./components/LoginPage";
import { RootState } from "./store";

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return isAuthenticated ? (
    <div className="p-4">Welcome! You are logged in.</div>
  ) : (
    <LoginPage />
  );
};

export default App;

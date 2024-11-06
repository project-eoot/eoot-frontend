// src/components/LoginPage.tsx
import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { login } from "../store/authSlice"

const LoginPage: React.FC = () => {
  const [token, setToken] = useState("")
  const dispatch = useDispatch()

  const handleLogin = () => {
    if (token) {
      dispatch(login(token))
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Enter Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  )
}

export default LoginPage

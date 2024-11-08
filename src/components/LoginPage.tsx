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
    <div className="flex flex-col items-center justify-center h-screen">
      텍 스트 텍스트 텍스트 텍스트 텍텥ㄱ테게렐게텍스트트스
      <div className="px-14 bg-primary">primary #E85F84</div>
      <div className="px-14 bg-secondary">secondary #FF779D</div>
      <div className="px-14 bg-accent">accent #7242E0</div>
      <div className="px-14 bg-text-primary">text-primary #0E0F24</div>
      <div className="px-14 text-secondary">text-secondary #98A2B3</div>
      <div className="px-14 bg-light">light #FEF7FF</div>
      
      <h1 className="text-2xl font-bold mb-4 text-light">Login</h1>
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

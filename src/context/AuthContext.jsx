import React, { createContext, useState, useCallback } from "react";
import {
  loginSerivce,
  signupSerivce,
  verifyingTokenSerivce,
} from "../services/authServices";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  email: null,
  username: null,
  password: null,
  authStatus: false,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (form) => {
    const data = await loginSerivce(form);
    setAuth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
      authStatus: true,
    });

    localStorage.setItem("token", data.token);
  };

  const signup = async (form) => {
    const data = await signupSerivce(form);
    setAuth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
      authStatus: true,
    });

    localStorage.setItem("token", data.token);
  };

  const verifyingToken = useCallback(async () => {
    console.log("ejecutando verifyingToken");
    const token = localStorage.getItem("token");

    if (token) {
      const resp = await verifyingTokenSerivce();

      localStorage.setItem("token", resp.token);

      setAuth({
        id: resp.data.id,
        username: resp.data.username,
        email: resp.data.email,
        password: resp.data.password,
        authStatus: true,
      });
    } else {
      localStorage.removeItem("token");
      setAuth({
        id: null,
        username: null,
        email: null,
        password: null,
        authStatus: false,
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      id: null,
      username: null,
      email: null,
      password: null,
      authStatus: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ auth, login, signup, verifyingToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

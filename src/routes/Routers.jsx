import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatePost, Home, Login, SignUp } from "../pages";
import Layout from "../components/Layout";
import ProtectedRoute from "./ProtectedRoute";
import GuardRoute from "./GuardRoute";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/create" element={<CreatePost />} />
        </Route>
        <Route element={<GuardRoute/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

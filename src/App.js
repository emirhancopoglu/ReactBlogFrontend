import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import SendPost from "./pages/SendPost.js";
import MemberList from "./pages/MemberList.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="sendpost" element={<SendPost />} />
          <Route path="memberlist" element={<MemberList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

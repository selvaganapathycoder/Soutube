import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Shorts from "./pages/Shorts";
import ChannelDetail from "./pages/ChannelDetail";

const App = () => (
  <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
    </Routes>
  </div>
);

export default App;

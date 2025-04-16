import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import TopUsers from "./Pages/TopUsers";
import TrendingPosts from "./Pages/TrendingPosts";
import Feed from "./Pages/Feed";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/" element={<TopUsers />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;

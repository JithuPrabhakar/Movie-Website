import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

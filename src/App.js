import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigaiton/Navbar";
import Home from "./components/home/Home";
import Navibar1 from "./components/Navigaiton/Navibar1";
import TopMove from "./components/topmove/TopMove";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navibar1 />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        <TopMove/>
      </BrowserRouter>
    </>
  );
}

export default App;

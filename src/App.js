import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
};

export default App;

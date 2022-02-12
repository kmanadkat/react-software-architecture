import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;

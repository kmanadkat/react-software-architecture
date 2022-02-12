import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <li>
          <NavLink to="/">useState</NavLink>
        </li>
        <li>
          <NavLink to="/about">useContext</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Recoil</NavLink>
        </li>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

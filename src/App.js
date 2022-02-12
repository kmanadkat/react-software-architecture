import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import CountContext from "./pages/CountContext";
import CountMobx from "./pages/CountMobx";
import CountRecoil from "./pages/CountRecoil";
import CountUseState from "./pages/CountUseState";

const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <li>
          <NavLink to="/">useState</NavLink>
        </li>
        <li>
          <NavLink to="/context">useContext</NavLink>
        </li>
        <li>
          <NavLink to="/recoil">Recoil</NavLink>
        </li>
        <li>
          <NavLink to="/mobx">Mobx</NavLink>
        </li>
      </div>
      <Routes>
        <Route path="/" element={<CountUseState />} />
        <Route path="/context" element={<CountContext />} />
        <Route path="/recoil" element={<CountRecoil />} />
        <Route path="/mobx" element={<CountMobx />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

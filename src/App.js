import React, { lazy, Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About/About"));
const Articles = lazy(() => import("./pages/Articles/Articles"));
const Home = lazy(() => import("./pages/Home/Home"));

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
      <Suspense fallback={<p>Loading Pages...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

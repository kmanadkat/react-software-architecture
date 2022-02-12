import React, { lazy, Suspense } from "react";

const Content = lazy(() => import("./Content"));
const Header = lazy(() => import("./Header"));

const About = () => {
  return (
    <section className="wrapper">
      <Suspense fallback={<p>Loading data...</p>}>
        <Header />
        <Content />
      </Suspense>
    </section>
  );
};

export default About;

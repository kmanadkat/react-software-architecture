import React, { lazy, Suspense } from "react";
import ErrorBoundary from "../../ErrorBoundary";

const Content = lazy(() => import("./Content"));
const Header = lazy(() => import("./Header"));

const About = () => {
  return (
    <section className="wrapper">
      <ErrorBoundary>
        <Suspense fallback={<p>Loading data...</p>}>
          <Header />
          <Content />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default About;

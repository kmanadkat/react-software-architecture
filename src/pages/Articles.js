import React from "react";

const Articles = () => {
  const [articles, setArticles] = React.useState(
    window && window.preloadedArticles
  );

  React.useEffect(() => {
    if (window && !window.preloadedArticles) {
      console.log("No preloaded articles, loading from server");
      fetch("/api/articles")
        .then((res) => res.json())
        .then((data) => setArticles(data));
    }
  }, []);

  return (
    <section className="wrapper">
      <h2>Articles</h2>
      {articles &&
        articles.map((obj) => (
          <div key={obj.title}>
            <p>{obj.title}</p>
            <blockquote>{obj.author}</blockquote>
          </div>
        ))}
    </section>
  );
};

export default Articles;

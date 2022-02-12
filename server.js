import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/App";

global.window = {};

const app = express();

// Render Static Content
app.use(express.static("./build", { index: false }));

const articles = [
  { title: "Article 1", author: "Bob" },
  { title: "Article 2", author: "Betty" },
  { title: "Article 3", author: "Shawn" },
  { title: "Article 4", author: "Frank" },
];

app.get("/api/articles", async (req, res) => {
  const loadedArticles = articles;
  return res.json(loadedArticles);
});

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const template = path.resolve("./build/index.html");

  fs.readFile(template, "utf-8", (err, data) => {
    if (err) return res.status(500).send(err);

    const loadedArticles = articles;

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<script>window.preloadedArticles = ${JSON.stringify(
          loadedArticles
        )}</script><div id="root">${reactApp}</div>`
      )
    );
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Running Express server at PORT: ${PORT}`);
});

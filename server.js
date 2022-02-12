import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/App";

const app = express();

// Render Static Content
app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const template = path.resolve("./build/index.html");
  fs.readFile(template, "utf-8", (err, data) => {
    if (err) return res.status(500).send(err);

    return res.send(
      data.replace('div id="root"></div>', `div id="root">${reactApp}</div>`)
    );
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Running Express server at PORT: ${PORT}`);
});

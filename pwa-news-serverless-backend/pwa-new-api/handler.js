const serverless = require("serverless-http");
const express = require("express");
const cors = require('cors')
const app = express();
const economy = require("./economy.json");
const technology = require("./technology.json");
const world = require("./world.json");

app.use(cors());

const GROUP_NEWS = {
  economy,
  technology,
  world
}

app.get("/api", function (req, res) {
  res.status(200).json({
    economy,
    technology,
    world,
  });
});

app.get("/api/:subject", function (req, res) {
  const { subject } = req.params;
  res.status(200).send(GROUP_NEWS[subject]);
});

app.get("/api/:subject/:id", function (req, res) {
  const { subject, id } = req.params;
  const allNews = GROUP_NEWS[subject];
  const news = allNews.value.find((news) => news.id === id);
  res.status(200).json(news);
});

module.exports.handler = serverless(app);

import express from 'express'
import cors from 'cors'
import economy from './economy.json'
import technology from './technology.json'
import world from './world.json'
import bodyParser from 'body-parser';

const GROUP_NEWS = {
  economy,
  technology,
  world
}

const app = express();
app.use(bodyParser.json());
const PORT = 2000;

app.use(cors())
//  Cross-origin Resource Sharing
//  Mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens

app.get('/api', function (req, res) {
  res.status(200).json({
    economy,
    technology,
    world
  })
})

app.get('/api/:subject', function (req, res) {
  const { subject } = req.params
  res.status(200).send(GROUP_NEWS[subject])
})

app.get('/api/:subject/:id', function (req, res) {
  const { subject, id } = req.params
  const allNews = GROUP_NEWS[subject]
  const news = allNews.value.find(news => news.id === id)
  res.status(200).json(news)
})

app.listen(PORT, function () {
  console.log(`Server running on ${PORT} PORT`)
})
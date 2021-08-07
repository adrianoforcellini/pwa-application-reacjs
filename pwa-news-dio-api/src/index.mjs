import express from 'express';
import cors from 'cors';
import economy from './economy.json';
import technology from './technology.json';
import world from './world.json';
// import economy from './economy.json';

const GROUP_NEWS = {
    economy,
    technology,
    world
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api', function (req , res) {
    res.json({
        economy,
        technology,
        world
    })
})

app.listen( PORT, function () {
    console.log('O Pai tá ON!!!')
})

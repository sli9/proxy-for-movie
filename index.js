import express from 'express'
import morgan from 'morgan'
import {createProxyMiddleware} from 'http-proxy-middleware'
import dotenv from 'dotenv'
import axios from "axios";
import cors from "cors";

dotenv.config()

const app = express()

const HOST = 'localhost'
const BASE_URL = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY_VALUE
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(cors({
    origin: true,
}));


const fetchData = async () => {
    try {
        return await axios.get(BASE_URL, {
            headers: {'Authorization': `Bearer ${API_KEY}`}
        });
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

app.get('/', async (req, res, next) => {
    const response = await fetchData()
    res.send(response)
})

// index.use('', (req, res, next) => {
//     if (req.headers.authorization) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// });

app.use('/api.themoviedb.org/3/discover/movie', createProxyMiddleware({
    target: BASE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api.themoviedb.org/3/discover/movie`]: '',
    },
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
}));

app.listen(port, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${port}`);
});


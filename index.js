import express from 'express';
import proxy from 'express-http-proxy';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use('/api/*', proxy('https://api.themoviedb.org/3/discover/movie?api_key=26458e775e4629d4728e458b3224cfac', {
    changeOrigin: true,
    headers: {
        accept: 'application/json'
    }
}))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
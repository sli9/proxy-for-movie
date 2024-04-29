import express from 'express';
import proxy from 'express-http-proxy';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use('/', proxy('https://api.themoviedb.org/3/discover/movie', {
    changeOrigin: true,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjQ1OGU3NzVlNDYyOWQ0NzI4ZTQ1OGIzMjI0Y2ZhYyIsInN1YiI6IjY2Mjk1OTNkMzc4MDYyMDE3ZWRhYWY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5CiN-1oMWrBItC32Oq7M382c_iUffyWk02LvZzx5Xo',
        accept: 'application/json'
    }
}))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
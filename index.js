import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(cors({
    origin: true,
}))

app.get('/', (req, res) => {
    res.send('hi')
})


// app.use('/movie', proxy('https://themoviedb.org/3/discover/movie', {
//     changeOrigin: true,
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjQ1OGU3NzVlNDYyOWQ0NzI4ZTQ1OGIzMjI0Y2ZhYyIsInN1YiI6IjY2Mjk1OTNkMzc4MDYyMDE3ZWRhYWY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5CiN-1oMWrBItC32Oq7M382c_iUffyWk02LvZzx5Xo'
//     }
// }))

app.get('/movie', (req, res) => {
    axios.get('https://themoviedb.org/3/discover/movie', {headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjQ1OGU3NzVlNDYyOWQ0NzI4ZTQ1OGIzMjI0Y2ZhYyIsInN1YiI6IjY2Mjk1OTNkMzc4MDYyMDE3ZWRhYWY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5CiN-1oMWrBItC32Oq7M382c_iUffyWk02LvZzx5Xo'

        }})
        .then(response => response.data.json())
        .then(response => res.send(response))
        .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
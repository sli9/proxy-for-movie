import express from 'express';
import proxy from 'express-http-proxy';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(cors())


app.use('/api/*', proxy('https://themoviedb.org/3/discover/movie?api_key=26458e775e4629d4728e458b3224cfac', {
    changeOrigin: true,
    headers: {
        accept: 'application/json'
    }
}))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
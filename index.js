import express from "express";
import cors from 'cors'
import {discoverRouter} from "./routers/discover-router.js";

const app = express();
const port = process.env.PORT || 3000; // Set your desired port
cors({
    origin: true
})

// Proxy any request to the TMDB API endpoint
app.use('/discover', discoverRouter);
app.use('/image', imageRequest)

app.listen(port, () => console.log(`Server listening on port ${port}`));

import express from "express";
import cors from 'cors'
import {discoverRouter} from "./routers/discover-router.js";
import {imageRouter} from "./routers/image-router.js";

const app = express();
const port = process.env.PORT || 3000; // Set your desired port
cors({
    origin: true
})

// Proxy any request to the TMDB API endpoint
app.use('/discover', discoverRouter);
app.use('/t', imageRouter)

app.listen(port, () => console.log(`Server listening on port ${port}`));

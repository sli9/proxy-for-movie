import express from "express";
import axios from "axios"
import cors from 'cors'
import {discoverRouter} from "./routers/discover-router.js";

const app = express();
const port = process.env.PORT || 3000; // Set your desired port
cors({
    origin: true
})


const imageRequest = async (req, res) => {
    const imgUrl = `https://image.tmdb.org/t/p${req.url}`
    try {
        const response = await axios.get(imgUrl)
        res.json(response.data)
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching image from TMDB' })
    }
}

// Proxy any request to the TMDB API endpoint
app.use('/discover', discoverRouter);
app.use('/image', imageRequest)

app.listen(port, () => console.log(`Server listening on port ${port}`));

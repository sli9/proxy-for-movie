import express from "express";
import axios from "axios"
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000; // Set your desired port
cors({
    origin: true
})

// Replace with your actual TMDB API key
const apiKey = '26458e775e4629d4728e458b3224cfac';

// Function to forward request with TMDB API key
const tmdbRequest = async (req, res) => {
    const tmdbUrl = `https://api.themoviedb.org${req.url}`; // Build TMDB API url
    const params = { api_key: apiKey, ...req.query }; // Include API key and query params
    console.log(params)
    try {
        const response = await axios.get(tmdbUrl, {params});
            res.json(response.data)
        }
     catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from TMDB' });
    }
};

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

app.use('/3/discover/movie', tmdbRequest);
app.use('/image', imageRequest)

app.listen(port, () => console.log(`Server listening on port ${port}`));

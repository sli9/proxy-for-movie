import {Router} from "express";
import axios from "axios";

const apiKey = '26458e775e4629d4728e458b3224cfac';

export const discoverRouter = Router({})

const tmdbRequest = async (req, res) => {
    const tmdbUrl = `https://api.themoviedb.org/3${req.originalUrl}`; // Build TMDB API url
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

discoverRouter.get('/movie', tmdbRequest)


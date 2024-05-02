import {Router} from "express";
import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

const apiKey = process.env.API_KEY_VALUE;

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

discoverRouter.use('/movie', tmdbRequest)


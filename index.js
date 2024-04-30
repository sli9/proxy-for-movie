const express = require('express');
const axios = require('axios'); // Or 'request'

const app = express();
const port = process.env.PORT || 3000; // Set your desired port

// Replace with your actual TMDB API key
const apiKey = '26458e775e4629d4728e458b3224cfac';

// Function to forward request with TMDB API key
const tmdbRequest = async (req, res) => {
    const tmdbUrl = `https://api.themoviedb.org/3${req.url}`; // Build TMDB API url
    const params = { api_key: apiKey, ...req.query }; // Include API key and query params

    try {
        const response = await axios.get(tmdbUrl, { params }); // Make request to TMDB
        res.json(response.data); // Forward response data to client
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from TMDB' });
    }
};

// Proxy any request to the TMDB API endpoint
app.use('/', tmdbRequest);

app.listen(port, () => console.log(`Server listening on port ${port}`));

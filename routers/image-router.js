import {Router} from "express";
import axios from "axios";

export const imageRouter = Router({})

const imageRequest = async (req, res) => {
    const imgUrl = `https://image.tmdb.org${req.path}`
    try {
        const response = await axios.get(imgUrl)
        res.json(response.data)
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching image from TMDB' })
    }
}

imageRouter.use('/p', imageRequest)
import {Router} from "express";
import axios from "axios";

export const imageRouter = Router({})

const imageRequest = async (req, res) => {
    const imgUrl = `https://image.tmdb.org${req.originalUrl}`
    try {
        const response = await axios.get(imgUrl, {responseType: 'stream'})

        res.set({
            'Content-Type': response.headers['content-type']
        })
        response.data.pipe(res)
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching image from TMDB' })
    }
}

imageRouter.use('/p', imageRequest)
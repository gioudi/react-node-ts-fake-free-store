import express from 'express'
import axios from 'axios'
import { API_BASE_URL } from '../config';
import { SearchResponse } from '../types/searchInterfaces';
import { mapSearchResponseToNewStructure } from '../helper';



const router = express.Router()


router.get(`/sites`, async (req, res) => {
    try {
        const { q } = req.query as {q?:string}

        if(!q){
            throw new Error('Query parameter "q" is required')
        }
        const apiUrl = `${API_BASE_URL}/sites/MLA/search?q=${q}`
        const response = await axios.get<SearchResponse>(apiUrl)

        const mappedData = mapSearchResponseToNewStructure(response.data)
        console.log(mappedData)
        res.json(mappedData)

    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'})
    }
})


export default router
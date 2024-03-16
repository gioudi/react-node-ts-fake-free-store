import { Request, Response } from 'express';
import axios from 'axios'
import { API_BASE_URL } from '../config';
import { SearchResponse } from '../types/searchInterfaces';
import { mapSearchResponseToNewStructure } from '../helper';


export  async function handleGetSites(req: Request, res: Response){
    try {
        const { q } = req.query as {q?:string}

        if(!q){
            throw new Error('Query parameter "q" is required')
        }
        const apiUrl = `${API_BASE_URL}/sites/MLA/search?q=${q}`
        const response = await axios.get<SearchResponse>(apiUrl,{
            headers: {
                'Content-Type': 'application/json',
              },
        })

        const mappedData = mapSearchResponseToNewStructure(response.data)
        console.log(mappedData)
        res.json(mappedData)

    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'})
    }
}
   

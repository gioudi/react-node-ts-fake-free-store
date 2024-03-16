import { Request, Response } from "express";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { RealSearchResponse } from "../types/originalInterfaces";
import { mapSearchResponseToNewStructure } from "../helper";

/**
 * handleGetSites.
 * This function is used to get a list of elements based on search's value, next call mapSearchResponseToNewStructure to format date before display it.
 * @param q q is necessary to get information from service, it must be string.
 * @returns A formatted a list of elements based on search's value to display.
 */

export async function handleGetSites(req: Request, res: Response) {
  try {
    const { q } = req.query as { q?: string };

    if (!q) {
      throw new Error('Query parameter "q" is required');
    }
    const apiUrl = `${API_BASE_URL}/sites/MLA/search?q=${q}`;
    const response = await axios.get<RealSearchResponse>(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const mappedData = mapSearchResponseToNewStructure(response.data);
    res.json(mappedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

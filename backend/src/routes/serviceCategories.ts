import { Request, Response } from "express";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { RealSearchResponse } from "../types/originalInterfaces";

/**
 * handleGetCategories.
 * This function is used to get a list of categories based on id value.
 * @param q q is necessary to get information from service, it must be string.
 * @returns A formatted a list of categories based on id value to display.
 */

export async function handleGetCategories(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("parameter is required");
    }
    const apiUrl = `${API_BASE_URL}/categories/${id}`;
    const response = await axios.get<RealSearchResponse>(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

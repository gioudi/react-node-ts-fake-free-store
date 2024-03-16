import { Request, Response } from "express";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { mapSearchResponseToNewStructure } from "../helper";
import { RealItemInfo, RealItemResponse } from "../types/originalInterfaces";

/**
 * handleGetItems.
 * This function is used to get item data and call mapSearchResponseToNewStructure to format it.
 * @param id Id is necessary to get information from service.
 * @returns A formatted item to display.
 */
export async function handleGetItem(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const items = await getItem(id);
    res.json(mapSearchResponseToNewStructure(items));
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getItem(payload: string): Promise<RealItemResponse> {
  const apiUrl = `${API_BASE_URL}/items/${payload}`;
  const response = await axios.get<RealItemResponse>(apiUrl);
  return response.data;
}

/**
 * handleGetDescriptionItem.
 * This function is used to get item's description, next call mapSearchResponseToNewStructure to format date before display it.
 * @param id Id is necessary to get information from service.
 * @returns A formatted item's description to display.
 */

export async function handleGetDescriptionItem(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const itemDescription = await getDescription(id);
    res.json(itemDescription);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getDescription(payload: string): Promise<RealItemInfo> {
  const apiUrl = `${API_BASE_URL}/items/${payload}/description`;
  const response = await axios.get<RealItemInfo>(apiUrl);
  return response.data;
}

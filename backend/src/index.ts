/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Response } from "express";
import { handleGetSites } from "./routes/serviceSites";
import { handleGetDescriptionItem, handleGetItem } from "./routes/serviceItems";
import { corsMiddleware } from "./middleware/cors";
import { handleGetCategories } from "./routes/serviceCategories";

const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// CORS middleware
app.use(corsMiddleware);

app.get("/api/sites", handleGetSites);
app.get("/api/items/:id", handleGetItem);
app.get("/api/items/:id/description", handleGetDescriptionItem);
app.get("/api/categories/:id", handleGetCategories);

app.use((err: any, req: express.Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`The server is ready on port: ${PORT}`);
});

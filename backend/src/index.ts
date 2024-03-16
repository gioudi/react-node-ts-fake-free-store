import express, {  Response } from 'express'
import { handleGetSites } from './routes/serviceSites';
import { handleGetDescriptionItem, handleGetItem } from './routes/serviceItems';
const cors = require('cors');
const app = express()

const PORT = 5000;


app.get('/api/sites', handleGetSites);
app.get('/api/items/:id', handleGetItem);
app.get('/api/items/:id/description', handleGetDescriptionItem);

app.use(cors())

app.use((err: any, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, ()=> {
    console.log(`The server is ready on port: ${PORT}`)
})
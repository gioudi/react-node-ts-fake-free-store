import express, {  Response } from 'express'
import { handleGetSites } from './routes/serviceSites';
const cors = require('cors');
const app = express()

const PORT = 5000;


app.get('/api/sites', handleGetSites);

app.use(cors())

app.use((err: any, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, ()=> {
    console.log(`The server is ready on port: ${PORT}`)
})
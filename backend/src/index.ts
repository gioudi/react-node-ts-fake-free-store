import express from 'express'
import routes from './routes'
const app = express()

const PORT = 3000;

app.use(`/api`, routes)

app.listen(PORT, ()=> {
    console.log(`The server is ready on port: ${PORT}`)
})
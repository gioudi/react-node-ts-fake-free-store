import express from 'express'
import serviceSites from './serviceSites'

const router = express.Router()

router.use('/sites', serviceSites)


export default router
import express from 'express'

import narudzbeRouter from './narudzbe'

const router = express.Router()

router.use(narudzbeRouter)

export default router
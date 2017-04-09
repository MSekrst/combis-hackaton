import express from 'express'

import narudzbeRouter from './narudzbe'
import statsRouter from './statistics';

const router = express.Router()

router.use(narudzbeRouter)
router.use('/stats', statsRouter)

export default router
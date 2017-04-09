import express from 'express'

import getDbConnection from '../mongo/mongo'

const router = express.Router()

router.get('/hrana', (req, res) => {
  const db = getDbConnection();

  db.collection('Popis_Narudzbi').find().toArray((err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      console.log('data', data)
    }
  })
})

export default router
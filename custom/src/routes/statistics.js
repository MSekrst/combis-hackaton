import express from 'express'

import getDbConnection from '../mongo/mongo'

const router = express.Router()

router.get('/hrana', (req, res) => {
  const db = getDbConnection();

  db.collection('Popis_Narudzbi').find().toArray((err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      const stats = []

      data.forEach(item => {
        if (stats[item._id]) {
          stats[item._id].counter++;
        } else {
          stats[item._id] = { item, counter: 1 }
        }
      })
    }
  })
})

export default router
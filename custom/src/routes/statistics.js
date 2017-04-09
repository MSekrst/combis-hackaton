import express from 'express'

import getDbConnection from '../mongo/mongo'

const router = express.Router()

router.get('/all', (req, res) => {
  const db = getDbConnection();

  db.collection('Popis_Narudzbi').find().toArray((err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      const stats = {}

      console.log('start', data.length);

      data.forEach(item => {
        if (stats[item.artikl.naziv]) {
          stats[item.artikl.naziv].counter += 1
        } else {
          stats[item.artikl.naziv] = {
            item, counter: 1,
          }
        }
      })

      const arr = [];

      Object.keys(stats).forEach(i => {
        if (stats.hasOwnProperty(i)) {
          arr.push(stats[i])
        }
      })

      res.status(200).json(arr);
    }
  })
})

export default router
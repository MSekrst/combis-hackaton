import express from 'express'

import getDbConnection from '../mongo'

const router = express.Router()

router.get('/all', (req, res) => {
  const db = getDbConnection();

  db.collection('Popis_Narudzbi').find().toArray((err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.json(data);
    }
  })
})

export default router
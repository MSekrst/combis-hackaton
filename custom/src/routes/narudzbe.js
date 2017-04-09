import express from 'express'

import getDbConnection from '../mongo/mongo'
import { ObjectID } from 'mongodb'

const router = express.Router()

router.get('/all', (req, res) => {
  const db = getDbConnection()

  db.collection('Popis_Narudzbi').find().toArray((err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.json(data);
    }
  })
})

router.post('/status', (req, res) => {
  const db = getDbConnection()

  db.collection('Popis_Narudzbi').updateOne({ _id: ObjectID(req.body._id) }, { $set: { status: req.body.status } }).toArray((err, data) => {
    res.status(200).end()
  })
})

export default router
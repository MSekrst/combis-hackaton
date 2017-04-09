import { ObjectID } from 'mongodb'

import getDbConnection from './mongo';

export const saveItem = (id) => {
  const db = getDbConnection()

  db.collection('Ponuda').find({ _id: ObjectID(id) }).toArray((err, data) => {
    if (err) {
      return;
    }

    const item = { artikl: { _id: ObjectID(data._id), naziv: data[0].naziv, opis: data[0].opis, pictureUrl: data[0].pictureUrl }, tag: data[0].tag, status: 'Pending'}

    console.log('item', item);

    db.collection('Popis_Narudzbi').insertOne(item)
  })
}

import getConnection from './mongo/mongo'
import _ from 'lodash'

const handlePonuda = (vrsta, tip, callback) => {
  const db = getConnection()

  console.log('HANDLE PONUDA', vrsta, tip);

  if (!vrsta && !tip) {
    return callback({ message: 'No Parameters' });
  } else {
    if (!vrsta) {
      db.collection('Ponuda').find({ tip_ponude: { "$in" : [tip]} }).toArray((err, data) => {
        if (err) {
          return callback(err);
        }

        const ret = []

        data.forEach(i => {
          ret.push({ naziv: i.naziv, opis: i.opis, picture: i.pictureUrl, id: i._id })
        })

        return callback(null, ret);
      });
    } else {
      if (!tip) {
        db.collection('Ponuda').find({ vrsta_ponude: { "$in" : [vrsta] } }).toArray((err, data) => {
          if (err) {
            return callback(err);
          }

          const ret = []

          data.forEach(i => {
            ret.push({ naziv: i.naziv, opis: i.opis, picture: i.pictureUrl, id: i._id })
          })

          return callback(null, ret);
        });
      } else {
        db.collection('Ponuda').find({ vrsta_ponude: { "$in" : [vrsta]}, tip_ponude: { "$in" : [tip]} }).toArray((err, data) => {
          if (err) {
            return callback(err);
          }

          const ret = []

          data.forEach(i => {
            ret.push({ naziv: i.naziv, opis: i.opis, picture: i.pictureUrl, id: i._id })
          })

          return callback(null, ret);
        });
      }
    }
  }
}

export const action = (entities, callback) => {
  // console.log('entities', entities);

  if (!entities.intent) {
    return callback({ message : 'No intent' });
  }

  const intent = entities.intent[0].value

  switch (intent) {
    case 'Ponuda':


      handlePonuda(_.get(entities, 'ponuda[0].entities.vrsta_ponude[0].value'), _.get(entities, 'ponuda[0].entities.tip_ponude[0].value') , callback);
      break;
    default:
      callback({ message : 'No intent handler' })
  }
}
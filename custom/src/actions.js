import getConnection from './mongo'

const handlePonuda = (vrsta, tip, callback) => {
  const db = getConnection()

  // console.log('HANDLE PONUDA', vrsta, tip);

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

export const action = (entities, callback) => {
  // console.log('entities', entities);

  if (!entities.intent) {
    return callback({ message : 'No intent' });
  }

  const intent = entities.intent[0].value

  switch (intent) {
    case 'Ponuda':
      if (!(entities.ponuda && entities.ponuda[0].entities && entities.ponuda[0].entities.vrsta_ponude && entities.ponuda[0].entities.vrsta_ponude[0] && entities.ponuda[0].entities.tip_ponude && entities.ponuda[0].entities.tip_ponude[0])) {
        return callback({ message : 'Wrong format' });
      }
      handlePonuda(entities.ponuda[0].entities.vrsta_ponude[0].value, entities.ponuda[0].entities.tip_ponude[0].value, callback);
      break;
    default:
      callback({ message : 'No intent handler' })
  }
}
import express from 'express'
import config from './../config.js'
import bodyParser from 'body-parser'
import { replyMessage, replyGeneric, replyWithPonudaTemplate } from './facebook'
import { Wit } from 'node-wit'

import { action } from './actions'
import { connectDb } from './mongo'

import router from './routes'

connectDb();

const facebookConfig = {
  pageAccessToken: config.pageAccessToken,
  validationToken: config.validationToken,
}

const WitClient = new Wit({ accessToken: '42N7ZBK3H3HJIBL7FNHI6P6N6E4V6FQR' });

/*
* Creation of the server
*/

const app = express()
app.set('port', process.env.PORT || config.port || 8080)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*
* connect your webhook
*/

app.get('/', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === facebookConfig.validationToken) {
    // console.log('Validating webhook')
    res.status(200).send(req.query['hub.challenge'])
  } else {
    console.error('Failed validation. Make sure the validation tokens match.')
    res.sendStatus(403)
  }
})

/*
* Take care of the messages
*/
app.post('/', function (req, res) {
  const data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(entry => {
      // Iterate over each messaging event
      entry.messaging.forEach(event => {
        // console.log('event', event);

        if (event.message) {
          receivedMessage(event);

          const id = event.sender.id
          const text = event.message.text || 'Pomoc'

          WitClient.message(text, {})
            .then((d) => {
              console.log('d', d);
              // replyMessage(id, JSON.stringify(d))

              action(d.entities, (err, data) => {
                if (err) {
                  console.log('err', err);
                  replyGeneric(id)
                } else {
                  replyWithPonudaTemplate(id, data)
                }
              })
            }, () => {
              replyGeneric(id);
            })
            .catch(console.error);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      })
    })

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
})

function receivedMessage(event) {
  // Putting a stub for now, we'll expand it in the following steps
  console.log("Message data: ", event.message);
}

app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})

app.use(router)

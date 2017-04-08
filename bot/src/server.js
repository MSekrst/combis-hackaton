import express from 'express'
import config from './../config.js'
import bodyParser from 'body-parser'
import { replyMessage, replyGeneric } from './facebook'
import { Wit } from 'node-wit'

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
app.use(bodyParser.json())

/*
* connect your webhook
*/

app.get('/', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === facebookConfig.validationToken) {
    console.log('Validating webhook')
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
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function (entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function (event) {
        if (event.message) {
          receivedMessage(event);
          if (event.message.text === 'Pomoć') {
            replyGeneric(event.sender.id, {
              title: 'Hotel bot',
              subtitle: "Pozdrav, zanima vas nešto od sljedećih stvari:"
            })
          }
          else {
            WitClient.message(event.message.text, {})
              .then((d) => {
                replyMessage(event.sender.id, JSON.stringify(d))
              })
              .catch(console.error);
          }
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
})

app.use('/api', (req, res) => res.end('/api'))

function receivedMessage(event) {
  // Putting a stub for now, we'll expand it in the following steps
  console.log("Message data: ", event.message);
}

app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})

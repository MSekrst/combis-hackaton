import config from './../config.js'
import request from 'request'

/*
* call to facebbok to send the message
*/

function sendMessage(messageData) {
  return new Promise((resolve, reject) => {
    request({
      uri: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: config.pageAccessToken },
      method: 'POST',
      json: messageData,
    }, (error, response) => {
      if (!error && response.statusCode === 200) {
        // console.log('All good job is done')
        resolve()
      } else {
        reject(error)
      }
    })
  })
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: config.pageAccessToken },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      if (messageId) {
        // console.log("Successfully sent message with id %s to recipient %s", messageId, recipientId);
      } else {
        // console.log("Successfully called Send API for recipient %s", recipientId);
      }
    } else {
      console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
    }
  });
}

/*
* type of message to send back
*/
function replyMessage(recipientId, messageText) {
  return new Promise((resolve, reject) => {

    const messageData = {
      recipient: {
        id: recipientId,
      },
      message: {
        text: messageText,
      },
    }
    sendMessage(messageData).then(() => {
      resolve()
    }).catch(err => {
      reject(err)
    })
  })
}

function replyGeneric(recipientId, option = {
  title: 'Hotel bot',
  subtitle: "Pozdrav, zanima vas nešto od sljedećih stvari:"
}) {
  const messageData = {
    recipient: {
      id: recipientId,
    },
    message: {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [
            {
              "title": option.title,
              // "image_url": "https://petersfancybrownhats.com/company_image.png",
              "subtitle": option.subtitle,
            }
          ]
        }
      }
    }
  }
  callSendAPI(messageData)
}

function replyWithPonudaTemplate(id, data) {
  const elements = [];

  data.forEach(i => {
    elements.push({
      title: i.naziv,
      image_url: i.picture,
      subtitle: i.opis,
      buttons: [{
        type: "postback",
        title: "Naruči",
        payload: id + "*" + i.id,
      }]
    })
  })

  callSendAPI({
    recipient: {
      id: id,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements,
        }
      }
    }
  })
}

module.exports = {
  replyMessage,
  replyGeneric,
  replyWithPonudaTemplate,
}

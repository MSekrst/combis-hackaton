import { Wit } from 'node-wit'

const WitClient = new Wit({ accessToken: '42N7ZBK3H3HJIBL7FNHI6P6N6E4V6FQR' });
WitClient.message('what is the weather in London?', {})
  .then((data) => {
    console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
  })
  .catch(console.error);
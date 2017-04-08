import { Wit } from 'node-wit'

const WitClient = new Wit({ accessToken: 'SDMX2XWRAEXONNPLYMBUVZZT75CWMKCS' });
WitClient.message('gdje je najbliži restoran?', {})
  .then((data) => {
    console.log(JSON.stringify(data))
  })
  .catch(console.error);
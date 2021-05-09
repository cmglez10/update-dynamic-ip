const fetch = require('node-fetch');
const config = require('./config');

// create a buffer
const buff = Buffer.from(`${config.user}:${config.password}`, 'utf-8');

// decode buffer as Base64
const base64 = buff.toString('base64');

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const updateIp = () => {
  fetch(`https://dynupdate.no-ip.com/nic/update?hostname=${config.hostname}`)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
};

// updateIp();

setInterval(() => {
  updateIp();
}, config.interval);

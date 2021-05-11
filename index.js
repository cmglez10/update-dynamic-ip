const fetch = require('node-fetch');
const config = require('./config.json');

// create a buffer
const buff = Buffer.from(`${config.user}:${config.password}`, 'utf-8');

// decode buffer as Base64
const base64 = buff.toString('base64');

const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${base64}`
  },
};

const updateIp = () => {
  config.hostnames.forEach(hostname => {
    fetch(`https://dynupdate.no-ip.com/nic/update?hostname=${hostname}`, options)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.error(res);
      });
  });
};

updateIp();

setInterval(() => {
  updateIp();
}, config.interval);

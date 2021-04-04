const http = require('http');

// create a buffer
const buff = Buffer.from('<<<USER>>>:<<<PASSWORD>>>', 'utf-8');

// decode buffer as Base64
const base64 = buff.toString('base64');

const options = {
  hostname: 'dynupdate.no-ip.com',
  port: 443,
  path: '/nic/update?hostname=<<<HOSTNAME>>>',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();

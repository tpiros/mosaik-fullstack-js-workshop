const http = require('http');
const appid = 'e2effabbcb32e5f4660687195640ed5f';

const airportCode = 'LHR';

const getData = function(url) {
  return new Promise((resolve, reject) => {
    const request = http.get(url, response => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error(`Failed to load: ${response.statusCode}`));
      }
     const body = [];
     response.on('data', chunk => body.push(chunk));
     response.on('end', () => resolve(body.join('')));
   });
   request.on('error', (err) => reject(err));
  });
};

const city = 'London';
getData(`http://api.openweathermap.org/data/2.5/weather?appid=${appid}&qasdfsadf=${city}&units=metric`)
.then(response => {
  const responseJSON = JSON.parse(response);
  const conditions = responseJSON.weather[0].description;
  const temperature = responseJSON.main.temp;
  console.log(`Current conditions: ${conditions} with a temperature of ${temperature}C.`);
})
.catch(error => console.error(error));

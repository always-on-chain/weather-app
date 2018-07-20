const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  let key = '15598e9dc0fd6909a24e46f0c231d641';

  request({
    url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature, 
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  })
}

module.exports = {
  getWeather
}

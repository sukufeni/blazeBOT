const request = require('request');

request('https://blaze.com/api/roulette_games/recent', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
  console.log(JSON.parse(JSON.stringify(body)));
});
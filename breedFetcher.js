const request = require('request');

// https://api.thecatapi.com/v1/breeds/search?q=sib to search

// guery example ?q=sib

let args = process.argv.slice(2);

let query = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  if (error) {
    throw new Error(`There was an issue with your cat search, and your error is.... : ${error}`);
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Sorry, that breed wasn\'t found!');
  }

  console.log(data[0].description);

});

const request = require('request');

const fetchBreedDescription = (breedName, cb) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      cb(error);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      cb('Breed Not Found');
    } else {
      cb(null, data[0].description.trim());
    }
  });

};


module.exports = { fetchBreedDescription };






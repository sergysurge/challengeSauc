const axios = require('axios');

const saucyApi_Beer = () =>{

  const lat = 33.9695;
  const lng = -118.381608;
  const size = 100;

  let config = {
    headers: { lat : lat, lng : lng, size : size}
  };

  return axios.get(`https://menu.saucey-api.com/category/5769c97729c54c2b71db6f00?lat=${lat}&lng=${lng}&size=${size}`, config.headers);

};

module.exports = saucyApi_Beer;
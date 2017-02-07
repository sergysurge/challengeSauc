const axios = require('axios');
const Promise = require('bluebird');

const saucyApi_Beer = () =>{
  //TRIAL DATA
  const lat = 33.9695;
  const lng = -118.381608;
  const size = 5;
  let config = {
    headers: { lat : lat, lng : lng, size : size}
  };

  return axios.get(`https://menu.saucey-api.com/category/5769c97729c54c2b71db6f00?lat=${lat}&lng=${lng}&size=${size}`, config.headers)
    
}

module.exports = saucyApi_Beer;


// axios.all([
//     axios.get('https://api.github.com/users/codeheaven-io');
//     axios.get('https://api.github.com/users/codeheaven-io/repos')
//   ])
//   .then(axios.spread(function (userResponse, reposResponse) {
//     //... but this callback will be executed only when both requests are complete.
//     console.log('User', userResponse.data);
//     console.log('Repositories', reposResponse.data);
//   }));

// axios.get('https://api.github.com/users/' + username)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });  
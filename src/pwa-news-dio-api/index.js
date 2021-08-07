let axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://community-hacker-news-v1.p.rapidapi.com/user/jl.json',
  params: {print: 'pretty'},
  headers: {
    'x-rapidapi-key': 'cad516959bmsh2cf92f213e36eadp105ca5jsn05fa5c7a0cb4',
    'x-rapidapi-host': 'community-hacker-news-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
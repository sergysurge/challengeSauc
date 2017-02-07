require('babel-register')({
  presets: ['react', "es2015", "stage-1"]
});

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const beerSaucey = require('./axiosController');
const PORT = process.env.PORT || 3000;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../app/components/beerCategory_container');
const axios = require('axios');

const app = express();
app.set('port', PORT)

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.use('/', (req, res) => {
  var renderView = (initialState, componentHTML) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> Saucey Sergey </title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)} 
        </script>
        
        <link rel="stylesheet" href="/styles.css" />
        
      </head>
          <body>
            <div id="react-view" class="container" >${componentHTML}</div>
            <script type="application/javascript" src="/bundle.js"></script>
          </body>
          </html>
          `
  }

var componentHtml = (props) => ReactDOMServer.renderToString(
        React.createElement(App, props)
      )

beerSaucey()
  .then(data=>{
    const beerArray = data.data.products
    var props = {
        data: beerArray,
        title: 'Universal React'
      }
      var final = renderView(props, componentHtml(props))
      res.send(final);
  })
  .catch(err=>{
    console.log('Error with api', err);
    res.send(err);
  })


});


app.listen(app.get('port'), () => console.log('S3rv3r runn1ng 0n p0rt ' , app.get('port')))
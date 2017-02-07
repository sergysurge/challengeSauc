const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./components/beerCategory_container.jsx');

const props = window.__INITIAL_STATE__;
console.log('client.jsx props : ', props)
ReactDOM.render(
  <App data={props.data} title={"Universal React"} />,  document.getElementById('react-view')
);
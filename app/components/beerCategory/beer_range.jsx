const React = require('react');
const lodash = require('lodash');

module.exports = class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 20
    };
  };

  _onRangeChange = value => {
    this.setState({ value });
    this.props.onBeerRangeChange(value);
  };

  render() {
    return (
      <input
        value={this.state.value}
        onChange={event => this._onRangeChange(event.target.value)}
        type="range" 
        min="0" 
        max="100" 
        step="1" />
    );
  };
};
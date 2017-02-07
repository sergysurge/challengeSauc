const React = require('react');

module.exports = class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 20
    };

  }

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
  }

  _onRangeChange = value => {
    // console.log('this is the weird es6 shit', { value }, {value : value})
    this.setState({ value })
    console.log('DIS DA STATE', this.state)
    console.log('DIS DA PROPS', this.props)
    this.props.onBeerRangeChange(value);
  }
} 
const React = require('react');
const lodash = require('lodash');
const BeerList = require('./beerCategory/beer_list.jsx');
const BeerRange = require('./beerCategory/beer_range.jsx');


module.exports = class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 20,
      count: 0,
      selected: {}
    };
    
    this._handleClickBeerList = this._handleClickBeerList.bind(this);
    this._expandedViewActivated = this._expandedViewActivated.bind(this);
    this._onBeerRangeChange = this._onBeerRangeChange.bind(this);
  };

  //on change of scroll bar, send amount of beer_list_items to render
  _onBeerRangeChange(val) {
    this.setState({value: val})
    this._renderBeerItems_RangeChange()
  };

  //send state.value amount of beer_list_items to render
  _renderBeerItems_RangeChange(){
    return this.props.data.slice(0, this.state.value)
  };

  //on beer_list_item click, stores the information in state.selected
  _handleClickBeerList(click){
    let result = {}
    const id = click._id;

    this.state.selected[id] === undefined ? result[id] = click : result[id] = undefined;
    
    let final = Object.assign(this.state.selected, result)

    this.setState( {selected: final} )
    this._expandedViewActivated()
  };

  //sends back beer_list_items that have been activated AKA clicked on
  _expandedViewActivated() {
    return {
      selected: lodash.omitBy(this.state.selected, (value, key) => value === undefined)
    };
  };
  
  render() {
    const cssNavLinks = { display: 'inline', padding: '5px', margin: 'auto', fontSize: '1.5em'};

    return (
          <section style={ {padding: "0"} }>

            <nav className="navbar navbar-default navbar-fixed-top" 
            style={{background: '#696969', paddingTop: '10px', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, color: 'white', boxShadow: '3px 3px 1px #888888'}}>
              <div className="container">
                <ul className="col-xs-12">
                  <li style={cssNavLinks}>Saucey</li>
                  <li style={cssNavLinks}>Sergey Sarkisyan</li>
                </ul>
                <span className="col-xs-12">
                  <span className="col-xs-9" style={{paddingTop: '3px'}}>
                    <BeerRange onBeerRangeChange={(val) => this._onBeerRangeChange(val)} /> 
                  </span>
                  <p className="col-xs-3">{this.state.value === '1' ? `${this.state.value} item` : `${this.state.value} items`}  </p>
                </span>
              </div>
            </nav>

            <div className={'col-xs-12 col-md-12'} 
            style={{padding: "0", margin: 'auto', textAlign: 'center'}}>
                <BeerList 
                data={this._renderBeerItems_RangeChange()} 
                selectedBeer={click => this._handleClickBeerList(click)} 
                expandedView={() => this._expandedViewActivated()} 
                key={'bl1'} />
            </div>
          </section>
    );
  };
};
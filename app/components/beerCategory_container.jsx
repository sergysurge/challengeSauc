const React = require('react');
const axios = require('axios');
const lodash = require('lodash');
const BeerList = require('./beerCategory/beer_list.jsx');
const BeerRange = require('./beerCategory/beer_range.jsx');


module.exports = class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 20,
      count: 0,
      activeViewToggle: false
    }
    this._handleClick = this._handleClick.bind(this);
    this._handleClickBeerList = this._handleClickBeerList.bind(this);
    this._expandedViewActivated = this._expandedViewActivated.bind(this);

    console.log('this.props in App: ', this.props)
    // console.log('this.props.data', this.props === undefined)
  //  this.state = {data: true};
  }
  
  _handleClick() {
    console.log('clicked for props : ' , this.props)
    console.log('and for state : ' , this.state)
    this.state.activeViewToggle ? this.setState({activeViewToggle : false}) : this.setState({activeViewToggle: true})
  }
  
  _onBeerRangeChange(val) {
    this.setState({ value: val })
    console.log('you should have change state :', val)
    this._renderBeerItems_RangeChange()
  }

  _renderBeerItems_RangeChange(){
    return this.props.data.slice(0, this.state.value)
  }

  _handleClickBeerList(click){
    console.log('the this of _selectedBeer() : ', click, typeof this.state.activeViewToggle)
    // this.setState({count: this.state.count++})
    
    //  this._expandedViewActivated()
  }

  _expandedViewActivated() {
    console.log('toggling view? : ', this.state.activeViewToggle)
    // if (this.state.activeViewToggle) {
    //     this.setState({activeViewToggle : false})
    // } else {

    //   this.setState({activeViewToggle : true} )
      
    // }
    return this.state.activeViewToggle
  }
  
  render() {

    // const value = lodash.debounce((val) => {this._onBeerRangeChange(val)}, 300);
    
    const value = (val) => this._onBeerRangeChange(val)
    const cssNavLinks = { display: 'inline', padding: '5px', margin: 'auto', fontSize: '1.5em'}

    return (
          <section style={ {padding: "0"} }>

            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <ul className="col-xs-12">
                  <li style={cssNavLinks}>Saucey</li>
                  <li style={cssNavLinks}>Sergey Sarkisyan</li>
                </ul>
                <span className="col-xs-12">
                  <span className="col-xs-9" style={{paddingTop: '3px'}}>
                  <BeerRange onBeerRangeChange={value} /> 
                  </span>
                  <p className="col-xs-3">{this.state.value === '1' ? `${this.state.value} item` : `${this.state.value} items`}  </p>
                </span>
              </div>
            </nav>

            <div className={'beers_component col-xs-12 col-md-12'} style={{padding: "0", margin: 'auto', textAlign: 'center'}}>

                <BeerList data={this._renderBeerItems_RangeChange()} selectedBeer={click => this._handleClickBeerList(click)} expandedView={() => this._expandedViewActivated()} key={'bl1'} />
                
            </div>

            <button onClick={this._handleClick}>click me </button>
          </section>
    );
  }




  componentWillMount() {
    console.log('Component WILL MOUNT!')
    console.log('componentWillMount', this.props.data )
  }
  
   componentDidMount() {
      console.log('Component DID MOUNT!')
      console.log('componentDidMount', this.props.data )
      // if (!this.state.data) {
      //   console.log(!this.state.data)
      //   this.setState({data:true})
      // }
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
      console.log('componentDidMount', this.props.data)
      console.log(newProps, 'component did mount')
      
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
      
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   
}
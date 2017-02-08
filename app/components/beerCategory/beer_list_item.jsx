const React = require('react');

const BeerListItem = (data) => {

    //stateless STATE object connected to beerCategory smart compoonent
    const state = data.expandedView();

    //stateless PROP object connected to beerCategory smart compoonent
    const item = data.item;

    //on item click, send data to beerCategory smart component
    const onItemClick = item => {
      data.selectedItem(item)
    };
    
    //modifies the subtitle name to 14 characters
    const stringLengthModifier = string => {
      return string.charAt(14) === '' ? string : string.slice(0, 14).concat('...')
    };
    
    //commonly used style
    const caps = {
      padding: '0px'
    };

    //if ITEM has not been selected render the following
    if (state.selected[item._id] === undefined) {
      return (
        <li id={item._id} 
        onClick={()=> onItemClick(item)} 
        className="col-xs-6 col-sm-4 col-md-3 col-lg-3 borders liHeight" 
        style={{padding: '3px'}}>

            <div className="col-xs-12" style={caps}>

              <img className="col-xs-12 thumbnail" 
              src={item.image} 
              style={{ borderRadius:"4px", width: '100%'}}/>
            <div  className="caption col-xs-12" style={caps}> 
              <p className="col-xs-7" 
              style={{ padding: 0, paddingTop: 2, margin: 0, fontWeight: 'bold'}}> {stringLengthModifier(item.title)}</p>
              <p className="col-xs-5" 
              style={{ padding: 0, paddingTop: 2, margin: 0, fontWeight: 'bold'}}> 
              ${item.price}</p>
              <p className="col-xs-7" 
              style={{ padding: 0, paddingTop: 2, margin: 0}}> 
              {stringLengthModifier(item.subtitle)}</p>
              <p className="col-xs-5" 
              style={{ padding: 0, paddingTop: 2, margin: 0}}> 
              {item.volume}</p>
            </div> 

            </div>
        </li>
      )} else {
        //IF ITEM HAS BEEN CLICKED ON!
        //commonly used styles 
    return (
      <li id={item._id} 
      onClick={()=> onItemClick(item)} 
      className="col-xs-12 col-sm-8 col-md-6 col-lg-6 borders liHeight" 
      style={{background: 'dimgrey', color: 'white'}}>

          <div className="col-xs-6" style={caps}>
            <img className="col-xs-12 thumbnail" 
            src={item.image}
            style={{ borderRadius:"4px", width: '100%'}}/>

          <div className="caption col-xs-12" style={caps}> 
            <p className="col-xs-7" 
            style={{ padding: 0, paddingTop: 8, paddingBottom: 5, margin: 0, fontWeight: 'bold'}}> 
            {item.title}</p>
            <p className="col-xs-5" 
            style={{ padding: 0, paddingTop: 8, paddingBottom: 5,margin: 0, fontWeight: 'bold'}}> 
            ${item.price}</p>
          </div>

          </div> 
        
        <div className="col-xs-6" style={caps}>
          <h4 className="col-xs-12" style={caps}>
            {item.company.toUpperCase()}</h4>
          <p className="col-xs-12" style={caps}> 
            <strong>{item.subtitle}</strong></p>
          <p className="col-xs-12" style={caps}> 
            {item.description + ' ' + item.subtitle} </p>
          <p className="col-xs-12" style={caps}> 
            <strong>TYPE:</strong> {item.type.toUpperCase()}</p>
          <p className="col-xs-12" style={caps}> 
            <strong>VOLUME:</strong> {item.volume}</p>
          <p className="col-xs-12" style={caps}> 
            <strong>STYLE:</strong> {item.style}</p>
          <p className="col-xs-12" style={caps}> 
            <strong>SKU:</strong> {item.sku_id}</p>
        </div>
      </li>
    )};
};

module.exports =  BeerListItem;
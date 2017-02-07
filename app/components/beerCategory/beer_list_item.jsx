const React = require('react');
const axios = require('axios');

const BeerListItem = (i) => {
    console.log('********!! ', i)
     console.log('********!! ', i.item)
    const caps = {
      padding: '0px'
    }
    const item = i.item

    const onItemClick = item => {
      console.log('this is where you clicked : ', item)
    }
    
    const checker = (item) => {
      console.log(item);
      if (item.subtitle === undefined) {
        return console.log('ITEM NOT HERE YET NIGGA')
      }
      console.log('item. subtitle is this : ', item.subtitle)
      return item.subtitle.charAt(11) === '' ? item.subtitle : item.subtitle.slice(0, 11).concat('...')
    }
    console.log(item.id, '&&&&&')
    return (
      <li id={item._id} onClick={()=> onItemClick(item)} className="col-xs-6 col-md-4 thumbnail">
    
            <img src={item.image} width={100 + '%'} style={{ borderRadius:"4px" }}/>
           
          <div  className="caption col-xs-12" style={caps}> 
            <p className="col-xs-7" style={{ padding: 0, paddingTop: 2, margin: 0, fontWeight: 'bold'}}> {item.title}</p>
            <p className="col-xs-5" style={{ padding: 0, paddingTop: 2, margin: 0, fontWeight: 'bold'}}> ${item.price}</p>
            <p className="col-xs-7" style={{ padding: 0, paddingTop: 2, margin: 0}}> { checker(item) }</p>
            <p className="col-xs-5" style={{ padding: 0, paddingTop: 2, margin: 0}}> {item.volume}</p>
          </div> 
         
          
      </li>
    )
}

module.exports =  BeerListItem;
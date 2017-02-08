const React = require('react');
const BeerListItem = require('./beer_list_item.jsx');

const BeerList = (props) => {

  const beerListItems = props.data.map(item => {
      return (
        <BeerListItem item={item} 
        key={item._id} 
        selectedItem={props.selectedBeer} 
        expandedView={props.expandedView} />
      );
    });

  return(
    <ul className='beerlistitem' style={{padding: '3px'}}>
      {beerListItems}
    </ul>
  );
};

module.exports = BeerList;
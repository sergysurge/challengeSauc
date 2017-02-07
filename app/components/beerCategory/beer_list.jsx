const React = require('react');

const BeerListItem = require('./beer_list_item.jsx');


const BeerList = (props) => {
  console.log('BeerList props : ' ,props)

  const beerListItems = props.data.map(item => {
      console.log('beerlist mapping', item)
      console.log('beerlist mapping', item._id)
      
      return (
        <BeerListItem item={item} key={item._id} />
      );
    }
  )

  return(
    <ul>
      {beerListItems}
    </ul>
  );
};

module.exports = BeerList
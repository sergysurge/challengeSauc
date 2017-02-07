const React = require('react');

const BeerListItem = require('./beer_list_item.jsx');


const BeerList = (props) => {
  console.log('BeerList props : ' ,props)
  console.log('BeerList props selectedBeer : ' , props.selectedBeer)
  console.log('BeerList props extendedView : ' , props.expandedView)
  const someVariable = 1;
  const beerListItems = props.data.map(item => {
      console.log('beerlist mapping', item)
      console.log('beerlist mapping', item._id)
      
      return (
        <BeerListItem item={item} key={item._id} selectedItem={props.selectedBeer} expandedView={props.expandedView} />
      );
    }
  )

  return(
    <ul className='beerlistitem' >
      {beerListItems}
    </ul>
  );
};

module.exports = BeerList
import React from 'react';
import { connect } from 'react-redux';

function SearchItems(props) {
  return (
    <div className='search-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="search-items-wrapper" key={drink.id}>

          <div>
            <img src={drink.image + '/preview'} alt={drink.name}/>
          </div>
          
          <div>
            <p>{ drink.name || "Drink undefined" }</p>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default connect()(SearchItems);
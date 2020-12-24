import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

function SearchItems(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleDrink(drink) {
    dispatch({
      type: 'CHOSE_DRINK',
      drink
    })

    setTimeout(() => {
      history.push('/drink')
    }, 500);
  }

  return (
    <div className='search-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="search-items-wrapper" key={drink.id} onClick={() => handleDrink(drink)}>

          <div>
            <img src={drink.image + '/preview'} alt={drink.name} />
          </div>

          <div>
            <p>{drink.name || "Drink undefined"}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default connect()(SearchItems);
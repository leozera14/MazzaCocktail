import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import './item.css';

function Items(props, drink) {
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleDrink(drink) {
    dispatch({
      type: 'CHOSE_DRINK',
      drink
    });

    setTimeout(() => {
      history.push('/drink')
    }, 500);
  }

  return (
    <div className='categories-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="categories-items-wrapper" key={drink.idDrink} onClick={() => handleDrink(drink)}>

          <div>
            <img src={drink.strDrinkThumb + '/preview'} alt={drink.strDrink} />
          </div>

          <div>
            <p>{drink.strDrink || "Drink undefined"}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default connect(state => ({
  drink: state.drink,
}))(Items);
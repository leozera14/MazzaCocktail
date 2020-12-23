import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './item.css';

function Items(props, drink) {
  const dispatch = useDispatch();

  async function handleDrink(drink) {
    dispatch({
      type: 'ADD_DRINK',
      drink
    })
  }

  return (
    <div className='categories-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="categories-items-wrapper" key={drink.idDrink} onClick={() => handleDrink(drink)}>

          <div>
            <img src={drink.strDrinkThumb + '/preview'} alt={drink.strDrink}/>
          </div>
          
          <div>
            <p>{ drink.strDrink || "Drink undefined" }</p>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default connect(state => ({
  drink: state.drink,
}))(Items);
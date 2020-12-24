import React from 'react';
import { connect } from 'react-redux'
import './drink-item.css';

function DrinkItem(props) {

  return (
    <div className='drink-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="drink-items-wrapper" key={drink.id}>
          
          <div className="separate-content">

            <div className="drink-image">
              <a href={drink.image} target="_blank"><img src={drink.image} alt={drink.name}/></a>
              <b>{drink.name || "Drink undefined"}</b>
            </div>

            <div className="drink-content">
              <div className="drink-info">
                <p><b>Glass Recomended:</b> {drink.glass}</p>
                <p><b>Drink Category:</b> {drink.category}</p>
                <p><b>Alcoholic:</b> {drink.alcoholic === 'Alcoholic' ? "Yes" : "No"}</p>
              </div>

              <div className="drink-instruction">
                <h2>Instructions</h2>
                <textarea>{drink.instructions}</textarea>
              </div>
            </div>

          </div>

          <div className="wrap-title-ingredients">
            <h2>Ingredients</h2>
          </div>
          {Object.values(drink.ingredientsAndMeasures).map(ing => (
            ing[0] || ing[1] !== null
              ? 
              <div className="drink-ingredients">
                  <img src={'https://www.thecocktaildb.com/images/ingredients/' + `${ing[1]}` + '-Small.png'} alt={ing} />
                  <p>{ing}</p>
                  <div className="separator"></div>
              </div>
              : <span></span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default connect()(DrinkItem);


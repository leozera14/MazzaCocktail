import React from 'react';
import { connect } from 'react-redux'

function DrinkItem(props) {

  return (
    <div className='drink-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="drink-items-wrapper" key={drink.id}>

          <div>
            <img src={drink.image} alt={drink.name} />
          </div>


          {Object.values(drink.ingredientsAndMeasures).map(ing => (
            console.log(ing.length),
            ing[0] || ing[1] !== null
              ? <div>
                <img src={'https://www.thecocktaildb.com/images/ingredients/' + `${ing[1]}` + '-Small.png'} alt={ing} />
                <p>{ing}</p>
              </div>
              : <span></span>
          ))}

          <div>
            <p>{drink.name || "Drink undefined"}</p>
          </div>

          <div>
            <p>Glass Recomended: {drink.glass}</p>
            <p>Drink Category: {drink.category}</p>
            <p>Alcoholic: {drink.alcoholic === 'Alcoholic' ? "Yes" : "No"}</p>
          </div>

          <div>
            <h2>Instructions</h2>
            <p>{drink.instructions}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default connect()(DrinkItem);


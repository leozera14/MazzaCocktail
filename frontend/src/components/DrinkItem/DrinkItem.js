import React from 'react';
import { connect } from 'react-redux'
import './drink-item.css';

function DrinkItem(props) {
  
    const ingredientsArray = Object.values(props.items[0].ingredientsAndMeasures);

    const divComponents = [];

    const lenDivision = 3;

    ingredientsArray.forEach((v, i) => {
      if(i % lenDivision === 0){
        divComponents.push([]); // Adiciona um array vazio ao array principal
      }
      divComponents[Math.floor(i/lenDivision)] = [...divComponents[Math.floor(i/lenDivision)], v];
    })

  return (
    <div className='drink-wrapper'>
      {props.items && props.items.map(drink => (
        <div className="drink-items-wrapper" key={drink.id}>
          
          <div className="separate-content">

            <div className="drink-image">
              <a href={drink.image} target="_blank" rel="noreferrer"><img src={drink.image} alt={drink.name}/></a>
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
                <textarea value={drink.instructions} readOnly={true}></textarea>
              </div>
            </div>

          </div>

          <div className="wrap-title-ingredients">
            <h2>Ingredients</h2>
          </div>

          {
            divComponents.map(v => (
              <div className="wrap-ingredients">
                <div className="container-ingredients">
                  {v.map(w => (
                    w[0] || w[1] !== null
                    ?  
                      <div className="ingredients-items">
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${w[1]}-Small.png`} alt={w[1]}/>
                        <p>
                          {w[0]} - {w[1]}
                        </p>
                      </div>
                    : 
                      <div className="display-none"></div>
                  ))}
                </div>
              </div>
            ))
          }

        </div>
      ))}
    </div>
  )
}

export default connect()(DrinkItem);


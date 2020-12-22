import React from 'react';

export default function Categories(props) {
  return (
    <div className='categories-wrapper'>
      {props.items && props.items.map(item => (
        <div className="categories-items-wrapper" key={item.idDrink}>
          <p>{ item.strDrink || "Drink undefined" }</p>
        </div>
      ))}
    </div>
  )
}
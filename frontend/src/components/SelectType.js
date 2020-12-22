import React from 'react';

export default function SelectType(props){
  return(
      <select value={props.value} onChange={props.onChange}>
        <option value="name">Name</option>
        <option value="firstletter">First Letter</option>
        <option value="ingredientname">Ingredient Name</option>
        <option value="cocktailid">Cocktail ID</option>
        <option value="ingredientid">Ingredient ID</option>
        <option value="random">Random</option>
        <option value="ingredient">Ingredient</option>
        <option value="alcoholic">Alcoholic</option>
        <option value="glass">Glass</option>
      </select>
  )
}
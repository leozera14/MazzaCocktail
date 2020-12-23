import React from 'react';
import { connect, useDispatch } from 'react-redux';

function SelectType(){
  const dispatch = useDispatch();

  async function searchSelect(searchType) {
    dispatch({
      type: 'SEARCH_TYPE',
      searchType
    })
  }

  return(
      <select onChange={(e) => searchSelect(e.target.value)}>
        <option value="name">Name</option>
        <option value="firstletter">First Letter</option>
        <option value="ingredientname">Ingredient Name</option>
        <option value="random">Random</option>
      </select>
  )
}

export default connect()(SelectType)
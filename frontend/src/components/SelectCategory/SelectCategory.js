import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { connect, useDispatch } from 'react-redux';

function SelectCategory() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  async function loadSelectCategories() {
    await api.get('/categories')
    .then(function(response) {
       setCategories(response.data.drinks)
    })
  }

  async function categorySelect(category) {
    dispatch({
      type: 'SELECT_CATEGORY',
      category
    })
  }

  useEffect(() => {
    loadSelectCategories();
  }, []);

  return(
    <select onChange={(e) => categorySelect(e.target.value)}>
      {categories.length >= 0
      ? categories.map(categorie => (
        <option key={categorie.strCategory} value={categorie.strCategory.replace( /\s/g, '' )}>{categorie.strCategory}</option>
      ))
      : <option value='error'>Error</option>
      }
    </select>
  )
}

export default connect()(SelectCategory);
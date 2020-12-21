import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Home() {
  const [category, setCategory] = useState('O');

  async function loadCategories() {
    await api.get('/category', {
      params: {
        category: category
      }
    })
      .then(function(response) {
        console.log(response.data);
      })
  }

  useEffect(() => {
    loadCategories();
  }, [category])


  return(
    <div>
      <h1>Hello World</h1>

      <form>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="O">Ordinary Drink</option>
          <option value="C">Cocktail</option>
        </select>
      </form>
    </div>


  )
}
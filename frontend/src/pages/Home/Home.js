import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Categories from '../Categories/Categories';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export default function Home() {
  const [categoryOption, setCategoryOption] = useState('O');
  const [categoryItems, setCategoryItems] = useState([]);
  const [isCategoryItemsLoading, setIsCategoryItemsLoading] = useState(false);

  async function loadCategories() {
    setIsCategoryItemsLoading(true)

    await api.get('/category', {
      params: {
        category: categoryOption
      }
    }).then(function(response) {
        setIsCategoryItemsLoading(false)
        setCategoryItems(response.data.drinks)
      })
  }

  useEffect(() => {
    loadCategories();
  }, [categoryOption])

  return(
    <div>
      <h1>Hello World</h1>

      <form>
        <select value={categoryOption} onChange={e => setCategoryOption(e.target.value)}>
          <option value="O">Ordinary Drink</option>
          <option value="C">Cocktail</option>
        </select>
      </form>

      { !isCategoryItemsLoading && <Categories items={categoryItems} /> }

      <div className="sweet-loading">
        <ClipLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={isCategoryItemsLoading}
        />
      </div>
    </div>


  )
}
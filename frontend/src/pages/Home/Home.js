import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Categories from '../../components/Categories';
import SearchBar from '../../components/SearchBar';
import SelectType from '../../components/SelectType';
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
  const [search, setSearch] = useState();
  let [searchType, setSearchType] = useState('name');

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

  async function searchDrink(e) {
    e.preventDefault();

    console.log(search);
    console.log(searchType);
  }

  useEffect(() => {
    loadCategories();
  }, [categoryOption])

  return(
    <div>
      <h1>Hello World</h1>

      <form onSubmit={searchDrink}>

        <div>
          <SearchBar
          placeholder="Search for a drink"
          onChange={e => setSearch(e.target.value)}
          />
          <SelectType 
          value={searchType}
          onChange={e => setSearchType(e.target.value)}      
          />
        </div>
        
        <div>
          <select value={categoryOption} onChange={e => setCategoryOption(e.target.value)}>
            <option value="O">Ordinary Drink</option>
            <option value="C">Cocktail</option>
          </select>
        </div>
        
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

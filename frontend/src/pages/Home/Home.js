import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';
import Items from '../../components/Items/Items';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchBar from '../../components/SearchBar/SearchBar';
import SelectType from '../../components/SelectType/SelectType';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function Home({ category, searchInput, searchType }) {
  const categorySelect = category;
  const searchInputValue = searchInput;
  const searchTypeValue = searchType;
  let [renderType, setRenderType] = useState('C');
  const [categoryItems, setCategoryItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [isCategoryItemsLoading, setIsCategoryItemsLoading] = useState(false);
  const [isSearchItemsLoading, setIsSearchItemsLoading] = useState(false);

  async function loadCategories() {
    setIsCategoryItemsLoading(true)

    await api.get('/categoryItems', {
      params: {
        category: categorySelect
      }
    }).then(function(response) {
        setIsCategoryItemsLoading(false)
        setRenderType('C');
        setCategoryItems(response.data.drinks)
    })
  }

  async function searchDrink(e) {
    e.preventDefault();

    const data = {
      searchInputValue,
      searchTypeValue
    }

    setIsSearchItemsLoading(true)

    await api.post('/search', data)
      .then(function(response) {
        setIsSearchItemsLoading(false)
        setRenderType('S')
        setSearchItems(response.data)
      })
  }
 
  useEffect(() => {
    loadCategories();
  }, [categorySelect])

  return(
    <div>
      <h1>Hello World</h1>

      <form onSubmit={(e) => searchDrink(e)}>

        <div>
        <SelectType />
          <SearchBar />
         
        </div>
      </form>

      <form>
        <div>
          <SelectCategory />
        </div>
      </form>

      <div>
        {
          renderType === 'C'
        ? <Items items={categoryItems} />
        : <SearchItems items={searchItems} />
        }
      </div>

      <div className="sweet-loading">
        <ClipLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={isCategoryItemsLoading, isSearchItemsLoading}
        />
      </div>
    </div>
  )
}

export default connect(state => ({
  category: state.category,
  searchInput: state.searchInput,
  searchType: state.searchType
}))(Home);

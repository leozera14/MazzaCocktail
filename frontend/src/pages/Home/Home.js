import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Items from '../../components/Items/Items';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchBar from '../../components/SearchBar/SearchBar';
import SelectType from '../../components/SelectType/SelectType';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import Pagination from '../../components/Pagination/Pagination';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import './style.css';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [drinkPerPage] = useState(13);
  const [isCategoryItemsLoading, setIsCategoryItemsLoading] = useState(false);
  const [isSearchItemsLoading, setIsSearchItemsLoading] = useState(false);

  async function loadCategories() {
    setIsCategoryItemsLoading(true)

    await api.get('/categoryItems', {
      params: {
        category: categorySelect
      }
    }).then(function (response) {
      setIsCategoryItemsLoading(false)
      setRenderType('C');
      setCategoryItems(response.data.drinks)
    })
  }

  async function searchDrink(e) {
    e.preventDefault();
    setIsSearchItemsLoading(true)

    const data = {
      searchInputValue,
      searchTypeValue
    }
    await api.post('/search', data)
      .then(function (response) {
        setIsSearchItemsLoading(false)
        setRenderType('S')
        setSearchItems(response.data)
      })
  }

  useEffect(() => {
    loadCategories();
  }, [categorySelect])

  const indexOfLastDrink = currentPage * drinkPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinkPerPage; 
  const currentCategoryDrink = categoryItems.slice(indexOfFirstDrink, indexOfLastDrink);
  const currentSearchDrink = searchItems.slice(indexOfFirstDrink, indexOfLastDrink);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      < Header />

      <div className="content">

        <div className="wrap-forms">
          <form onSubmit={(e) => searchDrink(e)} className="form-searchBar">
            <SelectType />
            <SearchBar />
          </form>

          <form className="form-selectCategory">
            <SelectCategory />            
          </form>
        </div>

        <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={isCategoryItemsLoading}
            />

            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={isSearchItemsLoading}
            />
        </div>
         
          {
            renderType === 'C'
              ? 
              <div className="wrap-items">
                {!isCategoryItemsLoading}
                <Items items={currentCategoryDrink}/> 
                <Pagination 
                drinksPerPage={drinkPerPage} 
                totalDrinks={categoryItems.length}
                paginate={paginate}/>
              </div> 
              
              : 
              <div className="wrap-items">
                {!isSearchItemsLoading}
                <SearchItems items={currentSearchDrink} /> 
                <Pagination 
                drinksPerPage={drinkPerPage} 
                totalDrinks={searchItems.length}
                paginate={paginate}/>
              </div>
          }
        </div>
        <Footer />
      </>
  )
}

export default connect(state => ({
  category: state.category,
  searchInput: state.searchInput,
  searchType: state.searchType
}))(Home);

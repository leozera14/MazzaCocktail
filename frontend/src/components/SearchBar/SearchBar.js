import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './search-bar.css';

function SearchBar({ searchType }, props) {
  const searchTypeValue = searchType;

  const dispatch = useDispatch();

  async function searchInput(searchValue) {
    dispatch({
      type: 'SEARCH_INPUT',
      searchValue,
    })
  }

  return (
    <div className='search-wrapper'>

        <div className="wrap-content">
          <b>Type your search:</b>

          <input 
          type="text"
          onChange={(e) => searchInput(e.target.value)}
          placeholder='Type a Drink'
          required={searchTypeValue === 'random' ? false : true}
          />
        </div>
        
        <div className="wrap-button">
          <button 
          type='submit'
          onSubmit={props.onSubmit}
          >
          Search
          </button>
        </div>
        
        
    </div>
  )
}

export default connect(state => ({
  searchType: state.searchType,
}))(SearchBar);
import React from 'react';
import { connect, useDispatch } from 'react-redux';

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
        <input 
        type="text"
        onChange={(e) => searchInput(e.target.value)}
        placeholder={props.placeholder}
        required={searchTypeValue === 'random' ? false : true}
        />

        <button 
        type='submit'
        onSubmit={props.onSubmit}
        >
        Search
        </button>
        
    </div>
  )
}

export default connect(state => ({
  searchType: state.searchType,
}))(SearchBar);
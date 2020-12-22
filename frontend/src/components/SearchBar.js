import React from 'react';

export default function SearchBar(props) {
  return (
    <div className='search-wrapper'>
        <input 
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={true}
        />
        <button type='submit'>Search</button>
    </div>
  )
}
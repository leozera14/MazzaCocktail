import React from 'react';
import { connect } from 'react-redux';

function Pagination({ drinksPerPage, totalDrinks, paginate }) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item" onClick={() => paginate(number)} >
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 

export default connect()(Pagination);
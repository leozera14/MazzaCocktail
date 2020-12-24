import React from 'react';
import {useHistory} from 'react-router-dom';
import { FaCocktail } from 'react-icons/fa';
import { connect } from 'react-redux';
import './header.css';

function Header(){
  const history = useHistory();

  async function backToHome() {
    setTimeout(() =>{
      history.push('/')
    }, 300)
  }

  return (
    <nav className="header-container">
      <a onClick={() => backToHome()}>
        <FaCocktail 
        size={25}
        color='#DC143C'
        />
        <span>MazzaCocktail</span> 
      </a>
    </nav>
  )
}

export default connect()(Header);
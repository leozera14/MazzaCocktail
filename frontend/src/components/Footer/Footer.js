import React from 'react';
import { connect } from 'react-redux';
import './footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <b>&copy; Copyright</b> <br/>
      <b>All rights reserverd MazzaCocktail - 2020</b>
    </div>
  )
}

export default connect()(Footer);
import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { connect } from 'react-redux';

import DrinkItem from '../../components/DrinkItem/DrinkItem'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import './drink.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Drink({ drink }) {
  const [drinkInfo, setDrinkInfo] = useState([]);
  const [isDrinkInfoLoading, setisDrinkInfoLoading] = useState(false);

  const idDrink = drink.id || drink.idDrink;

  async function getDrinkInfo() {
    setisDrinkInfoLoading(true)
    await api.get('searchId', {
      params: {
        idDrink: idDrink,
      }
    }).then(function (response) {
      setisDrinkInfoLoading(false);
      setDrinkInfo(response.data)
    })
  }

  useEffect(() => {
    getDrinkInfo();
  }, [])

  return (
    <>
      <div className="content-drink"> 
        <Header />

        <div className="sweet-loading">
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={isDrinkInfoLoading}
          />
        </div>

        <div className="wrap-drink">
          <div className="wrap-title">
            <div>
              {drinkInfo.length > 0
              ? <h1>{drinkInfo[0].name}</h1>
              : <h1>Loading Item Name</h1>
              }
            </div>
          </div>

          {drinkInfo.length > 0
            ? <DrinkItem items={drinkInfo} />
            : <div><p>No Drink to show !</p></div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default connect(state => ({
  drink: state.drink,
}))(Drink);
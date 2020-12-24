import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { connect } from 'react-redux';
import DrinkItem from '../../components/DrinkItem/DrinkItem'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

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

  console.log(drinkInfo)

  useEffect(() => {
    getDrinkInfo();
  }, [])

  return (
    <div>
      <h1>Hello Drink</h1>

      <div>
        {drinkInfo.length > 0
          ? <DrinkItem items={drinkInfo} />
          : <div><p>No Drink to show !</p></div>
        }
      </div>

      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={isDrinkInfoLoading}
        />
      </div>
    </div>
  )
}

export default connect(state => ({
  drink: state.drink,
}))(Drink);
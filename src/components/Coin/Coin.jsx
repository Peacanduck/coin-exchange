import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.td`
    border:  1px solid #cccccc;
    width: 20vh;
    `;

export default function Coin(props) {
   
  const handleClick = (event) => {

    event.preventDefault();

    props.handleRefresh(props.tickerId);
   }
    
        return (
          <tr>
              <StyledRow>{props.name}</StyledRow>
              <StyledRow>{props.ticker}</StyledRow>
              <StyledRow>{props.price}</StyledRow>
              <StyledRow>{props.balance}</StyledRow>
              <StyledRow>
                  <form action="#" method="POST">
                  <button onClick={handleClick}>Refresh</button>
                  </form>
                  </StyledRow>
          </tr>
        );
    
}

Coin.propTypes = {
    tickerId: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

    const StyledRow = styled.td`
    padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  background-color: #ff3d00;
    `;

    const Button = styled.button`
    border: none;
    color: #fff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    background-color: #512DA8;
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
                  <Button onClick={handleClick}>Refresh</Button>
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
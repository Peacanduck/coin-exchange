import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.td`
    border:  1px solid #cccccc;
    width: 20vh;
    `;

export default class Coin extends Component {
    constructor(props) {
        super(props);   
        this.handleClick = this.handleClick.bind(this);
    }
    /*
    componentDidMount() {
        const callback = () => {
            //set state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            this.setState( oldState => {
                return {
                    price: oldState.price * randomPercentage
                };
            });
            //OR supply value
        //    this.setState({price: oldState * randomPercentage});
       
        }
        setInterval( callback, 1000);
    }
    */
   handleClick(event){

    event.preventDefault();

    this.props.handleRefresh(this.props.ticker);

    //const randomPercentage = 0.995 + Math.random() * 0.01;

 //   this.setState( oldState => {
   //     return {
          //  price: oldState.price * randomPercentage
     //   };
    //});
   }
    render() {
        return (
          <tr className="coin-row">
              <StyledRow>{this.props.name}</StyledRow>
              <StyledRow>{this.props.ticker}</StyledRow>
              <StyledRow>{this.state.price}</StyledRow>
              <StyledRow>
                  <form action="#" method="POST">
                  <button onClick={this.porps.handleRefresh}>Refresh</button>
                  </form>
                  </StyledRow>
          </tr>
        );
    }
}

Coin.propTypes = {
    name : PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
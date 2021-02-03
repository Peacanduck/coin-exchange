import React, { Component } from 'react'
import logo from '../../logo.svg';
import styled from 'styled-components';

const Logo = styled.img`
height: 9rem;
pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 10s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Header = styled.header`
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 36px;
color: white;
`; 


export default class ExchangeHeader extends Component {
    render() {
        return (
        <Header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <h1>
         Coin Exchange 
        </h1>
      </Header>
        
        )
    }
}

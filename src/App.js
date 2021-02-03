import React from 'react';
import ExchangeHeader from './components/Headers/ExchangeHeader';
import './App.css';
import AccountBalance from './components/AccountBalance/AccountBalance'
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';

const DivApp = styled.div`
text-align: center;
background-color: blue;
color: #cccccc;
`;


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [{
        
        name: 'Bitcoin',
        ticker: 'BTC',
        price:  35470.8
      }, 
      {
        name: 'Ethereum',
        ticker: 'ETH',
        price:  1453.6
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        price:  0.99
      },
      {
        name: 'Polkadot',
        ticker: 'DOT',
        price:  17.8
      },
      {
        name: 'DuckDaoDimm',
        ticker: 'DDIM',
        price:  61.4
      }


    
    ]
    }
  }
  render() {
  return (
    <DivApp className="App">
      <ExchangeHeader/>
      <AccountBalance amount={this.state.balance} />
      <CoinList coinData={this.state.coinData}/>
    </DivApp>
  );

 }
}

export default App;

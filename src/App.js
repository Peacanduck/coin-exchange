import React from 'react';
import ExchangeHeader from './components/Headers/ExchangeHeader';
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
      visible: true,
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
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleRefresh(nTicker){
     const newCoinData = this.state.coinData.map(function({ticker,name,price}){
        let newPrice = price;
        if (nTicker === ticker) {
          const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice = newPrice * randomPercentage;
        }
        return {
          ticker,
          name,
          price: newPrice
        }
     });

     this.setState({ coinData: newCoinData});
    }

    handleHide(val){
      this.setState({ visible: val});
     }
  render() {
  return (
    <DivApp className="App">
      <ExchangeHeader/>
      <AccountBalance amount={this.state.balance} showBalance={this.state.visible} handleHide={this.handleHide}/>
      <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
    </DivApp>
  );

 }
}

export default App;

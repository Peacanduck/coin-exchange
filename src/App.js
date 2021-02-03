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
  state = {
    visible: true,
    balance: 10000,
    coinData: [{
      
      name: 'Bitcoin',
      ticker: 'BTC',
      price:  35470.8,
      balance: 0.5
    }, 
    {
      name: 'Ethereum',
      ticker: 'ETH',
      price:  1453.6,
      balance: 32
    },
    {
      name: 'Tether',
      ticker: 'USDT',
      price:  0.99,
      balance: 0
    },
    {
      name: 'Polkadot',
      ticker: 'DOT',
      price:  17.8,
      balance: 100
    },
    {
      name: 'DuckDaoDimm',
      ticker: 'DDIM',
      price:  61.4,
      balance: 25
    }
   ]
  }

  handleRefresh = (nTicker) => {
     const newCoinData = this.state.coinData.map(function({values}){
        let newValue = {...values};
        if (nTicker === values.ticker) {
          const randomPercentage = 0.995 + Math.random() * 0.01;
          newValue.price *= randomPercentage;
        }
        return newValue;
     });

     this.setState({ coinData: newCoinData});
    }

    handleHide = () => {
      this.setState(function(oldState){
        return{
          ...oldState,
          visible: !oldState.visible
        }
      });
     }
  render() {
  return (
    <DivApp className="App">
      <ExchangeHeader/>
      <AccountBalance amount={this.state.balance} showBalance={this.state.visible} handleHide={this.handleHide}/>
      <CoinList visible={this.state.visible} coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
    </DivApp>
  );

 }
}

export default App;

import React from 'react';
import ExchangeHeader from './components/Headers/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance'
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';

const DivApp = styled.div`
text-align: center;
background-color: blue;
color: #cccccc;
`;

const COIN_COUNT = 10;

const formatPrice = price => Number(parseFloat(Number(price)).toFixed(4));

function insertPrice(data, key){
  
   let val = data.data.find(x => x.id === key);  
   let price = val.quotes['USD'].price;
   console.log(parseFloat(Number(price)).toFixed(4));
  return Number(parseFloat(Number(price)).toFixed(4));
  
}

class App extends React.Component {
  state = {
    visible: true,
    balance: 10000,
    coinData: [
     /* {
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
    }*/
   ]
  }
 /* Promise.all([
    axios.get('https://api.coinpaprika.com/v1/tickers'),
    axios.get('')
  ]).then((coinResponses) => {
    cosnt coins = coinResponses.map(response => `<li>${response.data.name} (${response.data.symbol}): ${response.data.quotes['USD'].price} </li>`).join('');
    Node.innerHTML = `<ol>${coins}</ol>`
  });

  componentDidMount = async () => {
   let response = await axios.get('https://api.coinpaprika.com/v1/coins');
  let coinData = response.data.slice(0,COIN_COUNT).map(function(coin){
     return {
       key: coin.id,
       name: coin.name,
       ticker: coin.symbol,
       balance: 0,
       price: 0,
    };
  });
  //retrieve prices
  this.setState({coinData});  
  }
*/
componentDidMount = async () => {
  let coinResponses = await Promise.all([
    axios.get('https://api.coinpaprika.com/v1/coins'),
    axios.get('https://api.coinpaprika.com/v1/tickers')
    
  ]);
 let coinData = coinResponses[0].data.slice(0,COIN_COUNT).map(function(coin){
    return {
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: insertPrice(coinResponses[1],coin.id)   
   };
 });
 
 console.log(coinData);
 this.setState({coinData});  
 }
   
  handleRefresh = async (nKey) => {
    let priceOb = await axios.get('https://api.coinpaprika.com/v1/tickers/'+nKey);
    let newPrice = Number(parseFloat(Number(priceOb.data.quotes['USD'].price).toFixed(4)));
     const newCoinData = this.state.coinData.map(function(values){
        let newValue = {...values};
        console.log(values);
        console.log(newValue);
        if (nKey === values.key) {
          newValue.price = newPrice;
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

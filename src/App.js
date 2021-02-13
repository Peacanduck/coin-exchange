import React from 'react';
import ExchangeHeader from './components/Headers/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance'
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Web3 from 'web3';


const DivApp = styled.div`
text-align: center;
background-color: blue;
color: #cccccc;
`;

const COIN_COUNT = 30;

const formatPrice = price => Number(parseFloat(Number(price)).toFixed(4));

function insertPrice(data, key){
  
   let val = data.data.find(x => x.id === key);  
   let price = val.quotes['USD'].price;
   console.log(parseFloat(Number(price)).toFixed(4));
  return Number(parseFloat(Number(price)).toFixed(4));
  
}

function App(props) {
  let web3;
  const [balance, setBalance] = useState(10000);
  const [visible, setVisible] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(function(){
    if(coinData.length === 0) {
//mount

componentDidMount();
    }
    
  });

  window.ethereum.on('accountsChanged', function (accounts){
    setAccounts(accounts);
    console.log("here");
console.log(accounts);
  });

  async function ConnectMetaMask(){
    if (window.ethereum) {
     web3 = new Web3(window.ethereum);
      try { 
         window.ethereum.enable().then(async function() {
             // User has allowed account access to DApp...
             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
             
             setAccounts(accounts);
             console.log("there");
             console.log(accounts);
         });
      } catch(e) {
         // User has denied account access to DApp...
      }
   }
   // Legacy DApp Browsers
   else if (window.web3) {
       web3 = new Web3(window.web3.currentProvider);
   }
   // Non-DApp Browsers
   else {
       alert('You have to install MetaMask !');
   }
    
  }

const componentDidMount = async () => {
  
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
 
 setCoinData(coinData);
 
 }
   
 const handleRefresh = async (nKey) => {
    let priceOb = await axios.get('https://api.coinpaprika.com/v1/tickers/'+nKey);
    let newPrice = Number(parseFloat(Number(priceOb.data.quotes['USD'].price).toFixed(4)));
     const newCoinData = coinData.map(function(values){
        let newValue = {...values};
        console.log(values);
        console.log(newValue);
        if (nKey === values.key) {
          newValue.price = newPrice;
        }
       
        return newValue;
     });
     setCoinData(newCoinData);
    }

    const handleHide = () => {
      setVisible(oldValue => !oldValue)
     }
  
  return (
    <DivApp className="App">
      <ExchangeHeader/>
      <AccountBalance amount={balance} account={accounts[0] || "no account selected"} showBalance={visible} handleHide={handleHide} enableEth={ConnectMetaMask}/>
      <CoinList visible={visible} coinData={coinData} handleRefresh={handleRefresh} />
    </DivApp>
  );

 
}

export default App;

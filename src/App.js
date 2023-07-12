import React from 'react';
import ExchangeHeader from './components/Headers/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance'
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Web3 from 'web3';
import MiniDrawer from './components/Menu/Menu';
import detectEthereumProvider from '@metamask/detect-provider';




const DivApp = styled.div`
text-align: center;
background-color: blue;
color: #cccccc;
`;

const COIN_COUNT = 30;

// This returns the provider, or null if it wasn't detected.
const formatPrice = price => Number(parseFloat(Number(price)).toFixed(4));

function insertPrice(data, key){
  
   let val = data.data.find(x => x.id === key);  
   let price = val.quotes['USD'].price;
   
  return Number(parseFloat(Number(price)).toFixed(4));
  
}

function App(props) {
  let web3 = new Web3(window.web3.currentProvider);;
  const [balance, setBalance] = useState(0);
  const [visible, setVisible] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(function(){
    if(coinData.length === 0) {
//mount

componentDidMount();
    }
    
  });

  window.ethereum.on('accountsChanged',async function (accounts){
    setAccounts(accounts);
    setBalance( await balanceCheck(accounts[0]));
    console.log(await balanceCheck(accounts[0]));
console.log(accounts);
  });

  async function ConnectMetaMask(){
    const provider = await detectEthereumProvider();
    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      startApp(provider); // initialize your app
    } else {
      console.log('Please install MetaMask!');
    }
   // Legacy DApp Browsers
   if (window.web3) {
       web3 = new Web3(window.web3.currentProvider);
   }
   // Non-DApp Browsers
   else {
       alert('You have to install MetaMask !');
   }
    
  }

  function startApp(provider) {
    try { 
      // If the provider returned by detectEthereumProvider isn't the same as
  // window.ethereum, something is overwriting it – perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
      window.ethereum.enable().then(async function() {
          // User has allowed account access to DApp...
          // Request account access if needed
      let tmpacc = await provider.send('eth_requestAccounts');
      let bal = await balanceCheck(tmpacc.result[0]);
 // Accounts now exposed, use them
// ethereum.send('eth_sendTransaction', { from: accounts[0], /* ... */ })
          
          setAccounts(tmpacc.result);
          console.log(tmpacc.result[0]);
          console.log(bal);
      });
   } catch(e) {
      // User has denied account access to DApp...
   }
  }

  const balanceCheck = async (acc) => {
    let bal = await web3.eth.getBalance(acc, function(err, result) {
      if (err) {
        console.log(err)
      } else {
        let val = web3.utils.fromWei(result, "ether") ;
        setBalance(val);
        console.log(val+ " ETH");
         
      }
  });
  return bal;
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
      <MiniDrawer header={<ExchangeHeader/>} 
                  body={<AccountBalance amount={balance} account={accounts[0] || "no account selected"} showBalance={visible} handleHide={handleHide} enableEth={ConnectMetaMask}/>}
                  footer={<CoinList visible={visible} coinData={coinData} handleRefresh={handleRefresh} />} />
      
      
    </DivApp>
  );

 
}

export default App;

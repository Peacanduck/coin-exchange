import React from 'react';

import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance'


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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Coin Exchange 
        </h1>
      </header>

      
      <AccountBalance amount={this.state.balance} />
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {
        this.state.coinData.map( value => 
        <Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price}/>
          )
        }
        </tbody>
      </table>
    </div>
  );

 }
}

export default App;

import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
margin: 5px auto 50px auto;
display: inline-block;
font-size: medium;
`;

export default function CoinList(props) {
    
        return (          
        <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        
        props.coinData.map( ({key,name, ticker, price, balance}) => 
        <Coin key={key} 
              handleRefresh={props.handleRefresh}
              name={name} 
              ticker={ticker} 
              price={price}
              balance ={props.visible ? balance : "*"} 
              tickerId = {key}/>
          )
          
        }
        </tbody>
      </Table>
            
        )
}

import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Table = styled.table`
margin: 5px auto 50px auto;
  table-layout: auto;
  font-size: medium;
  display: inline-block;
 
`;
const Thead = styled.thead`
 background-color: rgba(255,255,255,0.3);
`;
const Th = styled.th`
padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`;

const Tbody = styled.tbody`
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);

`;
const paperStyle = {
  display: 'block',
  backgroundColor: '#212121',
  padding: '3px',
};

export default function CoinList(props) {
    
        return (    
               
        <Table>
          <Paper elevation={3} style={paperStyle}>
        <Thead>
          <tr>
            <Th>Name</Th>
            <Th>Ticker</Th>
            <Th>Price</Th>
            <Th>Balance</Th>
            <Th>Actions</Th>
          </tr>
        </Thead>
        <Tbody>
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
        </Tbody>
        </Paper> 
      </Table>
      
            
        )
}

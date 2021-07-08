import React from 'react'
import Coin from '../Coin/Coin';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CoinList(props) {
    
  const classes = useStyles();

        return (    
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ticker</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
      
      </TableContainer>
            
        );
}

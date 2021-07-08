import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function Coin(props) {
   
  const handleClick = (event) => {

    event.preventDefault();

    props.handleRefresh(props.tickerId);
   }
    
        return (
          <TableRow>
              <TableCell >{props.name}</TableCell>
              <TableCell align="right">{props.ticker}</TableCell>
              <TableCell align="right">{props.price}</TableCell>
              <TableCell align="right">{props.balance}</TableCell>
              <TableCell align="right">
                  <form action="#" method="POST">
                  <Button onClick={handleClick}>Refresh</Button>
                  </form>
                  </TableCell>
          </TableRow>
        );
    
}

Coin.propTypes = {
    tickerId: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
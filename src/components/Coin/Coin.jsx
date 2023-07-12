import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Coin(props) {
   
  const handleClick = (event) => {

    event.preventDefault();

    props.handleRefresh(props.tickerId);
   }
    
        return (
          <StyledTableRow>
              <StyledTableCell >{props.name}</StyledTableCell>
              <StyledTableCell align="right">{props.ticker}</StyledTableCell>
              <StyledTableCell align="right">{props.price}</StyledTableCell>
              <StyledTableCell align="right">{props.balance}</StyledTableCell>
              <StyledTableCell align="right">
                  <form action="#" method="POST">
                  <Button color="default" onClick={handleClick}>Refresh</Button>
                  </form>
                  </StyledTableCell>
          </StyledTableRow>
        );
    
}

Coin.propTypes = {
    tickerId: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
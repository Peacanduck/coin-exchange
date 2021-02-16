import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const Section = styled.section`
     font-size:2rem;
     text-align: left;
     padding: 1.5rem 0 1.5rem 5rem;
        
`;
const Button = styled.button`
    border: none;
    color: #fff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    background-color: #512DA8;
    margin: 3px
    `;

const cardStyle = {
margin: '2px 2px',
minWidth: 200,
display:'inline-block',
color: '#fff',
backgroundColor: '#212121',
padding: '4px',

};

export default function AccountBalance(props){
    
    
        let show = props.showBalance;
        const buttonText = show ? 'Hide Balance' : 'Show Balance';
        let content = null;
        if(show){               
                content =<> Balance: ${props.amount}
                            <br/>
                            Account: {props.account} </>
        } else {
            content = <> * </> ;        }
        return (
            <Section>
             <Card style={cardStyle}>
             {content}
             <br/>
             <Button onClick={props.handleHide}>{buttonText}</Button> 
             <Button onClick={props.enableEth}>Connect MetaMask</Button>
             </Card>
            </Section>
        )
    
    
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
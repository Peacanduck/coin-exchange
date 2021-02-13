import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
     font-size:2rem;
     text-align: left;
     padding: 1.5rem 0 1.5rem 5rem;
        
`;

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
             {content}
             <button onClick={props.handleHide}>{buttonText}</button>
             <button onClick={props.enableEth}>Connect MetaMask</button>
            </Section>
        )
    
    
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
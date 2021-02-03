import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
     font-size:2rem;
     text-align: left;
     padding: 1.5rem 0 1.5rem 5rem;
        
`;
export default class AccountBalance extends Component {
    constructor(props) {
        super(props);   
        this.handleHideClick = this.handleHideClick.bind(this);
    }

    

    handleHideClick(event){

        event.preventDefault();
    
        this.props.handleHide(!this.props.showBalance);
     }

    render() {
        let show = this.props.showBalance;
        const buttonText = show ? 'Hide Balance' : 'Show Balance';
        let content = null;
        if(show){               
                content =<> Balance: ${this.props.amount} </>
        } else {
            content = <> * </> ;        }
        return (
            <Section>
             {content}
             <button onClick={this.handleHideClick}>{buttonText}</button>
            </Section>
        )
    
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
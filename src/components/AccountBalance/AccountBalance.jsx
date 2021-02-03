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
        this.handleClickOff = this.handleClickOff.bind(this);
        this.handleClickOn = this.handleClickOn.bind(this);
    }

    handleClickOff(event){

        event.preventDefault();
    
        this.props.handleHide(false);
    }

    handleClickOn(event){

        event.preventDefault();
    
        this.props.handleHide(true);
     }

    render() {
        const show = this.props.showBalance;
        const buttonText = show ? 'Hide Balance' : 'Show Balance';
        if(show){
            return (
                <Section>
                 Balance: ${this.props.amount}  
                 <button onClick={this.handleClickOff}>{buttonText}</button>
                </Section>
            )
        }
        if(!show){
        return (
            <Section>
             * 
             <button onClick={this.handleClickOn}>{buttonText}</button>
            </Section>
        )
    }
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
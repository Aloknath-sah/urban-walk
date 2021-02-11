import React from "react";
import { AppContext } from "../../Context/AppContextProvider";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 28px;
        font-weight: bold;
    }
    div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: bold;
    }

    button{
        padding: 10px;
        background-color: green;
        color: white;
        margin: auto;
        font-size: 25px;
        cursor: pointer;
        width: 300px;
    }
`;

class TotalBlock extends React.Component {
    constructor(props){
        super(props)
        this.state={
            flag: false
        }
    }

    checkout = ()=> {
        this.setState({
            flag: true
        })
    }
    render(){
        const {getTotal} = this.context
        const {flag} = this.state
        return !flag? (
            <Wrapper>
                <div>Total</div>
                <div>{getTotal()}</div>
                <button onClick={this.checkout} >Checkout</button>
            </Wrapper>
        ):(
            <div>
                <Redirect to="/checkout"/>
            </div>
        )
    }
    
};

TotalBlock.contextType = AppContext
export { TotalBlock };

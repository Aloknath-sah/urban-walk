import React, { PureComponent } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/AppContextProvider";
import {Link} from 'react-router-dom'

const Card = styled.div`
    text-align: center;
    display: grid;
    padding: 15px;
    height: 500px;
    button {
        border: 0px;
        background: #333333;
        color: whitesmoke;
        padding: 10px;
        cursor: pointer;
        
    }
    * {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

export class ProductItem extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render() {
        const { id, name,img, category, unit_price } = this.props;

        return (
        <Card>
            <h2>{name}</h2>
            <div><img src={img} alt="product" width="300px" /> </div>
            <h4>{category}</h4>
            <h3>Rs. {unit_price}</h3>
            <button key={id} >
            <Link style={{color:"white", textDecoration:"none", fontSize:"20px"}} to={`/products/${id}`} > View </Link>
            </button>
            
        </Card>
        );
    }
}

ProductItem.contextType = AppContext;


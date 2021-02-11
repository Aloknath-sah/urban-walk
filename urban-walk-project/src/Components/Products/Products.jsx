import React, { Component } from "react";
import { AppContext } from "../../Context/AppContextProvider";
import { ProductItem } from "./ProductItem";
import styled from "styled-components";

const Container = styled.div`
    padding: 25px;
    margin-top: 100px;
`;
const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    button{
        margin: auto;
    }
`;

export class Products extends Component {
    render() {
        const { getAllProducts, getSelectedCategory } = this.context;
        const products = getAllProducts();
        console.log(products)
        const selectedCategory = Number(getSelectedCategory());
        return (
        <Container>
            <ProductsWrapper>
            {products
                .filter((prod) => prod.category_id === selectedCategory)
                .map((prod) => (
                <ProductItem key={prod.id} {...prod} />
                ))}
            </ProductsWrapper>
        </Container>
        );
    }
}

Products.contextType = AppContext;

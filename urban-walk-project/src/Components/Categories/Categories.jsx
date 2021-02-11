import React, { Component } from "react";
import { AppContext } from "../../Context/AppContextProvider";
import { CategoriesItem } from "./CategoriesItem";
import styled from "styled-components";

const Container = styled.div`
    padding: 25px;
    margin-top: 60px;
    
`;

const CategoriesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    
`;

export class Categories extends Component {
    render() {
        const { getAllCategories, c_name } = this.context;
        const categories = getAllCategories();
        console.log(categories)
        
        return (
        <Container>
            <h2>{c_name} </h2>
            <CategoriesWrapper>
            
            {categories?.map((cat) => (
                <CategoriesItem key={cat.id} {...cat} />
            ))}
            </CategoriesWrapper>
        </Container>
        );
    }
}

Categories.contextType = AppContext;

import React from 'react';
import { Categories } from '../../Categories/Categories';
import styled from 'styled-components'
import { Products } from '../../Products/Products'

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    
`;

const Women = () => {
    return (
        <Main>
            <Categories/>

            <Products/>
        </Main>
    );
}

export {Women}

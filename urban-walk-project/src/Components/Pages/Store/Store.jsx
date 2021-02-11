import React, { Component } from 'react';
import styled from 'styled-components'

const Stores = styled.div`
    display: flex;
    justify-content: center;
`

export class Store extends Component {
    render() {
        return (
        <div style={{marginTop:"100px"}} >
            <Stores>
                <div>
                <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_500/production/pageSectionCard/en-US/images/dPqwQYXFIV6B3LEQnaD44/1" width="400px" />
                </div>
                <div style={{width:"500px", padding:"20px"}} >
                <h1>Bangalore</h1>
                <p>
                Step into an entirely unexpected shoe-buying experience at our location in kormangala.
                </p>
                <h3>Location</h3>
                <p>57 Hotaling Place<br/>kormangala, Bangalore, India</p>
                </div>
                
            </Stores>
        </div>
        );
    }
}

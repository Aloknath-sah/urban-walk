import React, { Component } from 'react';
import styled from 'styled-components'

const Material = styled.div`
    display: flex;
    justify-content: center;
`

export class Materials extends Component {
    render() {
        return (
        <div style={{marginTop:"100px"}} >
            <Material>
                <div>
                <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/6sBsRDjiTRZBcthlcFTZqw/1" width="400px" />
                </div>
                <div style={{width:"500px"}} >
                <h1>Mother Nature is our muse. Building on her handiwork, we’re finding new uses for materials that exist right in front of us. Like wool from merino sheep, who have the best hair in nature.</h1>
                <p>
                But even great locks need a trim from time to time. With fibers that are 20% the diameter of human hair, our superfine merino wool is breathable, temperature-regulating, and moisture-wicking, all without that irritating scratchiness.
                </p>
                </div>
                
            </Material>
        </div>
        );
    }
}

import React, { Component } from 'react';
import styled from 'styled-components';

const Styledh1 = styled.div`
    color: yellow;
    font-size: 30rem;
`

class HeaderTest extends Component {
    render() {
        return (
            <div>
                <Styledh1> hello bobby </Styledh1>
            </div>
        );
    }
}

export default {
    component: HeaderTest
};
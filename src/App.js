import React, { useEffect } from 'react';

import devices from './media-query';
import WebFont from 'webfontloader';

import styled from 'styled-components';

export default function App() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: [ 'Inter', 'Spectral', 'Monoton' ]
            } 
        });
        }, []);
    return (
    <>
        <Styled>
            oh the inviscid pixels...
        </Styled>

    </>
    )
}

const Styled = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Spectral';
    font-size: 4em;
    user-select: none;

    
    @media ${devices.mobileXS} {
        font-size: 1.25em;
    }

    @media ${devices.mobileS} {
        font-size: 1.25em;
    }

    @media ${devices.mobileM} {
        font-size: 1.75em;
    }

    @media ${devices.mobileL} {
        font-size: 1.5em;
    }

    @media ${devices.tablet} {
        font-size: 3em;
    }

    @media ${devices.laptop} {
        font-size: 5em;
    }

    @media ${devices.laptopL} {
        font-size: 8em;
    }

    @media ${devices.desktop} {
        font-size: 12em;
    }


 
`
import React from 'react'
import styled from 'styled-components';
import About from '../components/About.jsx';
import {Education} from '../components/Education';
import {Estudios} from '../components/Estudios';
import {Experiencia} from '../components/Experiencia';
import { Certificaciones } from '../components/Certificaciones.jsx';
import { Habilidades } from '../components/Habilidades.jsx';

const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
      
    }
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center; 
    }
`;
const Ordenar = styled.div`
{
    display: block;
    justify-content: center;
    align-items: center;
}
`;
const Aboutme = styled.div`
{
    display: block;
    justify-content: center;
    align-items: center;
    padding: 1em;
}
`;

export const App = () => {
    return (
        <GlobalStyle>
            <Aboutme>
                <About/>
                <Education/>
            </Aboutme>    
            <Ordenar>
                <Estudios/>
                <Experiencia/>
                <Certificaciones/>
                <Habilidades/>
            </Ordenar>
        </GlobalStyle>
    )
}
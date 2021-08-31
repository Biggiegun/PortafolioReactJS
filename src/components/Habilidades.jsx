import React from 'react'
import styled from 'styled-components';
import {Titulo,Negro} from '../styled/AboutStyled'

const Padre = styled.div`
{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: no-wrap;
}
`;

const Contenedor = styled.div`
{    
 border: 1px solid red;
 padding: 1em;
}
`;

export const Habilidades = () => {
    return (
        <Contenedor>
        <Titulo>Habilidades</Titulo>
        <Padre>
           <Negro>HTML</Negro> 
           <Negro>CSS</Negro> 
           <Negro>JS</Negro> 
           <Negro>ReactJs</Negro> 
        </Padre>
        </Contenedor>
    )
}

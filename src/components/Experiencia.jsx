import React from 'react'
import styled from 'styled-components';
import {Titulo,Negro} from '../styled/AboutStyled'


const Contenedor = styled.div`
{    
 border: 1px solid purple;
 padding: 1em;
}
`;
export const Experiencia = () => {
    return (
        <Contenedor>
            <Titulo>Experiencia</Titulo>
            <Negro>Aprendiz FrontEnd</Negro>
            <p>Campamento Web Academia Geek</p>
        </Contenedor>
    )
}

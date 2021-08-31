import React from 'react'
import styled from 'styled-components';
import {Titulo,Negro} from '../styled/AboutStyled'

const Contenedor = styled.div`
{    
 border: 1px solid yellow;
 padding: 1em;
}
`;

export const Certificaciones = () => {
    return (
        <Contenedor>
           <Titulo>Certificaciones</Titulo> 
           <Negro>Nivel C1 - Inglés (Academia Blendex)</Negro>
        </Contenedor>
    )
}

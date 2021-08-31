import React from 'react'
import {Titulo,Negro} from '../styled/AboutStyled'
import styled from 'styled-components'

const Contenedor = styled.div`
{    
 border: 1px solid orange;
 padding: 1em;
}
`;

export const Estudios = () => {
    return (
        <Contenedor>
           <Titulo>Mis Estudios</Titulo>
           <Negro>Servicio Nacional de Aprendizaje - SENA</Negro> <p>Tecnólogo en Sistemas de Información</p>
           <Negro>Universidad de Antioquia</Negro> <p>Ingeniero Químico</p>
        </Contenedor>
    )
}

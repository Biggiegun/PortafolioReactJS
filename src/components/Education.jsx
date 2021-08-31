import React from 'react'

import {H2Styled} from '../styled/H2Styled';
import {Container} from '../styled/EducationContainer';

export const Education = () => {
    return (
        <div>
        <H2Styled name="Institución Universitaria"/>
        <Container>
            <div className="Education-item">
                <h1>Universidad de Antioquia - <span>2016</span>
                <p>Ingeniero Químico</p>
                </h1>
            </div>
        </Container>  
    </div>
    )
}
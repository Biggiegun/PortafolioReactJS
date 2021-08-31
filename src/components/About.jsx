import React from 'react';

import {AboutS,Avatar,Img,Name,H2,Profession,Location} from  '../styled/AboutStyled'
import { Education } from './Education';

const About = () => {
    return(
        <AboutS>
            <div className="About-container">
                <Avatar>
                    <figure>
                        <Img src="/" alt="Mi Avatar"/>
                    </figure>
                </Avatar>
                <Name>
                    <H2>David Herrera</H2>
                </Name>
                <Profession>
                    <p>Aprendiz en Academia Geek</p>
                </Profession>
                <Location>
                   <p>Medellín, Colombia</p>
                </Location>
                <div className="About-social">
                     Redes sociales
                </div>
            </div>
          
        </AboutS>
       
    )

}

export default About;

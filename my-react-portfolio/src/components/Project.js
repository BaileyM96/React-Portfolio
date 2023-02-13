import React from 'react';
import styled from 'styled-components';
import Burnt from '../Assets/Burnt calculator.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProjectHeader = styled.h2`
display: flex;
justify-content: center;
font-size: 30px;
font-weight: bold;
color: #d97706;
margin-top: 3%;
`;

const Title = styled.h3`
display: flex;
justify-content: center;
font-size: large;
color: black;
padding-top: 5%;
font-weight: bold;
`;
const ImageContainer = styled.div`
display: flex;
justify-content: center;
`;

const Image = styled.img`
padding-top: 5%;
width: 50%;
`;

const A = styled.a`
display: flex;
justify-content: center;
`;


const ProjectTitle = (props) => {
    return (
        <Title>{props.name}</Title>
    )
}

export default function Project() {
    return (
        <section>
            <ProjectHeader id='Portfolio'>Portfolio</ProjectHeader>
            <ProjectTitle name='Burnt' />
            <ImageContainer>
                <Image  
                src={Burnt}
                />
            </ImageContainer>
            <A href='https://czaldivar419.github.io/BURNT/'>
                    <p>
                        View Deployment
                    </p>
                </A>
            <ProjectTitle name='Skaro' />
         
        </section>
    )
} 
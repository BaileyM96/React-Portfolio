import React from 'react';
import styled from 'styled-components';
import Burnt from '../Assets/Burnt calculator.jpg'

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
font-weight: bold;
`;
const ImageContainer = styled.div`
width: 45%;
display: flex;
align-items: center;
padding-left: 5%;
`;


const ProjectTitle = (props) => {
    return (
        <Title>{props.name}</Title>
    )
}

export default function Project() {
    return (
        <section>
            <ProjectHeader>Portfolio</ProjectHeader>
            <ProjectTitle name='Burnt' />
            <ImageContainer>
                <img  
                src={Burnt}
                />
            </ImageContainer>
            <ProjectTitle name='Skaro' />
         
        </section>
    )
} 
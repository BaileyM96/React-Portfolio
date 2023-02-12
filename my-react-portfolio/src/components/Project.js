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
font-size: 20px;
color: black;
`;

const ProjectTitle = () => {
    return (
        <Title>Burnt</Title>
    )
}

export default function Project() {
    return (
        <section>
            <ProjectHeader>Portfolio</ProjectHeader>
            <ProjectTitle />
        </section>
    )
} 
import React from 'react';
import styled from 'styled-components';


const ProjectHeader = styled.h2`
display: flex;
justify-content: center;
font-size: 30px;
font-weight: bold;
color: #d97706;
margin-top: 3%;
`;

export default function Project() {
    return (
        <section>
            <ProjectHeader>Portfolio</ProjectHeader>
        </section>
    )
} 
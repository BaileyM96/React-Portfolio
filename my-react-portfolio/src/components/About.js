import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
display: flex;
justify-content: center;
font-size: 30px;
font-weight: bold;
color: #d97706;
`;

const AboutHeader = styled.h2`

`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`;

const BodyText = styled.p`
color: black;
font-size: 20px;
padding: 10px;
`

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>About</AboutHeader>
            <TextContainer>
                <BodyText>Hello</BodyText>
            </TextContainer>
        </AboutContainer>
    )
}




export default About;


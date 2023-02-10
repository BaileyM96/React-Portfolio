import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;`

const AboutHeader = styled.header`
font-size: 30px;
color: #d97706;
font-weight: bold;
padding-top: 45px;`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
border-radius: 10px;`

const CardBody = styled.div`
padding: 20px;`

const AboutText = styled.div`
align-items: center;
font-size: 18px;
color: black;`

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>
                About
            </AboutHeader>
            <CardContainer>
                <CardBody>
                    <AboutText>
                        Hello My name
                    </AboutText>
                </CardBody>
            </CardContainer>
        </AboutContainer>
    );
};

export default About;


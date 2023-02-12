import React from 'react';
import styled from 'styled-components';
import BaileyImg from '../Assets/Bailey Portrait.jpg';





const AboutHeader = styled.h2`
display: flex;
justify-content: center;
font-size: 30px;
font-weight: bold;
color: #d97706;
margin-top: 3%;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 10%;
padding-right: 20%;
width: 50%;
`;

const BodyText = styled.p`
color: black;
font-size: 20px;
padding: 10px;
text-align: center;
margin-left: 10%;
`;

const Section = styled.section`
display: flex;
justify-content: end;
`;

const ImageContainer = styled.div`
width: 25%;
`;

const ImageDiv = styled.div`
 display: flex;
 margin-top: 42%;
 margin-right: 12%;
 align-items: center;
`;


const AboutText = () => {
    return (
        <TextContainer>
            <BodyText>   
            Hello, my name is Bailey Mejia and I am a full-stack developer with a passion for creating visually stunning and user-friendly web applications. My expertise lies in utilizing a wide range of technologies such as HTML5, CSS3, JavaScript, node.js, express.js, Bootstrap, Tailwind CSS, SQL, and JSON to build and design the front-end of web applications. My proficiency in these technologies has enabled me to lead and contribute to the development of multiple projects such as Skaro and Burnt, where I played a pivotal role in creating responsive web designs.

            I am a proactive and adaptable individual with strong communication and leadership skills. I am also well-versed in using various tools such as React, Git, and GitHub, which have enabled me to collaborate effectively with cross-functional teams.

            In my free time, I enjoy photography, PC gaming, coffee, listening to music, and traveling. I am always looking for new challenges and opportunities to further develop my skills and push the boundaries of what is possible with web development.
            </BodyText>
        </TextContainer>
    )
}


export default function About() {
    return (
        <Section>
           <ImageContainer>
            <ImageDiv>
                <img
                src={BaileyImg}
                />
            </ImageDiv>
           </ImageContainer>
            <AboutHeader>About</AboutHeader>
            <AboutText />
        </Section>
    )
} 


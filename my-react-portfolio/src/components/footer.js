import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
background-color: #d97706;
color: white;
height: 40px;
`;

const FooterText = styled.p`
margin: 0;
`;

const FontContainer = styled.div`
display: flex;
justify-content: start;
padding: 4%;
`;


const Footer = () => {
    return (
        <FooterContainer>
            <FontContainer>
                <a href='https://github.com/BaileyM96'>
                    <FontAwesomeIcon  icon={faGithub} size="2xl" />
                </a>
                <a href='https://www.linkedin.com/in/bailey-mejia-30b055222/'>
                    <FontAwesomeIcon  icon={faLinkedin} size="2xl" />
                </a>
            </FontContainer>
            <FooterText>
                Copyright &copy; 2023: Bailey Mejia
            </FooterText>
        </FooterContainer>
    )
}

export default Footer;
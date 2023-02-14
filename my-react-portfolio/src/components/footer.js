import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
            <FontAwesomeIcon icon="fa-brands fa-github" />
                Copyright &copy; 2023: Bailey Mejia
            </FooterText>
        </FooterContainer>
    )
}

export default Footer;
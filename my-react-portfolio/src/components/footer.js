import React from 'react';
import styled from 'styled-components';

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
                Copyright &copy; 2023: Bailey Mejia
            </FooterText>
        </FooterContainer>
    )
}

export default Footer;
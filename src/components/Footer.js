import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
        <span>Copyright @ 2022</span>
        <span>FIEROX</span>
        <span>Confidentialite</span>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: beige;
`;
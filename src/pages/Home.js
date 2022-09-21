import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Catalogue from '../components/Catalogue';

function Home() {
  return (
    <Container>
        <Banner />
        <Catalogue titre="Categories" />
    </Container>
  )
}

export default Home; 

const Container = styled.div`
    margin-top: 60px;
    width: 100%;
    min-height: 200px;
`;
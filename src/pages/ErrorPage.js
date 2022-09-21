import React from 'react';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <Container>
        Sorry The Page You are trying to get Doesn't Exist !!
    </Container>
  )
}

export default ErrorPage;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
`;
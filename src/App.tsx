import React from 'react';
import { Card } from './components/Card.styled';
import { styled } from 'styled-components';

function App() {
  return (
    <StyledWrapper>
      <Card/>
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`
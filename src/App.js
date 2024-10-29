import React, { useState } from 'react';
import styled from 'styled-components';
import FrameworkWheel from './components/FrameworkWheel';
import DetailPanel from './components/DetailPanel';

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

const AppHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const MainTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  color: #7f8c8d;
  font-size: 1.5rem;
  font-weight: normal;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WheelWrapper = styled.div`
  flex-shrink: 0;
  width: 600px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-width: 320px;
  }
`;

const PanelWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 600px;
  }
`;

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <AppContainer>
      <AppHeader>
        <MainTitle>T.R.A.C.E</MainTitle>
        <SubTitle>The Intelligence Framework</SubTitle>
      </AppHeader>
      <ContentWrapper>
        <WheelWrapper>
          <FrameworkWheel onComponentSelect={setSelectedComponent} />
        </WheelWrapper>
        <PanelWrapper>
          <DetailPanel selectedComponent={selectedComponent} />
        </PanelWrapper>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;

import React, { useState } from 'react';
import styled from 'styled-components';
import FrameworkWheel from './components/FrameworkWheel';
import DetailPanel from './components/DetailPanel';

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 10px;

  span {
    color: ${props => props.color || '#2c3e50'}; /* Dynamic color */
  }
`;

const Subtitle = styled.h2`
  color: #7f8c8d;
  font-size: 1.5em;
  margin: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
`;

const WheelSection = styled.div`
  flex: 1;
  min-width: 600px;
`;

const DetailSection = styled.div`
  flex: 1;
  position: sticky;
  top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  min-height: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const getColorForComponent = (component) => {
    switch (component?.id) {
      case 'teams':
      case 'resources':
      case 'execution':
      case 'actions':
      case 'compliance':
        return '#50817C';
      default:
        return '#2c3e50';
    }
  };

  const getColoredTitle = () => {
    const color = getColorForComponent(selectedComponent);
    return (
      <>
        <span style={{ color: selectedComponent?.id === 'teams' ? color : '#2c3e50' }}>T</span>.
        <span style={{ color: selectedComponent?.id === 'resources' ? color : '#2c3e50' }}>R</span>.
        <span style={{ color: selectedComponent?.id === 'actions' ? color : '#2c3e50' }}>A</span>.
        <span style={{ color: selectedComponent?.id === 'compliance' ? color : '#2c3e50' }}>C</span>.
        <span style={{ color: selectedComponent?.id === 'execution' ? color : '#2c3e50' }}>E</span>
      </>
    );
  };

  return (
    <AppContainer>
      <Header>
        <Title>{getColoredTitle()}</Title>
        <Subtitle>The Intelligence Framework</Subtitle>
      </Header>
      <ContentContainer>
        <WheelSection>
          <FrameworkWheel onComponentSelect={setSelectedComponent} />
        </WheelSection>
        <DetailSection>
          <DetailPanel selectedComponent={selectedComponent} />
        </DetailSection>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

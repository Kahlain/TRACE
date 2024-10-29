import React, { useState } from 'react';
import styled from 'styled-components';
import FrameworkWheel from './components/FrameworkWheel';
import DetailPanel from './components/DetailPanel';

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const LogoLink = styled.a`
  display: block;
  margin-bottom: 20px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  span {
    color: ${props => props.color || '#2c3e50'};
  }
`;

const Subtitle = styled.h2`
  color: #7f8c8d;
  font-size: 1.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex: 1;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const WheelSection = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 1200px) {
    min-width: unset;
  }
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
  width: 100%;
  max-width: 600px;

  @media (max-width: 1200px) {
    position: static;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 300px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterLink = styled.a`
  color: #50817C;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #E0A967;
  }
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
        <LogoLink href="https://inocta.io" target="_blank" rel="noopener noreferrer">
          <Logo src="/inocta-logo.png" alt="Inocta" />
        </LogoLink>
        <Title>{getColoredTitle()}</Title>
        <Subtitle>The Intelligence Framework</Subtitle>
      </Header>
      <ContentContainer>
        <WheelSection>
          <FrameworkWheel onComponentSelect={setSelectedComponent} />
        </WheelSection>
        <DetailSection>
          <DetailPanel 
            selectedComponent={selectedComponent} 
            onElementClick={setSelectedComponent}
          />
        </DetailSection>
      </ContentContainer>
      <Footer>
        <FooterLink href="https://inocta.io" target="_blank" rel="noopener noreferrer">
          Inocta.io - 2024
        </FooterLink>
      </Footer>
    </AppContainer>
  );
}

export default App;

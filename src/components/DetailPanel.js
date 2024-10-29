import React from 'react';
import styled from 'styled-components';

const PanelContainer = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F4EF;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
  text-align: left;
  max-width: 80%;
  line-height: 1.6;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;

  span {
    color: #50817C;
  }
`;

const Description = styled.p`
  color: #7f8c8d;
  margin-bottom: 20px;
`;

const KeyQuestion = styled.p`
  color: #2c3e50;
  font-weight: bold;
`;

const SectionLabel = styled.h3`
  color: #50817C;
  margin: 20px 0 10px 0;
  font-size: 16px;
`;

const IntroText = styled.div`
  p {
    color: #7f8c8d;
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  .click-instruction {
    color: #50817C;
    font-style: italic;
    margin-top: 25px;
  }
`;

function DetailPanel({ selectedComponent }) {
  if (!selectedComponent) {
    return (
      <PanelContainer>
        <Content>
          <Title>AI Experiences = T.R.A.C.E</Title>
          <IntroText>
            <p>
              The framework highlights the core components crucial for AI integration within a company, focusing on aligning human creativity, team structures, and ethical considerations, ensuring a comprehensive approach.
            </p>
            <p>
              T.R.A.C.E stands for Teams, Resources, Actions, Compliance, Execution – an intelligence framework crafted to guide businesses in developing AI-driven experiences before diving into technical or operational execution.
            </p>
            <p>
              The framework highlights the core components crucial for AI integration within a company, with a focus on aligning human creativity, team structures, and ethical considerations, ensuring a well-rounded approach.
            </p>
            <p className="click-instruction">
              Click on each element of the framework to explore more details.
            </p>
          </IntroText>
        </Content>
      </PanelContainer>
    );
  }

  return (
    <PanelContainer>
      <Content>
        <Title>{selectedComponent.title}</Title>
        <SectionLabel>Objective:</SectionLabel>
        <Description>{selectedComponent.objective}</Description>
        <SectionLabel>Goal:</SectionLabel>
        <Description>{selectedComponent.goal}</Description>
        <KeyQuestion>Key Question:</KeyQuestion>
        <Description>{selectedComponent.keyQuestion}</Description>
      </Content>
    </PanelContainer>
  );
}

export default DetailPanel;

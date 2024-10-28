import React from 'react';
import styled from 'styled-components';

const PanelContainer = styled.div`
  height: 600px; /* Match the height of the graph */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F4EF; /* Updated background color */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
  text-align: left; /* Align text to the left */
  max-width: 80%; /* Ensure text doesn't stretch too wide */
  line-height: 1.6; /* Improve readability */
`;

const Title = styled.h3`
  color: #2c3e50;
  margin-bottom: 10px;

  span {
    color: #50817C; /* Updated green color */
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

function DetailPanel({ selectedComponent }) {
  return (
    <PanelContainer>
      <Content>
        {selectedComponent ? (
          <>
            <Title>
              <span>{selectedComponent.label.charAt(0)}</span>
              {selectedComponent.label.slice(1)}
            </Title>
            <Description>{selectedComponent.description || "Description not available."}</Description>
            <KeyQuestion>Key Question: {selectedComponent.keyQuestion || "Key question not available."}</KeyQuestion>
          </>
        ) : (
          <p>Select a component to see details</p>
        )}
      </Content>
    </PanelContainer>
  );
}

export default DetailPanel;

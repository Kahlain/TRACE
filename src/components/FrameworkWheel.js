import React, { useState } from 'react';
import styled from 'styled-components';
import { sections, centerSection } from '../data/trace-data';

const WheelContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;

const WheelContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/inocta-trace-graph.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const ClickArea = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 2;

  &.top {
    top: 0;
    left: 35%;
    width: 30%;
    height: 25%;
  }

  &.right {
    top: 35%;
    right: 0;
    width: 25%;
    height: 30%;
  }

  &.bottom {
    bottom: 0;
    left: 35%;
    width: 30%;
    height: 25%;
  }

  &.left {
    top: 35%;
    left: 0;
    width: 25%;
    height: 30%;
  }

  &.center {
    top: 40%;
    left: 40%;
    width: 20%;
    height: 20%;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease;
  z-index: 4;
  white-space: nowrap;
  
  ${props => {
    switch (props.position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'center':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return '';
    }
  }}
`;

function FrameworkWheel({ onComponentSelect }) {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <WheelContainer>
      <WheelContent>
        <ClickArea 
          className="center"
          onClick={() => onComponentSelect(centerSection)}
          onMouseEnter={() => handleMouseEnter(centerSection)}
          onMouseLeave={handleMouseLeave}
        >
          <Tooltip 
            isVisible={hoveredSection === centerSection}
            position="center"
          >
            {centerSection.title}
          </Tooltip>
        </ClickArea>
        {sections.map((section) => (
          <ClickArea
            key={section.id}
            className={section.position}
            onClick={() => onComponentSelect(section)}
            onMouseEnter={() => handleMouseEnter(section)}
            onMouseLeave={handleMouseLeave}
          >
            <Tooltip 
              isVisible={hoveredSection === section}
              position={section.position}
            >
              {section.title}
            </Tooltip>
          </ClickArea>
        ))}
      </WheelContent>
    </WheelContainer>
  );
}

export default FrameworkWheel;

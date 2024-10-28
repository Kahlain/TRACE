import React from 'react';
import styled from 'styled-components';

const WheelContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
`;

const WheelContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/inocta-trace.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const InteractiveArea = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
  }

  .icon {
    margin-bottom: 8px;
    width: ${props => (props.id === 'teams' ? '48px' : '36px')};
    height: ${props => (props.id === 'teams' ? '48px' : '36px')};
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
  }

  .label {
    font-size: 14px;
    text-align: center;
    color: white;
  }

  &.top {
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.right {
    right: 70px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.bottom {
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.left {
    left: 80px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }

  .icon {
    margin-bottom: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0) sepia(1) saturate(5) hue-rotate(10deg);
    }
  }

  h3 {
    font-size: 14px;
    margin: 0;
    color: #E0A967;
  }
`;

const sections = [
  { 
    id: 'teams', 
    position: 'top',
    label: 'Teams',
    icon: '/teams.svg',
    description: 'Ensure that your teams are aligned to maximize both human creativity and AI efficiency.',
    keyQuestion: 'Is our team structure set up to fully utilize both human and AI capabilities?'
  },
  { 
    id: 'resources', 
    position: 'right',
    label: 'Resources',
    icon: '/ressources.svg',
    description: 'Organize and curate your company’s data and knowledge effectively to fuel AI’s potential.',
    keyQuestion: 'Is our knowledge structured to support AI-driven solutions and customer experiences?'
  },
  { 
    id: 'execution', 
    position: 'bottom',
    label: 'Execution',
    icon: '/execution.svg',
    description: 'Design a scalable infrastructure that aligns technology with your business goals.',
    keyQuestion: 'How well is our tech infrastructure prepared for AI-driven execution?'
  },
  { 
    id: 'actions', 
    position: 'left',
    label: 'Actions',
    icon: '/actions.svg',
    description: 'Streamline operations and processes to allow seamless collaboration between AI and human-driven initiatives.',
    keyQuestion: 'Are our processes optimized to drive AI initiatives efficiently?'
  }
];

const centerSection = {
  id: 'compliance',
  label: 'Compliance & Alignment',
  icon: '/compliance.svg',
  description: 'Implement ethical and regulatory standards into AI systems to ensure alignment with organizational values and societal expectations.',
  keyQuestion: 'Are our AI efforts aligned with ethical standards and industry regulations?'
};

function FrameworkWheel({ onComponentSelect }) {
  return (
    <WheelContainer>
      <WheelContent>
        <CenterContent onClick={() => onComponentSelect(centerSection)}>
          <div className="icon">
            <img src={centerSection.icon} alt="Compliance" />
          </div>
          <h3>{centerSection.label}</h3>
        </CenterContent>
        
        {sections.map((section) => (
          <InteractiveArea
            key={section.id}
            className={section.position}
            id={section.id}
            onClick={() => onComponentSelect(section)}
          >
            <div className="icon">
              <img src={section.icon} alt={section.label} />
            </div>
            <div className="label">{section.label}</div>
          </InteractiveArea>
        ))}
      </WheelContent>
    </WheelContainer>
  );
}

export default FrameworkWheel;

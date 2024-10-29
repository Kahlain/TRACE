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
    title: 'Teams and Agents Alignment Structure',
    icon: '/teams.svg',
    objective: 'Ensure that human teams and AI agents, including bot agents, are structured to optimize both creativity and efficiency. AI agents should work as integral team members, alongside human teams.',
    goal: 'Leverage AI in talent acquisition, development, and collaboration. Humans and AI should work seamlessly to drive innovation.',
    keyQuestion: 'Is our team structure set up to fully utilize both human and AI capabilities?'
  },
  { 
    id: 'resources', 
    position: 'right',
    label: 'Resources',
    title: 'Resources and The Corpus of Knowledge',
    icon: '/ressources.svg',
    objective: 'Organize and curate company data to maximize AI\'s potential, providing a clear understanding of team and resource structures, which drives the business direction and helps shape subsequent orchestration efforts.',
    goal: 'Fuel AI to deliver smarter and more impactful outcomes while also engaging customers more deeply.',
    keyQuestion: 'Is our knowledge structured to support AI-driven solutions and customer experiences?'
  },
  { 
    id: 'execution', 
    position: 'bottom',
    label: 'Execution',
    title: 'Execution Infrastructure and Tech Architecture',
    icon: '/execution.svg',
    objective: 'Design scalable infrastructure that supports both AI development and business goals.',
    goal: 'Efficient and adaptable execution for the smooth integration of AI solutions.',
    keyQuestion: 'How well is our tech infrastructure prepared for AI-driven execution?'
  },
  { 
    id: 'actions', 
    position: 'left',
    label: 'Actions',
    title: 'Actions and Orchestrations Planning',
    icon: '/actions.svg',
    objective: 'Streamline operational processes to facilitate collaboration between AI and human-driven initiatives, ensuring that these processes are aligned with business goals and providing clarity on their impact on the Profit & Loss (P&L) statement.',
    goal: 'Establish workflows that facilitate AI integration while keeping alignment with business goals.',
    keyQuestion: 'Are our processes optimized to drive AI initiatives efficiently?'
  }
];

const centerSection = {
  id: 'compliance',
  label: 'Compliance & Alignment',
  title: 'Compliance and Alignment',
  icon: '/compliance.svg',
  objective: 'Ensure that ethical, regulatory, Operational Guardrails and security standards are integrated into AI development, providing the company with a comprehensive understanding of the requirements before moving into execution.',
  goal: 'Compliance with industry standards safeguards trust and ensures accountability.',
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

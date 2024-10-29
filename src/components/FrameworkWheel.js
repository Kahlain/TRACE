import React from 'react';
import styled from 'styled-components';

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
  background-image: url('/inocta-trace-complete.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const ClickArea = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

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
        <ClickArea 
          className="center"
          onClick={() => onComponentSelect(centerSection)}
        />
        {sections.map((section) => (
          <ClickArea
            key={section.id}
            className={section.position}
            onClick={() => onComponentSelect(section)}
          />
        ))}
      </WheelContent>
    </WheelContainer>
  );
}

export default FrameworkWheel;

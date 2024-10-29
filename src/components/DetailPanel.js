import React from 'react';
import styled from 'styled-components';
import { sections, centerSection } from '../data/trace-data';

const PanelContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #F3F4EF;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 1200px) {
    height: auto;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const Navigation = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  flex: 1;
  padding: 15px;
  background: ${props => props.active ? '#F3F4EF' : '#ffffff'};
  border: none;
  cursor: pointer;
  color: ${props => props.active ? '#50817C' : '#7f8c8d'};
  font-size: 14px;
  transition: all 0.3s ease;
  border-top-left-radius: ${props => props.position === 'left' ? '10px' : '0'};
  border-top-right-radius: ${props => props.position === 'right' ? '10px' : '0'};
  border-bottom: 2px solid ${props => props.active ? '#50817C' : 'transparent'};

  &:hover {
    color: #50817C;
    background: ${props => props.active ? '#F3F4EF' : '#f8f9fa'};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.7;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  opacity: 1;
  transition: opacity 0.3s ease;

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Content = styled.div`
  text-align: left;
  max-width: 80%;
  line-height: 1.6;

  @media (max-width: 768px) {
    max-width: 95%;
  }
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
    color: #CE8365;
    font-style: italic;
    margin-top: 25px;
  }
`;

const MoreContent = styled.div`
  h2 {
    color: #2c3e50;
    font-size: 1.5em;
    margin: 30px 0 15px;
    
    &:first-child {
      margin-top: 0;
    }
  }

  p {
    color: #7f8c8d;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const ElementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;

  li {
    margin: 8px 0;
  }
`;

const ElementLink = styled.button`
  background: none;
  border: none;
  padding: 5px 0;
  color: #50817C;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  transition: color 0.3s ease;

  &:hover {
    color: #CE8365;
  }
`;

const ScrollTopButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #50817C;
  color: white;
  border: none;
  cursor: pointer;
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0.8)'};
  transition: all 0.3s ease;
  
  &:hover {
    background: #CE8365;
  }

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

const DownloadContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const DownloadOption = styled.a`
  display: block;
  padding: 20px;
  margin-bottom: 15px;
  background: white;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.1);
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-color: #50817C;
  }

  &:active {
    transform: translateY(0);
  }
`;

const OptionTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #50817C;
  font-size: 18px;
  font-weight: 600;
`;

const OptionDescription = styled.p`
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.5;
`;

function DetailPanel({ selectedComponent, onElementClick }) {
  const [activeTab, setActiveTab] = React.useState('intro');
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (selectedComponent) {
      setActiveTab(null);
    }
  }, [selectedComponent]);

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveTab('intro');
      } else if (e.key === 'ArrowRight') {
        setActiveTab('more');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleDownload = () => {
    fetch('/Inocta-Trace.md')
      .then(response => response.text())
      .then(content => {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Inocta-Trace.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  };

  const renderContent = () => {
    if (selectedComponent && !activeTab) {
      return (
        <Content>
          <Title>{selectedComponent.title}</Title>
          <SectionLabel>Objective:</SectionLabel>
          <Description>{selectedComponent.objective}</Description>
          <SectionLabel>Goal:</SectionLabel>
          <Description>{selectedComponent.goal}</Description>
          <KeyQuestion>Key Question:</KeyQuestion>
          <Description>{selectedComponent.keyQuestion}</Description>
        </Content>
      );
    }

    switch (activeTab) {
      case 'more':
        return (
          <Content>
            <MoreContent>
              <h2>Components of the T.R.A.C.E Framework</h2>
              <p>
                Once we define (1) Teams and Agents Structure and (2) Resources and The Corpus of Knowledge, 
                we provide a clear business direction by establishing the experience, defining the team, and 
                identifying the resources. By defining (3) Actions and orchestration planning, the company 
                gains clarity on how these initiatives will shape or impact the Profit & Loss (P&L). When 
                (4) Compliance and Alignment are defined, we gain a comprehensive understanding of the 
                requirements before proceeding with (5) Execution.
              </p>
              <h2>Conclusion</h2>
              <p>
                The equation is simple: AI Experiences = T.R.A.C.E. This framework establishes a solid 
                foundational approach for building AI-driven business experiences that align with human 
                values while promoting technological advancements. By ensuring alignment across these five 
                key areas, Inocta aims to create AI solutions that serve business objectives and enhance 
                user experiences ethically and positively.
              </p>
            </MoreContent>
          </Content>
        );
      case 'intro':
        return (
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
              <ElementsList>
                <li>
                  <ElementLink onClick={() => onElementClick(sections[0])}>
                    • Teams and Agents Structure
                  </ElementLink>
                </li>
                <li>
                  <ElementLink onClick={() => onElementClick(sections[1])}>
                    • Resources and The Corpus of Knowledge
                  </ElementLink>
                </li>
                <li>
                  <ElementLink onClick={() => onElementClick(sections[2])}>
                    • Actions and Orchestrations Planning
                  </ElementLink>
                </li>
                <li>
                  <ElementLink onClick={() => onElementClick(centerSection)}>
                    • Compliance and Alignment
                  </ElementLink>
                </li>
                <li>
                  <ElementLink onClick={() => onElementClick(sections[3])}>
                    • Execution Infrastructure and Tech Architecture
                  </ElementLink>
                </li>
              </ElementsList>
            </IntroText>
          </Content>
        );
      case 'download':
        return (
          <Content>
            <DownloadContent>
              <DownloadOption onClick={handleDownload} as="button">
                <OptionTitle>Download Markdown Version</OptionTitle>
                <OptionDescription>Get the framework documentation in markdown format</OptionDescription>
              </DownloadOption>

              <DownloadOption href="/inocta-trace.pdf" target="_blank" rel="noopener noreferrer">
                <OptionTitle>Download PDF Slide</OptionTitle>
                <OptionDescription>View the framework presentation in PDF format</OptionDescription>
              </DownloadOption>

              <DownloadOption href="https://inocta.io/book" target="_blank" rel="noopener noreferrer">
                <OptionTitle>Read Our Book</OptionTitle>
                <OptionDescription>Deep dive into T.R.A.C.E framework with our comprehensive guide</OptionDescription>
              </DownloadOption>

              <DownloadOption href="https://inocta.io" target="_blank" rel="noopener noreferrer">
                <OptionTitle>Visit Inocta.io</OptionTitle>
                <OptionDescription>Learn more about our AI solutions and services</OptionDescription>
              </DownloadOption>
            </DownloadContent>
          </Content>
        );
      default:
        return null;
    }
  };

  const handleScroll = (e) => {
    setShowScrollTop(e.target.scrollTop > 300);
  };

  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PanelContainer>
      <Navigation>
        <NavButton 
          position="left"
          active={activeTab === 'intro'} 
          onClick={() => setActiveTab('intro')}
        >
          Intro
        </NavButton>
        <NavButton 
          active={activeTab === 'more'} 
          onClick={() => setActiveTab('more')}
        >
          More
        </NavButton>
        <NavButton 
          position="right"
          active={activeTab === 'download'} 
          onClick={() => setActiveTab('download')}
        >
          Download
        </NavButton>
      </Navigation>
      <ContentWrapper 
        ref={contentRef}
        onScroll={handleScroll}
      >
        {renderContent()}
        <ScrollTopButton 
          visible={showScrollTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </ScrollTopButton>
      </ContentWrapper>
    </PanelContainer>
  );
}

export default DetailPanel;

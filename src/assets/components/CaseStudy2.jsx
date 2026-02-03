import React, { useState, useEffect } from 'react';
import './CaseStudy2.css';

// Import images
import scrbleMain from '../images/case-study/BL/BL-main.png';
import scrbleImg1 from '../images/case-study/BL/BL-img1.png';
import scrbleImg2 from '../images/case-study/BL/BL-img2.png';

// Static data - moved outside component to fix ESLint warning
const navItems = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'problem', label: 'Problem & Requirements' },
  { id: 'strategy', label: 'Strategy & UX Approach' },
  { id: 'design', label: 'Design, Build & Tech Stack' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'gallery', label: 'Gallery' },
];

const services = [
  'WebDevelopment',
  'Landing Page',
  'Professional Website',
];

const CaseStudy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="case-study">
      {/* Hero Section */}
      <div className="case-study-hero">
        <div className="case-study-hero-left">
          <h1 className="case-study-logo">R. Bhagya Lakshmi</h1>
          <p className="case-study-tagline">"Architectural Compliance Expert"</p>
        </div>
        <div className="case-study-hero-image">
          <img src={scrbleMain} alt="R. Bhagya Lakshmi Website Preview" />
        </div>
      </div>

      {/* Title Section */}
      <div className="case-study-title-section">
        <h1 className="case-study-title">R. Bhagya Lakshmi Professional Website</h1>
      </div>

      {/* Main Content Area */}
      <div className="case-study-content-wrapper">
        {/* Left Sidebar - Navigation */}
        <nav className="case-study-nav">
          <h3 className="case-study-nav-title">Project overview</h3>
          <ul className="case-study-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="case-study-main">
          {/* Project Overview */}
          <section id="overview" className="case-study-section">
            <h2>Overview</h2>
            <p>
              R. Bhagya Lakshmi is a GHMC-licensed architectural compliance consultant specializing 
              in architectural plan reviews and corrections as per Telangana building regulations.
            </p>
            <p>
              Before this project, there was no website or digital presence. All credibility relied 
              on word-of-mouth, which limited reach and made it difficult for new clients to clearly 
              understand services and expertise.
            </p>
            <p>
              The goal was to build a clear, professional, and credibility-focused website that 
              communicates authority, services, and experience without unnecessary complexity.
            </p>
          </section>

          {/* Problem & Requirements */}
          <section id="problem" className="case-study-section">
            <h2>Problem & Requirements</h2>
            <p>
              Operating without a website created multiple challenges:
            </p>
            <p>
              Limited online visibility
            </p>
            <p>
              Difficulty establishing trust with new clients
            </p>
            <p>
              Repeated manual explanations of complex regulations
            </p>
            <p>
              No centralized place for services, testimonials, or past work
            </p>
            <p>
              From a business perspective, this reduced lead quality and slowed conversions.
            </p>
            <p>
              The client needed a website that:
            </p>
            <p>
              Looked professional and authoritative
            </p>
            <p>
              Explained services in simple, non-technical language
            </p>
            <p>
              Clearly established GHMC licensing and expertise
            </p>
            <p>
              Enabled easy enquiries and contact
            </p>
            <p>
              <strong>Core focus:</strong> trust, clarity, and confidence — not flashy visuals.
            </p>

            {/* Image after Core Requirements */}
            <div className="case-study-content-image">
              <img src={scrbleImg1} alt="R. Bhagya Lakshmi Website Services" />
            </div>
          </section>

          {/* Strategy & UX Approach */}
          <section id="strategy" className="case-study-section">
            <h2>Strategy & UX Approach</h2>
            <p>
              The website was approached as a professional credibility tool, not a marketing-heavy platform.
            </p>
            <p>
              <strong>Key decisions:</strong>
            </p>
            <p>
              Structured content around services rather than visuals
            </p>
            <p>
              Simplified regulatory language for non-technical users
            </p>
            <p>
              Highlighted the value of expert guidance vs no guidance
            </p>
            <p>
              Prioritized readability, spacing, and clean layouts
            </p>
            <p>
              <strong>Navigation was intentionally kept simple:</strong><br />
              Home → Services → Projects → Contact
            </p>
            <p>
              This ensured visitors could quickly understand expertise and take action without friction.
            </p>
          </section>

          {/* Design System & Experience */}
          <section id="design" className="case-study-section">
            <h2>Design, Build & Tech Stack</h2>
            <p>
              The site was designed and developed as a lightweight, fast, and maintainable 
              professional website.
            </p>
            <p>
              <strong>Design principles:</strong>
            </p>
            <p>
              Clean layouts with strong hierarchy
            </p>
            <p>
              Minimal color usage for authority and clarity
            </p>
            <p>
              Focus on typography and spacing
            </p>
            <p>
              No unnecessary animations or distractions
            </p>
            <p>
              <strong>Tech Stack</strong>
            </p>
            <p>
              Frontend: HTML5, CSS3, JavaScript
            </p>
            <p>
              Styling: Custom CSS (no heavy frameworks)
            </p>
            <p>
              Version Control: Git & GitHub
            </p>
            <p>
              Deployment: Static hosting
            </p>
            <p>
              Responsive: Optimized for mobile, tablet, and desktop
            </p>
            <p>
              These choices ensured fast load times, low maintenance, and long-term reliability.
            </p>
          </section>

          {/* Outcome */}
          <section id="outcome" className="case-study-section">
            <h2>Outcome</h2>
            <ul className="case-study-outcome-list">
              <li>Strong professional digital presence</li>
              <li>Increased trust with new clients</li>
              <li>Clear understanding of services before first contact</li>
              <li>Reduced back-and-forth communication</li>
              <li>Scalable foundation for future growth</li>
            </ul>
            <p>
              The website now works as a credibility and lead-generation asset, supporting the 
              consultant's offline reputation online.
            </p>
          </section>

          {/* Gallery */}
          <section id="gallery" className="case-study-section">
            <h2>Gallery: See the Experience</h2>
            <div className="case-study-gallery">
              <div className="case-study-content-image">
                <img src={scrbleImg2} alt="R. Bhagya Lakshmi Website Gallery" />
              </div>
            </div>
          </section>

          {/* What's Next CTA */}
          <div className="case-study-cta">
            <div className="case-study-cta-content">
              <h2>What's Next?</h2>
              <p>
                Need a professional website that establishes credibility and generates leads? 
                Let's build something that reflects your expertise and authority.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <section className="case-study-links">
            <div className="case-study-links-content">
              <h2>Project Links</h2>
              <div className="case-study-links-grid">
                <a 
                  href="https://bhagya-lakshmi.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="case-study-link-item live-link"
                >
                  <div className="link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.53 1.53"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.53-1.53"></path>
                    </svg>
                  </div>
                  <div className="link-text">
                    <span className="link-title">Live Website</span>
                    <span className="link-subtitle">Visit the live project</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/ganeshsai4408/Bhagya-lakshmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="case-study-link-item github-link"
                >
                  <div className="link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div className="link-text">
                    <span className="link-title">GitHub Repository</span>
                    <span className="link-subtitle">View source code</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar - Services */}
        <aside className="case-study-services">
          <h3 className="case-study-services-title">Services Offered</h3>
          <ul className="case-study-services-list">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default CaseStudy;

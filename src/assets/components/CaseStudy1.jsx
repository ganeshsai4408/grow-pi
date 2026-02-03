import React, { useState, useEffect } from 'react';
import './CaseStudy1.css';

// Import images
import scrbleMain from '../images/case-study/scrble/scrble-main.png';
import scrbleImg1 from '../images/case-study/scrble/scrble-img1.png';
import scrbleImg2 from '../images/case-study/scrble/scrble-img2.png';

// Static data - moved outside component
const navItems = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'problem', label: 'Problem & Requirements' },
  { id: 'strategy', label: 'Strategy & UX Approach' },
  { id: 'design', label: 'Design System & Experience' },
  { id: 'development', label: 'Development & Outcome' },
  { id: 'gallery', label: 'Gallery' },
];

const services = [
  'WebDevelopment',
  'Landing Page',
  'UI/UXEcommerce',
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
  }, []); // navItems is a constant, no dependencies needed

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
          <h1 className="case-study-logo">Scrble</h1>
          <p className="case-study-tagline">"Where Ambition Meets Aesthetic"</p>
        </div>
        <div className="case-study-hero-image">
          <img src={scrbleMain} alt="Scrble E-commerce Website Preview" />
        </div>
      </div>

      {/* Title Section */}
      <div className="case-study-title-section">
        <h1 className="case-study-title">Scrble E-commerce website</h1>
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
            <h2>Project Overview</h2>
            <p>
              Scrble is a lifestyle brand creating expressive, aesthetic products for a Gen-Z 
              audience. This project involved building the brand identity, UI/UX, and a full-stack 
              e-commerce platform from scratch.
            </p>
            <p>
              The goal wasn't just to sell products, but to design a calm, trustworthy brand 
              experience—where every interaction reflects Scrble's mission, tone, and visual language.
            </p>
          </section>

          {/* Problem & Requirements */}
          <section id="problem" className="case-study-section">
            <h2>Problem & Requirements</h2>
            <p>
              Before this project, Scrble operated entirely through Instagram DMs for customer 
              communication and order processing. While this worked initially, it created 
              multiple business and marketing challenges.
            </p>
            <p>
              Customer communication was inconsistent, payments were handled manually, 
              and checkout trust was low—leading to lost high-intent buyers, weak retention, 
              and poor brand recall.
            </p>
            <p>
              From a marketing perspective, Instagram alone made it difficult to build long-term 
              credibility, clearly communicate the brand's mission, or guide users through a 
              structured buying journey.
            </p>
            <p>
              The client also made one thing clear:<br />
              they wanted to avoid a generic Shopify-style website. Template-driven stores felt 
              cluttered, overly sales-focused, and disconnected from Scrble's calm aesthetic.
            </p>
            <p>
              <strong>Core requirement:</strong><br />
              The website needed to function as a brand experience first, and an e-commerce 
              platform second.
            </p>

            {/* Image after Core Requirements */}
            <div className="case-study-content-image">
              <img src={scrbleImg1} alt="Scrble Shop All Page" />
            </div>
          </section>

          {/* Strategy & UX Approach */}
          <section id="strategy" className="case-study-section">
            <h2>Strategy & UX Approach</h2>
            <p>
              Scrble was approached as a brand and business, not just an online store.
            </p>
            <p>
              We studied lifestyle and D2C brands that prioritize identity over volume selling, 
              analyzed common friction points in traditional e-commerce flows, and spoke with 
              Gen-Z users to understand what feels calm, comfortable, and trustworthy while 
              shopping online.
            </p>
            <p>
              <strong>Key insight:</strong><br />
              For lifestyle brands, visual clarity, emotional comfort, and strong brand presence 
              directly influence trust and conversions.
            </p>
            <p>
              Based on this, the shopping journey was intentionally simplified and stripped of 
              unnecessary clutter.
            </p>
          </section>

          {/* Design System & Experience */}
          <section id="design" className="case-study-section">
            <h2>Design System & Experience</h2>
            <p>
              The UX focused on clarity, hierarchy, and emotional comfort.
            </p>
            <p>
              Minimal layouts reduced cognitive load, strong visual hierarchy made navigation 
              effortless, and mobile-first CTAs ensured ease of use. Pages were kept calm and 
              uncluttered to avoid sales pressure, while checkout was designed to be simple 
              and intuitive.
            </p>
            <p>
              A cohesive design system was created to ensure consistency and scalability. This 
              included a refined color palette, typography system, grid rules, reusable components, 
              and navigation patterns for both customer and admin views.
            </p>
            <p>
              The result was an interface that feels intentional, clean, and brand-aligned at 
              every touchpoint.
            </p>
          </section>

          {/* Development & Outcome */}
          <section id="development" className="case-study-section">
            <h2>Development & Outcome</h2>
            <p>
              The final design was implemented as a production-ready full-stack e-commerce 
              platform.
            </p>
            <p>
              The platform includes a customer storefront with product browsing, cart, and 
              checkout; secure role-based authentication; Razorpay payment integration with 
              real-time webhooks; automated order and email notifications; an admin dashboard 
              for managing products, orders, users, and inventory; and analytics for tracking 
              performance.
            </p>
            <p>
              Performance, security, and scalability were prioritized to support real-world 
              business use.
            </p>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginTop: '24px', marginBottom: '16px' }}>
              Final Outcome
            </h3>
            <ul className="case-study-outcome-list">
              <li>A distinct, non-generic e-commerce experience</li>
              <li>Strong brand identity across every page</li>
              <li>Clear, friction-free shopping and checkout flow</li>
              <li>Improved trust compared to Instagram-only selling</li>
              <li>A scalable system ready for future growth</li>
            </ul>
            <p>
              The final product feels brand-led, calm, and intentional—not template-driven.
            </p>
          </section>

          {/* Gallery */}
          <section id="gallery" className="case-study-section">
            <h2>Gallery: See the Experience</h2>
            <div className="case-study-gallery">
              <div className="case-study-content-image">
                <img src={scrbleImg2} alt="Scrble Website Gallery" />
              </div>
            </div>
          </section>

          {/* What's Next CTA */}
          <div className="case-study-cta">
            <div className="case-study-cta-content">
              <h2>What's Next?</h2>
              <p>
                Need a clean, affordable e-commerce website for your brand? 
                Let's build something that feels right for your customers.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <section className="case-study-links">
            <div className="case-study-links-content">
              <h2>Project Links</h2>
              <div className="case-study-links-grid">
                <a 
                  href="https://scrble-front-end.vercel.app/" 
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
                  href="https://github.com/ganeshsai4408/scrble-front-end" 
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

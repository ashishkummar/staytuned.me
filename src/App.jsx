
import React from 'react';
import './App.css';

export default function App() {

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="nav-title">stayTuned.me</h1>
          <p className="nav-subtitle">
            by <span className="ai-letters">A</span>sh<span className="ai-letters">I</span>sh
          </p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">AshIsh — MERN + AI Developer</h1>
          <p className="hero-subtitle">
            Building interactive web experiences and intelligent tools for over 15 years.
          </p>
          <p className="hero-tagline">
            I'm always building, learning, and evolving — stay tuned for what's next.
          </p>
          <div className="button-container">
            <a 
              href="https://github.com/ashishkummar/staytuned.me/raw/refs/heads/main/resume/Ashishkummar@gmail.com_2025.docx" 
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              📄 Resume
            </a>
            <a 
              href="https://github.com/ashishkummar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              🌐 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Learning in Progress Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">📚 Learning in Progress</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: '1', minWidth: '200px' }}>
                  <h3 className="project-title" style={{
                    fontSize: '1.6rem',
                    marginTop: '0',
                    marginBottom: '0.8rem',
                    marginLeft: '0',
                    marginRight: '0'
                  }}>
                    Generative AI for NLP Program
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginTop: '0',
                      marginBottom: '0',
                      marginLeft: '0',
                      marginRight: '0',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      🏛️ Great Learning Academy
                    </p>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '0',
                      marginBottom: '0',
                      marginLeft: '0',
                      marginRight: '0',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      📅 May 2025 - Sep 2025 (17 weeks)
                    </p>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginTop: '0',
                      marginBottom: '0',
                      marginLeft: '0',
                      marginRight: '0',
                      fontSize: '0.95rem',
                      fontWeight: '400'
                    }}>
                      🎯 Current Progress: Week 2 of 17
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                  }}>
                    🤖
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="glass-card" style={{
                padding: '1.5rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.8rem'
                }}>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Program Progress
                  </span>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    12%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '12%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
              
              {/* Current Module */}
              <div className="glass-card" style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                marginBottom: '2rem'
              }}>
                <h4 style={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginTop: '0',
                  marginBottom: '1.2rem',
                  marginLeft: '0',
                  marginRight: '0',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🔥 Currently Learning: LLM Foundations & Generative AI
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginTop: '0',
                      marginBottom: '0.5rem',
                      marginLeft: '0',
                      marginRight: '0',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      📚 This Week's Focus:
                    </p>
                    <ul style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '0',
                      marginBottom: '0',
                      marginLeft: '0',
                      marginRight: '0',
                      paddingLeft: '1.2rem',
                      fontSize: '0.85rem',
                      lineHeight: '1.6'
                    }}>
                      <li>LLM Architecture Fundamentals</li>
                      <li>Transformer Models Deep Dive</li>
                      <li>Token Generation Mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginTop: '0',
                      marginBottom: '0.5rem',
                      marginLeft: '0',
                      marginRight: '0',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      🛠️ Hands-on Practice:
                    </p>
                    <ul style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '0',
                      marginBottom: '0',
                      marginLeft: '0',
                      marginRight: '0',
                      paddingLeft: '1.2rem',
                      fontSize: '0.85rem',
                      lineHeight: '1.6'
                    }}>
                      <li>Building First Prompt Templates</li>
                      <li>API Integration with OpenAI</li>
                      <li>Response Evaluation Metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Core Curriculum Overview */}
              <div className="glass-card" style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '2rem'
              }}>
                <h4 style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginTop: '0',
                  marginBottom: '1.5rem',
                  marginLeft: '0',
                  marginRight: '0',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  🎯 Complete Curriculum Path:
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    {
                      phase: 'Foundation Phase',
                      weeks: '1-4',
                      topics: ['LLM Foundations', 'Generative AI', 'Advanced ML Techniques', 'Deep Learning Review']
                    },
                    {
                      phase: 'Core Development',
                      weeks: '5-10',
                      topics: ['Prompt Engineering', 'LangChain Framework', 'RAG Implementation', 'Semantic Search']
                    },
                    {
                      phase: 'Advanced Applications',
                      weeks: '11-14',
                      topics: ['Model Fine-tuning', 'AI Application Development', 'Production Deployment', 'Performance Optimization']
                    },
                    {
                      phase: 'Specialization',
                      weeks: '15-17',
                      topics: ['Capstone Project', 'Advanced Techniques', 'Industry Applications', 'Portfolio Development']
                    }
                  ].map((phase, index) => (
                    <div key={index} style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '1.5rem'
                    }}>
                      <h5 style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        marginTop: '0',
                        marginBottom: '0.8rem',
                        marginLeft: '0',
                        marginRight: '0',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        {phase.phase}
                      </h5>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginTop: '0',
                        marginBottom: '1rem',
                        marginLeft: '0',
                        marginRight: '0',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        Weeks {phase.weeks}
                      </p>
                      <div className="tags-container">
                        {phase.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="tag" style={{
                            fontSize: '0.7rem',
                            padding: '0.3rem 0.6rem'
                          }}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Status Footer */}
              <div className="glass-card" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem'
                  }}>
                    <div className="cert-status-indicator" style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      Active Learning
                    </span>
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.85rem',
                    fontWeight: '400'
                  }}>
                    Next Assignment: May 31st
                  </div>
                </div>
                
                <div className="button credential-button" style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: '#ffffff',
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.9rem',
                  border: 'none',
                  fontWeight: '600',
                  minWidth: 'auto'
                }}>
                  🚀 Week 2 Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">🔧 What I Do</h2>
          <div className="services-grid">
            {[
              'MERN Stack Applications',
              'AI/Automation Tools',
              'Chrome Extensions',
              'Firebase Realtime Systems',
              'React 360° & 3D/AR Web Interfaces'
            ].map((service, index) => (
              <div key={index} className="service-item">
                <h3 className="service-title">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">🚀 Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: 'AI-Powered Task Manager',
                description: 'A smart task management application that uses machine learning to prioritize tasks and predict completion times.',
                tags: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Express']
              },
              {
                title: 'Real-time Collaboration Platform',
                description: 'A Firebase-powered platform enabling real-time document editing and team communication with live cursors and comments.',
                tags: ['React', 'Firebase', 'WebRTC', 'Socket.io', 'Material-UI']
              },
              {
                title: 'AR Product Visualizer',
                description: 'An augmented reality web application that allows customers to visualize products in their space using WebXR.',
                tags: ['Three.js', 'WebXR', 'React', 'A-Frame', 'PWA']
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags-container">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Experiments Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">🧪 Ongoing Experiments</h2>
          <div className="projects-grid">
            {[
              {
                title: 'LeadBank',
                description: 'CRM SaaS platform for real estate leads management',
                tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
                status: 'In Development'
              },
              {
                title: 'SQMTR',
                description: 'Web presence for BD Green Consultant',
                tags: ['Next.js', 'Tailwind', 'Vercel', 'CMS'],
                status: 'Live'
              },
              {
                title: 'PinkSlip',
                description: 'AI platform for resume optimization and job support',
                tags: ['React', 'OpenAI', 'Python', 'FastAPI'],
                status: 'Prototype'
              },
              {
                title: 'RealGPT',
                description: 'Real estate assistant powered by custom AI models',
                tags: ['React', 'TensorFlow', 'MongoDB', 'Express'],
                status: 'In Development'
              },
              {
                title: 'stayTuned',
                description: 'Personal portfolio to showcase creative software ideas',
                tags: ['React', 'Vite', 'Glassmorphism', 'PWA'],
                status: 'Live'
              }
            ].map((experiment, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{experiment.title}</h3>
                <p className="project-description">{experiment.description}</p>
                <div className="tags-container">
                  {experiment.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                  <span className={`tag tag-status ${
                    experiment.status === 'Live' ? 'tag-live' :
                    experiment.status === 'In Development' ? 'tag-development' :
                    experiment.status === 'Prototype' ? 'tag-prototype' : ''
                  }`}>
                    {experiment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn with Me Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">📺 Learn with Me</h2>
          <div className="projects-grid">
            {[
              {
                title: 'Building AI-Powered React Applications',
                description: 'A comprehensive guide on integrating OpenAI APIs with React applications for intelligent user experiences.',
                hasMedium: true,
                hasYouTube: true
              },
              {
                title: 'Real-time Firebase with React Hooks',
                description: 'Deep dive into implementing Firebase real-time features using modern React patterns and custom hooks.',
                hasMedium: true,
                hasYouTube: false
              },
              {
                title: 'Chrome Extension Development Masterclass',
                description: 'From concept to store: Complete walkthrough of building powerful Chrome extensions with modern web technologies.',
                hasMedium: true,
                hasYouTube: true
              },
              {
                title: 'WebXR and AR on the Web',
                description: 'Exploring the future of web-based augmented reality using Three.js, A-Frame, and WebXR APIs.',
                hasMedium: false,
                hasYouTube: true
              }
            ].map((content, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{content.title}</h3>
                <p className="project-description">{content.description}</p>
                <div className="learn-buttons">
                  {content.hasMedium ? (
                    <a
                      href="#"
                      className="button button-primary learn-button learn-button-primary"
                    >
                      📖 Read on Medium
                    </a>
                  ) : (
                    <div className="button learn-button learn-button-disabled">
                      📖 Coming Soon
                    </div>
                  )}
                  
                  {content.hasYouTube ? (
                    <a
                      href="#"
                      className="button button-secondary learn-button learn-button-secondary"
                    >
                      🎥 Watch on YouTube
                    </a>
                  ) : (
                    <div className="button learn-button learn-button-disabled">
                      🎥 Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Words from Collaborators Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">🌟 Words from Collaborators</h2>
          <div className="projects-grid">
            {[
              {
                name: 'Sarah Chen',
                title: 'Senior Product Manager',
                company: 'TechCorp Inc.',
                recommendation: 'Ashish consistently delivered exceptional results on our AI-powered dashboard project. His ability to translate complex requirements into elegant, user-friendly solutions is remarkable.',
                hasLinkedIn: true
              },
              {
                name: 'Michael Rodriguez',
                title: 'CTO',
                company: 'StartupLabs',
                recommendation: 'Working with Ashish was a game-changer for our real-time collaboration platform. His expertise in MERN stack and Firebase integration helped us scale efficiently.',
                hasLinkedIn: true
              },
              {
                name: 'Dr. Emily Watson',
                title: 'Lead Developer',
                company: 'InnovateTech Solutions',
                recommendation: 'Ashish brought innovative AR/VR web solutions to our project that exceeded expectations. His technical depth and creative problem-solving skills are truly impressive.',
                hasLinkedIn: false
              },
              {
                name: 'James Thompson',
                title: 'Engineering Director',
                company: 'CloudScale Systems',
                recommendation: 'Rare to find someone who combines deep technical expertise with excellent communication skills. Ashish delivered our Chrome extension project ahead of schedule.',
                hasLinkedIn: true
              }
            ].map((testimonial, index) => (
              <div key={index} className="project-card project-card-small">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <h3 className="project-title project-title-blue" style={{
                      fontSize: '1.3rem',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {testimonial.name}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      margin: '0',
                      fontSize: '0.95rem',
                      fontWeight: '400'
                    }}>
                      {testimonial.title} at {testimonial.company}
                    </p>
                  </div>
                  {testimonial.hasLinkedIn && (
                    <a
                      href="#"
                      className="linkedin-icon"
                      title="View full recommendation on LinkedIn"
                    >
                      💼
                    </a>
                  )}
                </div>
                
                <div className="glass-card" style={{
                  position: 'relative',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '0.5rem',
                    fontSize: '1.5rem',
                    color: 'rgba(255, 255, 255, 0.3)'
                  }}>
                    "
                  </div>
                  <p className="project-description" style={{
                    margin: '0.5rem 0',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    {testimonial.recommendation}
                  </p>
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    fontSize: '1.5rem',
                    color: 'rgba(255, 255, 255, 0.3)',
                    transform: 'rotate(180deg)'
                  }}>
                    "
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Knowledge Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">📜 Certified Knowledge</h2>
          <div className="projects-grid">
            {[
              {
                title: 'Advanced React Development',
                platform: 'Meta (Facebook)',
                dateIssued: 'November 2023',
                hasCredential: true,
                credentialUrl: '#'
              },
              {
                title: 'Full Stack Web Development with MERN',
                platform: 'Udemy',
                dateIssued: 'September 2023',
                hasCredential: true,
                credentialUrl: '#'
              },
              {
                title: 'Machine Learning for Web Developers',
                platform: 'Google Cloud',
                dateIssued: 'August 2023',
                hasCredential: true,
                credentialUrl: '#'
              },
              {
                title: 'AWS Certified Solutions Architect',
                platform: 'Amazon Web Services',
                dateIssued: 'June 2023',
                hasCredential: true,
                credentialUrl: '#'
              },
              {
                title: 'JavaScript Algorithms and Data Structures',
                platform: 'freeCodeCamp',
                dateIssued: 'April 2023',
                hasCredential: true,
                credentialUrl: '#'
              },
              {
                title: 'Firebase for Web Development',
                platform: 'LinkedIn Learning',
                dateIssued: 'March 2023',
                hasCredential: false,
                credentialUrl: ''
              },
              {
                title: 'Chrome Extension Development',
                platform: 'Udemy',
                dateIssued: 'February 2023',
                hasCredential: true,
                credentialUrl: '#'
              },
              {
                title: 'Three.js and WebGL Fundamentals',
                platform: 'Coursera',
                dateIssued: 'January 2023',
                hasCredential: true,
                credentialUrl: '#'
              }
            ].map((cert, index) => (
              <div key={index} className="project-card project-card-small">
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 className="project-title" style={{
                      fontSize: '1.3rem',
                      margin: '0 0 0.8rem 0'
                    }}>
                      {cert.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem'
                    }}>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        margin: '0',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        📚 {cert.platform}
                      </p>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        margin: '0',
                        fontSize: '0.9rem',
                        fontWeight: '400'
                      }}>
                        📅 Issued: {cert.dateIssued}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                    }}>
                      🏆
                    </div>
                  </div>
                </div>
                
                <div className="glass-card" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem'
                  }}>
                    <div className={`cert-status-indicator ${cert.hasCredential ? 'cert-status-verified' : 'cert-status-pending'}`}></div>
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {cert.hasCredential ? 'Verified Certificate' : 'Certificate Pending'}
                    </span>
                  </div>
                  
                  {cert.hasCredential ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary credential-button"
                    >
                      🔗 View Credential
                    </a>
                  ) : (
                    <div className="button credential-button credential-button-disabled">
                      ⏳ Processing
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">👨‍💻 About Me</h2>
          <div className="about-container">
            <p className="about-text">
              With over 15 years of experience in software development, I'm a passionate senior developer 
              who specializes in transforming innovative ideas into scalable, intelligent applications. 
              My expertise spans the full MERN stack, AI integration, and cutting-edge web technologies. 
              I thrive on solving complex problems and creating seamless user experiences that bridge 
              the gap between human needs and technological possibilities. Whether it's building real-time 
              collaborative platforms, implementing AI-driven features, or crafting immersive AR/VR web 
              experiences, I bring creativity, technical excellence, and a user-first mindset to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-header">📬 Let's Connect</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <a href="mailto:ashishkummar@gmail.com" className="contact-link">
                ashishkummar@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <a 
                href="https://www.linkedin.com/in/ashishkummar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <a 
                href="https://github.com/ashishkummar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h3 className="footer-title">stayTuned.me</h3>
                <p className="footer-subtitle">
                  Building the future with <span className="ai-letters">A</span>sh<span className="ai-letters">I</span>sh
                </p>
              </div>
              
              <div className="footer-links">
                <div className="footer-section">
                  <h4 className="footer-section-title">Quick Links</h4>
                  <ul className="footer-list">
                    <li><a href="#projects" className="footer-link">Projects</a></li>
                    <li><a href="#experiments" className="footer-link">Experiments</a></li>
                    <li><a href="#learning" className="footer-link">Learning</a></li>
                    <li><a href="#about" className="footer-link">About</a></li>
                  </ul>
                </div>
                
                <div className="footer-section">
                  <h4 className="footer-section-title">Connect</h4>
                  <ul className="footer-list">
                    <li>
                      <a 
                        href="https://github.com/ashishkummar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/ashishkummar/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:ashishkummar@gmail.com"
                        className="footer-link"
                      >
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="footer-section">
                  <h4 className="footer-section-title">Currently</h4>
                  <ul className="footer-list">
                    <li className="footer-text">Learning Generative AI</li>
                    <li className="footer-text">Building MERN Apps</li>
                    <li className="footer-text">Exploring WebXR</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  © 2025 AshIsh. Made with ❤️ using React & Glassmorphism Design
                </p>
                <div className="footer-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Vite</span>
                  <span className="tech-badge">CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

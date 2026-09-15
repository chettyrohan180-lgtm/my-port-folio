import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-ready web applications, microservice architectures, and AI integrations built for performance.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-glass)',
                background: activeCategory === cat ? 'rgba(99, 102, 241, 0.2)' : 'var(--surface-glass)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#A5B4FC',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.25rem', flex: 1, lineHeight: 1.6 }}>
                  {project.description}
                </p>

                {/* Metrics Highlight */}
                {project.metrics && (
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#6EE7B7',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '1rem',
                      padding: '0.4rem 0.6rem',
                      background: 'rgba(16, 185, 129, 0.08)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    ⚡ {project.metrics}
                  </div>
                )}

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

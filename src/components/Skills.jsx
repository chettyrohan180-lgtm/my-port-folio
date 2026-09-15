import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, FileCode, Palette, Layers, Zap, Gauge, Server, Cpu, Terminal, Network, Workflow, Database, HardDrive, FileSpreadsheet, Binary, Cloud, Box, GitBranch, Brain, Bot, Sparkles } from 'lucide-react';

const iconMap = {
  Code2, FileCode, Palette, Layers, Zap, Gauge, Server, Cpu, Terminal, Network, Workflow, Database, HardDrive, FileSpreadsheet, Binary, Cloud, Box, GitBranch, Brain, Bot, Sparkles
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const selectedCategory = skillCategories.find((c) => c.id === activeCategory);
  
  // Flatten skills for "all" tab
  const displayedSkills = activeCategory === 'all'
    ? skillCategories.filter((c) => c.id !== 'all').flatMap((c) => c.skills)
    : selectedCategory?.skills || [];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>Tech Stack & Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A tailored toolkit of core programming languages, AI & ML frameworks, databases, and web development technologies.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeCategory === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-glass)',
                background: activeCategory === cat.id ? 'rgba(99, 102, 241, 0.2)' : 'var(--surface-glass)',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
                boxShadow: activeCategory === cat.id ? '0 0 20px var(--accent-primary-glow)' : 'none',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {displayedSkills.map((skill, index) => {
            const IconComp = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {skill.name}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: skill.level === 'Expert' ? '#10B981' : skill.level === 'Advanced' ? '#818CF8' : 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

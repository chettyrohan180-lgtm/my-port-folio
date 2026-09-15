import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Proven track record of delivering enterprise-grade software, scaling infrastructure, and leading engineering workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Central Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-primary) 0%, rgba(99, 102, 241, 0.1) 100%)',
            }}
          />

          {workExperience.map((exp) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                paddingLeft: '65px',
                marginBottom: '2.5rem',
              }}
            >
              {/* Timeline Icon Node */}
              <div
                style={{
                  position: 'absolute',
                  left: '4px',
                  top: '0',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  boxShadow: '0 0 15px var(--accent-primary-glow)',
                  zIndex: 2,
                }}
              >
                <Briefcase size={18} />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                    {exp.role} <span style={{ color: 'var(--accent-primary)' }}>@ {exp.company}</span>
                  </h3>
                  <span className="badge" style={{ fontSize: '0.8rem' }}>
                    <Calendar size={13} style={{ marginRight: '4px' }} />
                    {exp.period}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <CheckCircle size={15} style={{ color: '#10B981', marginTop: '3px', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

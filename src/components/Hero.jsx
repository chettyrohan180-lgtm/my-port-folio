import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="section" style={{ paddingTop: '9rem', paddingBottom: '5rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      {/* Background Orbs */}
      <div className="bg-glow-orb bg-glow-indigo animate-pulse-glow" />
      <div className="bg-glow-orb bg-glow-emerald" style={{ top: '20%', right: '10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '840px' }}>
          {/* Status Badge */}
          <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <span className="badge badge-emerald" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }} />
              Available for AI/ML & Software Internships
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.25rem)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Hi, I'm <span className="gradient-text">{developerInfo.name}</span>
            <br />
            <span style={{ fontSize: '0.85em', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {developerInfo.title}
            </span>
          </h1>

          {/* Bio Subtitle */}
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '720px' }}>
            {developerInfo.bio}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '3.5rem' }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Resume download simulation initiated."); }}
              className="btn btn-secondary"
              style={{ padding: '0.9rem 1.5rem' }}
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Key Metric Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.25rem',
              marginTop: '2rem',
            }}
          >
            {developerInfo.stats.map((stat, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

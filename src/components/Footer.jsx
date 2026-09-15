import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0',
        background: 'rgba(9, 13, 22, 0.95)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Brand Logo & Copyright */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Terminal size={18} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                {developerInfo.name} <span style={{ color: 'var(--accent-primary)' }}>.dev</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              © {new Date().getFullYear()} {developerInfo.name}. Built with React, Vite & Vanilla CSS.
            </p>
          </div>

          {/* System Status Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              fontSize: '0.8rem',
              color: '#6EE7B7',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span>Systems Operational • Portfolio v1.0</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn-icon"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('jobs');

  const [jobs, setJobs] = useState([
    { id: 1, title: 'Lawn Mowing & Edging', budget: 12.00, status: 'In Escrow (Safe)', helper: 'Assigned to Teen' },
    { id: 2, title: 'Weeding Front Path', budget: 8.00, status: 'Open for Pick-Up', helper: null }
  ]);

  const markComplete = (id) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, status: 'Completed & Funds Released! ✓' } : j));
  };

  return (
    <div className="app-container">
      <div className="smoke-portal-bg" />
      
      {/* Header */}
      <div className="luxury-card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '6px' }}>⭐</div>
        <h1 style={{ color: 'var(--amber-gold)', letterSpacing: '1.5px', fontSize: '18px' }}>NORTHSTAR COLLECTIVE</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '4px' }}>Community Sanctuary & Micro-Economy</p>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('jobs')}
          style={{ flex: 1, padding: '10px', borderRadius: '12px', background: activeTab === 'jobs' ? 'var(--amber-gold)' : 'var(--glass-panel)', color: activeTab === 'jobs' ? '#070B12' : 'var(--text-main)', border: '1px solid rgba(245,158,11,0.3)', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}>
          Odd Jobs & Escrow
        </button>
        <button 
          onClick={() => setActiveTab('tiers')}
          style={{ flex: 1, padding: '10px', borderRadius: '12px', background: activeTab === 'tiers' ? 'var(--amber-gold)' : 'var(--glass-panel)', color: activeTab === 'tiers' ? '#070B12' : 'var(--text-main)', border: '1px solid rgba(245,158,11,0.3)', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}>
          Business Ads (£)
        </button>
      </div>

      {/* Tab 1: Odd Jobs Board */}
      {activeTab === 'jobs' && (
        <div className="luxury-card">
          <h3 style={{ color: 'var(--amber-gold)', fontSize: '16px', marginBottom: '6px' }}>🤝 Neighborhood Micro-Jobs</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '15px' }}>
            Funds are locked safely in escrow until both parties sign off on completion.
          </p>

          {jobs.map(job => (
            <div key={job.id} style={{ background: 'rgba(0,0,0,0.25)', padding: '14px', borderRadius: '14px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '14px', color: 'var(--text-main)' }}>{job.title}</strong>
                <span style={{ color: 'var(--amber-gold)', fontWeight: '700' }}>£{job.budget.toFixed(2)}</span>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>Status: {job.status}</p>
              
              <button 
                onClick={() => markComplete(job.id)}
                className="coral-amber-btn" style={{ padding: '8px', fontSize: '12px' }}>
                Sign Off & Release Funds
              </button>
            </div>
          ))}

          {/* Atlas & Aura Roads Teaser */}
          <div style={{ marginTop: '20px', padding: '12px', borderRadius: '12px', background: 'rgba(255,111,97,0.08)', border: '1px solid rgba(255,111,97,0.2)', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--coral-accent)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Coming Soon</span>
            <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '4px' }}>Atlas & Aura Roads Collections</h4>
          </div>
        </div>
      )}

      {/* Tab 2: Tiers & Business Advertising */}
      {activeTab === 'tiers' && (
        <div className="luxury-card">
          <h3 style={{ color: 'var(--amber-gold)', fontSize: '16px', marginBottom: '6px' }}>✨ Advertising Tiers</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '15px' }}>
            Boost your visibility or showcase your luxury brand.
          </p>

          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--text-main)' }}>Standard Community</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Free — Basic local posts and board access.</p>
          </div>

          <div style={{ background: 'rgba(245,158,11,0.08)', padding: '12px', borderRadius: '12px', marginBottom: '10px', border: '1px solid rgba(245,158,11,0.2)' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--amber-gold)' }}>Promoted Boost (£4.99/mo)</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Extra looks, pinned placement, and priority visibility.</p>
          </div>

          <div style={{ background: 'rgba(255,111,97,0.08)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,111,97,0.3)' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--coral-accent)' }}>Designer & Luxury Brand (£20+/mo)</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Exclusive high-end editorial showcase slots.</p>
          </div>
        </div>
      )}
    </div>
  );
}

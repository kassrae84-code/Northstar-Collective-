import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  midnight: '#0F172A',
  card: '#1E293B',
  input: '#334155',
  gold: '#FBBF24',
  coral: '#FF7F50',
  text: '#F8FAFC',
  muted: '#94A3B8',
  purple: '#9D65C9',
  blue: '#60A5FA',
};

const FAMILY = [
  { id: 'kassie', name: 'Kassie', color: COLORS.gold, emoji: '💛' },
  { id: 'indi', name: 'Indi', color: COLORS.purple, emoji: '💜' },
  { id: 'blossom', name: 'Blossom', color: COLORS.coral, emoji: '🌸' },
  { id: 'dad', name: 'Dad', color: COLORS.blue, emoji: '💙' },
];

const TABS = [
  { id: 'home', icon: '🏠', label: 'Home' },
  { id: 'schedule', icon: '📅', label: 'Schedule' },
  { id: 'braindump', icon: '🧠', label: 'Brain Dump' },
  { id: 'wishes', icon: '💫', label: 'Wish Lists' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', background: COLORS.midnight, color: COLORS.text, padding: '24px' }}
    >
      <h1 style={{ fontSize: 32, textAlign: 'center', color: COLORS.gold, marginBottom: 32 }}>
        ✨ Northstar Collective ✨
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 24px',
              borderRadius: 12,
              border: 'none',
              background: activeTab === tab.id ? COLORS.gold : COLORS.card,
              color: activeTab === tab.id ? '#000' : COLORS.text,
              fontSize: 16,
              cursor: 'pointer',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'home' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 28, color: COLORS.coral, marginBottom: 24 }}>🌟 Our Family 🌟</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {FAMILY.map(member => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: COLORS.card,
                  minWidth: 120,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 8 }}>{member.emoji}</div>
                <div style={{ fontSize: 18, fontWeight: 'bold', color: member.color }}>{member.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'braindump' && <BrainDump />}
    </motion.div>
  );
}

function BrainDump() {
  const [text, setText] = useState(() => localStorage.getItem('northstar_brain') || '');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem('northstar_brain', text);
    if (text) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', background: COLORS.midnight, padding: '32px 24px' }}
    >
      <h2 style={{ fontSize: 28, color: COLORS.coral, textAlign: 'center', marginBottom: 8 }}>🧠 Brain Dump</h2>
      <p style={{ textAlign: 'center', color: COLORS.muted, marginBottom: 24 }}>Get it all out — no rules, no judgment 💛</p>
      {saved && <p style={{ textAlign: 'center', color: '#4ade80', marginBottom: 16 }}>✅ Saved safely 💛</p>}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Everything buzzing in your head... let it all out here. No judgment, no limits. 💛"
        style={{
          width: '100%',
          minHeight: '60vh',
          padding: 24,
          borderRadius: 20,
          background: COLORS.card,
          color: COLORS.text,
          border: 'none',
          fontSize: 16,
          lineHeight: 1.6,
        }}
      />
      <button
        onClick={() => {
          if (window.confirm('Clear everything? Only when ready 💛')) setText('');
        }}
        style={{
          width: '100%',
          marginTop: 20,
          padding: 14,
          borderRadius: 12,
          background: '#ff444415',
          color: '#ff6b6b',
          border: 'none',
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        🗑️ Clear When Ready
      </button>
    </motion.div>
  );
}

export default App;

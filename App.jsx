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
  { id: 'wishes', icon: '🎁', label: 'Wish Lists' },
  { id: 'journal', icon: '📔', label: 'Journal' },
  { id: 'jobs', icon: '💰', label: 'Jobs' },
];

const PortalButton = ({ icon, label, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 900);
    if (onClick) onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.96 }}
      animate={isClicked ? {
        boxShadow: [
          `0 0 30px ${COLORS.coral}70, 0 0 60px ${COLORS.gold}40, inset 0 0 30px ${COLORS.coral}30`,
          `0 0 80px ${COLORS.coral}A0, 0 0 120px ${COLORS.gold}60, inset 0 0 50px ${COLORS.coral}50`,
          `0 0 40px ${COLORS.coral}50, 0 0 70px ${COLORS.gold}30, inset 0 0 20px ${COLORS.coral}20`,
          `0 0 20px ${COLORS.coral}30, 0 0 40px ${COLORS.gold}15, inset 0 0 10px ${COLORS.coral}10`,
        ],
        transition: { duration: 0.9, ease: 'easeOut' }
      } : {
        boxShadow: `0 4px 20px ${COLORS.gold}15, 0 0 8px ${COLORS.coral}10`
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(145deg, ${COLORS.card}, ${COLORS.input})`,
        border: `2px solid ${COLORS.gold}60`,
        borderRadius: 28,
        padding: '30px 20px',
        color: COLORS.text,
        fontSize: 18,
        fontWeight: '700',
        cursor: 'pointer',
        textAlign: 'center',
        width: '100%',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        animate={isClicked ? {
          opacity: [0, 1, 0.8, 0],
          scale: [0.6, 1.4, 1.6, 1.8],
        } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle at 30% 20%, ${COLORS.coral}50 0%, ${COLORS.gold}30 40%, transparent 70%),
                       radial-gradient(circle at 70% 80%, ${COLORS.purple}40 0%, transparent 60%)`,
          pointerEvents: 'none',
          borderRadius: 28,
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `linear-gradient(135deg, ${COLORS.gold}10 0%, transparent 50%, ${COLORS.coral}10 100%)`,
        pointerEvents: 'none',
        borderRadius: 28,
      }} />
      <span style={{ fontSize: 36, display: 'block', marginBottom: 10, position: 'relative', zIndex: 2, filter: `drop-shadow(0 0 8px ${COLORS.gold}60)` }}>
        {icon}
      </span>
      <span style={{ position: 'relative', zIndex: 2, letterSpacing: '0.5px' }}>
        {label}
      </span>
    </motion.button>
  );
};

function HomeScreen({ setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, #0c1525 0%, ${COLORS.midnight} 25%, #1a2c4a 55%, ${COLORS.midnight} 80%, #0c1525 100%)`,
        padding: '40px 24px 120px',
        color: COLORS.text,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: 350,
        background: `radial-gradient(ellipse at 50% 0%, ${COLORS.coral}30 0%, ${COLORS.gold}20 30%, ${COLORS.purple}15 55%, transparent 70%)`,
        pointerEvents: 'none',
        marginTop: '-60px',
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(circle at 15% 25%, ${COLORS.gold}08 0%, transparent 40%),
          radial-gradient(circle at 85% 75%, ${COLORS.coral}08 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, ${COLORS.purple}06 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 60, marginTop: 20 }}>
        <motion.h1 
          style={{ 
            fontSize: 52,
            fontWeight: '900',
            letterSpacing: '4px',
            background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.coral}, ${COLORS.purple}, ${COLORS.gold})`,
            backgroundSize: '300% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 16,
            filter: `drop-shadow(0 0 30px ${COLORS.gold}40)`,
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ★ NORTHSTAR ★
        </motion.h1>
        <p style={{ fontSize: 19, color: COLORS.muted, fontStyle: 'italic', marginBottom: 10 }}>Your gentle place • Everything in one app 💛</p>
        <motion.p 
          style={{ fontSize: 17, color: COLORS.coral, fontWeight: 500 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✨ Welcome home, Kassie ✨
        </motion.p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, position: 'relative', zIndex: 2 }}>
        {TABS.filter(t => t.id !== 'home').map(tab => (
          <PortalButton
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div style={{ marginTop: 70, textAlign: 'center', color: COLORS.muted, fontSize: 11, lineHeight: 1.9, paddingTop: 30, borderTop: `1px solid ${COLORS.gold}15`, position: 'relative', zIndex: 2 }}>
        <p>⚠️ All guidance shared reflects personal lived experience — offered as advice only.</p>
        <p>Not professional advice. Always do what's right for you. 💛</p>
        <p style={{ marginTop: 10 }}>*Links may earn commission at no extra cost — supports Northstar & my family 💛</p>
        <p style={{ marginTop: 15, fontSize: 13, color: COLORS.gold, letterSpacing: '1px' }}>★ Northstar · Kassie © 2026 • All Rights Reserved ★</p>
      </div>
    </motion.div>
  );
}

function Schedule() {
  const [tasks, setTasks] = useState(() => { 
    const s = localStorage.getItem('northstar_tasks'); 
    return s ? JSON.parse(s) : []; 
  });
  const [newTask, setNewTask] = useState({ text: '', day: 'Mon', person: 'kassie' });
  useEffect(() => { localStorage.setItem('northstar_tasks', JSON.stringify(tasks)); }, [tasks]);
  const addTask = () => {
    if (!newTask.text.trim()) return;
    setTasks([...tasks, { id: Date.now(), ...newTask, done: false }]);
    setNewTask({ text: '', day: 'Mon', person: 'kassie' });
  };
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', background: COLORS.midnight, padding: '32px 24px 120px', color: COLORS.text }}
    >
      <h2 style={{ fontSize: 28, color: COLORS.gold, textAlign: 'center', marginBottom: 8 }}>📅 My Schedule</h2>
      <p style={{ textAlign: 'center', color: COLORS.muted, marginBottom: 24 }}>Gentle & steady — rest built in 💛</p>
      <div style={{ background: COLORS.card, borderRadius: 20, padding: 24, marginBottom: 24, border: `1px solid ${COLORS.gold}20` }}>
        <input 
          placeholder="What needs doing?" 
          value={newTask.text} 
          onChange={(e) => setNewTask({...newTask, text: e.target.value})}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: COLORS.input, border: 'none', color: COLORS.text, marginBottom: 14, fontSize: 16 }}
        />
        <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
          <select 
            value={newTask.person} 
            onChange={(e) => setNewTask({...newTask, person: e.target.value})}
            style={{ flex: 1, padding: 14, borderRadius: 12, background: COLORS.input, border: 'none', color: COLORS.text, fontSize: 16 }}
          >
            {FAMILY.map(m => <option key={m.id} value={m.id}>{m.emoji} {m.name}</option>)}
          </select>
          <select 
            value={newTask.day} 
            onChange={(e) => setNewTask({...newTask, day: e.target.value})}
            style={{ flex: 1, padding: 14, borderRadius: 12, background: COLORS.input, border: 'none', color: COLORS.text, fontSize: 16 }}
          >
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <button 
          onClick={addTask} 
          style={{ width: '100%', padding: 16, borderRadius: 12, background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.coral})`, color: '#000', fontWeight: 'bold', border: 'none', fontSize: 16, cursor: 'pointer' }}
        >
          ➕ Add Task
        </button>
      </div>
      {tasks.length === 0 && <p style={{ textAlign: 'center', color: COLORS.muted, padding: 30 }}>No tasks yet. Add your first one above! 💛</p>}
      {tasks.map(task => {
        const person = FAMILY.find(m => m.id === task.person);
        return (
          <div key={task.id} style={{ background: COLORS.card, borderRadius: 16, padding: 18, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `4px solid ${person?.color || COLORS.gold}`, opacity: task.done ? 0.6 : 1 }}>
            <span style={{ fontWeight: 'bold', fontSize: 16, textDecoration: task.done ? 'line-through' : 'none' }}>
              {person?.emoji} {task.day} — {task.text}
            </span>
            <button 
              onClick={() => setTasks(tasks.map(t => t.id === task.id ? {...t, done: !t.done} : t))}
              style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: task.done ? COLORS.coral : COLORS.input, color: '#fff', fontSize: 20, cursor: 'pointer', fontWeight: 'bold' }}
            >
              {task.done ? '✓' : '○'}
            </button>
          </div>
        );
      })}
    </motion.div>
  );
}

function BrainDump() {
  const [text, setText] = useState(() => localStorage.getItem('northstar_brain') || '');
  const [saved, setSaved] = useState(false);
  useEffect(() => { 
    localStorage.setItem('northstar_brain', text); 
    if (text) { setSaved(true); setTimeout(() => setSaved(false), 1500); }
  }, [text]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', background: COLORS.midnight, padding: '32px 24px 120px', color: COLORS.text }}
    >
      <h2 style={{ fontSize: 28, color: COLORS.coral, textAlign: 'center', marginBottom: 8 }}>🧠 Brain Dump</h2>
      <p style={{ textAlign: 'center', color: COLORS.muted, marginBottom: 24 }}>Get it all out — no rules, no spelling, just write 💛</p>
      {saved && <p style={{ textAlign: 'center', color: '#4ade80', marginBottom: 16 }}>✅ Saved safely ✨</p>}
      <textarea
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Everything buzzing in your head… let it all out here. No judgment, no limits. 💛"
        style={{ width: '100%', minHeight: '60vh', padding: 24, borderRadius: 20, background: COLORS.card, border: 'none', color: COLORS.text, fontSize: 16, lineHeight: 1.8, resize: 'none', outline: 'none' }}
      />
      <button 
        onClick={() => { if(window.confirm('Clear everything? Only when ready 💛')) setText(''); }}
        style={{ width: '100%', marginTop: 20, padding: 14, borderRadius: 12, background: '#ff444415', border: 'none', color: COLORS.coral, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}
      >
        🗑️ Clear When Ready
      </button>
    </motion.div>
  );
        

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
  { id: 'wishes', icon: '🎁', label: 'Wish Lists' },
  { id: 'journal', icon: '📔', label: 'Journal' },
  { id: 'jobs', icon: '💰', label: 'Jobs' },
];

const PortalButton = ({ icon, label, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 900);
    if (onClick) onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.96 }}
      animate={isClicked ? {
        boxShadow: [
          `0 0 30px ${COLORS.coral}70, 0 0 60px ${COLORS.gold}40, inset 0 0 30px ${COLORS.coral}30`,
          `0 0 80px ${COLORS.coral}A0, 0 0 120px ${COLORS.gold}60, inset 0 0 50px ${COLORS.coral}50`,
          `0 0 40px ${COLORS.coral}50, 0 0 70px ${COLORS.gold}30, inset 0 0 20px ${COLORS.coral}20`,
          `0 0 20px ${COLORS.coral}30, 0 0 40px ${COLORS.gold}15, inset 0 0 10px ${COLORS.coral}10`,
        ],
        transition: { duration: 0.9, ease: 'easeOut' }
      } : {
        boxShadow: `0 4px 20px ${COLORS.gold}15, 0 0 8px ${COLORS.coral}10`
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(145deg, ${COLORS.card}, ${COLORS.input})`,
        border: `2px solid ${COLORS.gold}60`,
        borderRadius: 28,
        padding: '30px 20px',
        color: COLORS.text,
        fontSize: 18,
        fontWeight: '700',
        cursor: 'pointer',
        textAlign: 'center',
        width: '100%',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        animate={isClicked ? {
          opacity: [0, 1, 0.8, 0],
          scale: [0.6, 1.4, 1.6, 1.8],
        } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle at 30% 20%, ${COLORS.coral}50 0%, ${COLORS.gold}30 40%, transparent 70%),
                       radial-gradient(circle at 70% 80%, ${COLORS.purple}40 0%, transparent 60%)`,
          pointerEvents: 'none',
          borderRadius: 28,
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `linear-gradient(135deg, ${COLORS.gold}10 0%, transparent 50%, ${COLORS.coral}10 100%)`,
        pointerEvents: 'none',
        borderRadius: 28,
      }} />
      <span style={{ fontSize: 36, display: 'block', marginBottom: 10, position: 'relative', zIndex: 2, filter: `drop-shadow(0 0 8px ${COLORS.gold}60)` }}>
        {icon}
      </span>
      <span style={{ position: 'relative', zIndex: 2, letterSpacing: '0.5px' }}>
        {label}
      </span>
    </motion.button>
  );
};

function HomeScreen({ setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, #0c1525 0%, ${COLORS.midnight} 25%, #1a2c4a 55%, ${COLORS.midnight} 80%, #0c1525 100%)`,
        padding: '40px 24px 120px',
        color: COLORS.text,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: 350,
        background: `radial-gradient(ellipse at 50% 0%, ${COLORS.coral}30 0%, ${COLORS.gold}20 30%, ${COLORS.purple}15 55%, transparent 70%)`,
        pointerEvents: 'none',
        marginTop: '-60px',
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(circle at 15% 25%, ${COLORS.gold}08 0%, transparent 40%),
          radial-gradient(circle at 85% 75%, ${COLORS.coral}08 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, ${COLORS.purple}06 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 60, marginTop: 20 }}>
        <motion.h1 
          style={{ 
            fontSize: 52,
            fontWeight: '900',
            letterSpacing: '4px',
            background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.coral}, ${COLORS.purple}, ${COLORS.gold})`,
            backgroundSize: '300% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 16,
            filter: `drop-shadow(0 0 30px ${COLORS.gold}40)`,
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ★ NORTHSTAR ★
        </motion.h1>
        <p style={{ fontSize: 19, color: COLORS.muted, fontStyle: 'italic', marginBottom: 10 }}>Your gentle place • Everything in one app 💛</p>
        <motion.p 
          style={{ fontSize: 17, color: COLORS.coral, fontWeight: 500 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✨ Welcome home, Kassie ✨
        </motion.p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, position: 'relative', zIndex: 2 }}>
        {TABS.filter(t => t.id !== 'home').map(tab => (
          <PortalButton
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div style={{ marginTop: 70, textAlign: 'center', color: COLORS.muted, fontSize: 11, lineHeight: 1.9, paddingTop: 30, borderTop: `1px solid ${COLORS.gold}15`, position: 'relative', zIndex: 2 }}>
        <p>⚠️ All guidance shared reflects personal lived experience — offered as advice only.</p>
        <p>Not professional advice. Always do what's right for you. 💛</p>
        <p style={{ marginTop: 10 }}>*Links may earn commission at no extra cost — supports Northstar & my family 💛</p>
        <p style={{ marginTop: 15, fontSize: 13, color: COLORS.gold, letterSpacing: '1px' }}>★ Northstar · Kassie © 2026 • All Rights Reserved ★</p>
      </div>
    </motion.div>
  );
}

function Schedule() {
  const [tasks, setTasks] = useState(() => { 
    const s = localStorage.getItem('northstar_tasks'); 
    return s ? JSON.parse(s) : []; 
  });
  const [newTask, setNewTask] = useState({ text: '', day: 'Mon', person: 'kassie' });
  useEffect(() => { localStorage.setItem('northstar_tasks', JSON.stringify(tasks)); }, [tasks]);
  const addTask = () => {
    if (!newTask.text.trim()) return;
    setTasks([...tasks, { id: Date.now(), ...newTask, done: false }]);
    setNewTask({ text: '', day: 'Mon', person: 'kassie' });
  };
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', background: COLORS.midnight, padding: '32px 24px 120px', color: COLORS.text }}
    >
      <h2 style={{ fontSize: 28, color: COLORS.gold, textAlign: 'center', marginBottom: 8 }}>📅 My Schedule</h2>
      <p style={{ textAlign: 'center', color: COLORS.muted, marginBottom: 24 }}>Gentle & steady — rest built in 💛</p>
      <div style={{ background: COLORS.card, borderRadius: 20, padding: 24, marginBottom: 24, border: `1px solid ${COLORS.gold}20` }}>
        <input 
          placeholder="What needs doing?" 
          value={newTask.text} 
          onChange={(e) => setNewTask({...newTask, text: e.target.value})}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: COLORS.input, border: 'none', color: COLORS.text, marginBottom: 14, fontSize: 16 }}
        />
        <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
          <select 
            value={newTask.person} 
            onChange={(e) => setNewTask({...newTask, person: e.target.value})}
            style={{ flex: 1, padding: 14, borderRadius: 12, background: COLORS.input, border: 'none', color: COLORS.text, fontSize: 16 }}
          >
            {FAMILY.map(m => <option key={m.id} value={m.id}>{m.emoji} {m.name}</option>)}
          </select>
          <select 
            value={newTask.day} 
            onChange={(e) => setNewTask({...newTask, day: e.target.value})}
            style={{ flex: 1, padding: 14, borderRadius: 12, background: COLORS.input, border: 'none', color: COLORS.text, fontSize: 16 }}
          >
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <button 
          onClick={addTask} 
          style={{ width: '100%', padding: 16, borderRadius: 12, background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.coral})`, color: '#000', fontWeight: 'bold', border: 'none', fontSize: 16, cursor: 'pointer' }}
        >
          ➕ Add Task
        </button>
      </div>
      {tasks.length === 0 && <p style={{ textAlign: 'center', color: COLORS.muted, padding: 30 }}>No tasks yet. Add your first one above! 💛</p>}
      {tasks.map(task => {
        const person = FAMILY.find(m => m.id === task.person);
        return (
          <div key={task.id} style={{ background: COLORS.card, borderRadius: 16, padding: 18, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `4px solid ${person?.color || COLORS.gold}`, opacity: task.done ? 0.6 : 1 }}>
            <span style={{ fontWeight: 'bold', fontSize: 16, textDecoration: task.done ? 'line-through' : 'none' }}>
              {person?.emoji} {task.day} — {task.text}
            </span>
            <button 
              onClick={() => setTasks(tasks.map(t => t.id === task.id ? {...t, done: !t.done} : t))}
              style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: task.done ? COLORS.coral : COLORS.input, color: '#fff', fontSize: 20, cursor: 'pointer', fontWeight: 'bold' }}
            >
              {task.done ? '✓' : '○'}
            </button>
          </div>
        );
      })}
    </motion.div>
  );
}

function BrainDump() {
  const [text, setText] = useState(() => localStorage.getItem('northstar_brain') || '');
  const [saved, setSaved] = useState(false);
  useEffect(() => { 
    localStorage.setItem('northstar_brain', text); 
    if (text) { setSaved(true); setTimeout(() => setSaved(false), 1500); }
  }, [text]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', background: COLORS.midnight, padding: '32px 24px 120px', color: COLORS.text }}
    >
      <h2 style={{ fontSize: 28, color: COLORS.coral, textAlign: 'center', marginBottom: 8 }}>🧠 Brain Dump</h2>
      <p style={{ textAlign: 'center', color: COLORS.muted, marginBottom: 24 }}>Get it all out — no rules, no spelling, just write 💛</p>
      {saved && <p style={{ textAlign: 'center', color: '#4ade80', marginBottom: 16 }}>✅ Saved safely ✨</p>}
      <textarea
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Everything buzzing in your head… let it all out here. No judgment, no limits. 💛"
        style={{ width: '100%', minHeight: '60vh', padding: 24, borderRadius: 20, background: COLORS.card, border: 'none', color: COLORS.text, fontSize: 16, lineHeight: 1.8, resize: 'none', outline: 'none' }}
      />
      <button 
        onClick={() => { if(window.confirm('Clear everything? Only when ready 💛')) setText(''); }}
        style={{ width: '100%', marginTop: 20, padding: 14, borderRadius: 12, background: '#ff444415', border: 'none', color: COLORS.coral, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}
      >
        🗑️ Clear When Ready
      </button>
    </motion.div>
  );
}
  

}







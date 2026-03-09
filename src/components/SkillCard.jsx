import { useState } from 'react';

export default function SkillCard({ title, desc, icon }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Bersihkan spasi berlebih pada icon, fallback ke emoji bintang jika kosong
  const cleanIcon = icon?.trim() || '✨';

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="card" 
      onMouseMove={handleMouseMove}
      style={{
        '--x': `${mousePosition.x}px`,
        '--y': `${mousePosition.y}px`,
      }}
    >
      <div className="icon">{cleanIcon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
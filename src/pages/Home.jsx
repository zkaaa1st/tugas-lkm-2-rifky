import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Hero />
      <section id="skill" className="section" ref={sectionRef}>
        {/* Animated background shapes */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>

        <div className="section-header">
          <span className="section-subtitle">✨ Teknologi yang Saya Kuasai ✨</span>
          <h2 className="section-title">
            <span className="title-gradient">Keahlian Saya</span>
          </h2>
          <p className="section-description">
            Berbagai teknologi modern yang saya gunakan untuk menciptakan solusi digital yang inovatif dan responsif.
          </p>
        </div>

        {/* Floating badges */}
        <div className="floating-badge badge-1">🔥 Hot</div>
        <div className="floating-badge badge-2">⚡ New</div>
        <div className="floating-badge badge-3">💡 Tips</div>

        <div className="grid-container">
          <div className="grid">
            <SkillCard
              title="HTML & CSS"
              desc="Membuat tampilan website modern"
              icon="🚀"
            />
            <SkillCard
              title="JavaScript"
              desc="Logika dan interaksi web"
              icon="⚡"
            />
            <SkillCard
              title="React"
              desc="Single Page Application"
              icon="⚛️"
            />
            <SkillCard
              title="Laravel"
              desc="Backend & API"
              icon="🔥"
            />
          </div>
        </div>

        {/* Fun fact section */}
        <div className="fun-fact">
          <div className="fact-item">
            <span className="fact-number">10+</span>
            <span className="fact-label">Proyek Selesai</span>
          </div>
          <div className="fact-item">
            <span className="fact-number">5</span>
            <span className="fact-label">Teknologi Dikuasai</span>
          </div>
          <div className="fact-item">
            <span className="fact-number">∞</span>
            <span className="fact-label">Semangat Belajar</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="section-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-dots"></div>
        </div>

        {/* Floating particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        {/* Parallax layer */}
        <div
          className="parallax-layer"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </section>
    </>
  );
}
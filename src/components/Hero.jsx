import React from 'react';
// Pastikan file gambar ada di folder public/assets/images.png
import smkImage from '../assets/images.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-greeting">Halo, Saya</h1>
        <h2 className="hero-name">Rifky Achmad</h2>
        <div className="hero-role">
          <span className="role-static">Saya seorang </span>
          <span className="role-dynamic">Developer</span>
        </div>
        <p className="hero-description">
          Siswa Kelas XI Rekayasa Perangkat Lunak A yang antusias dalam menciptakan solusi digital kreatif.
        </p>
        <div className="hero-buttons">
          <a href="#skill" className="btn btn-primary">Lihat Skill</a>
        </div>
      </div>

      {/* Foto SMK Pusdikhubad Cimahi dengan gaya elegan */}
      <div className="hero-image-wrapper">
        <img 
          src={smkImage} 
          alt="SMK Pusdikhubad Cimahi" 
          className="hero-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/140?text=SMK+PUSDIKHUBAD'; // fallback
          }}
        />
      </div>

      {/* Dekorasi lingkaran latar */}
      <div className="hero-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
}
export default function About({ name = 'Rifky Achmad', school = 'SMK PUDIKHUBAD CIMAHI' }) {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          <span className="about-title-bg">Tentang Saya</span>
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Saya adalah siswa kelas XI Rekayasa Perangkat Lunak yang memiliki minat
              di bidang pemrograman web dan pengembangan aplikasi. Saya selalu antusias
              mempelajari teknologi baru dan menciptakan solusi kreatif.
            </p>
          </div>

          <div className="about-info">
            <div className="info-item">
              <div className="info-icon">🧑‍🎓</div>
              <div className="info-detail">
                <span className="info-label">Nama</span>
                <span className="info-value">{name}</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📇</div>
              <div className="info-detail">
                <span className="info-label">Kelas</span>
                <span className="info-value">XI RPL A</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🏫</div>
              <div className="info-detail">
                <span className="info-label">Sekolah</span>
                <span className="info-value">{school}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemen dekoratif */}
        <div className="about-decoration">
          <div className="dot-1"></div>
          <div className="dot-2"></div>
          <div className="circle-1"></div>
        </div>
      </div>
    </section>
  );
}
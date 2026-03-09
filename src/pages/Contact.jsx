import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!form.nama || !form.email || !form.pesan) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
      return;
    }
    setStatus("loading");
    // Simulasi pengiriman
    setTimeout(() => {
      setStatus("success");
      setForm({ nama: "", email: "", pesan: "" });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">Hubungi Saya</span>
          <h2 className="contact-title">
            <span className="title-gradient">Mari Bekerja Sama</span>
          </h2>
          <p className="contact-description">
            Punya pertanyaan atau ingin berdiskusi? Kirim pesan melalui form di bawah.
          </p>
        </div>

        <div className="contact-content">
          {/* Info Kontak */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:rifky@gmail.com">rifky@gmail.com</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>Telepon</h4>
                <a href="tel:+628123456789">+62 812-3456-789</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Lokasi</h4>
                <p>Indonesia</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">🔗</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>

          {/* Form Kontak */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Masukkan nama Anda"
                value={form.nama}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contoh@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pesan">Pesan</label>
              <textarea
                id="pesan"
                name="pesan"
                rows="5"
                placeholder="Tulis pesan Anda di sini..."
                value={form.pesan}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {status === "success" && (
              <div className="notification success">
                ✅ Pesan berhasil dikirim!
              </div>
            )}
            {status === "error" && (
              <div className="notification error">
                ⚠️ Semua field harus diisi!
              </div>
            )}
          </form>
        </div>

        {/* Dekorasi */}
        <div className="contact-decoration">
          <div className="deco-circle"></div>
          <div className="deco-dots"></div>
        </div>
      </div>
    </section>
  );
}
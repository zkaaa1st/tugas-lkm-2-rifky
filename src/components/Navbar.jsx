import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const nav = (to, label, icon) => (
    <Link
      to={to}
      className={pathname === to ? "nav active" : "nav"}
    >
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      <span className="nav-indicator"></span>
    </Link>
  );

  return (
    <header className="navbar">
      <div className="logo-container">
        <h1 className="logo">Portofolio XI RPL</h1>
        <div className="logo-glow"></div>
      </div>
      <nav className="menu">
        {nav("/", "Home", "🏠")}
        {nav("/about", "About", "👤")}
        {nav("/contact", "Contact", "📞")}
      </nav>
    </header>
  );
}
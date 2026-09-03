import { profile } from "../lib/data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z" />
            </svg>
            {profile.location}
          </span>

          <h1 className="serif hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-bio">{profile.bio}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <img src={profile.photo} alt={profile.name} className="hero-photo" />
        </div>
      </div>
    </section>
  );
}

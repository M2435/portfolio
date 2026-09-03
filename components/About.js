import { profile, education } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="serif section-title">About</h2>
        <p className="section-lead">{profile.bio}</p>

        {education.map((edu) => (
          <div className="about-card" key={edu.degree}>
            <div className="about-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
              </svg>
            </div>
            <div>
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>
                {edu.period} · {edu.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { profile } from "../lib/data";

export default function Resume() {
  return (
    <section id="resume" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="serif section-title" style={{ textAlign: "center" }}>
          Resume
        </h2>

        <div className="resume-card">
          <div className="resume-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M9 13h6M9 17h6M9 9h1" />
            </svg>
          </div>
          <h3>{profile.name}</h3>
          <p>Full resume — education, projects, skills, and achievements.</p>

          <div className="resume-actions">
            <a href={profile.resumeFile} download className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
              Download PDF
            </a>
            <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

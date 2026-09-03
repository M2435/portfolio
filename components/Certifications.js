"use client";

import { useEffect, useState } from "react";
import { certifications } from "../lib/data";

export default function Certifications() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certifications" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="serif section-title">Certifications</h2>

        {certifications.length === 0 ? (
          <div className="cert-empty">
            Certifications are on the way — add entries to the{" "}
            <code>certifications</code> array in <code>lib/data.js</code> once
            you have the images, and they&apos;ll appear here automatically.
          </div>
        ) : (
          <div className="cert-grid">
            {certifications.map((cert) => (
              <button
                type="button"
                className="cert-card"
                key={cert.name}
                onClick={() => setActive(cert)}
              >
                <img src={cert.image} alt={`${cert.name} certificate`} />
                <div className="cert-card-body">
                  <h4>{cert.name}</h4>
                  <p>
                    {cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div className="lightbox-overlay" onClick={() => setActive(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <button className="lightbox-back" onClick={() => setActive(null)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
            <div className="lightbox-body">
              <img src={active.image} alt={`${active.name} certificate`} />
              <div className="lightbox-caption">
                <h4>{active.name}</h4>
                <p>
                  {active.issuer}
                  {active.date ? ` · ${active.date}` : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

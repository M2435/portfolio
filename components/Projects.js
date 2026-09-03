"use client";

import { useMemo, useState } from "react";
import { profile, projects } from "../lib/data";

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="serif section-title">Projects</h2>

        <div className="filter-row">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-chip ${active === tag ? "active" : ""}`}
              onClick={() => setActive(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-head">
                <h3>{project.title}</h3>
                {project.featured && <span className="badge">Featured</span>}
              </div>
              <p className="project-date">{project.date}</p>
              <p className="desc">{project.description}</p>

              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
                  </svg>
                  View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

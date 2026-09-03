import { achievements } from "../lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="serif section-title">Achievements</h2>
        <div className="achievement-list">
          {achievements.map((a) => (
            <div className="achievement-card" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

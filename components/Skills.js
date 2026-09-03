import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="serif section-title">Skills</h2>

        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <p className="skill-label">{group}</p>
            <div className="chip-row">
              {items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

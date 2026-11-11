import { experience } from '../data.js'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section id="deneyim" title="Deneyim">
      <div className="xp">
        {experience.map((j) => (
          <div className="job" key={j.title}>
            <div className="when">{j.when}</div>
            <div>
              <h3>{j.title}</h3>
              <div className="co">{j.company}</div>
              <ul>{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

import { skills } from '../data.js'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="yetenekler" title="Yetenekler">
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <div className="tags">
              {g.primary.map((t) => <span className="tag" key={t}>{t}</span>)}
              {g.other.map((t) => <span className="tag n" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

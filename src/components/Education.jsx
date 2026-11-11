import { education } from '../data.js'
import Section from './Section.jsx'

export default function Education() {
  return (
    <Section id="egitim" title="Eğitim ve Sertifikalar">
      <div>
        <div className="edu-main">
          <div>
            <h3>{education.degree}</h3>
            <div className="co" style={{ color: 'var(--muted)' }}>{education.school}</div>
          </div>
          <span className="meta">{education.years}</span>
        </div>
        <ul className="certs">
          {education.certs.map(([name, year]) => (
            <li key={name}><span>{name}</span><span>{year}</span></li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

import { profile, projects } from '../data.js'
import Section from './Section.jsx'

// "[[+%80]]" gibi işaretli parçaları vurgulu metriğe çevirir
function Highlighted({ text }) {
  return text.split(/(\[\[.*?\]\])/).map((part, i) =>
    part.startsWith('[[')
      ? <span className="hl" key={i}>{part.slice(2, -2)}</span>
      : part
  )
}

function Project({ p }) {
  return (
    <article className={`proj ${p.featured ? 'featured' : ''}`}>
      <div className="proj-top">
        <h3>{p.name}</h3>
        {p.badge ? <span className="badge">{p.badge}</span> : <span className="meta">{p.date}</span>}
      </div>
      <div className="role">
        {p.role}{p.badge && <> · <span className="meta">{p.date}</span></>}
      </div>
      <div className="flow">
        <div><div className="k">Sorun</div><p>{p.problem}</p></div>
        <div><div className="k">Çözüm</div><p>{p.solution}</p></div>
        <div className="res"><div className="k">{p.resultLabel || 'Sonuç'}</div><p><Highlighted text={p.result} /></p></div>
      </div>
      <div className="tags">
        {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projeler" title="Projeler" count={`${String(projects.length).padStart(2, '0')} seçili iş`}>
      <div className="projects">
        {projects.map((p) => <Project p={p} key={p.name} />)}
        <p className="more">
          SHOP.CO e-ticaret uygulaması ve Tıbbi Tanı Destek Uygulaması{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub profilimde</a>.
        </p>
      </div>
    </Section>
  )
}

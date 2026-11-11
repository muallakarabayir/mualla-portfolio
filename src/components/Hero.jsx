import { profile, stack } from '../data.js'
import Branch from './Branch.jsx'
import ContactButtons from './ContactButtons.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <Branch />
      <div>
        <div className="eyebrow"><span className="dot" />{profile.status}</div>
        <h1>
          <span className="name">{profile.name}</span>
          <span className="title"><span>{profile.titleAccent}</span> {profile.title}</span>
        </h1>
        <p className="lead">{profile.lead}</p>
        <ContactButtons />
      </div>
      <aside className="stack" aria-label="Teknoloji özeti">
        <div className="hd"><span>stack.yaml</span><span>v2026</span></div>
        <dl>
          {stack.map(([k, v]) => (
            <div key={k} style={{ display: 'contents' }}>
              <dt>{k}</dt><dd>{v}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </header>
  )
}

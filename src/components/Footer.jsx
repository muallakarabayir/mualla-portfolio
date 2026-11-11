import { profile } from '../data.js'
import ContactButtons from './ContactButtons.jsx'

export default function Footer() {
  return (
    <footer id="iletisim">
      <div>
        <h2>Birlikte çalışalım.</h2>
        <p className="mono" style={{ fontSize: 15, color: 'var(--fg)', userSelect: 'all' }}>{profile.email}</p>
      </div>
      <ContactButtons primary="email" style={{ marginTop: 0 }} />
    </footer>
  )
}

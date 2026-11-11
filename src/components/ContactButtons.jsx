import { profile } from '../data.js'
import { useCopyEmail } from '../hooks/useCopyEmail.js'

export default function ContactButtons({ primary = 'github', style }) {
  const [status, copy] = useCopyEmail()
  const label = status === 'copied' ? 'Kopyalandı' : 'E-postayı kopyala'

  const github = (
    <a key="gh" className={`btn ${primary === 'github' ? 'primary' : ''}`} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
  )
  const linkedin = (
    <a key="li" className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  )
  const mail = (
    <button key="mail" type="button" className={`btn ${primary === 'email' ? 'primary' : ''}`} onClick={copy}>{label}</button>
  )

  return (
    <div className="contact" style={style}>
      {primary === 'email' ? [mail, github, linkedin] : [github, linkedin, mail]}
      <span className="copied" aria-live="polite">
        {status === 'failed' ? `${profile.email} adresini seçip kopyalayın` : ''}
      </span>
    </div>
  )
}

import { useState } from 'react'
import { profile } from '../data.js'

export function useCopyEmail() {
  const [status, setStatus] = useState('idle') // idle | copied | failed

  const copy = () => {
    const done = (s) => { setStatus(s); setTimeout(() => setStatus('idle'), 2200) }
    try {
      navigator.clipboard.writeText(profile.email).then(() => done('copied'), () => done('failed'))
    } catch {
      done('failed')
    }
  }

  return [status, copy]
}

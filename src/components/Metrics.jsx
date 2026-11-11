import { metrics } from '../data.js'

export default function Metrics() {
  return (
    <div className="metrics">
      {metrics.map((m) => (
        <div className="metric" key={m.label}>
          <div className="n">{m.value}<small>{m.unit}</small></div>
          <div className="l">{m.label}</div>
        </div>
      ))}
    </div>
  )
}

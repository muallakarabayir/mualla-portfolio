export default function Section({ id, title, count, children }) {
  return (
    <section className="block" id={id}>
      <div className="side">
        <h2>{title}{count && <span className="count">{count}</span>}</h2>
      </div>
      {children}
    </section>
  )
}

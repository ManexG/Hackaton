import { Link } from 'react-router-dom'
import { modules } from '../modules.jsx'

export default function Dashboard() {
  return (
    <>
      <header className="page-header">
        <h1>Ciudad Viva</h1>
        <p>Panel principal: accede a cada módulo de la plataforma.</p>
      </header>
      <div className="grid">
        {modules.map((m) => (
          <Link key={m.path} to={m.path} className="card">
            <span className="card-icon">{m.icon}</span>
            <h2>{m.title}</h2>
            <p>{m.description}</p>
            <span className={`badge ${m.status}`}>{m.status}</span>
          </Link>
        ))}
      </div>
    </>
  )
}

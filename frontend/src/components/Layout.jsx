import { NavLink, Outlet } from 'react-router-dom'
import { modules } from '../modules.jsx'

export default function Layout() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <NavLink to="/" className="brand">🌆 Ciudad Viva</NavLink>
        <nav>
          <NavLink to="/" end>🏠 Dashboard</NavLink>
          {modules.map((m) => (
            <NavLink key={m.path} to={m.path}>{m.icon} {m.title}</NavLink>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

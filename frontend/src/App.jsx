import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { modules } from './modules.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          {modules.map((m) => (
            <Route key={m.path} path={`${m.path}/*`} element={m.element} />
          ))}
          <Route path="*" element={<h1>404 · Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

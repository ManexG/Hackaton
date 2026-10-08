// Registro de módulos de Ciudad Viva.
// Para agregar uno: añade una entrada aquí y reemplaza su `element` por la página real.
import ModulePlaceholder from './components/ModulePlaceholder.jsx'

export const modules = [
  {
    path: '/mapa',
    title: 'Mapa interactivo',
    description: 'Ciudad inteligente: visualiza placas, zonas y puntos de interés.',
    icon: '🗺️',
    status: 'pendiente',
    element: <ModulePlaceholder title="Mapa interactivo" />,
  },
  {
    path: '/reportes',
    title: 'Reportes',
    description: 'Registra y consulta reportes ciudadanos.',
    icon: '📋',
    status: 'pendiente',
    element: <ModulePlaceholder title="Reportes" />,
  },
  {
    path: '/placas',
    title: 'Placas QR',
    description: 'Página individual por placa, accesible mediante código QR.',
    icon: '🔳',
    status: 'pendiente',
    element: <ModulePlaceholder title="Placas QR" />,
  },
]

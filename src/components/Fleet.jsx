import Seam from './Seam'
import './Fleet.css'

// ← Personaliza con los tipos de vehículos/motores que atienden
const vehicles = [
  {
    emoji: '🚛',
    title: 'Camiones de Carga',
    brands: ['← Marcas que atiendes', 'Ej: Kenworth, Freightliner', 'International, Volvo'],
  },
  {
    emoji: '🚌',
    title: 'Autobuses',
    brands: ['← Marcas que atiendes', 'Ej: Mercedes-Benz', 'Dina, Volkswagen'],
  },
  {
    emoji: '🚜',
    title: 'Maquinaria Agrícola',
    brands: ['← Marcas que atiendes', 'Ej: John Deere', 'Case, Massey Ferguson'],
  },
  {
    emoji: '🏗️',
    title: 'Maquinaria de Construcción',
    brands: ['← Marcas que atiendes', 'Ej: Caterpillar, Komatsu', 'Hitachi, Doosan'],
  },
  {
    emoji: '🚐',
    title: 'Vehículos de Pasajeros',
    brands: ['← Marcas que atiendes', 'Ej: Mercedes Sprinter', 'Iveco, Ford Transit'],
  },
  {
    emoji: '⚙️',
    title: 'Generadores',
    brands: ['← Marcas que atiendes', 'Ej: Cummins, Perkins', 'Caterpillar, Kohler'],
  },
]

export default function Fleet() {
  return (
    <section id="flota" className="fleet">
      <div className="fleet__bg" />
      <div className="container">
        <div className="fleet__header">
          <span className="section-label" style={{ color: 'var(--blue-300)' }}>
            Cobertura
          </span>
          <h2 className="section-title" style={{ color: 'white' }}>
            VEHÍCULOS QUE<br /><span style={{ color: 'var(--blue-300)' }}>ATENDEMOS</span>
          </h2>
          <p className="fleet__lead">
            {/* ← Personaliza este texto */}
            Brindamos servicio especializado a una amplia variedad de vehículos
            y maquinaria con motor diesel.
          </p>
        </div>

        <div className="fleet__grid">
          {vehicles.map((v, i) => (
            <div key={i} className="fleet-card animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="fleet-card__emoji">{v.emoji}</div>
              <h3 className="fleet-card__title">{v.title}</h3>
              <ul className="fleet-card__brands">
                {v.brands.map((b, j) => (
                  <li key={j} className="fleet-card__brand">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Seam toColor="var(--gray-50)" />
    </section>
  )
}

import { Wrench, Syringe, Settings, Fan } from 'lucide-react'
import './Services.css'

// ← Personaliza estos servicios con los de tu empresa
const services = [
  {
    icon: Wrench,
    title: 'Mantenimiento Preventivo',
    desc: 'Cambio de aceite, filtros, revisión general y más.',
    tag: 'Popular',
  },
  {
    icon: Settings,
    title: 'Servicio de reparación de bombas',
    desc: 'Limpieza , reparación y calibración de bombas de inyección diesel.',
    tag: null,
  },
  {
    icon: Syringe,
    title: 'Servicio a inyectores',
    desc: 'Limpieza, reparación y calibración de inyectores de diesel y gasolina.',
    tag: null,
  },
  {
    icon: Fan,
    title: 'Servicio a turbo cargadores',
    desc: 'Servicio de reparación y mantenimiento de turbo cargadores agricolas e industriales.',
    tag: null,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">

        <div className="services__header">
          <span className="section-label">Lo que hacemos</span>
          <h2 className="section-title">
            NUESTROS<br /><span>SERVICIOS</span>
          </h2>
          <p className="services__lead">
            {/* ← Personaliza este párrafo */}
            Ofrecemos soluciones completas para el mantenimiento y reparación
            de motores diesel, con tecnología y experiencia que garantizan resultados.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="service-card animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                {s.tag && <span className="service-card__tag">{s.tag}</span>}
                <div className="service-card__icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__line" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
import { Wrench, Zap, Settings, Truck, Shield, Clock } from 'lucide-react'
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
    title: 'Servico de reparacion de bombas',
    desc: 'Limpieza , reparación y calibración de bombas de inyección diesel.',
    tag: null,
  },
  {
    icon: Zap,
    title: 'Sistema de Inyección',
    desc: 'Reparación de inyectores. Limpieza, calibración y reemplazo de inyectores deisel y gasolina.',
    tag: null,
  },
  {
    icon: Truck,
    title: 'Flotillas Empresariales',
    desc: 'Planes de mantenimiento para flotillas de camiones y vehículos de carga. Contratos especiales.',
    tag: 'Empresas',
  },
  {
    icon: Shield,
    title: 'Servicio a turbocargadores',
    desc: 'Reparación y mantenimiento de turbocargadores para motores diesel y gasolina.',
    tag: null,
  },
  {
    icon: Clock,
    title: 'Servicio Express',
    desc: 'Atención rápida para servicios de menor complejidad. Sin cita previa en horario disponible.',
    tag: 'Rápido',
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

import { Target, Eye, HeartHandshake } from 'lucide-react'
import Seam from './Seam'
import './Mission.css'

const valores = [
  'Responsabilidad',
  'Honestidad',
  'Compromiso',
  'Calidad',
  'Trabajo en equipo',
  'Mejora continua',
]

export default function Mission() {
  return (
    <section id="valores" className="mission">
      <div className="mission__bg" />
      <div className="container">
        <div className="mission__header">
          <span className="section-label" style={{ color: 'var(--blue-300)' }}>
            Lo que nos define
          </span>
          <h2 className="section-title" style={{ color: 'white' }}>
            MISIÓN, VISIÓN<br /><span style={{ color: 'var(--blue-300)' }}>Y VALORES</span>
          </h2>
        </div>

        <div className="mission__grid">
          <div className="mission-card animate-fade-up">
            <div className="mission-card__icon">
              <Target size={24} strokeWidth={1.8} />
            </div>
            <h3 className="mission-card__title">Misión</h3>
            <p className="mission-card__text">
              Brindar servicios especializados en mantenimiento y reparación de
              motores e inyectores diésel, garantizando calidad, eficiencia y
              confianza a nuestros clientes del sector transporte.
            </p>
          </div>

          <div className="mission-card animate-fade-up" style={{ animationDelay: '0.07s' }}>
            <div className="mission-card__icon">
              <Eye size={24} strokeWidth={1.8} />
            </div>
            <h3 className="mission-card__title">Visión</h3>
            <p className="mission-card__text">
              Ser una empresa líder regional en el servicio especializado de
              motores diésel, reconocida por su tecnología, profesionalismo y
              atención al cliente.
            </p>
          </div>

          <div className="mission-card animate-fade-up" style={{ animationDelay: '0.14s' }}>
            <div className="mission-card__icon">
              <HeartHandshake size={24} strokeWidth={1.8} />
            </div>
            <h3 className="mission-card__title">Valores</h3>
            <ul className="mission-card__chips">
              {valores.map((v, i) => (
                <li key={i} className="mission-card__chip">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Seam toColor="var(--gray-50)" />
    </section>
  )
}

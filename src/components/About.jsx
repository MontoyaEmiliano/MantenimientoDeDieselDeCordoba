import { CheckCircle, Wrench } from 'lucide-react'
import Seam from './Seam'
import './About.css'

const reasons = [
  'Equipo de diagnóstico de última generación',
  'Refacciones originales y de calidad',
  'Garantía en todos los servicios realizados',
  'Atención personalizada y sin intermediarios',
]

export default function About() {
  return (

    <section id="nosotros" className="about">

      {/* Main content */}
      <div className="container about__body">
        <div className="about__text">
          <span className="section-label">Quiénes somos</span>
          <h2 className="section-title">
            EXPERIENCIA<br /><span>Y CONFIANZA</span>
          </h2>

          <p className="about__paragraph">
            Mantenimiento Diesel de Córdoba es una empresa fundada con el
            objetivo de brindar servicios de alta calidad en el mantenimiento
            y reparación de motores a diesel en la región de Tehuacán Puebla y alrededores.
          </p>

          <p className="about__paragraph">
            Nuestro compromiso es garantizar
            el máximo rendimiento y durabilidad de tu motor.
          </p>

          <ul className="about__reasons">
            {reasons.map((r, i) => (
              <li key={i} className="about__reason">
                <CheckCircle size={18} className="about__reason-icon" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="about__visual">
          {/* ← Puedes reemplazar este placeholder con una imagen real */}
          {/* <img src="/tu-imagen.jpg" alt="Taller" className="about__img" /> */}
          <div className="about__img-placeholder">
            <Wrench className="about__img-watermark" strokeWidth={1} />
            <div className="about__img-overlay">
              <span className="about__img-overlay-arrow">←</span>
              Reemplaza este bloque con una foto real del taller
            </div>
            <div className="about__img-badge">
              <span className="about__img-badge-num">25 +</span>
              <span className="about__img-badge-txt">Años de<br />experiencia</span>
            </div>
          </div>
        </div>
      </div>

      <Seam toColor="var(--blue-600)" />
    </section>
  )
}

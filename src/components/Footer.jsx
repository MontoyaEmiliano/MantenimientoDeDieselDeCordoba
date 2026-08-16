import { Wrench } from 'lucide-react'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon"><Wrench size={18} /></div>
            <div>
              <span className="footer__logo-main">DIESEL Córdoba</span>
              <span className="footer__logo-sub">Mantenimiento Especializado</span>
            </div>
          </div>
          <p className="footer__tagline">
            {/* ← Personaliza con tu slogan */}
            Tu motor, nuestra responsabilidad.
          </p>
        </div>

        <div className="footer__links">
          <p className="footer__links-title">Navegación</p>
          <nav>
            {['Inicio','Servicios','Nosotros','Valores','Contacto'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">{l}</a>
            ))}
          </nav>
        </div>

        <div className="footer__links">
          <p className="footer__links-title">Contacto rápido</p>
          <p className="footer__contact-item">[Tu teléfono]</p>
          <p className="footer__contact-item">[Tu correo]</p>
          <p className="footer__contact-item">Córdoba, Veracruz, México</p>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Mantenimiento de Diesel de Córdoba. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

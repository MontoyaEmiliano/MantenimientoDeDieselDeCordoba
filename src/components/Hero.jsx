import { ChevronDown, Phone, MapPin } from 'lucide-react'
import Seam from './Seam'
import logoImg from '../assets/logo MDC nuevo.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">

      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__bg-grid" />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-shape hero__bg-shape--1" />
        <div className="hero__bg-shape hero__bg-shape--2" />
      </div>

      <div className="container hero__inner">

        <img src={logoImg} alt="Mantenimiento Diesel de Córdoba" className="hero__logo-mark" />

        {/* Badge */}
        <div className="hero__badge animate-fade-up">
          <span className="hero__badge-dot" />
          Especialistas en inyección en Tehuacán, Puebla
        </div>

        {/* Headline */}
        <h1 className="hero__title animate-fade-up delay-1">
          MANTENIMIENTO
          <br />
          <span className="hero__title-outline">DIESEL</span>
          <br />
          DE CÓRDOBA
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle animate-fade-up delay-2">
          Especialistas en reparación y mantenimiento de motores a diesel.
          Más de <strong>25 años</strong> de experiencia garantizando el rendimiento de tu flotilla.
        </p>

        {/* CTAs */}
        <div className="hero__actions animate-fade-up delay-3">
          <a href="#contacto" className="hero__btn hero__btn--primary">
            <Phone size={18} />
            Llámanos ahora
          </a>
          <a href="#servicios" className="hero__btn hero__btn--secondary">
            Ver servicios
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Quick info pills */}
        <div className="hero__pills animate-fade-up delay-4">
          <div className="hero__pill">
            <MapPin size={14} />
            <span>Tehuacán, Puebla</span>
          </div>
          <div className="hero__pill">
            <span>⏱</span>
            <span>[8:30 AM - 7:00 PM]</span>
          </div>
          <div className="hero__pill">
            <span>✔</span>
            <span>Lunes a Viernes</span>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <a href="#servicios" className="hero__scroll-hint">
        <ChevronDown size={20} />
      </a>

      {/* Costura hacia la siguiente sección */}
      <Seam toColor="var(--blue-50)" />
    </section>
  )
}

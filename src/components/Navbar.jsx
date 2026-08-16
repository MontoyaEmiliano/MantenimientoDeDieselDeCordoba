import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/logo MDC nuevo.png'
import './Navbar.css'

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Valores',   href: '#valores' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#inicio" className="navbar__logo">
          <img src={logoImg} alt="MDC Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Mantenimiento</span>
            <span className="navbar__logo-sub">Diesel de Córdoba</span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contacto" className="navbar__cta">
          Cotizar ahora
        </a>

        {/* Mobile toggle */}
        <button className="navbar__toggle" onClick={() => setOpen(o => !o)} aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="navbar__drawer-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contacto" className="navbar__cta navbar__cta--drawer" onClick={() => setOpen(false)}>
          Cotizar ahora
        </a>
      </div>
    </header>
  )
}
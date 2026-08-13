import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Seam from './Seam'
import './Contact.css'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '2383827577',
    href: 'tel:+522383827577',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'mdiesel_tehuacan@live.com.mx',
    href: 'mailto:mdiesel_tehuacan@live.com.mx',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Enrique Mont Solórzano 2380, Reforma, 75760 Tehuacán, Pue., Tehuacán, Puebla',
    href: 'https://www.google.com/maps/place/MANTENIMIENTO+DIESEL+DE+CORDOBA+TEHUACAN/@18.4642588,-97.4122147,17z/data=!3m1!4b1!4m6!3m5!1s0x85c5bd67680258ad:0x78070447b66d5196!8m2!3d18.4642588!4d-97.4096398!16s%2Fg%2F11g0gdwvzp?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun-Vie: [8:30 AM] - [7:00 PM]',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact__inner">

        {/* Left column */}
        <div className="contact__info">
          <span className="section-label">Estamos aquí para ti</span>
          <h2 className="section-title">
            CONTÁCTANOS
          </h2>

          <p className="contact__lead">
            {/* ← Personaliza este mensaje */}
            ¿Necesitas un presupuesto o tienes dudas? Comunícate con nosotros
            y con gusto te asesoramos sin compromiso.
          </p>

          <div className="contact__cards">
            {contactInfo.map((c, i) => {
              const Icon = c.icon
              const inner = (
                <>
                  <div className="contact-card__icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="contact-card__label">{c.label}</p>
                    <p className="contact-card__value" style={{ whiteSpace: 'pre-line' }}>{c.value}</p>
                  </div>
                </>
              )
              return c.href ? (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card contact-card--link">
                  {inner}
                </a>
              ) : (
                <div key={i} className="contact-card">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right column – map placeholder */}
        <div className="contact__map-col">
          <div className="contact__map-placeholder">
            {
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.086441784419!2d-97.4122146850968!3d18.46425887720309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bd67680258ad%3A0x78070447b66d5196!2sMANTENIMIENTO%20DIESEL%20DE%20CORDOBA%20TEHUACAN!5e0!3m2!1ses-419!2smx!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            }
          </div>

          {/* WhatsApp CTA card — ← Cambia el número de abajo por el tuyo */}
          <a
            href="https://wa.me/522381270968"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__whatsapp"
          >
            <div className="contact__whatsapp-icon">💬</div>
            <div>
              <p className="contact__whatsapp-title">¡Escríbenos por WhatsApp!</p>
              <p className="contact__whatsapp-sub">Respuesta rápida garantizada</p>
            </div>
            <span className="contact__whatsapp-arrow">→</span>
          </a>
        </div>

      </div>

      <Seam toColor="var(--blue-900)" />
    </section>
  )
}

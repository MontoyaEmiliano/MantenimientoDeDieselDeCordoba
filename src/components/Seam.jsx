import './Seam.css'

/**
 * Costura diagonal entre secciones — como un corte de lámina.
 * Se coloca como ÚLTIMO hijo de la sección que "termina" (position: relative
 * requerido en esa sección), y revela el color de la siguiente sección a
 * través de un corte diagonal con un filo ámbar, el detalle de firma del sitio.
 */
export default function Seam({ toColor, flip = false }) {
  const wedge = flip ? '0,0 1200,64 1200,0' : '0,64 1200,0 1200,64'
  const edge  = flip ? '0,0 1200,64' : '0,64 1200,0'

  return (
    <div className="seam" aria-hidden="true">
      <svg
        className="seam__svg"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
      >
        <polygon points={wedge} fill={toColor} />
        <polyline points={edge} className="seam__edge" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  )
}

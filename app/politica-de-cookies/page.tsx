import type { Metadata } from 'next'
import Legal from '../Legal'
import { EMPRESA } from '../Pie'

export const metadata: Metadata = {
  title: 'Política de cookies | Johann Sebastian Guevara',
  description: 'Uso de cookies en el portafolio de Johann Sebastian Guevara.',
}

export default function Page() {
  return (
    <Legal titulo="Política de cookies">
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información de tu visita.
      </p>

      <h2>2. ¿Este sitio usa cookies?</h2>
      <p>
        No. Este portafolio no instala cookies propias ni de terceros, y no usa herramientas de analítica, publicidad o
        seguimiento. Las tipografías se sirven desde el propio sitio, sin conexión a servicios externos. Por eso no
        mostramos un aviso de consentimiento de cookies.
      </p>

      <h2>3. Sitios enlazados</h2>
      <p>
        Al abrir un enlace externo (demos de proyectos, WhatsApp, LinkedIn, GitHub, Instagram o Facebook) sales de este
        sitio. Esos servicios pueden usar sus propias cookies, según sus políticas.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes ver, bloquear o borrar las cookies en cualquier momento desde la configuración de tu navegador.
      </p>

      <h2>5. Cambios y contacto</h2>
      <p>
        Si en el futuro se añaden cookies, actualizaremos esta política y pediremos tu consentimiento cuando
        corresponda. Para consultas, escribe a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>
    </Legal>
  )
}

import type { Metadata } from 'next'
import Legal from '../Legal'
import { EMPRESA } from '../Pie'
import { BotonPreferenciasCookies } from '../AvisoCookies'

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
        Solo si lo aceptas. Este portafolio usa Google Analytics 4, un servicio de Google LLC, para medir de forma
        agregada cuántas personas lo visitan, desde qué país y tipo de dispositivo, y qué secciones consultan. No usa
        cookies de publicidad.
      </p>
      <p>
        Google Analytics no se carga hasta que pulsas &quot;Aceptar&quot; en el aviso de cookies. Si lo rechazas, no se
        instala ninguna cookie de analítica. Si lo aceptas, se instalan estas cookies de Google:
      </p>
      <ul>
        <li>
          <strong>_ga</strong>: distingue visitantes de forma anónima. Dura 2 años.
        </li>
        <li>
          <strong>_ga_LHV0YH4YCX</strong>: mantiene el estado de la sesión. Dura 2 años.
        </li>
      </ul>
      <p>
        Tu elección se guarda en el almacenamiento local de tu navegador (no es una cookie) para no volver a preguntarte.
        Las tipografías se sirven desde el propio sitio, sin conexión a servicios externos.
      </p>

      <h2>3. Sitios enlazados</h2>
      <p>
        Al abrir un enlace externo (demos de proyectos, WhatsApp, LinkedIn, GitHub, Instagram o Facebook) sales de este
        sitio. Esos servicios pueden usar sus propias cookies, según sus políticas.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes cambiar tu elección cuando quieras con el botón de abajo o con &quot;Preferencias de cookies&quot; en el
        pie de página. Si retiras tu consentimiento, borramos las cookies de Google Analytics. También puedes ver,
        bloquear o borrar las cookies desde la configuración de tu navegador.
      </p>
      <p>
        <BotonPreferenciasCookies className="btn btn-secundario" />
      </p>

      <h2>5. Cambios y contacto</h2>
      <p>
        Si cambiamos las cookies que usamos, actualizaremos esta política y volveremos a pedir tu consentimiento cuando
        corresponda. Para consultas, escribe a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>
    </Legal>
  )
}

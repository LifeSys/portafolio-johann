// Pie de página con la marca LifeSystem Solutions, enlaces legales y contacto.
// Se usa en la página principal y en las páginas legales.

const WEB = 'https://www.lifesystemsolution.online'

export const EMPRESA = {
  nombre: 'LifeSystem Solutions',
  web: WEB,
  email: 'lifesystemsolutionsac@gmail.com',
  telefono: '957 111 471',
  whatsapp: 'https://wa.me/51957111471',
  direccion: 'Jr. Hermilio Valdizán 289, Jesús María, Lima, Perú',
  instagram: 'https://www.instagram.com/life_system.solution/',
  facebook: 'https://www.facebook.com/profile.php?id=61596041344501',
}

const SERVICIOS = [
  { label: 'Páginas web', href: `${WEB}/servicios/paginas-web` },
  { label: 'Sistemas web', href: `${WEB}/servicios/sistemas-web` },
  { label: 'Sistemas empresariales', href: `${WEB}/servicios/sistemas-empresariales` },
  { label: 'ERP', href: `${WEB}/servicios/erp` },
  { label: 'Automatización', href: `${WEB}/servicios/automatizacion` },
  { label: 'Hosting y soporte', href: `${WEB}/servicios/hosting-y-soporte` },
]

const EMPRESA_LEGAL = [
  { label: 'Quiénes somos', href: `${WEB}/nosotros`, externo: true },
  { label: 'Proyectos', href: `${WEB}/proyectos`, externo: true },
  { label: 'Contacto', href: `${WEB}/contacto`, externo: true },
  { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
  { label: 'Libro de reclamaciones', href: `${WEB}/libro-de-reclamaciones`, externo: true },
]

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const

export default function Pie() {
  const year = new Date().getFullYear()
  return (
    <footer className="pie">
      <div className="marco pie-columnas">
        <div className="pie-marca">
          <a href={WEB} {...externo} className="ls-logo" aria-label="LifeSystem Solutions, sitio web">
            <span className="ls-sello" aria-hidden="true">
              LS
            </span>
            <span className="ls-nombre">
              LifeSystem
              <small>Solutions</small>
            </span>
          </a>
          <p className="ls-lema">Tecnología · Sistemas · Resultados</p>
          <p>
            Soluciones digitales que impulsan tu negocio a través de arquitecturas de software a medida. Este
            portafolio fue diseñado y desarrollado por LifeSystem Solutions.
          </p>
        </div>

        <nav aria-label="Servicios de LifeSystem Solutions">
          <h2>Servicios</h2>
          <ul>
            {SERVICIOS.map((s) => (
              <li key={s.label}>
                <a href={s.href} {...externo}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Empresa e información legal">
          <h2>Empresa y legal</h2>
          <ul>
            {EMPRESA_LEGAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} {...(s.externo ? externo : {})}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Contacto</h2>
          <ul className="pie-contacto">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18v14H3z M3 6l9 7 9-7" />
              </svg>
              <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
              </svg>
              <a href={EMPRESA.whatsapp} {...externo}>
                Tel. / WhatsApp: {EMPRESA.telefono}
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              <span>{EMPRESA.direccion}</span>
            </li>
          </ul>
          <div className="pie-redes">
            <a href={EMPRESA.instagram} {...externo} aria-label="Instagram de LifeSystem Solutions">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M17.5 6.5h.01" />
              </svg>
            </a>
            <a href={EMPRESA.facebook} {...externo} aria-label="Facebook de LifeSystem Solutions">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="marco pie-legal">
        <p>
          © {year} LifeSystem Solutions. Todos los derechos reservados. Portafolio profesional de Johann Sebastian
          Guevara Elias.
        </p>
        <p>
          Queda prohibida la reproducción total o parcial de este sitio, su diseño y sus contenidos sin autorización
          previa. Las marcas, logotipos y capturas de proyectos de terceros pertenecen a sus respectivos titulares y se
          muestran solo como referencia de trabajo realizado.
        </p>
      </div>
    </footer>
  )
}

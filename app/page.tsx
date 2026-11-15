'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CATEGORIAS,
  CERTIFICACIONES,
  CONTACTO,
  EXPERIENCIA,
  PROYECTOS,
  STACK,
  type Categoria,
  type Proyecto,
} from './data'
import Pie from './Pie'

const FOTO =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YO%20FORMAL-X533A7sFlqy6swAxwabe2QXLVMmWiK.jpg'

const NAV = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#competencias', label: 'Competencias' },
  { href: '#contacto', label: 'Contacto' },
]

const AREAS = [
  {
    titulo: 'Desarrollo de software',
    texto: 'Sistemas web y de escritorio con Next.js, React, TypeScript, Laravel, Python y PostgreSQL, desde el análisis hasta el despliegue.',
  },
  {
    titulo: 'Automatización de procesos',
    texto: 'Herramientas internas que generan documentos, ordenan información y atienden clientes por WhatsApp para ahorrar horas de trabajo manual.',
  },
  {
    titulo: 'Infraestructura y soporte',
    texto: 'Windows Server 2022, Active Directory, DNS, DHCP, redes LAN, mantenimiento de equipos y soporte a usuarios.',
  },
]

function Enlaces({ p }: { p: Proyecto }) {
  if (p.privado) return <p className="nota-privada">Privado · se presenta en entrevista</p>
  return (
    <div className="enlaces">
      {p.demo && (
        <a href={p.demo} className="btn btn-primario" target="_blank" rel="noopener noreferrer">
          Ver demo
        </a>
      )}
      {p.repo && (
        <a href={p.repo} className="enlace" target="_blank" rel="noopener noreferrer">
          Ver código
        </a>
      )}
    </div>
  )
}

function Destacado({ p, invertido }: { p: Proyecto; invertido: boolean }) {
  return (
    <article className={`destacado reveal${invertido ? ' invertido' : ''}`}>
      <a className="destacado-media" href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        {p.imagen && (
          <img src={p.imagen} alt={`Pantalla de ${p.nombre}`} width={1200} height={750} loading="lazy" />
        )}
      </a>
      <div className="destacado-texto">
        <h3>{p.nombre}</h3>
        <p className="meta">
          {p.tipo} · {p.fecha}
        </p>
        <p>{p.descripcion}</p>
        {p.puntos && (
          <ul className="puntos">
            {p.puntos.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
        <p className="stack-linea">{p.stack.join(' · ')}</p>
        <Enlaces p={p} />
      </div>
    </article>
  )
}

function Galeria({ p }: { p: Proyecto }) {
  return (
    <article className="obra reveal">
      <a className="obra-media" href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer">
        <img src={p.imagen} alt={`Pantalla de ${p.nombre}`} width={1200} height={750} loading="lazy" />
      </a>
      <h3>{p.nombre}</h3>
      <p className="meta">
        {p.tipo} · {p.fecha}
      </p>
      <p className="obra-desc">{p.descripcion}</p>
      <p className="stack-linea">{p.stack.join(' · ')}</p>
      <Enlaces p={p} />
    </article>
  )
}

function Fila({ p }: { p: Proyecto }) {
  return (
    <li className="fila">
      <div className="fila-nombre">
        <h3>{p.nombre}</h3>
        <p>{p.descripcion}</p>
        <p className="stack-linea">{p.stack.join(' · ')}</p>
      </div>
      <p className="fila-tipo">{p.tipo}</p>
      <p className="fila-fecha">{p.fecha}</p>
      <div className="fila-estado">
        {p.privado ? (
          <span>Privado · en entrevista</span>
        ) : (
          <a href={p.repo ?? p.demo} target="_blank" rel="noopener noreferrer" className="enlace">
            Ver código
          </a>
        )}
      </div>
    </li>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filtro, setFiltro] = useState<'todos' | Categoria>('todos')

  const visibles = useMemo(
    () => PROYECTOS.filter((p) => filtro === 'todos' || p.categorias.includes(filtro)),
    [filtro]
  )

  // Se vuelve a observar cada vez que cambia el filtro, porque aparecen elementos nuevos
  useEffect(() => {
    const items = document.querySelectorAll('.reveal:not(.is-visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [filtro])

  const destacados = visibles.filter((p) => p.destacado)
  const galeria = visibles.filter((p) => !p.destacado && !p.privado && p.imagen)
  const registro = visibles.filter((p) => !p.destacado && (p.privado || !p.imagen))
  const conteo = (id: 'todos' | Categoria) =>
    id === 'todos' ? PROYECTOS.length : PROYECTOS.filter((p) => p.categorias.includes(id)).length
  const publicos = PROYECTOS.filter((p) => !p.privado).length

  return (
    <>
      <header className="barra">
        <div className="marco barra-interior">
          <a className="marca" href="#inicio">
            Johann Guevara
          </a>
          <button
            className="menu-boton"
            aria-expanded={menuOpen}
            aria-controls="menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? 'Cerrar' : 'Menú'}
          </button>
          <nav className={`menu${menuOpen ? ' abierto' : ''}`} id="menu" aria-label="Navegación principal">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href={CONTACTO.whatsapp} className="btn btn-primario" target="_blank" rel="noopener noreferrer">
              Contactar
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="portada">
          <div className="marco portada-grid">
            <div className="portada-texto">
              <h1>Johann Sebastian Guevara</h1>
              <p className="cargo">Desarrollo de software y soporte TI</p>
              <p className="bajada">
                Diseño y construyo sistemas para negocios reales: puntos de venta, plataformas web y herramientas
                internas, desde el análisis del proceso hasta el despliegue.
              </p>
              <div className="enlaces">
                <a href="#proyectos" className="btn btn-primario">
                  Ver proyectos
                </a>
                <a href={CONTACTO.linkedin} className="enlace" target="_blank" rel="noopener noreferrer">
                  Perfil en LinkedIn
                </a>
              </div>
              <dl className="cifras">
                <div>
                  <dt>{PROYECTOS.length}</dt>
                  <dd>proyectos desarrollados</dd>
                </div>
                <div>
                  <dt>{publicos}</dt>
                  <dd>con demo o código público</dd>
                </div>
                <div>
                  <dt>{CERTIFICACIONES.length}</dt>
                  <dd>certificaciones Cisco y AWS</dd>
                </div>
              </dl>
            </div>
            <figure className="portada-foto">
              <img src={FOTO} alt="Johann Sebastian Guevara Elias" width={800} height={1000} />
            </figure>
          </div>
        </section>

        <section className="seccion" id="perfil">
          <div className="marco perfil-grid">
            <h2 className="reveal">Perfil profesional</h2>
            <div className="perfil-texto reveal">
              <p className="declaracion">
                Estudiante de 10.º ciclo de Ingeniería de Sistemas Computacionales en la UPN. Me gusta entender bien lo
                que necesita un negocio antes de escribir una línea de código.
              </p>
              <p>
                Mi proyecto principal es LifeSystemSolution POS: ventas, caja, cocina, inventario y reportes, con una
                versión web multisucursal y otra de escritorio que funciona sin internet. Está listo para producción, se
                probó con pruebas de estrés y carga, y se conecta con la facturación electrónica de SUNAT.
              </p>
              <p>
                Complemento el desarrollo con experiencia en soporte técnico, servidores, redes y documentación técnica,
                lo que me permite acompañar un sistema desde la instalación hasta el uso diario.
              </p>
            </div>
            <dl className="areas reveal">
              {AREAS.map((a) => (
                <div key={a.titulo}>
                  <dt>{a.titulo}</dt>
                  <dd>{a.texto}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="seccion seccion-alterna" id="proyectos">
          <div className="marco">
            <div className="cabecera">
              <h2 className="reveal">Proyectos</h2>
              <div className="filtros" role="group" aria-label="Filtrar proyectos">
                {CATEGORIAS.map((c) => (
                  <button
                    key={c.id}
                    className={`filtro${filtro === c.id ? ' activo' : ''}`}
                    aria-pressed={filtro === c.id}
                    onClick={() => setFiltro(c.id)}
                  >
                    {c.label} <span>{conteo(c.id)}</span>
                  </button>
                ))}
              </div>
            </div>

            {destacados.length > 0 && (
              <div className="destacados">
                {destacados.map((p, i) => (
                  <Destacado key={p.nombre} p={p} invertido={i % 2 === 1} />
                ))}
              </div>
            )}

            {galeria.length > 0 && (
              <>
                <h3 className="subtitulo">Sitios y demos para clientes</h3>
                <div className="galeria">
                  {galeria.map((p) => (
                    <Galeria key={p.nombre} p={p} />
                  ))}
                </div>
              </>
            )}

            {registro.length > 0 && (
              <>
                <h3 className="subtitulo">Registro completo</h3>
                <p className="subnota">
                  Sistemas para clientes, internos y académicos. Los privados no tienen código público, pero puedo
                  mostrarlos en una entrevista.
                </p>
                <ul className="registro">
                  {registro.map((p) => (
                    <Fila key={p.nombre} p={p} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        <section className="seccion" id="experiencia">
          <div className="marco">
            <h2 className="reveal">Experiencia y formación</h2>
            <ol className="trayectoria">
              {EXPERIENCIA.map((e) => (
                <li key={e.puesto} className="reveal">
                  <p className="trayectoria-fecha">{e.fecha}</p>
                  <div>
                    <h3>{e.puesto}</h3>
                    <p className="meta">{e.lugar}</p>
                    <ul className="puntos">
                      {e.puntos.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seccion seccion-alterna" id="competencias">
          <div className="marco competencias-grid">
            <div>
              <h2 className="reveal">Competencias técnicas</h2>
              <dl className="tecnologias reveal">
                {STACK.map((s) => (
                  <div key={s.titulo}>
                    <dt>{s.titulo}</dt>
                    <dd>{s.items.join(', ')}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="reveal">Certificaciones</h2>
              <ul className="certificados reveal">
                {CERTIFICACIONES.map((c) => (
                  <li key={c.nombre}>
                    <div>
                      <h3>{c.nombre}</h3>
                      <p>{c.emisor}</p>
                    </div>
                    <span>{c.fecha}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="seccion contacto" id="contacto">
          <div className="marco contacto-grid">
            <div className="reveal">
              <h2>Conversemos</h2>
              <p className="declaracion">
                Disponible de inmediato para puestos de desarrollo, soporte TI y sistemas, y para proyectos a medida.
              </p>
            </div>
            <dl className="contacto-lista reveal">
              <div>
                <dt>WhatsApp y teléfono</dt>
                <dd>
                  <a href={CONTACTO.whatsapp} target="_blank" rel="noopener noreferrer">
                    {CONTACTO.telefono}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Correo</dt>
                <dd>
                  <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={CONTACTO.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/johann-sg
                  </a>
                </dd>
              </div>
              <div>
                <dt>Ubicación</dt>
                <dd>Jesús María, Lima, Perú</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={CONTACTO.github} target="_blank" rel="noopener noreferrer">
                    github.com/LifeSys
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <Pie />
    </>
  )
}

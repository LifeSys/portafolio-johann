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

const NAV = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#stack', label: 'Stack' },
  { href: '#certifications', label: 'Certificaciones' },
  { href: '#contact', label: 'Contacto' },
]

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

function Enlaces({ p }: { p: Proyecto }) {
  if (p.privado) {
    return <p className="private-note">🔒 Actualmente privado · disponible para mostrar en entrevista</p>
  }
  return (
    <div className="project-actions">
      {p.demo && (
        <a href={p.demo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          Ver demo
        </a>
      )}
      {p.repo && (
        <a href={p.repo} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
          Código
        </a>
      )}
    </div>
  )
}

function Destacado({ p }: { p: Proyecto }) {
  return (
    <article className="project-card glass-card">
      <div className="project-image">
        {p.imagen && <img src={p.imagen} alt={`Captura de ${p.nombre}: ${p.tipo}`} loading="lazy" />}
      </div>
      <div className="project-content">
        <p className="project-type">
          {p.tipo} · {p.fecha}
        </p>
        <h3>{p.nombre}</h3>
        <p>{p.descripcion}</p>
        {p.puntos && (
          <ul className="project-highlights">
            {p.puntos.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
        <Tags items={p.stack} />
        <Enlaces p={p} />
      </div>
    </article>
  )
}

function Tarjeta({ p }: { p: Proyecto }) {
  const inicial = p.nombre.charAt(0)
  return (
    <article className={`mini-card${p.privado ? ' is-private' : ''}`}>
      <div className="mini-media">
        {p.imagen ? (
          <img src={p.imagen} alt={`Captura de ${p.nombre}`} loading="lazy" />
        ) : (
          <div className="mini-placeholder" aria-hidden="true">
            <span>{inicial}</span>
          </div>
        )}
        {p.privado && <span className="private-badge">Privado</span>}
      </div>
      <div className="mini-body">
        <p className="project-type">
          {p.tipo} · {p.fecha}
        </p>
        <h3>{p.nombre}</h3>
        <p className="mini-desc">{p.descripcion}</p>
        {p.puntos && (
          <ul className="project-highlights">
            {p.puntos.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
        <Tags items={p.stack} />
        <Enlaces p={p} />
      </div>
    </article>
  )
}

export default function Home() {
  const [year, setYear] = useState(2026)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filtro, setFiltro] = useState<'todos' | Categoria>('todos')

  useEffect(() => {
    setYear(new Date().getFullYear())
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      // threshold 0: las secciones altas (como Proyectos en celular) nunca llegan a mostrar el 10 % en pantalla
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [])

  const visibles = useMemo(
    () => PROYECTOS.filter((p) => filtro === 'todos' || p.categorias.includes(filtro)),
    [filtro]
  )
  const destacados = visibles.filter((p) => p.destacado)
  const publicos = visibles.filter((p) => !p.destacado && !p.privado)
  const privados = visibles.filter((p) => p.privado)
  const conteo = (id: 'todos' | Categoria) =>
    id === 'todos' ? PROYECTOS.length : PROYECTOS.filter((p) => p.categorias.includes(id)).length

  return (
    <>
      <header className="navbar" id="top">
        <a className="logo" href="#hero" aria-label="Johann Sebastian Guevara - Inicio">
          JSG<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mainMenu"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="mainMenu" aria-label="Navegación principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href={CONTACTO.whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Contactar
          </a>
        </nav>
      </header>

      <main>
        <section className="hero reveal" id="hero">
          <div className="container hero-content">
            <p className="eyebrow">Ingeniería de Sistemas · Desarrollo Full Stack · Soporte TI</p>
            <h1>Johann Sebastian Guevara</h1>
            <h2>Construyo sistemas que resuelven problemas reales de negocio, desde el análisis hasta el despliegue.</h2>
            <p className="hero-claim">
              Estudiante de 10.º ciclo de Ingeniería de Sistemas Computacionales (UPN). He desarrollado un sistema POS
              web y de escritorio listo para producción, plataformas SaaS, agentes de atención con IA y sitios web para
              clientes, con base en redes, servidores y soporte técnico.
            </p>

            <div className="hero-badges">
              <span className="badge">{PROYECTOS.length} proyectos</span>
              <span className="badge">Next.js · React · TypeScript</span>
              <span className="badge">Python · PostgreSQL</span>
              <span className="badge">Windows Server · Redes</span>
            </div>

            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                Ver proyectos
              </a>
              <a href={CONTACTO.whatsapp} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
              <a href={CONTACTO.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>

            <dl className="hero-facts">
              <div>
                <dt>Ubicación</dt>
                <dd>Jesús María, Lima</dd>
              </div>
              <div>
                <dt>Teléfono</dt>
                <dd>{CONTACTO.telefono}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section reveal" id="about">
          <div className="container about-grid">
            <figure className="about-image">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YO%20FORMAL-X533A7sFlqy6swAxwabe2QXLVMmWiK.jpg"
                alt="Foto de Johann Sebastian Guevara Elias"
                loading="lazy"
              />
            </figure>

            <article className="about-content">
              <div>
                <p className="section-label">Sobre mí</p>
                <h2>Del problema del cliente a una solución desplegada</h2>
                <p>
                  Me gusta entender bien lo que necesita un negocio antes de construir. Mi proyecto principal es
                  LifeSystemSolution POS, un sistema de ventas, caja, cocina, inventario y reportes con versión web
                  multisucursal y versión de escritorio, con conexión a facturación electrónica SUNAT.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Uso la inteligencia artificial como una herramienta más de trabajo, con criterio para decidir cuándo y
                  cómo aplicarla. Complemento el desarrollo con experiencia en soporte técnico, Windows Server 2022, redes
                  y documentación técnica.
                </p>
              </div>

              <div className="value-cards">
                <article className="value-card">
                  <h3>Desarrollo full stack</h3>
                  <p>Next.js, React, TypeScript, Laravel, Python y PostgreSQL para sistemas web y de escritorio.</p>
                </article>
                <article className="value-card">
                  <h3>IA y automatización</h3>
                  <p>Agentes de atención por WhatsApp, modelos de machine learning y generación automática de documentos.</p>
                </article>
                <article className="value-card">
                  <h3>Infraestructura y soporte</h3>
                  <p>Windows Server 2022, Active Directory, DNS, DHCP, redes LAN y soporte a usuarios.</p>
                </article>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal" id="projects">
          <div className="container">
            <p className="section-label">Proyectos</p>
            <h2>Lo que he construido</h2>

            <div className="filter-bar" role="group" aria-label="Filtrar proyectos">
              {CATEGORIAS.map((c) => (
                <button
                  key={c.id}
                  className={`chip${filtro === c.id ? ' is-active' : ''}`}
                  aria-pressed={filtro === c.id}
                  onClick={() => setFiltro(c.id)}
                >
                  {c.label} <b>{conteo(c.id)}</b>
                </button>
              ))}
            </div>

            {destacados.length > 0 && (
              <>
                <h3 className="group-title">Destacados</h3>
                <div className="project-grid">
                  {destacados.map((p) => (
                    <Destacado key={p.nombre} p={p} />
                  ))}
                </div>
              </>
            )}

            {publicos.length > 0 && (
              <>
                <h3 className="group-title">Más proyectos con demo o código</h3>
                <div className="mini-grid">
                  {publicos.map((p) => (
                    <Tarjeta key={p.nombre} p={p} />
                  ))}
                </div>
              </>
            )}

            {privados.length > 0 && (
              <>
                <h3 className="group-title">Proyectos actualmente privados</h3>
                <p className="group-note">
                  Sistemas para clientes, internos o académicos. El código no es público, pero puedo mostrarlos en una
                  entrevista.
                </p>
                <div className="mini-grid">
                  {privados.map((p) => (
                    <Tarjeta key={p.nombre} p={p} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="section reveal" id="experience">
          <div className="container">
            <p className="section-label">Trayectoria</p>
            <h2>Experiencia y formación</h2>
            <div className="timeline">
              {EXPERIENCIA.map((e) => (
                <article className="timeline-item" key={e.puesto}>
                  <span className="timeline-date">{e.fecha}</span>
                  <h3>{e.puesto}</h3>
                  <p className="timeline-place">{e.lugar}</p>
                  <ul className="project-highlights">
                    {e.puntos.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="stack">
          <div className="container">
            <p className="section-label">Stack</p>
            <h2>Tecnologías con las que trabajo</h2>
            <div className="stack-section">
              {STACK.map((s) => (
                <div className="stack-category" key={s.titulo}>
                  <p className="stack-category-title">{s.titulo}</p>
                  <div className="stack-grid">
                    {s.items.map((i) => (
                      <div className="stack-item" key={i}>
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="certifications">
          <div className="container">
            <p className="section-label">Certificaciones</p>
            <h2>Formación complementaria</h2>
            <div className="cert-grid">
              {CERTIFICACIONES.map((c) => (
                <article className="cert-item" key={c.nombre}>
                  <h3>{c.nombre}</h3>
                  <p>
                    {c.emisor} · {c.fecha}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="contact">
          <div className="container">
            <div className="final-cta glass-card">
              <p className="section-label">Contacto</p>
              <h2>¿Conversamos?</h2>
              <p>
                Estoy disponible para oportunidades en desarrollo web, soporte TI y sistemas, y para proyectos a medida.
                Tengo disponibilidad inmediata.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a href={CONTACTO.whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={`mailto:${CONTACTO.email}`} className="btn btn-secondary">
                  Email
                </a>
                <a href={CONTACTO.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={CONTACTO.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {year} Johann Sebastian Guevara Elias · Jesús María, Lima, Perú</p>
      </footer>
    </>
  )
}

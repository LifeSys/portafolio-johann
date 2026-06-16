'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())

    // Menu mobile
    const menuToggle = document.getElementById('menuToggle')
    const mainMenu = document.getElementById('mainMenu')

    if (menuToggle && mainMenu) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mainMenu.classList.toggle('open')
        menuToggle.setAttribute('aria-expanded', String(isOpen))
      })

      mainMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mainMenu.classList.remove('open')
          menuToggle.setAttribute('aria-expanded', 'false')
        })
      })
    }

    // Reveal animations
    const revealItems = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <header className="navbar" id="top">
        <a className="logo" href="#hero" aria-label="Johann Sebastian Guevara - Inicio">
          JSG<span>.</span>
        </a>

        <button 
          className="menu-toggle" 
          id="menuToggle" 
          aria-expanded="false" 
          aria-controls="mainMenu"
          aria-label="Abrir menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="nav-links" id="mainMenu" aria-label="Navegación principal">
          <a href="#about">Sobre mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
          <a href="#stack">Stack</a>
          <a href="#certifications">Certificaciones</a>
          <a href="#contact">Contacto</a>
          <a href="https://wa.me/51906127991" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Contactar</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal" id="hero">
          <div className="container hero-content">
            <p className="eyebrow">Ingeniería de sistemas • Soporte TI • Infraestructura web</p>
            <h1>Johann Sebastian Guevara</h1>
            <h2>Soluciones TI, soporte técnico e infraestructura web para operaciones empresariales</h2>
            <p className="hero-claim">
              Estudiante de 9.° ciclo de Ingeniería de Sistemas con experiencia comprobada en 
              soporte técnico, documentación operativa, Windows Server 2022, redes LAN, administración 
              de bases de datos y desarrollo de soluciones web orientadas a gestión empresarial. 
              Listo para aportar valor en entornos corporativos.
            </p>

            <div className="hero-badges">
              <span className="badge">9.° ciclo • Ingeniería de Sistemas</span>
              <span className="badge">Redes y servidores</span>
              <span className="badge">Soporte TI</span>
              <span className="badge">Desarrollo web</span>
            </div>

            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">Ver proyectos destacados</a>
              <a href="https://wa.me/51906127991" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
              <a href="#contact" className="btn btn-ghost">Más formas de contacto</a>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '600px' }}>
              <div>
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ubicación</p>
                <p style={{ marginTop: '0.25rem', color: 'var(--text)' }}>Lima, Perú</p>
              </div>
              <div>
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Teléfono</p>
                <p style={{ marginTop: '0.25rem', color: 'var(--text)' }}>(+51) 906 127 991</p>
              </div>
              <div>
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</p>
                <a href="mailto:johannsebastian789@gmail.com" style={{ marginTop: '0.25rem', color: 'var(--text)', textDecoration: 'underline', display: 'block' }}>Mail aquí</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="about">
          <div className="container about-grid">
            <figure className="about-image">
              <img 
                src="/profile.jpg" 
                alt="Foto profesional de Johann Sebastian Guevara Elias, estudiante de Ingeniería de Sistemas" 
                loading="lazy" 
              />
            </figure>

            <article className="about-content">
              <div>
                <p className="section-label">Sobre mí</p>
                <h2>Profesional técnico con formación en sistemas, redes y desarrollo</h2>
                <p>
                  Soy estudiante del 9.° ciclo de Ingeniería de Sistemas Computacionales en la Universidad Privada 
                  del Norte, con 4 años de formación integral en tecnología. Mi experiencia laboral se enfoca en 
                  soporte técnico de primer nivel, documentación operativa, mantenimiento preventivo y validación de sistemas 
                  en entornos corporativos.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Integro bases de datos (SQL Server y MySQL), servicios de infraestructura (Windows Server 2022), 
                  fundamentos de ciberseguridad e IoT para construir soluciones ordenadas, documentadas y útiles. 
                  Mi objetivo es aportar en soporte técnico, administración de infraestructura y desarrollo de aplicaciones 
                  web orientadas a gestión empresarial.
                </p>
              </div>

              <div className="value-cards">
                <article className="value-card">
                  <h3>Infraestructura TI</h3>
                  <p>Windows Server 2022, Active Directory, DNS, DHCP, FTP, IIS y gestión de redes LAN empresariales.</p>
                </article>
                <article className="value-card">
                  <h3>Soporte & documentación</h3>
                  <p>Atención de incidencias, diagnóstico técnico, mantenimiento preventivo y documentación operativa estructurada.</p>
                </article>
                <article className="value-card">
                  <h3>Desarrollo web</h3>
                  <p>HTML, CSS, JavaScript, Java, Spring Boot, MySQL, SQL Server y Bootstrap para aplicaciones web corporativas.</p>
                </article>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal" id="experience">
          <div className="container">
            <p className="section-label">Trayectoria profesional</p>
            <h2>Experiencia laboral y formación aplicada</h2>

            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-date">ENERO 2024 - ACTUALIDAD</span>
                <h3>Asistente Administrativo Operativo · Grupo Luseta S.A.C.</h3>
                <p>
                  Gestión integral de documentación técnica, actas de reunión, informes operativos, SCTR, controles de ingreso, 
                  coordinación con supervisores y clientes externos. Responsabilidades: estructuración de reportes, control de cotizaciones, 
                  respaldos digitales organizados y coordinación formal de procesos administrativos.
                </p>
              </article>

              <article className="timeline-item">
                <span className="timeline-date">MARZO 2024 - JULIO 2024</span>
                <h3>Auxiliar en Tecnología y Sistemas · Inversiones Gica y Asociados S.A.C.</h3>
                <p>
                  Soporte técnico de primer nivel a usuarios finales, registro y seguimiento de incidencias, mantenimiento preventivo de equipos, 
                  respaldo de información crítica, validación básica de sistemas y bases de datos. Generación de reportes estructurados 
                  del área de sistemas para supervisores.
                </p>
              </article>

              <article className="timeline-item">
                <span className="timeline-date">2022 - ACTUALIDAD</span>
                <h3>Estudiante de Ingeniería de Sistemas · Universidad Privada del Norte</h3>
                <p>
                  Formación integral en 9.° ciclo (de 10). Proyectos formativos destacados: Centro de datos con Windows Server 2022, 
                  inventario empresarial con SQL Server, aplicación web para restaurantes con Spring Boot, MySQL y Bootstrap. 
                  Participación en laboratorios de redes, ciberseguridad e IoT.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="projects">
          <div className="container">
            <p className="section-label">Proyectos destacados</p>
            <h2>Implementaciones clave y soluciones entregadas</h2>

            <div className="project-grid">
              <article className="project-card glass-card">
                <div className="project-image">
                  <img 
                    src="/project-1.jpg" 
                    alt="Sistema web de gestión de soporte técnico y hardware empresarial con panel administrativo"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>Hardware Empresarial & Soporte Técnico</h3>
                  <p>
                    Plataforma web completa para empresa de reparación técnica. Los clientes crean cuenta, registran 
                    problemas de equipos con fotos y descripción. Panel interno para administrador y operador con gestión 
                    de casos, control de diagnósticos y trazabilidad del servicio.
                  </p>
                  <ul className="project-highlights">
                    <li>Registro de clientes con autenticación y carga de incidencias con fotografías</li>
                    <li>Paneles internos diferenciados: administrador y operador con permisos granulares</li>
                    <li>Control de diagnósticos, estados, evidencias y trazabilidad completa del servicio</li>
                    <li>Base de datos relacional con reportes operativos</li>
                  </ul>
                  <div className="project-meta">
                    <p><strong>Acceso demo:</strong></p>
                    <p>Admin: <span>admin</span> / <span>admin123</span></p>
                    <p>Operador: <span>operador</span> / <span>operador123</span></p>
                  </div>
                  <div className="tags">
                    <span>Soporte Técnico</span>
                    <span>Gestión de Tickets</span>
                    <span>Panel Administrativo</span>
                    <span>Responsive</span>
                    <span>Base de Datos</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://solucion-pe-xi.vercel.app/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </article>

              <article className="project-card glass-card">
                <div className="project-image">
                  <img 
                    src="/project-2.jpg" 
                    alt="Sitio web profesional para servicios médicos con diseño moderno"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>BautistaGarcia-web</h3>
                  <p>
                    Sitio web profesional para servicios médicos, diseñado para transmitir confianza, 
                    generar conversiones y consolidar presencia de marca online. Enfoque en UX y conversión.
                  </p>
                  <ul className="project-highlights">
                    <li>Diseño limpio y profesional orientado a confianza</li>
                    <li>Responsive, optimizado para mobile y desktop</li>
                    <li>Contacto directo con pacientes</li>
                  </ul>
                  <div className="tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Servicios Médicos</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://LifeSys.github.io/BautistaGarcia-web/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </article>

              <article className="project-card glass-card">
                <div className="project-image">
                  <img 
                    src="/project-3.jpg" 
                    alt="Sitio web elegante para salón de belleza con diseño premium"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>GR Glam Salon Web</h3>
                  <p>
                    Experiencia web elegante y sofisticada para salón de belleza. Foco visual premium, 
                    presentación de servicios y contacto directo con clientes potenciales.
                  </p>
                  <ul className="project-highlights">
                    <li>Diseño premium y elegante</li>
                    <li>Responsive y optimizado para conversión</li>
                    <li>Branding profesional</li>
                  </ul>
                  <div className="tags">
                    <span>UI/UX</span>
                    <span>Responsive</span>
                    <span>Branding</span>
                    <span>HTML/CSS</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://LifeSys.github.io/gr-glam-salon-web/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </article>

              <article className="project-card glass-card">
                <div className="project-image">
                  <img 
                    src="/project-4.jpg" 
                    alt="Plataforma logística para seguimiento de carga y operaciones"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>CargaNet</h3>
                  <p>
                    Plataforma logística integral para seguimiento operativo en tiempo real, 
                    gestión eficiente de flujo de carga y control de operaciones empresariales.
                  </p>
                  <ul className="project-highlights">
                    <li>Seguimiento de carga en tiempo real</li>
                    <li>Gestión de operaciones logísticas</li>
                    <li>Reportes y analytics</li>
                  </ul>
                  <div className="tags">
                    <span>Plataforma</span>
                    <span>Logística</span>
                    <span>Web App</span>
                    <span>Operaciones</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://LifeSys.github.io/CargaNet/index.html" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="stack">
          <div className="container">
            <p className="section-label">Stack Tecnológico</p>
            <h2>Tecnologías con las que construyo soluciones</h2>

            <div className="stack-section">
              <div className="stack-category">
                <p className="stack-category-title">Frontend</p>
                <div className="stack-grid">
                  <div className="stack-item">HTML 5</div>
                  <div className="stack-item">CSS 3</div>
                  <div className="stack-item">JavaScript (ES6+)</div>
                  <div className="stack-item">React</div>
                  <div className="stack-item">Next.js</div>
                  <div className="stack-item">Bootstrap</div>
                </div>
              </div>

              <div className="stack-category">
                <p className="stack-category-title">Backend</p>
                <div className="stack-grid">
                  <div className="stack-item">Java</div>
                  <div className="stack-item">Spring Boot</div>
                  <div className="stack-item">Python</div>
                  <div className="stack-item">C#</div>
                </div>
              </div>

              <div className="stack-category">
                <p className="stack-category-title">Bases de Datos</p>
                <div className="stack-grid">
                  <div className="stack-item">SQL Server</div>
                  <div className="stack-item">MySQL</div>
                  <div className="stack-item">Diseño relacional</div>
                </div>
              </div>

              <div className="stack-category">
                <p className="stack-category-title">Infraestructura & Sistemas</p>
                <div className="stack-grid">
                  <div className="stack-item">Windows Server 2022</div>
                  <div className="stack-item">Active Directory</div>
                  <div className="stack-item">DNS / DHCP</div>
                  <div className="stack-item">IIS / FTP</div>
                  <div className="stack-item">Redes LAN</div>
                </div>
              </div>

              <div className="stack-category">
                <p className="stack-category-title">Herramientas & Soporte</p>
                <div className="stack-grid">
                  <div className="stack-item">AnyDesk</div>
                  <div className="stack-item">Git / GitHub</div>
                  <div className="stack-item">Word Avanzado</div>
                  <div className="stack-item">Excel Avanzado</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="certifications">
          <div className="container">
            <p className="section-label">Formación & Certificaciones</p>
            <h2>Educación continua en estándares globales</h2>

            <div className="cert-grid">
              <article className="cert-item">
                <h3>AWS Academy Cloud Foundations</h3>
                <p>Fundamentos cloud, arquitectura escalable y servicios AWS. Mar. 2025</p>
              </article>
              <article className="cert-item">
                <h3>CCNA: Introducción a las Redes</h3>
                <p>Redes, routing, switching y fundamentos LAN. Jun. 2025</p>
              </article>
              <article className="cert-item">
                <h3>Linux Essentials</h3>
                <p>Administración básica de sistemas Linux. Jul. 2025</p>
              </article>
              <article className="cert-item">
                <h3>Introducción a IoT</h3>
                <p>Fundamentos de Internet de las Cosas y dispositivos conectados. May. 2024</p>
              </article>
              <article className="cert-item">
                <h3>Introducción a Ciberseguridad</h3>
                <p>Fundamentos de seguridad cibernética, amenazas y defensas. May. 2022</p>
              </article>
              <article className="cert-item">
                <h3>CLP: Advanced Programming in C</h3>
                <p>Programación avanzada en C. Oct. 2023</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="contact">
          <div className="container">
            <div className="final-cta glass-card">
              <p className="section-label">Colaboración</p>
              <h2>¿Buscas apoyo técnico o una solución web para tu negocio?</h2>
              <p>
                Estoy disponible para colaborar en soporte técnico, documentación operativa, gestión de redes y servidores, 
                administración de bases de datos y desarrollo web. Disponible para referencias laborales a solicitud. 
                Con entusiasmo por aportar valor a tus proyectos.
              </p>

              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a href="https://wa.me/51906127991" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
                <a href="mailto:johannsebastian789@gmail.com" className="btn btn-secondary">Enviar Email</a>
                <a href="https://github.com/LifeSys/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {year} Johann Sebastian Guevara Elias · Jesús María, Lima, Perú</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Soluciones TI • Soporte Técnico • Infraestructura Web</p>
      </footer>
    </>
  )
}

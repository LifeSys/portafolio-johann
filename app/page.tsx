'use client'

export default function Home() {
  return (
    <>
      <header className="navbar" id="top">
        <a className="logo" href="#hero" aria-label="Ir al inicio">JSG<span>.</span></a>

        <button className="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mainMenu" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>

        <nav className="nav-links" id="mainMenu" aria-label="Navegación principal">
          <a href="#about">Sobre mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
          <a href="#stack">Stack</a>
          <a href="#certifications">Certificaciones</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal" id="hero">
          <div className="hero-glow"></div>
          <div className="container hero-content">
            <p className="eyebrow">INGENIERÍA DE SISTEMAS | REDES Y SERVIDORES | DESARROLLO WEB</p>
            <h1>Johann Sebastian Guevara</h1>
            <h2>Soporte técnico, infraestructura TI y aplicaciones web para operaciones empresariales.</h2>
            <p className="hero-claim">
              Estudiante de 9.° ciclo con experiencia en soporte de primer nivel, documentación operativa,
              Windows Server 2022, redes LAN, bases de datos y desarrollo de soluciones web.
            </p>

            <div className="hero-meta" aria-label="Datos de contacto principales">
              <span>📍 Jesús María, Lima</span>
              <span>📞 906 127 991</span>
              <span>✉️ johannsebastian789@gmail.com</span>
            </div>

            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">Ver proyectos</a>
              <a href="#experience" className="btn btn-secondary">Ver CV</a>
              <a href="#contact" className="btn btn-ghost">Contactar</a>
            </div>
          </div>
        </section>

        <section className="section reveal" id="about">
          <div className="container about-grid">
            <figure className="about-image glass-card">
              <img src="/assets/img/perfil.jpg" alt="Foto profesional de Johann Sebastian Guevara Elias" loading="lazy" />
            </figure>

            <article className="about-content">
              <p className="section-label">Sobre mí</p>
              <h2>Perfil técnico con enfoque en soporte, redes y desarrollo web</h2>
              <p>
                Soy estudiante del 9.° ciclo de Ingeniería de Sistemas Computacionales con 4 años de formación en TI,
                redes y desarrollo de software. He trabajado en documentación operativa, soporte a usuarios,
                mantenimiento preventivo, validación de sistemas y aplicaciones web orientadas a gestión.
              </p>
              <p>
                Integro bases de datos SQL Server y MySQL, servicios en Windows Server 2022 y fundamentos de
                ciberseguridad e IoT para construir soluciones ordenadas, documentadas y útiles para entornos corporativos.
              </p>

              <div className="skill-cards">
                <article className="glass-card mini-card">
                  <h3>Redes & servidores</h3>
                  <p>Windows Server 2022, Active Directory, DNS, DHCP, FTP, IIS y redes LAN.</p>
                </article>
                <article className="glass-card mini-card">
                  <h3>Soporte TI</h3>
                  <p>Atención de incidencias, diagnóstico, mantenimiento preventivo y documentación.</p>
                </article>
                <article className="glass-card mini-card">
                  <h3>Desarrollo web</h3>
                  <p>HTML, CSS, JavaScript, Java, Spring Boot, Bootstrap, SQL Server y MySQL.</p>
                </article>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal" id="experience">
          <div className="container">
            <p className="section-label">CV Profesional</p>
            <h2>Experiencia laboral y formación aplicada a tecnología</h2>

            <div className="timeline">
              <article className="timeline-item glass-card">
                <span className="timeline-date">Ene. 2024 - Actualidad</span>
                <h3>Asistente Administrativo Operativo · GRUPO LUSETA S.A.C.</h3>
                <p>
                  Gestión de documentación técnica, actas, informes, SCTR, controles de ingreso, cotizaciones,
                  respaldos digitales y coordinación formal con supervisores, clientes y personal operativo.
                </p>
              </article>
              <article className="timeline-item glass-card">
                <span className="timeline-date">Mar. 2024 - Jul. 2024</span>
                <h3>Auxiliar en Tecnología y Sistemas · INVERSIONES GICA Y ASOCIADOS S.A.C.</h3>
                <p>
                  Soporte de primer nivel, registro de incidencias, mantenimiento preventivo, respaldo de información,
                  control básico de bases de datos, validación de sistemas y reportes estructurados del área.
                </p>
              </article>
              <article className="timeline-item glass-card">
                <span className="timeline-date">2022 - Actualidad</span>
                <h3>Ingeniería de Sistemas Computacionales · Universidad Privada del Norte</h3>
                <p>
                  9.° ciclo. Proyectos formativos en centro de datos con Windows Server 2022, inventario con SQL Server
                  y aplicación web para restaurantes con Spring Boot, MySQL y Bootstrap.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="projects">
          <div className="container">
            <p className="section-label">Proyectos</p>
            <h2>Implementaciones clave</h2>

            <div className="project-grid">
              <article className="project-card glass-card">
                <img src="/assets/img/unnamed.png" alt="Sistema web de hardware empresarial y soporte técnico" loading="lazy" />
                <div className="project-content">
                  <h3>Hardware Empresarial &amp; Soporte Técnico</h3>
                  <p>
                    Plataforma web para una empresa de reparación técnica y venta de artículos tecnológicos. Los clientes
                    pueden crear su cuenta, registrar problemas de sus equipos con sus propias palabras y adjuntar fotos
                    para que el equipo técnico atienda cada solicitud con orden y trazabilidad.
                  </p>
                  <ul className="project-features" aria-label="Funciones principales del proyecto">
                    <li>Registro de clientes y carga de incidencias con descripción y fotografías.</li>
                    <li>Paneles internos para administrador y operador con gestión de casos.</li>
                    <li>Control de diagnósticos, estados, evidencias y trazabilidad del servicio técnico.</li>
                  </ul>
                  <div className="project-login" aria-label="Modo de ingreso al sistema demo">
                    <strong>Modo de ingreso demo:</strong>
                    <span>Administrador: <b>admin</b> / <b>admin123</b></span>
                    <span>Operador: <b>operador</b> / <b>operador123</b></span>
                  </div>
                  <div className="tags">
                    <span>Soporte Técnico</span><span>Gestión de Tickets</span><span>Hardware</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://solucion-pe-xi.vercel.app/" className="btn btn-secondary">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost">Ver GitHub</a>
                  </div>
                </div>
              </article>

              <article className="project-card glass-card">
                <img src="/assets/img/unnamed (1).png" alt="Sitio web profesional para doctor" loading="lazy" />
                <div className="project-content">
                  <h3>BautistaGarcia-web</h3>
                  <p>Sitio web profesional para servicios médicos, orientado a confianza, conversión y presencia de marca.</p>
                  <div className="tags">
                    <span>HTML</span><span>CSS</span><span>JavaScript</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://LifeSys.github.io/BautistaGarcia-web/" className="btn btn-secondary">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost">Ver GitHub</a>
                  </div>
                </div>
              </article>

              <article className="project-card glass-card">
                <img src="/assets/img/unnamed (2).png" alt="Sitio web para salón de belleza" loading="lazy" />
                <div className="project-content">
                  <h3>gr-glam-salon-web</h3>
                  <p>Experiencia web elegante para salón de belleza con foco visual premium y contacto directo con clientes.</p>
                  <div className="tags">
                    <span>UI/UX</span><span>Responsive</span><span>Branding</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://LifeSys.github.io/gr-glam-salon-web/" className="btn btn-secondary">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost">Ver GitHub</a>
                  </div>
                </div>
              </article>

              <article className="project-card glass-card">
                <img src="/assets/img/unnamed.png" alt="Plataforma logística CargaNet" loading="lazy" />
                <div className="project-content">
                  <h3>CargaNet</h3>
                  <p>Plataforma logística para seguimiento operativo y gestión eficiente de flujo de carga empresarial.</p>
                  <div className="tags">
                    <span>Plataforma</span><span>Logística</span><span>Web App</span>
                  </div>
                  <div className="project-actions">
                    <a href="https://LifeSys.github.io/CargaNet/index.html" className="btn btn-secondary">Ver demo</a>
                    <a href="https://github.com/LifeSys/" className="btn btn-ghost">Ver GitHub</a>
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

            <div className="stack-grid">
              <div className="stack-item glass-card"><span>🌐</span>HTML / CSS / JavaScript</div>
              <div className="stack-item glass-card"><span>☕</span>Java / Spring Boot</div>
              <div className="stack-item glass-card"><span>🐍</span>Python / C#</div>
              <div className="stack-item glass-card"><span>🗄️</span>SQL Server / MySQL</div>
              <div className="stack-item glass-card"><span>🖥️</span>Windows Server 2022</div>
              <div className="stack-item glass-card"><span>🧩</span>Active Directory / DNS / DHCP</div>
              <div className="stack-item glass-card"><span>🛠️</span>Soporte remoto / AnyDesk</div>
              <div className="stack-item glass-card"><span>📊</span>Word y Excel avanzado</div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="certifications">
          <div className="container">
            <p className="section-label">Certificaciones</p>
            <h2>Formación continua orientada a estándares globales</h2>

            <div className="cert-grid">
              <article className="glass-card cert-item"><h3>AWS Academy Cloud Foundations</h3><p>Fundamentos cloud y arquitectura escalable · Mar. 2025.</p></article>
              <article className="glass-card cert-item"><h3>CCNA: Introducción a las redes</h3><p>Redes, routing, switching y fundamentos LAN · Jun. 2025.</p></article>
              <article className="glass-card cert-item"><h3>Linux Essentials</h3><p>Administración básica de sistemas Linux · Jul. 2025.</p></article>
              <article className="glass-card cert-item"><h3>Introducción a IoT</h3><p>Fundamentos de Internet de las Cosas · May. 2024.</p></article>
              <article className="glass-card cert-item"><h3>Ciberseguridad</h3><p>Introducción a la Seguridad Cibernética · May. 2022.</p></article>
              <article className="glass-card cert-item"><h3>CLP: Advanced Programming in C</h3><p>Programación avanzada en C · Oct. 2023.</p></article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="contact">
          <div className="container final-cta glass-card">
            <p className="section-label">Colaboración</p>
            <h2>¿Quieres llevar tu negocio al siguiente nivel con tecnología?</h2>
            <p>
              Estoy disponible para colaborar en soporte técnico, documentación operativa, redes, servidores,
              bases de datos y desarrollo web. Referencias laborales a solicitud.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="https://wa.me/51906127991" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn btn-secondary" href="mailto:johannsebastian789@gmail.com">Email</a>
              <a className="btn btn-ghost" href="https://github.com/LifeSys/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© <span id="year"></span> Johann Sebastian Guevara Elias · Lima, Perú</p>
      </footer>

      <script src="/js/main.js" defer></script>
    </>
  )
}

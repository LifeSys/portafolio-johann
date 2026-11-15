// Contenido del portafolio. Para agregar o editar algo, cambia solo este archivo.

export type Categoria = 'sistemas' | 'web' | 'auto' | 'infra'

export type Proyecto = {
  nombre: string
  tipo: string
  descripcion: string
  puntos?: string[]
  stack: string[]
  categorias: Categoria[]
  fecha: string
  imagen?: string
  demo?: string
  repo?: string
  /** Proyecto sin enlace público por ahora */
  privado?: boolean
  destacado?: boolean
}

export const CATEGORIAS: { id: 'todos' | Categoria; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'sistemas', label: 'Sistemas' },
  { id: 'web', label: 'Web' },
  { id: 'auto', label: 'Automatización' },
  { id: 'infra', label: 'Infraestructura' },
]

export const PROYECTOS: Proyecto[] = [
  // ---------- Destacados con demo ----------
  {
    nombre: 'LifeAesthetics',
    tipo: 'SaaS para clínicas de medicina estética',
    descripcion:
      'Plataforma multi-tenant de gestión clínica con planes Essential, Professional y Premium controlados por funcionalidades y límites de uso.',
    puntos: [
      'Autenticación, registro y alta de clínicas',
      'Invitación de usuarios por correo y recuperación de contraseña',
      'Panel con indicadores y seguridad a nivel de filas',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Zod', 'Recharts'],
    categorias: ['sistemas', 'web'],
    fecha: '2026',
    imagen: '/projects/lifeaesthetics.webp',
    demo: 'https://lifeaesthetics-web.vercel.app',
    destacado: true,
  },
  {
    nombre: 'OrientaIA',
    tipo: 'Sistema de orientación vocacional',
    descripcion:
      'Sistema web de orientación vocacional basado en el instrumento CHASIDE (98 ítems, 7 áreas) para escolares, universitarios y profesionales, con un informe de resultados por áreas.',
    puntos: [
      'Flujos separados por tipo de participante',
      'Numeración automática y modo sin conexión',
      'Panel de administración con exportación a CSV, sin datos personales',
    ],
    stack: ['JavaScript', 'Python', 'Jupyter', 'Firebase', 'GitHub Pages'],
    categorias: ['web', 'sistemas'],
    fecha: '2026',
    imagen: '/projects/orientaia.webp',
    demo: 'https://lifesys.github.io/TES-VOCACIONAL/escolar.html?aula=DEMO',
    repo: 'https://github.com/LifeSys/TES-VOCACIONAL',
    destacado: true,
  },
  {
    nombre: 'LifeSystem Solutions',
    tipo: 'Web corporativa',
    descripcion:
      'Sitio de la empresa con servicios, soluciones, proyectos, contacto por WhatsApp, libro de reclamaciones, preguntas frecuentes y optimización SEO.',
    puntos: ['Sitemap, metadatos y Open Graph', 'Formularios con validación', 'Diseño responsive con dominio propio'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    categorias: ['web'],
    fecha: '2026',
    imagen: '/projects/lifesystem-web.webp',
    demo: 'https://www.lifesystemsolution.online',
    destacado: true,
  },
  {
    nombre: 'Grupo Luseta S.A.C.',
    tipo: 'Web corporativa',
    descripcion:
      'Sitio corporativo para una empresa de mantenimiento, obras civiles e infraestructura: servicios, proyectos, clientes y solicitud de cotización.',
    puntos: ['Contacto directo por WhatsApp', 'Gestión de consentimiento de cookies', 'Optimizado para celular'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    categorias: ['web'],
    fecha: '2026',
    imagen: '/projects/luseta-web.webp',
    demo: 'https://luseta-sac-web.vercel.app',
    destacado: true,
  },

  // ---------- Otros con demo o repositorio ----------
  {
    nombre: 'LifeCargo Express',
    tipo: 'Sistema de gestión de envíos para courier',
    descripcion:
      'Sistema web para empresas de courier y transporte de carga: clientes, almacenes, envíos con código de seguimiento, flujo de estados con historial, dashboard con gráficos y reportes en PDF.',
    puntos: [
      'Roles de administrador, operador de almacén y transportista',
      'Etiquetas y tickets imprimibles',
      'Demo con usuarios de prueba y datos guardados en el navegador',
    ],
    stack: ['JavaScript', 'Bootstrap 5', 'Chart.js', 'jsPDF', 'Firebase'],
    categorias: ['sistemas', 'web'],
    fecha: '2026',
    imagen: '/projects/courier.webp',
    demo: 'https://lifesystemsolution.github.io/modelo-sistema-courier/',
    repo: 'https://github.com/LifeSystemSolution/modelo-sistema-courier',
  },
  {
    nombre: 'Sistema para Boticas',
    tipo: 'Demo interactiva',
    descripcion: 'Demo de un sistema de ventas y control para boticas, con planes Básico, Control y Completo.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    categorias: ['sistemas', 'web'],
    fecha: '2026',
    imagen: '/projects/botica.webp',
    demo: 'https://lifesystemsolution.github.io/modelo-web-botica/',
  },
  {
    nombre: 'Dr. Andrés Vidal',
    tipo: 'Modelo web para médicos especialistas',
    descripcion: 'Página para un cirujano general y oncológico: perfil del especialista, servicios, experiencia, enfermedades que trata, preguntas frecuentes y consulta directa por WhatsApp, optimizada para SEO local.',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
    categorias: ['web'],
    fecha: '2026',
    imagen: '/projects/cirujano.webp',
    demo: 'https://lifesystemsolution.github.io/modelo-web-medico-cirujano/',
    repo: 'https://github.com/LifeSystemSolution/modelo-web-medico-cirujano',
  },
  {
    nombre: 'LifeGlam Salón',
    tipo: 'Modelo web para salones de belleza',
    descripcion: 'Página para un salón de belleza con servicios, galería de trabajos, testimonios y reservas por WhatsApp, con diseño responsive y animaciones de aparición.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    categorias: ['web'],
    fecha: '2026',
    imagen: '/projects/salon.webp',
    demo: 'https://lifesystemsolution.github.io/modelo-web-salon-belleza/',
    repo: 'https://github.com/LifeSystemSolution/modelo-web-salon-belleza',
  },
  {
    nombre: 'LifeSystem Homes',
    tipo: 'Modelo web para inmobiliarias',
    descripcion: 'Diseño web para inmobiliarias con buscador de propiedades por distrito, tipo y presupuesto.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    categorias: ['web'],
    fecha: '2026',
    imagen: '/projects/inmobiliaria.webp',
    demo: 'https://lifesystemsolution.github.io/modelo-web-inmobiliaria/',
  },
  {
    nombre: 'LifeSystem Estétic',
    tipo: 'Modelo web para clínica estética',
    descripcion: 'Web de una página con tres opciones de diseño, catálogo de tratamientos con filtros y citas por WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    categorias: ['web'],
    fecha: '2026',
    imagen: '/projects/estetica.webp',
    demo: 'https://lifesystemsolution.github.io/modelo-web-medicina-estetica/',
  },
  {
    nombre: 'CashLife',
    tipo: 'App de finanzas personales',
    descripcion: 'Aplicación para registrar gastos, ingresos, préstamos y transferencias en segundos, con dashboard de estadísticas y diseño pensado primero para móvil.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    categorias: ['web'],
    fecha: '2026',
    repo: 'https://github.com/LifeSys/Web_CashLife',
  },
  {
    nombre: 'Organizador de fotos',
    tipo: 'Herramienta para Windows',
    descripcion: 'Ordena fotos y videos por su fecha real de captura, detecta duplicados y nunca borra archivos.',
    stack: ['Python'],
    categorias: ['auto', 'sistemas'],
    fecha: '2026',
    repo: 'https://github.com/LifeSystemSolution/organizador-fotos',
  },

  // ---------- Actualmente privados ----------
  {
    nombre: 'LifeSystemSolution POS',
    tipo: 'Sistema POS web y de escritorio',
    descripcion:
      'Sistema de ventas, caja, cocina, inventario y reportes para restaurantes y comercios. Versión web multiempresa y multisucursal, y versión de escritorio para un solo local que funciona sin internet.',
    puntos: [
      'Roles y permisos, impresión térmica de recibos y comandas',
      'Listo para producción y probado con pruebas de estrés y carga',
      'Conexión a facturación electrónica SUNAT',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Electron', 'Vercel'],
    categorias: ['sistemas', 'web'],
    fecha: '2025 – actualidad',
    privado: true,
  },
  {
    nombre: 'LifeSystemSolution API SUNAT',
    tipo: 'Adaptación a sistema de escritorio',
    descripcion:
      'A partir de un código base de facturación electrónica SUNAT en Laravel que adquirí, completé y adapté el sistema, convirtiéndolo en una aplicación local descargable con instalador para Windows y conexión al POS.',
    stack: ['Laravel', 'PHP', 'Electron', 'PostgreSQL', 'Docker'],
    categorias: ['sistemas'],
    fecha: '2026',
    privado: true,
  },
  {
    nombre: 'Asistente de atención para WhatsApp',
    tipo: 'Atención automatizada de clientes',
    descripcion: 'Asistente que responde a los clientes de un negocio por WhatsApp, registra las conversaciones y tiene un panel web de administración.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'WhatsApp API'],
    categorias: ['auto', 'sistemas'],
    fecha: '2026',
    privado: true,
  },
  {
    nombre: 'LUSETA Control',
    tipo: 'Control de expedientes y automatización documental',
    descripcion:
      'Sigue los expedientes de obra desde la cotización hasta el cobro y genera cotizaciones, informes, actas, valorizaciones y cartas de cobranza en Word/PDF, con cálculo de IGV y respaldos programados.',
    stack: ['Python', 'SQLite', 'python-docx'],
    categorias: ['sistemas', 'auto'],
    fecha: '2026',
    privado: true,
  },
  {
    nombre: 'SOLUCION.PE',
    tipo: 'Plataforma B2B de hardware y soporte técnico',
    descripcion:
      'Catálogo, pedidos y reparaciones técnicas con trazabilidad de estados. Proyecto en equipo de 3: me encargué del análisis del negocio, el diseño de la solución y el despliegue.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    categorias: ['sistemas', 'web'],
    fecha: '2026',
    privado: true,
  },
  {
    nombre: 'VIP Barbershop',
    tipo: 'App para barberías',
    descripcion: 'Aplicación que recomienda cortes y estilos a partir de una foto del cliente.',
    stack: ['Next.js', 'TypeScript', 'Firebase'],
    categorias: ['web'],
    fecha: '2026',
    privado: true,
  },
  {
    nombre: 'People Analytics Pro',
    tipo: 'Sistema de recursos humanos',
    descripcion: 'Sistema web para visualizar información del personal e indicadores de gestión.',
    stack: ['Next.js', 'React', 'TypeScript'],
    categorias: ['sistemas', 'web'],
    fecha: '2026',
    privado: true,
  },
  {
    nombre: 'Centro de datos Tecdata',
    tipo: 'Proyecto académico',
    descripcion: 'Windows Server 2022 con Active Directory, DNS, DHCP, FTP e IIS sobre varias máquinas virtuales, con documentación de la topología de red.',
    stack: ['Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'IIS'],
    categorias: ['infra'],
    fecha: '2024',
    privado: true,
  },
  {
    nombre: 'Simulación de redes empresariales',
    tipo: 'Proyecto académico',
    descripcion: 'Diseño y simulación de redes con direccionamiento IP, topologías LAN y configuración básica de equipos Cisco.',
    stack: ['Cisco Packet Tracer', 'Redes LAN'],
    categorias: ['infra'],
    fecha: '2023',
    privado: true,
  },
  {
    nombre: 'Tienda Digital Life',
    tipo: 'Inventario y ventas · académico',
    descripcion: 'Aplicación de control de inventario y ventas con gestión de transacciones de stock.',
    stack: ['C#', 'SQL Server'],
    categorias: ['sistemas'],
    fecha: '2023',
    privado: true,
  },
  {
    nombre: 'Poke-Rolls',
    tipo: 'Web de pedidos · académico en equipo',
    descripcion: 'Aplicación web para gestión de pedidos, menú y carrito de compras; participé en el diseño y la toma de requerimientos.',
    stack: ['Spring Boot', 'MySQL', 'Bootstrap'],
    categorias: ['web'],
    fecha: '2023',
    privado: true,
  },
]

export const EXPERIENCIA = [
  {
    fecha: 'Nov. 2023 – Actualidad',
    puesto: 'Asistente Administrativo',
    lugar: 'Grupo Luseta S.A.C. · Medio tiempo, remoto',
    puntos: [
      'Gestión de documentación técnica (actas, informes y expedientes de obra) con registro y respaldo digital ordenado.',
      'Elaboración de cotizaciones y documentación administrativa, verificando requisitos, versiones y consistencia.',
      'Desarrollé LUSETA Control, un sistema interno que genera cotizaciones, informes y actas en Word/PDF.',
    ],
  },
  {
    fecha: 'Mar. 2024 – Jul. 2024',
    puesto: 'Auxiliar en Tecnología y Sistemas (prácticas)',
    lugar: 'Inversiones GICA y Asociados S.A.C.',
    puntos: [
      'Atención de incidencias de primer nivel y soporte a usuarios, registrando diagnóstico, acciones y cierre.',
      'Mantenimiento preventivo de equipos, validaciones y pruebas funcionales de sistemas.',
      'Respaldos de información, control básico de bases de datos y estandarización del registro de incidencias.',
    ],
  },
  {
    fecha: '2022 – Actualidad',
    puesto: 'Ingeniería de Sistemas Computacionales',
    lugar: 'Universidad Privada del Norte (UPN) · 10.º ciclo',
    puntos: ['Culmino mis estudios en 2026.'],
  },
]

export const STACK: { titulo: string; items: string[] }[] = [
  { titulo: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML y CSS', 'Bootstrap'] },
  { titulo: 'Backend', items: ['Python', 'FastAPI', 'Laravel (PHP)', 'Node.js', 'Spring Boot', 'C#'] },
  { titulo: 'Bases de datos', items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQL Server', 'SQLite', 'Firebase'] },
  { titulo: 'Escritorio y despliegue', items: ['Electron', 'Vercel', 'Docker', 'Git y GitHub', 'Neon', 'Cloudinary'] },
  { titulo: 'Infraestructura', items: ['Windows Server 2022', 'Active Directory', 'DNS / DHCP / IIS', 'Linux', 'Redes LAN', 'Cisco Packet Tracer'] },
  { titulo: 'Soporte y herramientas', items: ['Soporte a usuarios', 'Mantenimiento de equipos', 'AnyDesk', 'Postman', 'Word avanzado', 'Excel intermedio'] },
]

export const CERTIFICACIONES = [
  { nombre: 'Linux Essentials', emisor: 'Cisco Networking Academy', fecha: 'Jul. 2025' },
  { nombre: 'CCNA: Introducción a las Redes', emisor: 'Cisco Networking Academy', fecha: 'Jun. 2025' },
  { nombre: 'AWS Academy Cloud Foundations', emisor: 'AWS Academy · 20 horas', fecha: 'Mar. 2025' },
  { nombre: 'Introducción a IoT', emisor: 'Cisco Networking Academy', fecha: 'May. 2024' },
  { nombre: 'CLP: Advanced Programming in C', emisor: 'C++ Institute / Cisco', fecha: 'Oct. 2023' },
  { nombre: 'Introducción a la Ciberseguridad', emisor: 'Cisco Networking Academy', fecha: 'May. 2022' },
]

export const CONTACTO = {
  whatsapp: 'https://wa.me/51906127991',
  telefono: '(+51) 906 127 991',
  email: 'johannsebastian789@gmail.com',
  linkedin: 'https://www.linkedin.com/in/johann-sg/',
  github: 'https://github.com/LifeSys',
  githubEmpresa: 'https://github.com/LifeSystemSolution',
}

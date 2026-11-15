import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Johann Sebastian Guevara | Desarrollo Full Stack, Sistemas y Soporte TI',
  description: 'Portafolio de Johann Sebastian Guevara Elias, Ingeniería de Sistemas (UPN): sistemas POS, plataformas SaaS, automatización de procesos, sitios web para clientes y soporte TI en Lima, Perú.',
  keywords: 'Ingeniería de Sistemas, Desarrollo Full Stack, Next.js, React, TypeScript, PostgreSQL, Python, Soporte TI, Windows Server, Portafolio, Lima',
  authors: [{ name: 'Johann Sebastian Guevara Elias' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1322',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Johann Sebastian Guevara | Ingeniería de Sistemas, Redes y Desarrollo Web',
  description: 'Portafolio profesional y CV de Johann Sebastian Guevara Elias: Ingeniería de Sistemas, redes, servidores, soporte técnico y desarrollo web en Lima, Perú.',
  keywords: 'Ingeniería de Sistemas, Redes, Servidores, Soporte Técnico, Desarrollo Web, SQL Server, Windows Server, Portafolio',
  authors: [{ name: 'Johann Sebastian Guevara Elias' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

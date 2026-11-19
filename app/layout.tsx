import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import AvisoCookies from './AvisoCookies'

// Las fuentes se descargan al compilar y se sirven desde el propio sitio (sin cookies ni llamadas a Google)
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' })
const serif = Source_Serif_4({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  title: 'Johann Sebastian Guevara | Desarrollo Full Stack, Sistemas y Soporte TI',
  description: 'Portafolio de Johann Sebastian Guevara Elias, Ingeniería de Sistemas (UPN): sistemas POS, plataformas SaaS, automatización de procesos, sitios web para clientes y soporte TI en Lima, Perú.',
  keywords: 'Ingeniería de Sistemas, Desarrollo Full Stack, Next.js, React, TypeScript, PostgreSQL, Python, Soporte TI, Windows Server, Portafolio, Lima',
  authors: [{ name: 'Johann Sebastian Guevara Elias' }],
  creator: 'LifeSystem Solutions',
  publisher: 'LifeSystem Solutions',
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
    <html lang="es" className={`${inter.variable} ${serif.variable}`}>
      <body>
        {children}
        <AvisoCookies />
      </body>
    </html>
  )
}

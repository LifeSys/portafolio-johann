'use client'

// Aviso de cookies + Google Analytics 4.
// GA solo se carga si el visitante pulsa "Aceptar". La elección se guarda en este navegador
// y puede cambiarse con el botón "Preferencias de cookies" del pie de página.

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_ID = 'G-LHV0YH4YCX'
const CLAVE = 'consentimiento-analitica' // 'si' | 'no'
const EVENTO_ABRIR = 'abrir-aviso-cookies'

function leer(): string | null {
  try {
    return localStorage.getItem(CLAVE)
  } catch {
    return null
  }
}

function guardar(valor: 'si' | 'no') {
  try {
    localStorage.setItem(CLAVE, valor)
  } catch {}
}

// Borra las cookies de GA (_ga, _ga_XXXX) al retirar el consentimiento.
function borrarCookiesGA() {
  const dominio = location.hostname
  document.cookie.split(';').forEach((c) => {
    const nombre = c.split('=')[0].trim()
    if (nombre.startsWith('_ga')) {
      document.cookie = `${nombre}=; Max-Age=0; path=/`
      document.cookie = `${nombre}=; Max-Age=0; path=/; domain=${dominio}`
      document.cookie = `${nombre}=; Max-Age=0; path=/; domain=.${dominio}`
    }
  })
}

export default function AvisoCookies() {
  const [eleccion, setEleccion] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const guardada = leer()
    setEleccion(guardada)
    setVisible(guardada === null)
    const abrir = () => setVisible(true)
    window.addEventListener(EVENTO_ABRIR, abrir)
    return () => window.removeEventListener(EVENTO_ABRIR, abrir)
  }, [])

  const responder = (valor: 'si' | 'no') => {
    const antes = eleccion
    guardar(valor)
    setEleccion(valor)
    setVisible(false)
    // Si retira un consentimiento ya dado, se borran las cookies y se recarga sin GA.
    if (antes === 'si' && valor === 'no') {
      borrarCookiesGA()
      location.reload()
    }
  }

  return (
    <>
      {eleccion === 'si' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {visible && (
        <div className="aviso-cookies" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
          <p>
            Uso Google Analytics para saber cuántas personas visitan este portafolio y qué secciones les interesan.
            Solo se activa si aceptas. <a href="/politica-de-cookies">Más información</a>
          </p>
          <div className="aviso-cookies-botones">
            <button type="button" className="btn btn-secundario" onClick={() => responder('no')}>
              Rechazar
            </button>
            <button type="button" className="btn btn-primario" onClick={() => responder('si')}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// Botón para volver a abrir el aviso (pie de página y política de cookies).
export function BotonPreferenciasCookies({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(EVENTO_ABRIR))}
    >
      Preferencias de cookies
    </button>
  )
}

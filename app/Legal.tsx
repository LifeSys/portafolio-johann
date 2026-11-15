// Plantilla común para las páginas legales del portafolio.
import Pie from './Pie'

export const ACTUALIZADO = '14 de noviembre de 2026'

export default function Legal({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <>
      <header className="barra">
        <div className="marco barra-interior">
          <a className="marca" href="/">
            Johann Guevara
          </a>
          <a className="enlace" href="/">
            Volver al portafolio
          </a>
        </div>
      </header>
      <main className="legal marco">
        <h1>{titulo}</h1>
        <p className="meta">Última actualización: {ACTUALIZADO}</p>
        <div className="legal-cuerpo">{children}</div>
      </main>
      <Pie />
    </>
  )
}

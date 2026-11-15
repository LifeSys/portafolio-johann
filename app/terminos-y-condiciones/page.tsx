import type { Metadata } from 'next'
import Legal from '../Legal'
import { EMPRESA } from '../Pie'

export const metadata: Metadata = {
  title: 'Términos y condiciones | Johann Sebastian Guevara',
  description: 'Condiciones de uso, propiedad intelectual y derechos de autor del portafolio de Johann Sebastian Guevara.',
}

export default function Page() {
  return (
    <Legal titulo="Términos y condiciones">
      <h2>1. Titularidad del sitio</h2>
      <p>
        Este sitio es el portafolio profesional de Johann Sebastian Guevara Elias. Fue diseñado, desarrollado y es
        administrado por {EMPRESA.nombre} ({EMPRESA.web}), con domicilio en {EMPRESA.direccion}. Puedes escribirnos a{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>

      <h2>2. Finalidad</h2>
      <p>
        El sitio tiene un fin informativo: presentar el perfil profesional, la experiencia y los proyectos de Johann
        Sebastian Guevara Elias. No se venden productos ni se contratan servicios a través de este sitio. Cualquier
        contratación se acuerda por separado y por escrito.
      </p>

      <h2>3. Propiedad intelectual y derechos de autor</h2>
      <p>
        El diseño, el código fuente, los textos, la organización de los contenidos y los elementos gráficos de este
        sitio son propiedad de {EMPRESA.nombre} y están protegidos por el Decreto Legislativo N.º 822, Ley sobre el
        Derecho de Autor del Perú, y por las normas internacionales aplicables. Todos los derechos están reservados.
      </p>
      <p>
        Queda prohibida la reproducción, distribución, modificación o comunicación pública, total o parcial, de este
        sitio o de sus contenidos sin autorización previa y por escrito. Se permite compartir el enlace al sitio y citar
        fragmentos breves indicando la fuente.
      </p>
      <p>
        Que el código de este sitio pueda verse en un repositorio público no concede ninguna licencia de uso, copia o
        modificación.
      </p>

      <h2>4. Proyectos, marcas y capturas de terceros</h2>
      <p>
        Las capturas, nombres comerciales y logotipos de clientes y de proyectos realizados para terceros pertenecen a
        sus respectivos titulares. Se muestran únicamente como referencia del trabajo realizado y no implican
        patrocinio ni cesión de derechos.
      </p>
      <p>
        Algunos proyectos se desarrollaron en equipo o a partir de código de terceros, y así se indica en su
        descripción. Por ejemplo, OrientaIA es un trabajo conjunto con Héctor Medina, y el sistema de facturación
        electrónica parte de un código base adquirido que fue completado y adaptado.
      </p>
      <p>
        Si eres titular de algún contenido y consideras que se usa de forma indebida, escríbenos a{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> y lo revisaremos o retiraremos a la brevedad.
      </p>

      <h2>5. Enlaces externos</h2>
      <p>
        El sitio enlaza a demos, repositorios, redes sociales y servicios de terceros (por ejemplo WhatsApp, LinkedIn y
        GitHub). Al seguir esos enlaces se aplican los términos y políticas de cada sitio, sobre los que no tenemos
        control.
      </p>

      <h2>6. Exactitud de la información</h2>
      <p>
        La información del sitio se mantiene actualizada de buena fe. Las demos son de muestra y pueden cambiar o dejar
        de estar disponibles sin aviso.
      </p>

      <h2>7. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a los
        jueces y tribunales de Lima.
      </p>
    </Legal>
  )
}

import type { Metadata } from 'next'
import Legal from '../Legal'
import { EMPRESA } from '../Pie'

export const metadata: Metadata = {
  title: 'Política de privacidad | Johann Sebastian Guevara',
  description: 'Cómo se tratan los datos personales en el portafolio de Johann Sebastian Guevara, conforme a la Ley N.º 29733.',
}

export default function Page() {
  return (
    <Legal titulo="Política de privacidad">
      <p>
        Esta política explica cómo se tratan los datos personales en este sitio, conforme a la Ley N.º 29733, Ley de
        Protección de Datos Personales, y su reglamento vigente.
      </p>

      <h2>1. Responsable</h2>
      <p>
        El responsable del sitio es {EMPRESA.nombre}, con domicilio en {EMPRESA.direccion}, correo{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>

      <h2>2. Datos que recogemos</h2>
      <p>
        Este sitio no tiene formularios, no pide registro y no recoge datos personales de los visitantes. Tampoco usa
        herramientas de analítica ni de publicidad.
      </p>
      <p>
        Si decides escribirnos por correo, WhatsApp o LinkedIn, recibiremos los datos que tú mismo nos envíes, como tu
        nombre, correo, teléfono y el contenido del mensaje.
      </p>

      <h2>3. Para qué usamos esos datos</h2>
      <p>
        Solo para responder a tu mensaje y dar seguimiento a la oportunidad laboral o al proyecto que nos propongas.
        No los vendemos, no los cedemos a terceros y no los usamos para enviarte publicidad.
      </p>

      <h2>4. Base legal y conservación</h2>
      <p>
        Tratamos esos datos con tu consentimiento, que das al escribirnos por iniciativa propia. Los conservamos solo
        el tiempo necesario para atender tu solicitud, o hasta que nos pidas eliminarlos.
      </p>

      <h2>5. Datos técnicos del alojamiento</h2>
      <p>
        El sitio está alojado en Vercel. Como cualquier servidor web, registra datos técnicos de cada visita (dirección
        IP, navegador y páginas solicitadas) por motivos de seguridad y funcionamiento, según su propia política de
        privacidad. Nosotros no usamos esos registros para identificar a los visitantes. Esto puede implicar una
        transferencia internacional de datos, ya que los servidores de Vercel pueden estar fuera del Perú.
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>. Responderemos en los plazos que fija la ley. Si no
        estás conforme con la respuesta, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del
        Ministerio de Justicia y Derechos Humanos.
      </p>

      <h2>7. Cambios</h2>
      <p>Si esta política cambia, publicaremos la nueva versión en esta misma página con su fecha de actualización.</p>
    </Legal>
  )
}

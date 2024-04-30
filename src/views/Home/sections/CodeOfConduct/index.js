import React from 'react'
import ConductItem from './conductItem';

import './codeOfConduct.css';

const CodeOfConduct = () => {
  return (
    <section className='div_COC' id='COC'>
          <h1>Código de Conducta (COC)</h1>
          <div>
          <ConductItem
                title="Para Asistentes"
                content="PyDay es un evento inclusivo y seguro para todos los participantes. Como asistente, te pedimos que sigas estas reglas:"
                type="asistente"
                points={[
                    "Trata a todos los participantes con respeto y cortesía, independientemente de su identidad, género, orientación sexual, habilidad, apariencia física, religión o cualquier otra característica personal.",
                    "Respeta el espacio y las opiniones de los demás. No toleramos el acoso ni la discriminación en ninguna forma.",
                    "Mantén un comportamiento adecuado en todo momento durante el evento y las actividades relacionadas.",
                    "Si experimentas o presencias cualquier forma de acoso, te alentamos a que lo informes a los organizadores de PyDay Cochabamba inmediatamente."
                ]}
          />
          <ConductItem
                title="Para Speakers y Talleristas"
                content="Como speaker o tallerista, tu contribución es fundamental para el éxito de PyDay. Te pedimos que cumplas con las siguientes pautas:"
                type="speaker"
                points={[
                    "Proporciona una presentación o taller respetuoso y libre de contenido ofensivo o discriminatorio.",
                    "Fomenta un entorno inclusivo donde todos los participantes se sientan bienvenidos y valorados.",
                    "Respeta el tiempo asignado para tu presentación o taller y permite la participación de la audiencia cuando sea adecuado.",
                    "Evita cualquier tipo de conducta inapropiada durante tu participación en PyDay Cochabamba 2024."
                ]}
          />
          <ConductItem
                title="Para Staffs"
                content="Como miembro del staff de PyDay, tienes la responsabilidad de mantener un ambiente seguro y acogedor para todos los participantes. Por favor, sigue estas pautas:"
                type="staffs"
                points={[
                    "Sé un ejemplo de comportamiento respetuoso y profesional en todo momento.",
                    "Escucha y atiende las preocupaciones de los participantes de manera justa y diligente.",
                    "Actúa con prontitud y decisión en caso de presenciar o recibir informes de cualquier forma de acoso o comportamiento inapropiado.",
                    "Respeta la privacidad y la confidencialidad de cualquier información sensible que puedas manejar como parte del equipo de PyDay Cochabamba."
                ]}
          />
          </div>
      </section>
  )
}

export default CodeOfConduct;

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
            <ConductItem
                    title="Consecuencias por Incumplimiento"
                    content="Consecuencias por Incumplimiento como asistente, Speakers/Talleristas y miembro del staff:"
                    type="asistente"
                    points={[
                        "Advertencia verbal en primer instancia.",
                        "Si un Asistente incurre en reincidencia o incumplimiento grave se procedera a la expulsión del evento.",
                        "Si un Speakers/Talleristas incurre en reincidencia o incumplimiento grave se procedera al retiro de la participación en el evento y posible prohibición de futuras presentaciones en eventos organizados por PyDay Cochabamba.",
                        "Si un miembro del Staff incurre en reincidencia se procedera a darle una suspensión temporal de las responsabilidades como miembro del staff.",
                        "Si un miembro del Staff incurre en algún incumplimiento grave se procedera a la sesvinculación del equipo de PyDay Cochabamba 2024.",
                        "Si eres victima o testigo de actos que vayan en contra del código de conducta, puedes reportalo a los miembros del Staff o al correo: pydaycbba@gmail.com"

                    ]}
            />
            <ConductItem
                    title="Politicas de seguridad y salud ante el COVID-19"
                    content="Medidas de control"
                    type="speaker"
                    points={[
                        "Para los participantes de nacionalidad boliviana deben presentar su carnet de vacunación emitido por el Ministerio de Salud de Bolivia al momento del registro.",
                        "Para los participantes extranjeros deben deben presentar un equivalente al carnet de vacunación emitido por la autoridad sanitaria de su país de origen.",
                        "El uso de cubrebocas es obligatorio en los espacios cerrados como el escenario principal y los espacios de los talleres.",
                        "Recuerda portar con tu alcohol en gel, tambien podras encontrar dispensadores en los puntos de registro."
                    ]}
            />
            </div>
        </section>
    )
}

export default CodeOfConduct;

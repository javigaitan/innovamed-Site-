import React from 'react';
import faltadedeseo from "../../assets/falta-deseo.jpg"



function FaltaDeseo() {
    return (
        <div className="disfuncion-erectil-container p-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold font-montserrat text-purple-950 mb-8">Falta de deseo</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            La falta de deseo sexual es el bajo nivel de interés en tener relaciones sexuales donde la persona afectada no responde a la voluntad o deseo de actividad sexual de su pareja. Según los expertos la falta de deseo sexual suele ir acompañada de problemas físicos o psíquicos, siendo común una disfunción sexual.
                        </p>
                        <p className="text-6x1 font-bold font-montserrat text-purple-950 mb-4">
                            Existen diversos tipos de falta de deseo sexual:
                        </p>
                        <p className="text-lg mb-4">
                            <li>Falta de deseo sexual primaria: afecta, sobre todo, a mujeres que nunca han tenido un deseo sexual suficiente. Se traduce como la nula capacidad para tener fantasías sexuales o escasas conductas con finalidad sexual. Se manifiesta durante la adolescencia, pero se hace peor en la persona adulta.</li>
                            <li>Falta de deseo sexual secundaria: se da en personas que han disfrutado de un deseo sexual normal pero que, con el tiempo, pierden el interés por ello.</li>
                            <li>Falta de deseo sexual generalizada: la persona afectada no tiene deseo ni por su pareja ni por nadie.</li>
                            <li>Falta de deseo sexual situacional: el afectado no tiene deseo sexual por su pareja pero sí por otras personas.</li>
                        </p>

                    </div>

                    <div>
                        <img src={faltadedeseo} alt="Pareja en la cama" className="rounded-md w-full" />

                    </div>
                </div>


                {/* Sección de síntomas y consulta médica */}
                <div className="mt-8 bg-purple-900 text-white p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Síntomas</h2>
                    <ul className="list-disc list-inside mb-4">
                        Las personas con falta de deseo sexual suelen poner excusas para evitar las relaciones sexuales con la pareja. Así, casi nunca se van a dormir a la vez que su pareja y siempre tienen excusas o cosas que hacer, tales como ver un programa de televisión muy interesante, finalizar algún trabajo urgente, recoger la cocina, etc. A veces es esta “huida” la que genera un gran sentimiento de culpa, al sentir que no da respuesta a un compromiso, lo que genera más nervios según se dilata el encuentro sexual.
                        <br /><br />
                        El paciente que sufre falta de deseo sexual tiende a sabotear inconscientemente la relación, poniendo inconvenientes. En esto no ayuda la sociedad actual, donde tenemos una sobrecarga de estímulos, trabajo y tareas en un tiempo limitado: familia, amigos, trabajo, relaciones sociales, viajes, ocio, tareas del hogar, etc. Todo esto hace que la persona deje el sexo en el último lugar de prioridades.
                    </ul>
                    <br />
                    <h2 className="text-2xl font-bold mb-4">Tratamientos para la falta de deseo sexual</h2>
                    <p className="text-lg mb-4">
                        Lo primero que debe llevarse a cabo en la falta de deseo sexual es un estudio de la causa que lo está generando. Posteriormente deben abordarse las vías de placer. Existen unas vías neuronales que se relacionan con el deseo sexual y el placer. Para que todo funcione bien el tránsito del deseo al placer tiene que estar lleno de estímulos gratos para ambas partes, de la misma manera que debe serlo el encuentro sexual. Las personas con falta de deseo sexual no sienten esas reacciones en el camino. Esto se considera tratable cuando la ausencia de ganas de deseo sexual es persistente y ocurre desde hace más de 6 meses, ya que no debe confundirse con algo temporal o puntual.
                        <br /><br />
                        Si la falta de deseo sexual es temporal no debe preocupar en exceso al paciente, pero le vendrán bien los refuerzos positivos, y dedicar un tiempo a mimarse y cuidarse. En esos refuerzos se debe favorecer el erotismo con los estímulos adecuados. Además, para combatir la falta de deseo sexual es esencial querer superarlo. Si el paciente está dispuesto se puede educar el deseo y, poco a poco, ir descubriendo modos de querer tener encuentros sexuales. La terapia de pareja y la terapia sexual pueden ser útiles. En estos casos ayudarán al paciente los especialistas en sexología.
                    </p>

                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-4xl font-bold font-montserrat text-purple-950 mb-4">¿Cuáles son las causas de la falta de deseo sexual?</h2>
                En la falta de deseo sexual pueden influir diversas causas, que bien pueden ser causas orgánicas o psicológicas. Entre ellas destacan:
                <br />
                Alteraciones hormonales o problemas endocrinos.
                Estar sometido a tratamiento con medicamentos específicos.
                Enfermedades crónicas.
                Enfermedades metabólicas.
                <br /><br />
                {/* Causas psicológicas */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold font-montserrat text-purple-950 mb-4">Causas psicológicas</h3>
                    <p>
                        <li>Tener una vida sexual poco satisfactoria.</li>
                        <li>Monotonía en la relación</li>
                        <li>Miedos personales a no satisfacer a la pareja.</li>
                        <li>Estrés y ansiedad.</li>
                        <li>Fatiga y cansancio.</li>
                        <li>Disfunciones sexuales: disfunción eréctil, vaginismo o anorgasmia.</li>
                        <br />
                    </p>
                </div>
                {/* Causas biológicas */}
                <div className="mb-8">
                    <h3 className="text-2xl font-montserrat text-purple-950 mb-8 ">El tratamiento de los problemas sexuales debe tener en cuenta todos los recursos disponibles y, para ello, es esencial un diagnóstico personalizado, para beneficiarse del tratamiento más adecuado.</h3>

                </div>
            </div>
        </div>

    );
}
export default FaltaDeseo
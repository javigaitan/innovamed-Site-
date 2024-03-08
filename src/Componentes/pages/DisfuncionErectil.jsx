import React from 'react';
import imagen from "../../assets/disfuncion-erectil.jpg"
import imagen2 from "../../assets/impotencia-sexual-causas.jpg"


function DisfuncionErectil() {
    return (
        <div className="disfuncion-erectil-container p-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold font-montserrat text-purple-950 mb-8">Disfunción Eréctil</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            La disfunción eréctil (conocida popularmente como «impotencia») es la incapacidad de alcanzar o mantener una erección con suficiente firmeza para tener una relación sexual satisfactoria.
                        </p>
                        <p className="text-lg mb-4">
                            Aunque ocasionalmente podría aparecer algún episodio de manera esporádica, se considera un problema cuando se produce de forma continua, afectando a la vida sexual del paciente y de la pareja.
                        </p>

                    </div>

                    <div>
                        <img src={imagen} alt="Descripción de la imagen 1" className="rounded-md w-full" />

                    </div>
                </div>


                {/* Sección de síntomas y consulta médica */}
                <div className="mt-8 bg-purple-900 text-white p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Síntomas</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Problemas para tener una erección</li>
                        <li>Problemas para mantener la erección</li>
                        <li>Disminución del deseo sexual</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Cuándo debes consultar a un médico</h2>
                    <p className="text-lg mb-4">
                        El médico de cabecera es la primera persona a la que debes consultar cuando tienes problemas eréctiles. Consulta al médico en los siguientes casos:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Te preocupan tus erecciones o tienes otros problemas sexuales, tales como disfunción eyaculatoria, eyaculación precoz o tardía.</li>
                        <li>Tienes diabetes, enfermedad cardíaca u otra afección médica conocida que pueda estar asociada con la disfunción eréctil.</li>
                        <li>Tienes otros síntomas además de la disfunción eréctil.</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-purple-950 mb-4">Causas</h2>
                    <p>
                        La excitación sexual masculina es un proceso complejo que involucra al cerebro, las hormonas, las emociones, los nervios, los músculos y los vasos sanguíneos. La disfunción eréctil puede ser el resultado de un problema con alguno de estos.
                        <br /><br />
                        Del mismo modo, el estrés y las inquietudes relacionadas con la salud mental pueden provocar disfunción eréctil o empeorarla.
                        A veces, la disfunción eréctil se debe a una combinación de cuestiones físicas y psicológicas. Por ejemplo, una enfermedad física leve que hace que tu respuesta sexual sea más lenta puede generarte ansiedad con respecto a mantener una erección. Esta ansiedad puede provocar o empeorar la disfunción eréctil.
                    </p>
                    {/* Espacio para la imagen */}
                    <img src={imagen2} alt="Descripción de la imagen 2" className="rounded-md mt-4 w-full" />
                    {/* Puedes agregar más texto o imágenes aquí */}
                </div>
            </div>
        </div>
    );
}

export default DisfuncionErectil;
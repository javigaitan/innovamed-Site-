import React from 'react';
import examen from "../../assets/examen-medico.jpg"



function TratamientoReemplazoHormonal() {
    return (
        <div className="disfuncion-erectil-container p-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold font-montserrat text-purple-950 mb-8">Tratamiento de reemplazo hormonal </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            El tratamiento se realiza a través de la aplicación subcutánea de pequeños gránulos (pellets) de Hormonas Bioidénticas.
                            Esta terapia en los hombres mejora la falta de erección y los síntomas de la andropausia y en las mujeres la sintomatología
                            de la menopausia y la disminución del deseo sexual.
                        </p>
                        <p className="text-6x1 font-bold font-montserrat text-purple-950 mb-4">
                            Reemplazo hormonal con pellets
                        </p>
                        <p className="text-lg mb-4">

                            Las hormonas son las responsables de regular la reproducción, el metabolismo, el crecimiento y el desarrollo de hombres y mujeres. A partir de los 30 años de edad comienza a disminuir la producción de hormonas en el cuerpo, afectando el metabolismo, la energía, la función sexual, el estado de ánimo y la salud en general.

                        </p>

                    </div>

                    <div>
                        <img src={examen} alt="examen medico" className="rounded-md w-full" />

                    </div>
                </div>


                {/* Sección de síntomas y consulta médica */}
                <div className="mt-8 bg-purple-900 text-white p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">¿Cómo funciona el tratamiento de reemplazo hormonal?</h2>
                    <ul className="list-disc list-inside mb-4">
                        El tratamiento es un “pellet”, o una pieza pequeña del tamaño de un granito de arroz que es polvo comprimido compuesto por hormonas. El “pellet” se inserta en el área de la cadera de forma ambulatoria y rápida para que vaya liberando de forma continua durante todo el día evitando los efectos de impacto altos y bajos. Sus ingredientes han sido aprobados por la Food and Drug Administration. Se inserta un solo “pellet” de testosterona en mujeres que no han llegado aún a la menopausia, y en hombres mayores de 30 años, para nivelar su desbalance hormonal. A la mujer que ya entró en la etapa menopáusica se le inserta uno de estrógeno y uno más pequeño aún de testosterona.
                    </ul>

                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-4xl font-bold font-montserrat text-purple-950 mb-4">Beneficios del reemplazo hormonal</h2>
                Alivia las siguientes causas:
                <br /> <br />

                <li>Falta de energía</li>
                <li>Aumento de peso</li>
                <li>Cambios en el estado de ánimo</li>
                <li>Disminución de apetito sexual</li>
                <li>Depresión, ansiedad</li>
                <li>Pérdida de memoria</li>
                <li>Estreñimiento</li>
                <br />

            </div>
            {/* Causas biológicas */}
            <div className="mb-8">
                <h3 className="text-2xl font-montserrat text-purple-950 mb-8 ">El Tratamiento de Reemplazo Hormonal ayuda a evitar, osteoporosis, enfermedades cardiacas, cáncer de colon, Alzheimer’s, debilidad en la dentadura, disminución en la vista, Parkinson’s y diabetes. Además, no aumenta el riesgo de trombos, no afecta la salud del corazón, ni ​ causan cáncer como se le ha atribuido a las hormonas sintéticas.</h3>

            </div>
        </div>


    );
}

export default TratamientoReemplazoHormonal;

import React from "react";
import ondasfocales from "../../assets/ondas-focales.jpg"


function TerapiaOndasFocales() {
    return (
        <div className="disfuncion-erectil-container p-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold font-montserrat text-purple-950 mb-8">Terapia de ondas focales</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            La terapia de ondas focales es una terapia no invasiva usada ampliamente en medicina desde hace varias décadas para tratar diferentes enfermedades en huesos, músculos, tendones, piel, e incluso el corazón.
                            <br />
                            Actualmente está siendo utilizada en tratamientos para mejorar la función eréctil en hombres que presentan problemas de erección por causas vasculares, y esto se logra gracias al efecto regenerativo que produce en los vasos sanguíneos, sin causar efectos secundarios.
                        </p>

                    </div>

                    <div>
                        <img src={ondasfocales} alt="tratamiento" className="rounded-md w-full" />

                    </div>
                </div>

                <div className="mt-8 bg-purple-900 text-white p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Efectividad</h2>
                    <ul className="list-disc list-inside mb-4">
                        Respecto a la efectividad para el tratamiento de la disfunción eréctil, se han realizado estudios de investigación de ondas focales, tanto en animales como en hombres con disfunción eréctil, en diferentes países de Europa, Asia y América, entre ellos Colombia, que muestran que esta clase de ondas mejora la erección cuando existe un daño a nivel de los vasos sanguíneos del pene.
                    </ul>
                    <br />
                    <h2 className="text-2xl font-bold mb-4">¿Qué tipos de ondas existen?</h2>
                    <p className="text-lg mb-4">
                        Existen 2 tipos de ondas de choque: las focales y las radiales. Realmente sólo las primeras son auténticas ondas de choque, siendo las segundas en realidad ondas de presión, con unas propiedades físicas
                        y con una acción a nivel del tejido muy diferentes. Las ondas que han demostrado mejores resultados son las focales, y dentro de estas las lineales gracias a una emisión de energía más homogénea durante todo el tratamiento.
                    </p>
                </div>
            </div>

            <br /><br /><br />
            <div className="mb-8">
                <h3 className="text-2xl font-montserrat text-purple-950 mb-8 ">Cuando quiera acceder a tratamientos con ondas focales, es necesario que acuda a centros médicos especializados de salud sexual masculina y confirme con el profesional de la salud el tipo de ondas que emplea. De esta manera evitará falsas expectativas en resultados con tratamientos que no son útiles para la disfunción eréctil.</h3>

            </div>
        </div>


    );
}
export default TerapiaOndasFocales;
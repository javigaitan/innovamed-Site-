import React from 'react';
import imagen3 from "../../assets/pareja-cama.jpg"
import precoz from "../../assets/precoz.jpg"



function EyaculacionPrecoz() {



    return (
        <div className="disfuncion-erectil-container p-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold font-montserrat text-purple-950 mb-8">Eyaculación Precoz</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            La eyaculación (también conocida como llegar o venirse), es cuando el semen sale por la abertura de la uretra en tu pene, usualmente durante el sexo o la masturbación. La eyaculación precoz es una disfunción sexual que ocurre cuando eyaculas (llegas o te vienes) antes de lo que deseas, usualmente antes de que tu pareja sexual tenga un orgasmo.
                        </p>
                        <p className="text-6x1 font-bold font-montserrat text-purple-950 mb-4">
                            ¿Por qué sucede la eyaculación precoz?
                        </p>
                        <p className="text-lg mb-4">
                            ¿Por qué sucede la eyaculación precoz?
                            Nadie sabe exactamente qué causa la eyaculación precoz, pero es muy posible que su causa sea psicológica o emocional. La eyaculación precoz es más común si tu rendimiento sexual te causa ansiedad o si no tienes sexo con frecuencia o si nunca lo has hecho antes. También, tener hipertiroidismo (que es cuando la glándula tiroides del cuello produce demasiada cantidad de una hormona llamada tiroxina) puede hacer que tengas más riesgo de tener eyaculación precoz.

                            La eyaculación precoz no es causada por enfermedades, infecciones o problemas con tu sistema nervioso.
                        </p>

                    </div>

                    <div>
                        <img src={imagen3} alt="Pareja en la cama" className="rounded-md w-full" />

                    </div>
                </div>


                {/* Sección de síntomas y consulta médica */}
                <div className="mt-8 bg-purple-900 text-white p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Síntomas</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>La eyaculación se produce antes de penetrar o durante el primer minuto.</li>
                        <li>Siempre ha eyaculado asi o se dio un cambio repentino</li>
                        <li>La eyaculación se produce sin control antes de lo que uno mismo o su pareja quisiera.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Tipos de eyaculación precoz</h2>
                    <p className="text-lg mb-4">
                        La eyaculación precoz suele dividirse en primaria y secundaria:
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <ul className="list-disc list-inside">
                                <li>La eyaculación precoz primaria es la que se produce desde las primeras relaciones sexuales.
                                    Es por ello más habitual en la adolescencia. La principal causa de este tipo de eyaculación precoz
                                    es la práctica inadecuada de la masturbación con el objetivo de alcanzar el climax lo más rapidamente posible.</li>

                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc list-inside">
                                <li>La eyaculación precoz secundaria, afecta a hombres que habiendo tenido control de su
                                    eyaculación durante un tiempo pasan por un periodo en el que han perdido dicho control.
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Causas</h2>


                    {/* Causas psicológicas */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold font-montserrat text-purple-950 mb-4">Causas psicológicas</h3>
                        <p>

                            Algunos doctores creen que las experiencias sexuales tempranas podrían establecer un patrón difícil de cambiar posteriormente, como situaciones en las que es necesario apresurarse para llegar al clímax para evitar ser descubiertos, o sentimientos de culpa que incrementan la tendencia de apresurar los encuentros sexuales.
                            <br /><br />
                            Otros factores que pueden tener un papel en causar la eyaculación precoz incluyen:
                            <br />

                            Disfunción eréctil. Los hombres que se sienten ansiosos por obtener o mantener una erección durante el coito tienden a formar un patrón de apresurar la eyaculación.
                            <br />
                            Ansiedad. Muchos hombres con eyaculación precoz también tienen problemas de ansiedad, ya sea específicamente por su desempeño sexual o por otros problemas.

                            Problemas en la relación. Si con otras parejas había una relación sexual satisfactoria donde la eyaculación precoz ocurría con poca frecuencia o no ocurría en absoluto, es posible que los problemas interpersonales con la otra persona podrían estar contribuyendo al problema.
                            <br /><br />
                        </p>
                    </div>
                    {/* Causas biológicas */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold font-montserrat text-purple-950 mb-8">Causas biológicas</h3>
                        <div className="flex flex-col sm:flex-row">
                            {/* Espacio para la imagen */}
                            <img src={precoz} alt="Consulta medica" className="rounded-md mb-4 sm:mr-4 sm:w-1/2" />
                            {/* Lista de elementos */}
                            <p>
                                <br />
                                <li>Niveles anormales de hormonas</li>
                                <li>Niveles anormales de químicos cerebrales llamados neurotransmisores</li>
                                <li>Actividad reflexiva anormal en el sistema de eyaculación</li>
                                <li>Algunos problemas en la tiroides</li>
                                <li>Inflamación e infección en la próstata o uretra</li>
                                <li>Rasgos hereditarios</li>
                                <li>Inflamación e infección de la próstata o uretra</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EyaculacionPrecoz;
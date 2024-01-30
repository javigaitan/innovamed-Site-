import React from "react";
import Equipo from '../../assets/equipos-medicos.jpg';

function Nosotros() {
    return (
        <div id="nosotros" className="overflow-y-hidden flex items-center justify-center min-h-screen">
            <div className="pb-16">
                {/* Code block starts */}
                <dh-component>
                    <section className="mx-auto container bg-white pt-16">
                        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 items-center text-center"> {/* Updated alignment */}
                            <div className="w-full lg:w-6/12">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-montserrat font-semibold text-purple-950 leading-tight mb-4">
                                    Somos un equipo de profesionales con amplia experiencia
                                </h2>
                                <p role="contentinfo" className="font-montserrat font-light text-base md:text-lg lg:text-xl xl:text-xl focus:outline-none text-gray-600 md:pr-8 lg:pr-12 mb-4">
                                    En Innovamed, nos comprometemos a hablar con total transparencia y sinceridad. Creemos firmemente que abordar la disfunción eréctil y la eyaculación precoz de manera abierta es el primer paso para superar estos desafíos. Proporcionamos información precisa y oportuna para brindarte la tranquilidad que mereces.
                                    <br />
                                    Tenemos más de 25 años de experiencia en medicina sexual y nuestros médicos son miembros activos de la Sociedad Argentina de Sexología.
                                </p>
                            </div>

                            <div className="w-full lg:w-6/12">
                                <img className="block w-full" src={Equipo} alt="people discussing on board" /> {/* Updated class */}
                            </div>
                        </div>
                    </section>
                </dh-component>
                {/* Code block ends */}
            </div>
        </div>
    );
}

export default Nosotros;

import React, { useEffect, useState } from "react";
import Fotobanner from '../../assets/pareja-banner.jpg'
import "../../App.css";

function Banner() {
    const [visible, setVisible] = useState(false);
    const mensajeWhatsApp = "Hola, quiero saber mas sobre sus tratamientos.. ";

    const handleWhatsAppClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=3512117686&text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
    };

    useEffect(() => {
        // Simula un retardo antes de hacer visible el componente
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 1000); // Espera 1 segundo antes de mostrar el componente

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <br />
            <div className="py-4 md:py-10 lg:px-10 xl:px-0 md:mt-2 mt-2 px-4 mx-auto relative max-w-2xl">
                <p role="contentinfo" className="text-lg md:text-xl lg:text-1xl xl:text-1xl text-center font montserrat italic leading-4 xl:leading-5 text-purple-900 mb-1">
                    "Descubre la felicidad en tu vida íntima. En nuestro centro especializado, encontrarás apoyo experto para revitalizar tu vida sexual y cultivar relaciones amorosas y satisfactorias"
                </p>

                <div className="w-full">


                </div>
            </div >
            <div id='banner' className={`transition-right ${visible ? "translate-x-0" : "translate-x-full"}`}>
                <div className="py-4 lg:px-6 md:px-4 px-4 2xl:mx-auto 2xl:container" style={{ height: "auto" }}>
                    <div className="md:flex items-center justify-between w-full">
                        <div className="xl:w-full md:w-full w-full">
                            <h1 className="md:w-200 font-bold md:text-6xl text-6xl leading-tight text-purple-950 lg:ml-8 mb-4">
                                Disfruta de <span className="font-normal italic text-7xl"> tu vida sexual </span>
                            </h1>
                            <p className="font-montserrat font-light text-base md:text-lg lg:text-xl xl:text-xl">
                                En nuestro centro especializado, ofrecemos servicios para abordar una variedad de problemas sexuales, brindándote soluciones efectivas y discretas.
                            </p>
                            <br />
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="flex items-center md:p-3 p-2 focus:outline-none text-lg font-medium font-montserrat leading-7 text-white focus:ring-2 focus:ring-offset-2 focus:ring-purple-950 ml-4 md:ml-0 rounded-full bg-gradient-to-r from-purple-700 to-purple-400"
                                >
                                    <span className="ml-10">+ info</span>
                                    <svg className="ml-2" width={45} height={40} viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* ... SVG Path Data ... */}
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-12 md:pl-4">
                            <div className="w-full ml-4 mt-4 md:mt-0">
                                <img
                                    src={Fotobanner}
                                    alt="Purple flowers on a book"
                                    className="md:w-full sm:w-full w-full mb-4 md:mb-0 max-h-96 object-cover rounded-md shadow-md"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}


export default Banner;
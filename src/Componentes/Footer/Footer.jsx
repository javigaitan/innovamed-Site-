import React from "react";
import Logo from '../../assets/Logo-Principal2.png'


function Footer() {
    return (
        <>
            <div className=" bg-linear-pink-invert ">
                <div className="mx-auto container pt-20 lg:pt-20 flex flex-col items-center justify-center">
                    <div>
                        <img src={Logo} width={160} height={160} viewBox="0 0 79 92" fill="none"/>
                        
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Compromiso. Confianza. Seguridad.</h1>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">9 de julio 1075, Cordoba Capital</h2>
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Tel:+54 9 351 211-7686 </h2>

                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Inicio</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Servicios</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Nosotros</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Contactos</li>
                                
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2023 Innovamed. All rights reserved</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Footer;

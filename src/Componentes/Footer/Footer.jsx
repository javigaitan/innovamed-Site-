
import React from "react";
import Logo from '../../assets/Logo-Principal2.png'
import { Link } from "react-scroll";
import { NavLink, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleFooterLinkClick = (sectionId) => {
        // Redirige directamente a la ruta de la galería
        if (sectionId === 'galeria') {
            navigate('/galeria');
        } else {
            // Para otras secciones, realiza el scroll suave
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };


    return (
        <>
            <div className=" bg-linear-pink-invert ">
                <div className="mx-auto container pt-20 lg:pt-1 flex flex-col items-center justify-center">
                    <div>
                        <img src={Logo} width={250} height={450} viewBox="0 0 79 92" fill="none" />

                    </div>
                    <div className="text-purple-950 flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-montserrat font-medium">Compromiso. Confianza. Seguridad.</h1>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <a href='https://maps.app.goo.gl/qEJv3qWUuaddV36v6' className=" md:mr-6 pb-4 md:py-0 cursor-pointer">9 de julio 1075, Cordoba Capital</a>
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Arenales 1611, CABA</h2>

                            <a href="https://api.whatsapp.com/send?phone=3512117686&text=Hola%2C%20quiero%20sacar%20un%20turno%20en%20Innovamed%20soy%20" className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Tel:+54 9 351 211-7686 </a>

                        </div>


                        <div className="my-6 text-base text-color f-f-l justify-center ite">
                            <ul className="md:flex items-center">
                                <li className="md:mr-8 cursor-pointer pt-4 lg:py-0">
                                    <Link
                                        to="banner"
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-violet-600 hover:underline font-bold"
                                        onClick={() => handleFooterLinkClick('banner')}
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li className="md:mr-8 cursor-pointer pt-4 lg:py-0">
                                    <Link
                                        to="servicios"
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-violet-600 hover:underline font-bold"
                                        onClick={() => handleFooterLinkClick('servicios')}
                                    >
                                        Servicios
                                    </Link>
                                </li>
                                <li className="md:mr-8 cursor-pointer pt-4 lg:py-0">
                                    <Link
                                        to="nosotros"
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-violet-600 hover:underline font-bold"
                                        onClick={() => handleFooterLinkClick('nosotros')}
                                    >
                                        Nosotros
                                    </Link>
                                </li>
                                <li className="md:mr-8 cursor-pointer pt-4 lg:py-0">
                                    <Link
                                        to="contacto"
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-violet-600 hover:underline font-bold"
                                        onClick={() => handleFooterLinkClick('contacto')}
                                    >
                                        Contacto
                                    </Link>
                                </li>
                                <li className="md:mr-8 cursor-pointer pt-4 lg:py-0">
                                    <NavLink
                                        to="/galeria"
                                        className="hover:text-violet-600 hover:underline font-bold"
                                        activeClassName="text-violet-600 underline font-bold"
                                        onClick={() => handleFooterLinkClick('galeria')}
                                    >
                                        Galeria
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2023 Innovamed. All rights reserved</p>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}

export default Footer;

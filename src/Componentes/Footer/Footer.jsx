import React from "react";
import Logo from '../../assets/Logo-Principal2.png';
import Logosex from '../../assets/logo-sex.png';
import { Link } from "react-scroll";
import { NavLink, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleFooterLinkClick = (sectionId) => {
        if (sectionId === 'galeria') {
            navigate('/galeria');
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    return (
        <div className="bg-linear-pink-invert">
            <div className="mx-auto container pt-10 lg:pt-1 flex flex-col items-center justify-center">
                <div className="mt-2">
                    <img src={Logo} width={180} height={280} alt="Logo Principal" />
                </div>
                <div className="text-purple-950 flex flex-col md:items-center f-f-l pt-3">
                    <h1 className="text-2xl font-montserrat font-medium mb-2">Compromiso. Confianza. Seguridad.</h1>
                    <div className="md:flex items-center text-base text-color f-f-l">
                        <a href='https://maps.app.goo.gl/qEJv3qWUuaddV36v6' className="md:mr-6 cursor-pointer">9 de julio 1075, Cordoba Capital</a>
                        <h2 className="md:mr-6 cursor-pointer">Arenales 1611, CABA</h2>
                        <a href="https://api.whatsapp.com/send?phone=3512117686&text=Hola%2C%20quiero%20sacar%20un%20turno%20en%20Innovamed%20soy%20" className="md:mr-6 cursor-pointer">Tel:+54 9 351 211-7686 </a>
                    </div>
                    <div className="my-4">
                        <img src={Logosex} width={200} height={360} alt="Logo Secundario" className="mx-auto" />
                    </div>
                    <div className="my-6 text-color f-f-l">
                        <ul className="md:flex items-center">
                            <li className="md:mr-8 cursor-pointer">
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
                            <li className="md:mr-8 cursor-pointer">
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
                            <li className="md:mr-8 cursor-pointer">
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
                            <li className="md:mr-8 cursor-pointer">
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
                            <li className="md:mr-8 cursor-pointer">
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
                    <div className="text-sm text-color">
                        <p>© 2023 Innovamed. Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;



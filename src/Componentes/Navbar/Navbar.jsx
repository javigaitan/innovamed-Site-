import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo-Principal.png";
import { Link } from "react-scroll";
import '../../App.css';
import Cta from "../CTA/Cta";
import WhatsAppButton from "../BtnWs/WhatsAppButton";


function Navbar() {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [visible, setVisible] = useState(false);
    const mensajeWhatsApp = "Hola, quiero sacar un turno en Innovamed soy ";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=3512075102&text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
  };

    const handleMenuClick = () => {
        setShowMenu(false);
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
            <div className={`transition-down transform ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="dark:bg-gray-900">
                    <div>
                        <div className="relative">
                            {/* For md screen size */}
                            <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>


                            </div>
                            {/* For md screen size */}
                            {/* For large screens */}
                            <div className="dark:bg-white  px-4 py-2">
                                <div className="container mx-auto flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="logo-img mr-10 flex items-center ">
                                            <img src={Logo} alt="Logo" className=" object-contain mr-3" />
                                        </div>
                                    </div>
                                    <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                        <li className="transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                                            <Link to="banner" smooth={true} duration={500} className="text-base text-gray-800 hover:text-violet-600 hover:underline font-bold">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                                            <Link to="servicios" smooth={true} duration={500} className="text-base text-gray-800 hover:text-violet-600 hover:underline font-bold">
                                                Servicios
                                            </Link>
                                        </li>
                                        <li className="transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                                            <Link to="nosotros" smooth={true} duration={500} className="text-base text-gray-800 hover:text-violet-600 hover:underline font-bold">
                                                Nosotros
                                            </Link>
                                        </li>
                                        <li className="transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                                            <Link to="contacto" smooth={true} duration={500} className="text-base text-gray-800 hover:text-violet-600 hover:underline font-bold">
                                                Contacto
                                            </Link>
                                        </li>
                                    </ul>


                                    <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                                        <div className="hidden lg:flex items-center">
                                            <button onClick={() => setSearchInput(!searchInput)} aria-label="search items" className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">

                                            </button>
                                        </div>

                                        <div className="flex lg:hidden">

                                            <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Cta />

                            {/* For small screen */}
                            <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                                    <div className="flex items-center space-x-3">
                                        <div>

                                        </div>
                                    </div>
                                    <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 p-4">
                                    <ul className="flex flex-col space-y-6">
                                        <li>
                                            <Link to="banner" smooth={true} duration={500} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                Inicio
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="servicios" smooth={true} duration={500} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                Servicios
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="nosotros" smooth={true} duration={500} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                Nosotros
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="contacto" smooth={true} duration={500} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                Contactos
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="agenda" smooth={true} duration={500} className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded " onClick={handleWhatsAppClick} >Agenda un turno</button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;
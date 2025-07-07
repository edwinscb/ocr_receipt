import { useState } from "react";
import logoPortafolio from "../assets/img/logoPortafolio.svg";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Inicio');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (linkName: string) => {
        setActiveLink(linkName);
        setIsMenuOpen(false);
    };
    return ( 
    <nav className="bg-gray-900 border-gray-600 fixed w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://portafolioedwincastro.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logoPortafolio} className="h-15" alt="logo Portafolio"/>
                <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">Edwin Castro</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button 
                    type="button" 
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Procesar JPG/PNG
                </button>
                <button 
                    type="button" onClick={toggleMenu} aria-expanded={isMenuOpen} data-collapse-toggle="navbar-sticky" aria-controls="navbar-sticky" 
                    className="text-gray-400 hover:bg-gray-700 focus:ring-gray-600 inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2">
                    <span className="sr-only">Abrir menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                <ul className="bg-gray-800 md:bg-gray-900 border-gray-700 flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                    <a 
                        href="#" className={`block py-2 px-3 rounded-sm md:p-0 ${activeLink === 'Inicio' ? 'text-white bg-blue-700 md:text-blue-500 md:bg-transparent' : 'text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-500'}`}
                        aria-current={activeLink === 'Inicio' ? 'page' : undefined} onClick={() => handleLinkClick('Inicio')}
                            >Inicio
                    </a>
                </li>
                <li>
                    <a 
                        href="#" className={`block py-2 px-3 rounded-sm md:p-0 ${activeLink === 'Procesar' ? 'text-white bg-blue-700 md:text-blue-500 md:bg-transparent' : 'text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-500'}`}
                        onClick={() => handleLinkClick('Procesar')}
                            >Procesar
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/edwinscb/ocr_receipt" className={`block py-2 px-3 rounded-sm md:p-0 ${activeLink === 'Repositorio' ? 'text-white bg-blue-700 md:text-blue-500 md:bg-transparent' : 'text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-500'}`}
                        onClick={() => handleLinkClick('Repositorio')} target="_blank" 
                            >Repositorio
                    </a>
                </li>
                <li>
                    
                    <a 
                        href="https://portafolioedwincastro.vercel.app/" className={`block py-2 px-3 rounded-sm md:p-0 ${activeLink === 'Mi Portafolio' ? 'text-white bg-blue-700 md:text-blue-500 md:bg-transparent' : 'text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-500'}`}
                        onClick={() => handleLinkClick('Mi Portafolio')} target="_blank"
                            >Mi Portafolio
                    </a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
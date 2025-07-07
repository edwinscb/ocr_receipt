import React from 'react';
import logoPortafolio from "../assets/img/logoPortafolio.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 shadow mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://portafolioedwincastro.vercel.app/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logoPortafolio} className="h-10 rounded-full" alt="Logo OCR App" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Procesamiento recibo OCR</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="https://portafolioedwincastro.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">Mi Portafolio</a>
            </li>
            <li>
              <a href="https://github.com/edwinscb/ocr_receipt" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">Repositorio del Proyecto</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">© {new Date().getFullYear()} <a href="https://portafolioedwincastro.vercel.app/" className="hover:underline">OCR Receipt Processor</a>. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
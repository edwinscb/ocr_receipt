import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://portafolioedwincastro.vercel.app/"className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="" alt="" />
        </a>
        <p>hola</p>
        </div>
    </nav>
  );
};

export default Navbar;
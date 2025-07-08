import React from 'react';
import ReceiptImage from '../assets/img/recibo.jpg';

const ReceiptExample: React.FC = () => {
  const exampleExtractedText = `Recibo No. 23 Bueno por: $35,000.00

Recibí de Pedro Sánchez Sánchez

la cantidad de Treinta y cinco mil pesos 00/100

por concepto de_Reparaciones realizadas en la cocina

y recámaras.

México D.F. a_3_ de Agosto de 2015

DeMerizo`;

  return (
    <div id="receipt" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-8 flex items-center justify-center">
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 border-opacity-30 p-8 w-full max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2  className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg animate-pulse">
          Procesamiento de Recibos
        </h2>

        <div className="mb-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-5 text-gray-200 tracking-wide">
            Imagen del Recibo:
          </h3>
          <div className="relative group cursor-pointer">
            <img
              src={ReceiptImage}
              alt="Ejemplo de Recibo"
              className="max-w-full h-auto rounded-xl shadow-lg border-2 border-purple-500 transform group-hover:scale-102 transition-transform duration-300 ease-in-out"
              style={{ maxHeight: '350px' }}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-3 py-1 rounded-full">
              Tu recibo aquí
            </p>
          </div>
          <p className="text-base text-gray-400 mt-4 text-center italic">
            Esta es la imagen que se procesará para extraer información.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-xl border border-gray-600 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900 to-transparent opacity-10 pointer-events-none"></div>
          <h3 className="text-3xl font-bold mb-6 text-green-400 border-b-2 border-green-500 pb-3">
            Texto Extraído:
          </h3>
          <pre className="whitespace-pre-wrap text-gray-100 leading-relaxed text-lg font-mono bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-inner max-h-80 overflow-y-auto custom-scrollbar">
            {exampleExtractedText}
          </pre>
          <p className="text-sm text-gray-400 mt-4 text-right">
            ¡Información clave, al instante!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptExample;
import React, { useState, useRef } from 'react';

const ReceiptProcessor: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setSelectedFile(file);
        setExtractedText(null);
        setError(null); 
      } else {
        setSelectedFile(null);
        setExtractedText(null);
        setError('Formato de archivo no aceptado. Por favor, sube una imagen JPG o PNG.');
      }
    }
  };
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event.target.files);
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); 
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    handleFileChange(event.dataTransfer.files);
  };
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setExtractedText(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const processReceipt = async () => {
    if (!selectedFile) {
      setError('Por favor, selecciona una imagen para procesar.');
      return;
    }

    setLoading(true);
    setError(null);
    setExtractedText(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/upload-ocr', { 
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error al procesar el recibo.');
      }

      const data = await response.json();
      setExtractedText(data.extracted_text || 'No se detectó texto en la imagen.');
    } catch (err: any) {
      setError(err.message || 'Error de red o del servidor.');
      setExtractedText(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4 pt-20">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Procesador de Recibos OCR</h2>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors duration-200 ${
            dragOver ? 'border-blue-500 bg-gray-700' : 'border-gray-600 bg-gray-800'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-lg text-gray-300 mb-4">Arrastra y suelta tu imagen de recibo aquí, o</p>
          <input
            id="file-upload"
            type="file"
            accept="image/jpeg, image/png"
            onChange={onFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <button
            onClick={triggerFileInput}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-800"
          >
            Buscar Archivos
          </button>
          <p className="text-sm text-gray-400 mt-4">Formatos aceptados: JPG, PNG</p>
          {selectedFile && (
            <div className="mt-4 text-gray-300 flex items-center justify-center space-x-2">
              <span>Archivo seleccionado: <span className="font-semibold text-blue-300">{selectedFile.name}</span></span>
              <button
                onClick={clearSelection}
                className="text-red-400 hover:text-red-500 text-sm font-medium ml-2"
                title="Limpiar selección"
              >
                &#x2715;
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={processReceipt}
            disabled={!selectedFile || loading}
            className={`py-3 px-8 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg ${
              !selectedFile || loading
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-4 focus:ring-green-800'
            }`}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white inline-block mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Procesar Recibo'
            )}
          </button>
        </div>
        {error && (
          <div className="bg-red-800 text-white p-4 rounded-lg mb-6 shadow-md" role="alert">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-inner">
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Texto Extraído:</h3>
          {extractedText ? (
            <p className="whitespace-pre-wrap text-gray-200 leading-relaxed">{extractedText}</p>
          ) : (
            <p className="text-gray-400 italic">
              No hay texto extraído aún. Sube un recibo para ver la magia.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceiptProcessor;

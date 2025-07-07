# ocr_receipt

Este proyecto es una pequeña aplicación web diseñada para procesar imágenes de recibos utilizando OCR (Reconocimiento Óptico de Caracteres) y extraer el texto detectado. La aplicación consta de un backend robusto construido con FastAPI y un frontend interactivo desarrollado con React y TypeScript.

---

## 🎯 Objetivo del Proyecto

El objetivo principal de este proyecto es construir una solución funcional que permita a los usuarios:

1.  **Subir una imagen** de un recibo.
2.  **Procesar la imagen** utilizando tecnología OCR para detectar y extraer texto.
3.  **Visualizar el texto** extraído de manera clara en el navegador.

Se prioriza la comunicación eficiente entre el frontend y el backend, la robustez del procesamiento OCR y un manejo adecuado de errores para una experiencia de usuario fluida.

---

## ✨ Características Clave

- **API RESTful con FastAPI:** Un backend ligero y de alto rendimiento para manejar la carga de imágenes y el procesamiento OCR.
- **Interfaz de Usuario con React + TypeScript:** Un frontend moderno y reactivo para una interacción intuitiva.
- **Procesamiento OCR con Tesseract:** Utiliza `Pytesseract` para la extracción de texto, lo que permite una integración rápida y eficaz.
- **Validación y Manejo de Errores:** Implementación de lógica para gestionar escenarios como imágenes ilegibles, archivos no soportados o resultados de OCR vacíos.
- **Preprocesamiento Básico de Imágenes:** Posibilidad de incluir pasos de preprocesamiento para mejorar la calidad del OCR.

npm run dev

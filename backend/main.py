from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import pytesseract
from PIL import Image
import io
import os
import re
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.post("/upload-ocr")
async def upload_ocr(file: UploadFile = File(...)):
    """
    Endpoint para subir una imagen, procesarla con OCR y devolver el texto extraído.
    """
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail=f"Formato de archivo no soportado: {file.content_type}. Por favor, sube una imagen."
        )

    try:
        contents = await file.read()
        image_stream = io.BytesIO(contents)

        image = Image.open(image_stream)

        extracted_text = pytesseract.image_to_string(image, lang='spa')
        extracted_text = extracted_text.replace('\f', '')
        extracted_text = re.sub(r'\n+', '\n', extracted_text)
        extracted_text = '\n'.join([line.strip() for line in extracted_text.split('\n')])
        extracted_text = re.sub(r' {2,}', ' ', extracted_text)
        extracted_text = extracted_text.strip()
        
        if not extracted_text.strip():
            return JSONResponse(
                content={"extracted_text": "No se pudo detectar texto en la imagen."}
            )

        return JSONResponse(
            content={"extracted_text": extracted_text}
        )

    except HTTPException as e:
        raise e
    except Exception as e:
        print(f"Error inesperado: {e}")
        raise HTTPException(
            status_code=500,
            detail="Error interno del servidor al procesar la imagen."
        )
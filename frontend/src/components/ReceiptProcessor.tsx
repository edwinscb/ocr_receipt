import React from 'react';

const ReceiptProcessor: React.FC = () => {
  return (
    <div >
      <h2 >Upload Your Receipt</h2>
      
      <div >
        <p >Drag & drop your receipt image here, or</p>
        <label htmlFor="file-upload" >
          Browse Files
          <input id="file-upload" type="file"  accept="image/*" />
        </label>
        <p >Accepted formats: JPG, PNG</p>
      </div>
      <div>
        <h3 >Extracted Text:</h3>
        <p >
          No text extracted yet. Upload a receipt to see the magic!
        </p>
      </div>
    </div>
  );
};

export default ReceiptProcessor;
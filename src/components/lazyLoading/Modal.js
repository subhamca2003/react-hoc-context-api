// Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div style={modalStyles}>
      <h2>Modal Title</h2>
      <p>This is a simple modal!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
};

export default Modal;
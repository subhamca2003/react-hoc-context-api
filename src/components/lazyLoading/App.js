// App.js
import React, { useState, Suspense, lazy } from 'react';

// Lazy load the Modal component
const LazyModal = lazy(() => import('./Modal'));

const LazyLoading = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Code Splitting with Lazy Loading Example</h1>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyModal onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading;
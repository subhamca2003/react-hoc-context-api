import React, { useRef } from 'react';

const FocusInputExample = () => {
  // Create a ref for the input element
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element
    }
  };

  return (
    <div>
      <h1>UseRef Example</h1>
      <input
        ref={inputRef} // Attach the ref to the input element
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInputExample;
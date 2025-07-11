import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import Button from './Button'; // Import our new Button component

/**
 * An accessible modal component that uses a React Portal.
 * @param {object} props - The component props.
 * @param {boolean} props.isOpen - Controls whether the modal is visible.
 * @param {() => void} props.onClose - Function to call to close the modal.
 * @param {string} [props.title] - The title to display in the modal header.
 * @param {React.ReactNode} props.children - The content to display inside the modal body.
 * @returns {JSX.Element | null}
 */
function Modal({ isOpen, onClose, title, children }) {
  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Use a portal to render the modal at the end of the body
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md m-4 transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {title && (
            <h2 id="modal-title" className="text-xl font-bold">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body 
  );
}


export default Modal;
import React from 'react';

/**
 * A reusable button component with different variants.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the button (text, icons, etc.).
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {'primary' | 'secondary' | 'danger'} [props.variant='primary'] - The button style variant.
 * @param {string} [props.className=''] - Additional class names for custom styling.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {object} [props.rest] - Any other props to be passed to the button element.
 * @returns {JSX.Element}
 */
function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  ...rest
}) {
  const baseStyles =
    'font-bold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
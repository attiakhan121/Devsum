import PropTypes from 'prop-types';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';

const Alert = ({ children, variant = 'info', className = '', onClose }) => {
  const variants = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      text: 'text-blue-800 dark:text-blue-200',
      icon: <FiInfo className="text-blue-500 dark:text-blue-400" />,
    },
    success: {
      bg: 'bg-green-50 dark:bg-green-900/30',
      text: 'text-green-800 dark:text-green-200',
      icon: <FiCheckCircle className="text-green-500 dark:text-green-400" />,
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/30',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: <FiAlertCircle className="text-yellow-500 dark:text-yellow-400" />,
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/30',
      text: 'text-red-800 dark:text-red-200',
      icon: <FiAlertCircle className="text-red-500 dark:text-red-400" />,
    },
  };

  return (
    <div
      className={`flex items-start p-4 rounded-lg ${variants[variant].bg} ${variants[variant].text} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5 mr-3">
        {variants[variant].icon}
      </div>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 -mr-1 p-1 rounded-full hover:bg-white/20 focus:outline-none transition-colors"
          aria-label="Close"
        >
          <FiX className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Alert;
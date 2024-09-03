import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Modal.module.css';

const Modal = ({ onClose, largeImageURL, tags }) => {
  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};

Modal.defaultProps = {
  largeImageURL: '',
  tags: '',
};

export default Modal;

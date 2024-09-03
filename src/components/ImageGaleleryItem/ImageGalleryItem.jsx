import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li className="gallery-item" onClick={onClick}>
    <img src={webformatURL} alt="" className="gallery-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

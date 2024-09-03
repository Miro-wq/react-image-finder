import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'title',
      captionDelay: 250,
    });

    return () => {

      lightbox.destroy();
    };
  }, [images]);

  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className="gallery-item">
          <a href={largeImageURL} title={tags}>
            <img src={webformatURL} alt={tags} className="gallery-image" />
          </a>
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;

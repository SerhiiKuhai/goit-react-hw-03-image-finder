import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from 'components/ImageGallery/ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { images, showModal } = this.props;

    return (
      <UlGallery>
        {images.map(image => {
          return (
            <ImageGalleryItem
              showModal={() => showModal(image.largeImageURL)}
              key={image.id}
              smallImg={image.webformatURL}
              alt={image.tags}
            />
          );
        })}
      </UlGallery>
    );
  }
}

ImageGallery.types = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
};

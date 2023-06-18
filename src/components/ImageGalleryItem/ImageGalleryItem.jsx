import { Component } from 'react';
import PropTypes from 'prop-types';
import { LiGllery } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { id, showModal, smallImg, alt } = this.props;
    return (
      <LiGllery key={id} onClick={showModal}>
        <img src={smallImg} alt={alt} />
      </LiGllery>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

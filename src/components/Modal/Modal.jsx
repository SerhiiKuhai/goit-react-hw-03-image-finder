import { Component } from 'react';
import { Overlay, ModalImg } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalImage } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImg>
          <img src={modalImage} alt={modalImage} />
        </ModalImg>
      </Overlay>
    );
  }
}

Modal.types = {
  onModalClose: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};

import { Component } from 'react';
import * as getImageServise from 'service/getImageServise';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

import { Container } from 'components/App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    isShowButton: false,
    isShowModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    this.setState({ isLoading: true });

    try {
      const { totalHits, hits } = await getImageServise.getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isShowButton:
          this.state.page < Math.ceil(totalHits / this.state.images.length),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    if (query !== this.state.query) {
      this.setState({ images: [], page: 1 });
    }
    this.setState({ query });
  };

  handleClickButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showModal = largeImageURL => {
    this.setState({ isShowModal: true, modalImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { images, isLoading, isShowButton, modalImage, isShowModal } =
      this.state;
    const isShowImages = images.length > 0;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {isShowImages && (
          <ImageGallery images={images} showModal={this.showModal} />
        )}

        {isShowModal && (
          <Modal closeModal={this.closeModal} modalImage={modalImage} />
        )}

        {isLoading && <Loader />}

        {isShowButton && <Button handleClickButton={this.handleClickButton} />}
      </Container>
    );
  }
}

import { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from 'components/Button/Button.styled';

export class Button extends Component {
  render() {
    const { handleClickButton } = this.props;

    return (
      <LoadButton type="button" onClick={handleClickButton}>
        Load more
      </LoadButton>
    );
  }
}

Button.types = {
  handleClickButton: PropTypes.func.isRequired,
};

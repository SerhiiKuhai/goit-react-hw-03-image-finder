import React, { Component } from 'react';
import { Header, Form } from 'components/Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.formSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

import React, { Component } from 'react';
import { Triangle } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}

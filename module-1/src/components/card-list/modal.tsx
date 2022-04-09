import React, { Component } from 'react';

interface a {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
}

interface MyProps {
  it: a;
  active: boolean;
}

export class Modal extends Component<MyProps> {
  render() {
    return <div className="modal"></div>;
  }
}

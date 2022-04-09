import { loadavg } from 'os';
import React, { Component } from 'react';
import Spinner from '../lodading/spinner';
import { Modal } from './modal';
import './style.css';
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
  el: a;
  loader: boolean;
}

export class CardItem extends Component<MyProps> {
  state = {
    modal: true,
  };

  handleActive = () => {
    this.setState({ modal: false });
  };
  render() {
    const { el } = this.props;
    let popup;
    if (this.props.loader) {
      return <Spinner />;
    }
    if (this.state.modal === false) {
      popup = (
        <div className="popup" onClick={() => this.setState({ modal: true })}>
          <div className="popup_inner" onClick={(e) => e.stopPropagation()}>
            <img className="card-img-popup" src={`${el.image}`} alt="avatar" />
            <div className="card-description-popup">
              <h3>Name: {el.name}</h3>
              <p>Status: {el.status}</p>
              <p>Species: {el.species}</p>
              <p>Gender: {el.gender}</p>
              <p>Created: {el.created}</p>
              <p>Origin: {el.origin.name}</p>
              <p>Location: {el.location.name}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <li className="card" key={el.id} onClick={this.handleActive}>
          <img className="card-img" src={`${el.image}`} alt="avatar" />
          <div className="card-description">
            <h3>Name: {el.name}</h3>
            <p>Status: {el.status}</p>
            <p>Species: {el.species}</p>
          </div>
        </li>
        {popup}
      </>
    );
  }
}

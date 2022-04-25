import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appContext from '../../context/app-context';
import Spinner from '../loading/spinner';
import './style.css';
function SingleCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { FetchCard, card, isPendingСard } = useContext(appContext);
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (response.status >= 400) {
          console.log(response.status);
        } else {
          const data = await response.json();
          FetchCard(data);
          console.log(url);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [url]);
  const goBack = () => {
    navigate(-1);
    FetchCard('');
  };

  return (
    <section className="single-card-section">
      <button className="btn" onClick={goBack}>
        Back
      </button>
      {isPendingСard && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <div className="single-card">
        <div className="single-card-inner" onClick={(e) => e.stopPropagation()}>
          <img className="single-card-img" src={`${card.image}`} alt="avatar" />

          <div className="single-card-description">
            <h3>Name: {card.name}</h3>
            <p>Status: {card.status}</p>
            <p>Species: {card.species}</p>
            <p>Gender: {card.gender}</p>
            <p>Created: {card.created}</p>
            {/* <p>Origin: {card.origin.name}</p>
            <p>Location: {card.location.name}</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export { SingleCard };

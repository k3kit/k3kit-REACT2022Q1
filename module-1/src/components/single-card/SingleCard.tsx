import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSingleCharacter } from '../../store/reducers/action-creater/character';
import Spinner from '../loading/spinner';
import './style.css';
const SingleCard = () => {
  const { singleCard, isLoading } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSingleCharacter({ id }));
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };
  console.log(singleCard);

  return (
    <section className="single-card-section">
      <button className="btn" onClick={goBack}>
        Back
      </button>
      {isLoading && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <div className="single-card">
        <div className="single-card-inner">
          <img className="single-card-img" src={`${singleCard.image}`} alt="avatar" />
          <div className="single-card-description">
            <h3>Name: {singleCard.name}</h3>
            <p>Status: {singleCard.status}</p>
            <p>Species: {singleCard.species}</p>
            <p>Gender: {singleCard.gender}</p>
            <p>Created: {singleCard.created}</p>
            <p>Origin: {singleCard.origin?.name}</p>
            <p>Location: {singleCard.location?.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SingleCard };

import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CharacterSlice } from '../../store/reducers/CharacterSlice';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { setStatus, setGender, setSpecies } = CharacterSlice.actions;
  const genders = ['', 'Female', 'Male', 'Genderless', 'Unknown'];
  const spec = [
    '',
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];
  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatus(event.target.value));
  };
  const handleGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGender(event.target.value));
  };
  const handleSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSpecies(event.target.value));
  };
  return (
    <>
      <li className="page-item">
        <span>Status</span>
        <select className="page-link" onChange={handleStatus}>
          <option value=""></option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </li>
      <li className="page-item">
        <span>Species</span>
        <select className="page-link" onChange={handleSpecies}>
          {spec.map((el, i) => {
            return (
              <option value={el} key={i}>
                {el}
              </option>
            );
          })}
        </select>
      </li>
      <li className="page-item">
        <span>Genders</span>
        <select className="page-link" onChange={handleGender}>
          {genders.map((el, i) => {
            return (
              <option value={el} key={i}>
                {el}
              </option>
            );
          })}
        </select>
      </li>
    </>
  );
};

export default Filter;

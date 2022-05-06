import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CharacterSlice } from '../../store/reducers/CharacterSlice';
import Filter from './Filter';
import './style.css';

const Pagination = () => {
  const { inc, dec } = CharacterSlice.actions;
  const dispatch = useAppDispatch();
  const { count, pages } = useAppSelector((state) => state.userReducer);
  const pagesCount = Math.ceil(count / 20);
  console.log(inc(1));

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={() => dispatch(dec(1))} disabled={pages === 1}>
            Previous page
          </button>
        </li>
        <li className="page-item">
          <span className="pages-count">
            {pages}/{pagesCount}
          </span>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => dispatch(inc(1))}
            disabled={pages === pagesCount}
          >
            Next page
          </button>
        </li>
        <Filter />
      </ul>
    </nav>
  );
};

export default Pagination;

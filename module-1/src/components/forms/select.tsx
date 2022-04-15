import React from 'react';
import PropTypes from 'prop-types';
import { useController, UseControllerProps } from 'react-hook-form';
import { Data } from './forms';

const Select = (props: UseControllerProps<Data>) => {
  const { field, fieldState } = useController(props);
  return (
    <>
      <select {...field} name="country">
        <option></option>
        <option value="Russia">Russia</option>
        <option value="Belarus">Belarus</option>
        <option value="Ukraine">Ukraine</option>
      </select>
      <h6>{fieldState.error && 'Required field'}</h6>
    </>
  );
};

export default Select;

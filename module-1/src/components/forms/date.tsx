import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useController, UseControllerProps } from 'react-hook-form';
import { Data } from './forms';

const DateBirth = (props: UseControllerProps<Data>) => {
  const { field, fieldState } = useController(props);
  const [gender, setGender] = useState<string>('male');
  return (
    <>
      <input {...field} type="date" />
      <h6>{fieldState.error && 'Required field'}</h6>
    </>
  );
};

export default DateBirth;

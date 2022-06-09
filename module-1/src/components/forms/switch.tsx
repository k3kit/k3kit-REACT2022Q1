import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useController, UseControllerProps } from 'react-hook-form';
import { Data } from './forms';

const Switch = (props: UseControllerProps<Data>) => {
  const { field, fieldState } = useController(props);
  const [value, setValue] = useState(field.value);
  useEffect(() => {
    setValue(field.value ? 'male' : 'female');
  }, [field]);
  return (
    <>
      <fieldset className="switch-form">
        <label {...field} className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
        <label htmlFor="gender">{value}</label>
      </fieldset>
    </>
  );
};

export default Switch;

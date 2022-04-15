import React from 'react';
import { useForm, useController, UseControllerProps } from 'react-hook-form';
import { Data } from './forms';
import './style.css';
const Input = (props: UseControllerProps<Data>) => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <input {...field} placeholder={props.name} />
      <h6>{fieldState.error && 'Required field'}</h6>
    </>
  );
};

export default Input;

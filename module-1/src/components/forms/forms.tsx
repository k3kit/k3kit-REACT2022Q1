import React, { FC, useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import Switch from './switch';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FormSlice } from '../../store/reducers/FormSlice';

export type Data = {
  firstName: string;
  lastName: string;
  country: string;
  birthDate: string;
  gender: string;
  agree: boolean;
  file: string;
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'first name should not contain numbers')
    .required('first name is a required field')
    .min(1)
    .max(20),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'last name should not contain numbers')
    .required('last name is a required field'),
  birthDate: yup
    .string()
    .required('Date of Birth is required')
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      'Date of Birth must be a valid date in the format YYYY-MM-DD'
    ),
  country: yup.string().required(),
  agree: yup.bool().oneOf([true], 'Accept this box'),
});

export const Forms: FC = () => {
  const { addData } = FormSlice.actions;
  const dispatch = useAppDispatch();
  const { formData } = useAppSelector((state) => state.formReducer);
  const [preview, setValue] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      birthDate: '',
      gender: '',
      agree: false,
      file: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(addData(data));
    console.log(formData);
    setValue('');
    reset();
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="label fist-name" htmlFor="firstName">
        <p>Name:</p>
        <input type="text" {...register('firstName')} />
        <h6>{errors.firstName?.message}</h6>
      </label>
      <label className="label last-name" htmlFor="lastName">
        <p>Last name:</p>
        <input type="text" {...register('lastName')} />
        <h6>{errors.lastName?.message}</h6>
      </label>
      <label className="label" htmlFor="birthDate">
        <p>Birth date:</p>
        <input type="date" {...register('birthDate')} />
        <h6>{errors.birthDate?.message}</h6>
      </label>
      <label>
        Country:
        <select {...register('country')}>
          <option></option>
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
        </select>
        <h6>{errors.country?.message}</h6>
      </label>
      <Switch
        control={control}
        name="gender"
        rules={{
          required: false,
        }}
      />
      <label htmlFor="image">
        <input type="file" {...register('file')} />
      </label>
      <label className="agree" htmlFor="agree">
        Check this box if you want to proceed.
        <input type="checkbox" {...register('agree')} />
        <h6>{errors.agree?.message}</h6>
      </label>
      <div>
        <input className="submit" type="submit" />
      </div>
    </form>
  );
};

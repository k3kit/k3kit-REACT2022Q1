import React, { FC, useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { UserType } from './cards-from';
import Input from './input';
import Select from './select';
import DateBirth from './date';
import Switch from './switch';
import { Image } from './images';
export type Data = {
  firstName: string;
  lastName: string;
  country: string;
  birthDate: string;
  gender: string;
};

interface FormData {
  setFormData: (value: UserType[] | ((prevState: UserType[]) => UserType[])) => void;
}
export const Forms: FC<FormData> = ({ setFormData }) => {
  const [preview, setValue] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      birthDate: '',
      gender: '',
    },
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    setFormData((state) => [...state, { data, preview }]);
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="label fist-name" htmlFor="firstName">
        <p>Name:</p>
        <Input
          control={control}
          name="firstName"
          rules={{
            required: 'Required field',
            minLength: {
              value: 5,
              message: 'minimum 5 characters',
            },
          }}
        />
      </label>
      <label className="label last-name" htmlFor="lastName">
        <p>Last name:</p>
        <Input
          control={control}
          name="lastName"
          rules={{
            required: 'Required field',
            minLength: {
              value: 5,
              message: 'minimum 5 characters',
            },
          }}
        />
      </label>
      <label className="label" htmlFor="birthDate">
        <p>Birth date:</p>
        <DateBirth
          control={control}
          name="birthDate"
          rules={{
            required: 'Required field',
          }}
        />
      </label>
      <label>
        Country:
        <Select
          control={control}
          name="country"
          rules={{
            required: 'Required field',
          }}
        />
      </label>
      <Switch
        control={control}
        name="gender"
        rules={{
          required: false,
        }}
      />
      <label htmlFor="image">
        <Image setValue={setValue} />
      </label>
      <label className="agree" htmlFor="agree">
        Check this box if you wanw to procceed.
        <input type="checkbox" name="agree" />
      </label>
      <div>
        <input className="submit" type="submit" />
      </div>
    </form>
  );
};

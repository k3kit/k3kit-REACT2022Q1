/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react';
import { Cards, UserType } from '../../components/forms/cards-from';
import { Forms } from '../../components/forms/forms';
import appContext from '../../context/app-context';
import { useAppSelector } from '../../hooks/redux';
import './style.css';
const FormPage = () => {
  const { formData } = useAppSelector((state) => state.formReducer);
  console.log(formData);

  return (
    <section className="form-section" data-testid="form-page">
      <Forms />
      <div>
        {formData.map((item, i: number) => {
          const idx = i;
          return <Cards item={item} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default FormPage;

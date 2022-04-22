import React, { useContext, useState } from 'react';
import { Cards, UserType } from '../../components/forms/cards-from';
import { Forms } from '../../components/forms/forms';
import appContext from '../../context/app-context';
import './style.css';
const FormPage = () => {
  const { data } = useContext(appContext);
  // const [formData, setFormData] = useState<UserType[]>([]);
  return (
    <section className="form-section" data-testid="form-page">
      <Forms />
      <div>
        {data.map((item: UserType, i: number) => {
          const idx = i;
          return <Cards fromValues={item} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default FormPage;

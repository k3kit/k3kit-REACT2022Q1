import React, { useState } from 'react';
import { Cards, UserType } from '../../components/forms/cards-from';
import { Forms } from '../../components/forms/forms';
import './style.css';
const FormPage = () => {
  const [formData, setFormData] = useState<UserType[]>([]);
  console.log(formData);
  return (
    <section className="form-section">
      <Forms setFormData={setFormData} />
      {formData.map((item: UserType, i: number) => {
        const idx = i;
        return <Cards fromValues={item} key={idx} />;
      })}
    </section>
  );
};

export default FormPage;

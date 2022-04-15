import React, { useState } from 'react';
import { Cards, UserType } from '../../components/forms/cards-from';
import { Forms } from '../../components/forms/forms';

const FormPage = () => {
  const [formData, setFormData] = useState<UserType[]>([]);
  console.log(formData);
  return (
    <>
      <Forms setFormData={setFormData} />
      {formData.map((item: UserType, i: number) => {
        const idx = i;
        return <Cards fromValues={item} key={idx} />;
      })}
    </>
  );
};

export default FormPage;

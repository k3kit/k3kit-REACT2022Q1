import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import './style.css';

export interface ImgProps {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Image: FC<ImgProps> = ({ setValue }) => {
  const [image, setImage] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (image) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue(reader.result as string);
    };
    reader.readAsDataURL(image);
  }

  return (
    <label htmlFor="file">
      <button
        className="btn-submit-img"
        onClick={(event) => {
          event.preventDefault();
          fileInputRef.current?.click();
        }}
      >
        Add image profile
      </button>
      <input
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.currentTarget.files !== null) {
            const file = e.currentTarget.files[0];
            setImage(file);
          }
        }}
      />
    </label>
  );
};

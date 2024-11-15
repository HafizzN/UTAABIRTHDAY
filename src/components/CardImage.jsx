// CardImage.jsx
import React from 'react';

const CardImage = ({ src, idx, onClick }) => {
  return (
    <div
      className="group rounded-lg overflow-hidden relative cursor-pointer"
      data-aos="fade-up"
      data-aos-duration={`${1000 + idx * 100}`}
      data-aos-once="true"
      onClick={onClick}
    >
      <img
        src={src}
        alt={`image-card-${idx + 1}`}
        className="w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out"
      />
      <div className="absolute w-full h-full bg-[#000]/50 top-0 group-hover:opacity-100 opacity-0 duration-300 ease-in-out"></div>
    </div>
  );
};

export default CardImage;
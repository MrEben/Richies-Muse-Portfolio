import React from 'react';

const Gallery = ({ galleryImages }) => {
  return (
    <article>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((item) => {
            const { img, id } = item;
            return (
              <div className="single" key={id}>
                <img src={img} alt="" />
              </div>
            );
          })}
      </div>
    </article>
  );
};

export default Gallery;

import React, { useState } from 'react';
import photos from './data';
import './works.css';
import Masonry from 'react-responsive-masonry';

function Works() {
  return (
    <main>
      <div id="works" className="photos-section">
        <h2>my works</h2>
        <div className="underline"></div>
        <Masonry colummnsCount={4} gutter={6}>
          {photos.map((images) => (
            <img className="photo" key={images.id} src={images.img} alt="" />
          ))}
        </Masonry>
      </div>
    </main>
  );
}

export default Works;

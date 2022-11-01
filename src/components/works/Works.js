import React from 'react';
import photos from './data';
import './works.css';
import Gallery from './Gallery';

function Works() {
  return (
    <main>
      <section id="works" className="photos-section">
        <h2>my works</h2>
        <div className="underline"></div>
        <Gallery galleryImages={photos} />
      </section>
    </main>
  );
}

export default Works;

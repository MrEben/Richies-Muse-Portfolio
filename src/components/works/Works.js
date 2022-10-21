import React, { useState } from 'react';
import photos from './data';
import './works.css';
// import { Masonry } from '@mui/lab';
import Masonry from 'react-responsive-masonry';
// import Img7 from './images/item-7.jpeg';
// import Img8 from './images/item-8.jpeg';
// import Img9 from './images/item-9.jpeg';

function Works() {
  return (
    <main>
      <div id="works" className="photos-section">
        <h2>my works</h2>
        <div className="underline"></div>
        <Masonry
          className="mason"
           colummnsCount={4}
            gutter={6}
          columns={4}
        >
          {photos.map((images) => (
            <img className="photo" key={images.id} src={images.img} alt="" />
          ))}
        </Masonry>
        {/* <div className="new_masonry">
          <img
            style={{ ...styles['small'] }}
            className="small"
            size="small"
            src={Img7}
          />
          <img
            style={{ ...styles['medium'] }}
            className="medium"
            size="medium"
            src={Img8}
          />
          <img
            style={{ ...styles['large'] }}
            className="large"
            size="large"
            src={Img9}
          />
          <img
            style={{ ...styles['small'] }}
            className="small"
            size="small"
            src={Img7}
          />
          <img
            style={{ ...styles['medium'] }}
            className="medium"
            size="medium"
            src={Img8}
          />
          <img
            style={{ ...styles['large'] }}
            className="large"
            size="large"
            src={Img9}
          />
          <img
            style={{ ...styles['small'] }}
            className="small"
            size="small"
            src={Img7}
          />
          <img
            style={{ ...styles['medium'] }}
            className="medium"
            size="medium"
            src={Img8}
          />
          <img
            style={{ ...styles['large'] }}
            className="large"
            size="large"
            src={Img9}
          />
        </div> */}
      </div>
    </main>
  );
}

// const styles = {
//   small: {
//     gridRowEnd: 'span 26',
//   },
//   medium: {
//     gridRowEnd: 'span 33',
//   },
//   large: {
//     gridRowEnd: 'span 80',
//   },
// };

export default Works;

import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
// import items from './data';
import { itemss } from './data';
import './works.css';
import Gallery from 'react-photo-gallery';
// const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Works() {
  // const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);

  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setMenuItems(items);
  //     return;
  //   }
  //   const newItems = items.filter((item) => item.category === category);
  //   setMenuItems(newItems);
  // };

  return (
    <main>
      <div id="works" className="menu section">
        {/* <div className="title">
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} /> */}
        {/* <Gallery numCols={3} photos={itemss} /> */}
      </div>
    </main>
  );
}

export default Works;

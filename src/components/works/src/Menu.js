import React from 'react';

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

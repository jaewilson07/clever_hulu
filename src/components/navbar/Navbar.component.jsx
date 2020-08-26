import React from 'react';

import './Navbar.styles.scss';
import { TMDB } from '../../constants';

function Navbar({ setSelectedCategory }) {
  return (
    <div className="navbar">
      {TMDB.GENRES.map((genre, index) => (
        <h2
          className="category"
          key={index}
          onClick={(event) => {
            console.log(event.target.innerText);
            setSelectedCategory(event.target.innerText);
          }}
        >
          {genre.category}
        </h2>
      ))}
    </div>
  );
}

export default Navbar;

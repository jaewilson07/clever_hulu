import React from 'react';

import Logo from '../../assets/logo.svg';

import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import './Header.styles.scss';

const header_list = [
  { title: 'Home', Icon: HomeIcon, className: 'header__icon--active' },
  { title: 'Trending', Icon: FlashOnIcon },
  { title: 'Verified', Icon: LiveTvIcon },
  { title: 'Video Library', Icon: VideoLibraryIcon },
  { title: 'Search', Icon: SearchIcon },
  { title: 'Account', Icon: PersonOutlineIcon },
];

function Header() {
  return (
    <div className="header">
      <div className="header__left header__box">
        {header_list.map((icon, index) => (
          <div
            className={`header__icon ${icon.className ? icon.className : ''}`}
            key={index}
          >
            <icon.Icon />
            <p className={icon.className}>{icon.title}</p>
          </div>
        ))}
      </div>
      <div className="header__right header__box">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Header;

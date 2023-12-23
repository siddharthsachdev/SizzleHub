import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Pursue the latest in culinary delight" />
      <h1 className="app__header-h1">Unlocking the essence of exquisite dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>It's more than just a meal, it's a journey. Unwind and trust us to cater to you seven days a week.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

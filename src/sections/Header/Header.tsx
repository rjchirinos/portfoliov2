import React, { Fragment } from 'react';
import './Header.scss';

import Navbar from '../../components/Navbar/Navbar';
import HeaderCont from '../../components/HeaderCont';
import BgShapes from '../../assets/img/header-bg.svg';

export default function Header() {
  return (
    <section style={{ backgroundImage: `url(${BgShapes})` }} className="header">
      <Navbar />
      <div className="header_container">
        <HeaderCont />
      </div>
      {/* <img src={BgShapes} /> */}
    </section>
  );
}

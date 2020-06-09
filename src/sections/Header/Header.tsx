import React, { Fragment } from 'react';
import './Header.scss';
import styled from 'styled-components';

import Navbar from '../../components/Navbar/Navbar';
import HeaderCont from '../../components/HeaderCont';
import BgShapes from '../../assets/img/header-bg.svg';

const Bg = styled.img`
  width: 51.46%;
  position: absolute;
  right: 0;
  transform: translateX(10%);
`;

export default function Header() {
  return (
    <section className="header">
      <Navbar />
      <div className="header_container">
        <HeaderCont />
      </div>
      <Bg src={BgShapes} />
    </section>
  );
}

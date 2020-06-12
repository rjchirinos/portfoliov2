import React from 'react';
import './Header.scss';
import styled from 'styled-components';

import Navbar from '../../components/Navbar/Navbar';
import HeaderCont from '../../components/HeaderCont';
import BgShapes from '../../assets/img/header-bg.svg';
import SocialRow from '../../components/SocialRow';

const Bg = styled.img`
  width: 56%;
  min-width: 650px;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(10%, 12.5%);
`;

export default function Header() {
  return (
    <section className="header">
      <Navbar />
      <div className="header_container">
        <HeaderCont />
        <SocialRow />
      </div>
      <Bg src={BgShapes} />
    </section>
  );
}

import React from 'react';
import styled from 'styled-components';

import SectionLayout from '../../components/SectionLayout';
import ColorFilterImage from '../../components/ColorFilterImage';
import Photo from '../../assets/img/photo.png';
import AboutBg from '../../assets/img/about-bg.svg';

const Container = styled.section`
  min-height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin-top: -2rem;
`;

const DescriptionContainer = styled.div`
  width: 60%;
  color: #eceff4de;
`;

const TextTint = styled.span`
  color: #d08770;
  font-weight: bold;
`;

const UL = styled.ul`
  columns: 2;
  list-style-type: '-';
  list-style-position: inside;
`;

const ShapesBG = styled.img`
  position: absolute;
  width: 18vw;
  right: 30px;
  z-index: -100;
`;

export default function About() {
  return (
    <SectionLayout id="about" sectionTitle="About Me">
      <Container>
        <DescriptionContainer>
          <p>
            Hello, I'm <TextTint>Raúl Chirinos</TextTint>, a Fullstack Developer
            based in Punto Fijo, Venezuela. <br /> <br />I love to build
            websites, webapps and applications with the latest technologies,
            always focusing in the end user experince. <br />
            <br /> Technologies I have worked with:
            <br /> <br />
          </p>
          <UL>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Gatsby</li>
            <li>Jest</li>
            <li>GraphQL</li>
            <li>Expo</li>
          </UL>
        </DescriptionContainer>
        <ColorFilterImage
          size="25vw"
          borderRadius="50%"
          image={Photo}
          color="#d08770"
        />
        <ShapesBG src={AboutBg} />
      </Container>
    </SectionLayout>
  );
}

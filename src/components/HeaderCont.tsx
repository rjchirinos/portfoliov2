import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: #d08770;
  margin-bottom: 0.6rem;
`;

const Title = styled.h1`
  margin-bottom: 0.6rem;
  font-size: 3.4rem;
`;

const Subtitle = styled.h3`
  margin-bottom: 1.2rem;
  font-size: 3.4rem;
  color: #d8dee9ad;
`;

const Description = styled.p`
  margin-bottom: 1.2rem;
  width: 370px;
`;

export default function HeaderCont(props: any) {
  return (
    <div>
      <P>Hello, my name is</P>
      <Title>Raúl Chirinos</Title>
      <Subtitle>I create stunning webapps</Subtitle>
      <Description>
        I am a Fullstack Developer based in Venezuela and I focus in building
        webapps and functional websites with the latest technologies.
      </Description>
    </div>
  );
}

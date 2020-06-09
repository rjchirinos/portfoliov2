import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: #d08770;
  margin-bottom: 0.6rem;
`;

const Title = styled.h1`
  margin-bottom: 0.6rem;
  font-size: 2.8rem;
`;

const Subtitle = styled.h3`
  margin-bottom: 0.6rem;
  font-size: 2.8rem;
  color: #d8dee9ad;
`;

const Description = styled.p`
  width: 20%;
  min-width: 310px;
`;

export default function HeaderCont(props: any) {
  return (
    <div>
      <P>Hello, my name is</P>
      <Title>Raúl Chirinos</Title>
      <Subtitle>I create stunning webapps</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </Description>
    </div>
  );
}

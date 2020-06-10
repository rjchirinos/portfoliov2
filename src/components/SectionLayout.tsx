import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 4.5rem;
`;
const Lateral = styled.div`
  width: 12%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  /* position: relative; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 88%;
  margin-top: 2rem;
`;

const SectionTitle = styled.h3`
  /* transform: rotate(-90deg) translate(-40%, 0); */
  writing-mode: vertical-rl;
  transform: scale(-1);
  top: 0;
  font-size: 3rem;
  text-transform: uppercase;
  white-space: nowrap;
  color: #d8dee9ad;
  margin-top: 2rem;
`;

const LateralLine = styled.div`
  width: 6px;
  height: 120px;
  background-color: #d8dee9ad;
  margin-top: 2rem;
  transform: translateX(-7px);
`;

export default function SectionLayout(props: any) {
  return (
    <Section id={props.id}>
      <Lateral>
        <Column>
          <SectionTitle>{props.sectionTitle}</SectionTitle>
          <LateralLine />
        </Column>
      </Lateral>
      <Content>{props.children}</Content>
    </Section>
  );
}

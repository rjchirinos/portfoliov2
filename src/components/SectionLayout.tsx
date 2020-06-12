import React from 'react';
import styled from 'styled-components';
import useWindowsDimensions from '../hooks/useWindowsDimensions.js';

export default function SectionLayout(props: any) {
  const { isSmall, isMedium } = useWindowsDimensions(600, 950);

  const Section = styled.section`
    display: flex;
    flex-direction: ${isMedium ? 'column' : 'row'};
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 4.5rem;
  `;
  const Lateral = styled.div`
    width: ${isMedium ? '100%' : '12%'};
    display: flex;
    flex-direction: ${isMedium ? 'row' : 'column'};
    justify-content: flex-start;
    align-items: center;
    min-height: ${isMedium ? '0' : '100vh'};
    /* position: relative; */
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: ${isMedium ? 'row' : 'column'};
    justify-content: flex-start;
    align-items: center;
    ${
      !isMedium &&
      `
      min-height: 100vh;
    `
    }
    ${
      isMedium &&
      `
      width: 95%;
      margin: auto;
    `
    }
    ${
      isSmall &&
      `
      margin-bottom: 1.2rem;
    `
    }
  `;

  const Content = styled.div`
    width: ${isMedium ? '95%' : '88%'};
    ${isMedium && 'margin: auto;'}
    margin-top: ${isMedium ? '0.5rem' : '2rem'};
  `;

  const SectionTitle = styled.h3`
    ${!isMedium &&
    `
    writing-mode: vertical-rl;
    transform: scale(-1);
    `}
    top: 0;
    font-size: ${isSmall ? '1.2rem' : isMedium ? '2rem' : '3rem'};
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
    ${isMedium &&
    `
      width: 120px;
      height: 4px;
      margin-left: 2rem;
    `}
    ${isSmall &&
    `
      width: 70px;
      height: 2px;
      margin-left: 1rem;
    `}
  `;
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

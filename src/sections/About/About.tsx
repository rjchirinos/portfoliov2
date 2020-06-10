import React from 'react';
import styled from 'styled-components';

import SectionLayout from '../../components/SectionLayout';

const Container = styled.section`
  min-height: 100vh;
`;

export default function About() {
  return (
    <SectionLayout id="about" sectionTitle="About Me">
      <Container>
        <p>About</p>
      </Container>
    </SectionLayout>
  );
}

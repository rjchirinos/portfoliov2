import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const Anchor = styled.a`
  color: inherit;
  font-size: 1.5rem;
  margin-right: 0.8rem;
`;

export default function SocialRow() {
  return (
    <div>
      <Anchor href="http://linkedin.com/in/rjchirinos">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Anchor>
      <Anchor href="http://github.com/rjchirinos">
        <FontAwesomeIcon icon={faGithub} />
      </Anchor>
      <Anchor href="http://twitter.com/raulfullcode">
        <FontAwesomeIcon icon={faTwitter} />
      </Anchor>
      <Anchor href="https://stackoverflow.com/users/8422963/ra%c3%bal-chirinos?tab=profile">
        <FontAwesomeIcon icon={faStackOverflow} />
      </Anchor>
      <Anchor href="mailto:raulstuf@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Anchor>
    </div>
  );
}

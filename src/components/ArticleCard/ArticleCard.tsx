import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

import './ArticleCard.scss';

interface Props {
  title: String;
  description: String;
  link: string;
}

export default function ArticleCard(props: Props) {
  return (
    <div className="article-card">
      <div className="article-heading">
        <FontAwesomeIcon className="logo" icon={faDev} />
        <a className="article-link" href={props.link}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
      <div className="article-card_container">
        <h4 className="article-title">{props.title}</h4>
        <p className="article-description">{props.description}</p>
      </div>
    </div>
  );
}

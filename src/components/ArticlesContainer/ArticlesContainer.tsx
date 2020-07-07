import React from 'react';

import './ArticlesContainer.scss';

export default function ArticlesContainer(props: any) {
  return <div className="articles_container">{props.children}</div>;
}

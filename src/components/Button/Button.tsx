import React from 'react';

import './Button.scss';

export default function Button(props: any) {
  return (
    <div onClick={props.handleClick} className="btn">
      {props.btText}
    </div>
  );
}

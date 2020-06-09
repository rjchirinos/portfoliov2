import React from 'react';
import styled from 'styled-components';

export default function MenuItem(props: any) {
  const Item = styled.span`
    text-transform: uppercase;
    font-family: 'Gotham', sans-serif;
    font-size: 0.9rem;
    color: ${props.tint ? '#d08770' : '#d8dee9ad'};
    margin-left: 1.6rem;
    }
  `;
  return <Item>{props.children}</Item>;
}

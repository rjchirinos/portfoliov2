import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default function MenuItem(props: any) {
  const Item = styled.span`
    text-transform: uppercase;
    font-family: 'Gotham', sans-serif;
    font-size: 0.9rem;
    color: ${props.tint ? '#d08770' : '#d8dee9ad'};
    margin-left: 2rem;
    transition: 0.3s;
    &:hover {
      border-bottom: 2px solid #d08770;
    }
  `;
  return (
    <Item>
      <A href={props.to}>{props.children}</A>
    </Item>
  );
}

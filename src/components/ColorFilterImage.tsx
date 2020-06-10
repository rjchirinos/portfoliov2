import React from 'react';
import styled from 'styled-components';

export default function ColorFilterImage(props: any) {
  const ProfilePic = styled.div`
    width: ${props.size || props.width};
    height: ${props.size || props.height};
    border-radius: ${props.borderRadius};
    background: ${props.color || '#000'};
    overflow: hidden;
  `;

  const Picture = styled.img`
    width: ${props.size || props.width};
    height: ${props.size || props.height};
    object-fit: cover;
    opacity: 0.37;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  `;
  return (
    <ProfilePic>
      <Picture src={props.image} />
    </ProfilePic>
  );
}

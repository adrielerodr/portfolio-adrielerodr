import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import Text from '../../foundation/Text';
import links from '../../../../mocks/links';
import ProfileImage from './profile';


export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <ProfileImage />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central>
        { links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              { link.name }
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
    </MenuWrapper>
  );
}

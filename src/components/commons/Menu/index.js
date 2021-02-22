import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import Text from '../../foundation/Text';
import links from '../../../../mocks/links';


export default function Menu() {
  return (
    <MenuWrapper>
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

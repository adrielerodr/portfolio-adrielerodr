import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from './profile';
import { Text } from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';
import links from '../../../../mocks/links.json';
import Button from '../Button';

export default function Menu({ profilePic, toggleModalContact }) {
  return (
    <MenuWrapper>
      { profilePic && (
        <MenuWrapper.LeftSide>
          <ProfileImage />
        </MenuWrapper.LeftSide>
      )}
      <MenuWrapper.Central>
        { links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              { link.name }
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button variant="secondary" ghost onClick={toggleModalContact}>
          Contato
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.defaultProps = {
  profilePic: false,
};

Menu.propTypes = {
  profilePic: PropTypes.bool,
  toggleModalContact: PropTypes.func.isRequired,
};

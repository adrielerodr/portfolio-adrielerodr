/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Link({
  href, openNewTab, children, ...props
}) {
  return openNewTab
    ? (
      <NextLink href={href} passHref>
        <StyledLink target="_blank" {...props}>
          {children}
        </StyledLink>
      </NextLink>
    )
    : (
      <NextLink href={href} passHref>
        <StyledLink {...props}>
          {children}
        </StyledLink>
      </NextLink>
    );
}

Link.defaultProps = {
  openNewTab: false,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  openNewTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

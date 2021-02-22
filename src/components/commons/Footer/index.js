import React from 'react';
import styled from 'styled-components';
import TwitterLogo from './icons/twitter';
import MediumLogo from './icons/medium';
import breakpointsMedia from '../../../theme/utils/breackpointsMedia';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  a {
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

FooterWrapper.FooterIcon = styled.a`
 ${breakpointsMedia({
    lg: {
      margin: '20px 10px'
    },
    md: {
      margin: '10px 5px'
    },
  })}
`;

const Footer = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <FooterWrapper.FooterIcon href="https://twitter.com/adrielerodr" target="_blank">
      <TwitterLogo />
    </FooterWrapper.FooterIcon>
    <FooterWrapper.FooterIcon href="https://medium.com/@adrielerodr" target="_blank">
      <MediumLogo />
    </FooterWrapper.FooterIcon>
  </FooterWrapper>
);

export default Footer;

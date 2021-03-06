import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breackpointsMedia';
import Link from '../../commons/Link';

const textStyle = ({ theme, variant }) => css`
  font-size: ${theme.typographyVariants[variant].fontSize};
  font-weight: ${theme.typographyVariants[variant].fontWeight};
  line-height: ${theme.typographyVariants[variant].lineHeight};
`;

export const TextStyleVariantsMap = {
  smallestException: ({ theme }) => textStyle({ theme, variant: 'smallestException' }),
  paragraph1: ({ theme }) => textStyle({ theme, variant: 'paragraph1' }),
  title: css`
    ${({ theme }) => textStyle({ theme, variant: 'titleXS' })}
    ${breakpointsMedia({
    md: ({ theme }) => textStyle({ theme, variant: 'title' }),
  })
}`,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export function Text({
  tag,
  variant,
  children,
  href,
  openNewTab,
  ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        openNewTab={openNewTab}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  openNewTab: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  openNewTab: false,
};

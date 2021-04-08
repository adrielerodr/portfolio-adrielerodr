import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

export default function ProjectDetailsScreen({
  image, title, description, link,
}) {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12, sm: 12, md: 12, lg: 12,
            }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Text
              tag="p"
              variant="h2"
              color="primary.main"
            >
              { title }
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12, sm: 12, md: 6, lg: 6,
            }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Image
              src={image}
              alt={title}
              width="500"
              height="500"
            />
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12, sm: 12, md: 6, lg: 6, xl: 6,
            }}
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text
              tag="p"
              variant="paragraph1"
              color="tertiary.light"
            >
              { description }
            </Text>
            <Text
              tag="p"
              variant="paragraph2"
              color="primary.main"
              href={link}
              openNewTab
            >
              { link }
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

ProjectDetailsScreen.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

ProjectDetailsScreen.defaultProps = {
  title: '',
  description: '',
  image: '',
  link: '/',
};

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../foundation/Text';
import Grid from '../foundation/layout/Grid';
import Box from '../foundation/layout/Box';

export default function Section({ sectionTitle, children }) {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
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
            offset={{
              xs: 0, sm: 0, md: 0, lg: 0,
            }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              { sectionTitle }
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          justifyContent="center"
        >
          { children }
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  sectionTitle: {},
  children: {},
};

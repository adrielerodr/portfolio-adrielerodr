/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { Text } from '../src/components/foundation/Text';
import Section from '../src/components/Section';
import WrapperRepositories from '../src/components/wrappers/WrapperRepositories';
import getRepositories from '../src/requests/getRepositories';

function AboutScreen({ repositories }) {
  return (
    <Box
      flex="1"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Section sectionTitle="Sobre mim">
        <Grid.Container
          padding={16}
        >
          <Grid.Row>
            <Grid.Col
              value={{
                xs: 12, sm: 12, md: 12, lg: 12,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              padding={0}
            >
              <Image
                width={640}
                height={640}
                alt="Foto de Adriele Rodrigues"
                src="/images/about-pic.png"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col
              value={{
                xs: 12, sm: 12, md: 6, lg: 6,
              }}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              padding={0}
            >
              <Text
                tag="p"
                variant="paragraph1"
                color="tertiary.light"
                textAlign={{
                  xs: 'left',
                  md: 'left',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet urna.
                Nunc lacinia justo sed augue rutrum cursus. Sed venenatis sem in felis efficitur imperdiet.
                Etiam dignissim neque vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta ante,
                in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
              </Text>
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12, sm: 12, md: 6, lg: 6,
              }}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              padding={0}
            >
              <Text
                tag="p"
                variant="paragraph1"
                color="tertiary.light"
                textAlign={{
                  xs: 'left',
                  md: 'right',
                }}
              >
                Fusce vitae ante ut sapien posuere elementum non sit amet purus.
                Integer vulputate pharetra tincidunt. Maecenas quis rutrum urna.
                Sed egestas tortor risus, vitae pretium diam varius eu.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Morbi eu arcu augue.
              </Text>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <WrapperRepositories repositories={repositories} />
          </Grid.Row>
        </Grid.Container>
      </Section>
    </Box>
  );
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
    pageBoxProps: {
      flexWrap: 'wrap',
    },
  },
});

export async function getStaticProps() {
  const repositories = await getRepositories();

  return {
    props: {
      repositories,
    },
  };
}

AboutScreen.defaultProps = {
  repositories: [],
};

AboutScreen.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
};

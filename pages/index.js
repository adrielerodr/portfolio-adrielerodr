import React from 'react';
import Footer from '../src/components/commons/Footer';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import GitHubCorner from '../src/components/commons/GitHubCorner';
import Menu from '../src/components/commons/Menu';
import Cover from '../src/components/Cover';
import WrapperProjects from '../src/components/WrapperProjects';
import ContactBox from '../src/components/Contact';

export default function Home() {
  return (
    <>
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        padding="28px"
        flexDirection="column"
        backgroundImage="url(/images/background.png)"
      >
        <Menu />
        <Cover />
        <Grid.Container
          marginTop={{
            xs: '32px',
            md: '75px',
          }}
        >
          <Grid.Row>
            <Grid.Col
              value={{ xs: 12, md: 12 }}
              offset={{ xs: 0, md: 0 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
            >
              <WrapperProjects />
            </Grid.Col>
          </Grid.Row>
          <ContactBox />
        </Grid.Container>
        <GitHubCorner projectUrl="https://github.com/adrielerodr" />
      </Box>
      <Footer />
    </>
  );
}

import React from 'react';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import GitHubCorner from '../src/components/commons/GitHubCorner';
import Menu from '../src/components/commons/Menu';
import Cover from '../src/components/Cover';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
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
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
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
              Meus Projetos
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <GitHubCorner projectUrl="https://github.com/adrielerodr" />
      <Footer />
    </Box>
  );
}

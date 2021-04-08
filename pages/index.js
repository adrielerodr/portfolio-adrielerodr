import React from 'react';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import Cover from '../src/components/Cover';
import WrapperProjects from '../src/components/WrapperProjects';
import ContactBox from '../src/components/Contact';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
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
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      flexWrap: 'wrap',
      backgroundImage: 'url(/images/background.png)',
    },
    menuProps: {
      display: true,
      profilePic: true,
    },
  },
});

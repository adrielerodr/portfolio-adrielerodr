import React from 'react';
import Grid from '../foundation/layout/Grid';
import Button from '../commons/Button';
import { WebsitePageContext } from '../wrappers/WebsitePage';

export default function ContactBox() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <div>
      <Grid.Row
        justifyContent="center"
      >
        <Grid.Col
          padding={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          marginTop={30}
        >
          <Button
            display="block"
            variant="primary.main"
            onClick={() => websitePageContext.toggleModalContact()}
          >
            Entre em contato
          </Button>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
}

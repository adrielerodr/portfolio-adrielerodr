import React from 'react';
import Text from '../foundation/Text';
import Grid from '../../components/foundation/layout/Grid';
import CoverComponent from './styles';

export default function Cover() {
  return (
    <CoverComponent>
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
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'center',
              }}
            >
              Olá, sou Adriele Rodrigues!
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'center',
              }}
            >
              Seja bem vindo ao meu portfólio.
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </CoverComponent>
  );
}

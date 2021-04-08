import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import { Text } from '../foundation/Text';
import Grid from '../foundation/layout/Grid';

export default function WrapperRepositories({ repositories }) {
  return (
    <Section sectionTitle="Meus Repositórios">
      <Grid.Container
        padding={16}
      >
        {
          repositories.map((repo) => (
            <Grid.Row key={repo.id}>
              <Grid.Col
                value={{
                  xs: 12, sm: 12, md: 12, lg: 12,
                }}
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
                padding={0}
                margin={28}
              >
                <Text
                  id={repo.id}
                  tag="p"
                  variant="titleXS"
                  color="primary.main"
                  margin="0 0 10px 0"
                  href={repo.html_url}
                  openNewTab
                >
                  { repo.description }
                </Text>
                <Text
                  id={repo.id}
                  tag="p"
                  variant="paragraph1"
                  color="tertiary.light"
                  textAlign={{
                    xs: 'left',
                    md: 'left',
                  }}
                  href={repo.html_url}
                  openNewTab
                >
                  { repo.html_url }
                </Text>
              </Grid.Col>
            </Grid.Row>
          ))
        }
      </Grid.Container>
    </Section>
  );
}

WrapperRepositories.defaultProps = {
  repositories: [],
};

WrapperRepositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
};

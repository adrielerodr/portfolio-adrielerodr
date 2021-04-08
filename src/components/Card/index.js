import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './styles';
import Grid from '../foundation/layout/Grid';
import { Text } from '../foundation/Text';

const Card = ({ project }) => (
  <CardWrapper>
    { project.isHighlighted
      ? (
        <Grid.Container
          value={{
            xs: 12, sm: 12, md: 12, lg: 12,
          }}
          padding={16}
        >
          <Grid.Row>
            <Grid.Col
              value={{
                xs: 12, sm: 8, md: 8, lg: 8,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              padding={0}
            >
              <CardWrapper.HighlightedCardImage
                alt={project.title}
                src={`/images/${project.image}`}
              />
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 0, sm: 4, md: 4, lg: 4,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              padding={0}
            >
              <CardWrapper.CardTitle>
                <Text
                  tag="p"
                  variant="h5"
                >
                  { project.title }
                </Text>
              </CardWrapper.CardTitle>
              <CardWrapper.CardText>
                <Text
                  tag="p"
                  variant="paragraph1"
                  display={{
                    xs: 'none',
                    md: 'block',
                  }}
                >
                  { project.description }
                </Text>
              </CardWrapper.CardText>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      )
      : (
        <Grid.Col
          value={{
            xs: 12, sm: 12, md: 12, lg: 12,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          margin={5}
          padding={16}
        >
          <CardWrapper.CardImage
            width={187}
            height={290}
            alt={project.title}
            src={`/images/${project.image}`}
          />
          <CardWrapper.CardTitle>
            { project.title }
          </CardWrapper.CardTitle>
        </Grid.Col>
      )}
  </CardWrapper>
);

export default Card;

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    isHighlighted: PropTypes.bool,
  }),
};

Card.defaultProps = {
  project: {
    title: '',
    description: '',
    image: '',
    isHighlighted: false,
  },
};

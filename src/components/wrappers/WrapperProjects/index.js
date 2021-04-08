import React from 'react';
import Card from '../../Card';
import Section from '../../Section';
import Link from '../../commons/Link';

const WrapperProjects = ({ projects }) => (
  <Section sectionTitle="Meus Projetos">
    {
      projects.map((project) => (
        <Link key={project.projectId} href={`/projects/${project.slug}`}>
          <Card project={project} />
        </Link>
      ))
    }
  </Section>
);

export default WrapperProjects;

WrapperProjects.propTypes = Card.propTypes;

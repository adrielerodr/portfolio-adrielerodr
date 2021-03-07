import React from 'react';
import Card from '../Card';
import Section from '../Section';
import projects from '../../../mocks/projects.json';

const WrapperProjects = () => (
  <Section sectionTitle="Meus Projetos">
    {
      projects.map((project) => (
        <Card key={project.projectId} project={project} />
      ))
    }
  </Section>
);

export default WrapperProjects;

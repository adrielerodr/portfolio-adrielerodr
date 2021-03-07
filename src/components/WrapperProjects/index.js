import Card from '../Card';
import Section from '../Section';
import projects from '../../../mocks/projects';

const WrapperProjects = () => {
  return <Section sectionTitle="Meus Projetos">
    { 
      projects.map((project, index) => (
          <Card key={index} project={project} />
        ))
    }
  </Section>  
}

export default WrapperProjects;

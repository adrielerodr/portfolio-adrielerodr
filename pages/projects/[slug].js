import React from 'react';
import ProjectDetailsScreen from '../../src/components/screens/ProjectDetailsScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import projects from '../../db/projects.json';

function ProjectDetailsInternaScreen({ project }) {
  return (
    <ProjectDetailsScreen
      link={project.link}
      image={project.coverImage}
      title={project.title}
      description={project.description}
    />
  );
}

ProjectDetailsInternaScreen.propTypes = ProjectDetailsScreen.propTypes;

export default websitePageHOC(ProjectDetailsInternaScreen);

export async function getStaticProps({ params }) {
  const foundProject = projects.find((project) => project.slug === params.slug);

  return {
    props: {
      project: foundProject,
      pageWrapperProps: {
        seoProps: {
          headTitle: foundProject.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

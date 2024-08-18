export const getProjectsQuery = `
  query GetProjects {
    projects {
      title
      slug
      shortDescription
      image {
        url
      }
    }
  }
`

export const getProjectBySlug = (slug: string) => `
  query GetProjectBySlug {
    project(where: {slug: "${slug}"}) {
      title
      shortDescription
      slug
      image {
        url
      }
      github
      deploy
      longDescription
      skill {
        text
      }
    }
  }
`

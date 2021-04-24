import { fetchAPI } from './fetch-api'
import { imageFragment } from './fragments/case-study'

export async function getTeamMemberList() {
  const data = await fetchAPI(`
    query AllPages {
      projects(first: 10000) {
        edges {
          item: node {
            title
            databaseId
            slug
            acf_project {
              headline
            }
            excerpt
            featuredImage {
              node {
                ${imageFragment}
              } 
            }
          }
        }
      }
    }
  `);
  return data?.projects.edges;
}

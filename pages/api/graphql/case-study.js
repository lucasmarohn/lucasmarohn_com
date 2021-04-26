import { fetchAPI } from './fetch-api'
import { imageFragment } from './fragments/case-study'

export async function getAllCaseStudyURI() {
  const data = await fetchAPI(`
    query AllPages {
      projects(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.projects;
}


export async function getCaseStudyList() {
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

export async function getCaseStudyData(slug, preview) {
  const data = await fetchAPI(`
    query($pageId: ID!) {
      project(id: $pageId, idType: SLUG) {
        id
        uri
        title
        slug
        databaseId
        featuredImage {
          node {
            ${imageFragment}
          }
        }
        acf_project {
          headline
          animation
          fieldGroupName
          poster {
            ${imageFragment}
          }
          contentSections {
            ... on Project_AcfProject_ContentSections_BasicText {
              backgroundColor
              basicText
              containerWidth
              fieldGroupName
            }
            ... on Project_AcfProject_ContentSections_FullWidthImage {
              fieldGroupName
              fullWidthImage {
                ${imageFragment}
              }
            }
            ... on Project_AcfProject_ContentSections_TwoColumn {
              column1
              column2
              flipColumnOrder
              fieldGroupName
            }
            ... on Project_AcfProject_ContentSections_Columns {
              backgroundColor
              columnsTitle
              containerWidth
              fieldGroupName
              maxColumns
              singleColumn {
                ... on Project_AcfProject_ContentSections_Columns_SingleColumn_Video {
                  fieldGroupName
                  colAspectRatio
                  colVideoContent
                  colVideoCover {
                    ${imageFragment}
                  }
                  colVideoMp4 {
                    mediaItemUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                  
                }
                ... on Project_AcfProject_ContentSections_Columns_SingleColumn_ColImage {
                  fieldGroupName
                  colImageContent {
                    ${imageFragment}
                  }
                }
                ... on Project_AcfProject_ContentSections_Columns_SingleColumn_ColWysiwyg {
                  fieldGroupName
                  colWysiwygContent
                }
              }
            }
            ... on Project_AcfProject_ContentSections_Team {
              fieldGroupName
            }
          }
        }
      }
    }
  `, {
      variables: {
        pageId: slug,
      },
    }
  )
  return data?.project
}
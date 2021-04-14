const API_URL = process.env.WORDPRESS_API_URL;
async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

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
  console.log(data.projects)
  return data?.projects;
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
        acf_project {
          headline
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
                altText
                srcSet
                sourceUrl
                mediaDetails {
                  width
                  height
                }
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
                  colAspectRatio
                  colVideoContent
                  colVideoCover {
                    altText
                    sourceUrl
                    mediaDetails {
                      height
                      width
                    }
                  }
                  colVideoMp4 {
                    altText
                    sourceUrl
                  }
                  fieldGroupName
                }
                ... on Project_AcfProject_ContentSections_Columns_SingleColumn_ColImage {
                  fieldGroupName
                  colImageContent {
                    altText
                    sourceUrl
                    srcSet
                    mediaDetails {
                      height
                      width
                    }
                  }
                }
                ... on Project_AcfProject_ContentSections_Columns_SingleColumn_ColWysiwyg {
                  colWysiwygContent
                  fieldGroupName
                }
              }
            }
            ... on Project_AcfProject_ContentSections_Team {
              fieldGroupName
            }
          }
          animation
          fieldGroupName
          poster {
            altText
            srcSet
            sourceUrl
            mediaDetails {
              width
              height
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
  console.log('data', data)
  return data.project
}
import {Box} from '@chakra-ui/react'
import { getAllCaseStudyURI, getCaseStudyData } from '../api/graphql/case-study'
export default function CaseStudy({data}) {
  return (<Box>{data.title}</Box>)
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getCaseStudyData(params.slug[0]);
  return {
    props: { data, preview },
  };
}

export async function getStaticPaths() {
  const pages = await getAllCaseStudyURI();

  return {
    paths: pages.edges.map(({ node }) => `/work/${node.slug}`) || [],
    fallback: false,
  };
}
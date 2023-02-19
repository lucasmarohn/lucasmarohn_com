import Container from "../container";
import { Grid, Box, AspectRatio, BreadcrumbLink, VStack } from "@chakra-ui/react";
import Wysiwyg from "../partials/wysiwyg";
import WPImage from "../partials/wp-image";

import { motion } from 'framer-motion'
import { stagger, fadeUpIn } from '../../src/utils/framer-variants'
import { VideoFile } from "./video-file";

import getVideoId from 'get-video-id'

const MotionGrid = motion(Grid)
const MotionDiv = motion('span')

export default function Columns({ title, columns, maxColumns }) {
  
  const printColumn = (singleCol) => {
    switch (singleCol.fieldGroupName) {
      case "Project_AcfProject_ContentSections_Columns_SingleColumn_ColImage":
        return (
          <WPImage
            image={singleCol.colImageContent}
            
          />
        );
      case "Project_AcfProject_ContentSections_Columns_SingleColumn_ColWysiwyg":
        return (
          <Box>
            <Wysiwyg html={singleCol.colWysiwygContent} />
          </Box>
        );
      case "Project_AcfProject_ContentSections_Columns_SingleColumn_Video":
        const file = singleCol?.colVideoMp4
        const embed = singleCol?.colVideoContent
        if(file) {
            return <VideoFile aspectRatio={100 / singleCol.colAspectRatio} posterUrl={singleCol?.colVideoCover?.sourceUrl} mp4Url={singleCol?.colVideoMp4?.mediaItemUrl} />
        }
        if( embed ) {
          const videoInfo = getVideoId(embed)
          switch( videoInfo.service ) {
            case 'youtube': 
              return (
              <AspectRatio ratio={16 / 9}>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoInfo.id}`} frameBorder="0" allowFullScreen></iframe>
              </AspectRatio>)
          }
          
        }

      default:
        return (
          <Box>
            SingleCol: {singleCol.fieldGroupName}
          </Box>
        );
    }
  }
  return (
    <Container>
      <MotionGrid
        templateColumns={[
          "100%",
          null,
          `repeat(${maxColumns ?? columns.length}, 1fr)`,
        ]}
        w="100%"
        gap={["2rem", null, "5rem"]}
        alignItems="center"
        initial="hidden"
        animate="visible"
        variants={stagger}

      >
        {columns.map((singleCol, index) => {
          return (
          <MotionDiv key={[singleCol, index]} variants={fadeUpIn}>
            {printColumn(singleCol)}
          </MotionDiv>
          )
        })}
      </MotionGrid>
    </Container>
  );
}

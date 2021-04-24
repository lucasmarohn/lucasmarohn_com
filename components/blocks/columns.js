import Container from "../container";
import { Grid, Box, AspectRatio } from "@chakra-ui/react";
import Wysiwyg from "../partials/wysiwyg";
import WPImage from "../partials/wp-image";

export default function Columns({ columns, maxColumns }) {
  return (
    <Container>
      <Grid
        templateColumns={[
          "100%",
          null,
          `repeat(${maxColumns ?? columns.length}, 1fr)`,
        ]}
        w="100%"
        gap={["2rem", null, "5rem"]}
        alignItems="center"
      >
        {columns.map((singleCol, index) => {
          switch (singleCol.fieldGroupName) {
            case "Project_AcfProject_ContentSections_Columns_SingleColumn_ColImage":
              return (
                <WPImage
                  key={[singleCol, index]}
                  image={singleCol.colImageContent}
                  withBlur
                />
              );
            case "Project_AcfProject_ContentSections_Columns_SingleColumn_ColWysiwyg":
              return (
                <Box key={[singleCol, index]}>
                  <Wysiwyg html={singleCol.colWysiwygContent} />
                </Box>
              );
            case "Project_AcfProject_ContentSections_Columns_SingleColumn_Video":
              console.log(singleCol);
              return (
                <Box w="100%">
                  <AspectRatio ratio={singleCol.colAspectRatio / 100}>
                    <video
                      poster={singleCol?.colVideoCover?.sourceUrl}
                      loop
                      autoPlay="true"
                      muted
                    >
                      <source
                        type="video/mp4"
                        src={singleCol.colVideoMp4.mediaItemUrl}
                      />
                    </video>
                  </AspectRatio>
                </Box>
              );
            default:
              return (
                <Box key={[singleCol, index]}>
                  SingleCol: {singleCol.fieldGroupName}
                </Box>
              );
          }
        })}
      </Grid>
    </Container>
  );
}

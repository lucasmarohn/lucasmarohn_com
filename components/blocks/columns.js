import Container from '../container'
import { Grid, Box } from'@chakra-ui/react'
import Wysiwyg from '../partials/wysiwyg'
import WPImage from '../partials/wp-image'

export default function Columns({columns, maxColumns}) {
  return (
    <Container>
      <Grid
        templateColumns={`repeat(${maxColumns ?? columns.length}, 1fr)`}
        w="100%"
        gap={['2rem', null, '5rem']}
        alignItems="center"
      >
        {columns.map((singleCol, index) => {
          switch (singleCol.fieldGroupName) {
            case "Project_AcfProject_ContentSections_Columns_SingleColumn_ColImage":
              return <WPImage key={[singleCol, index]} image={singleCol.colImageContent} withBlur />
            case "Project_AcfProject_ContentSections_Columns_SingleColumn_ColWysiwyg":
              return <Box key={[singleCol, index]}><Wysiwyg html={singleCol.colWysiwygContent}/></Box>
            default:
              return <Box key={[singleCol, index]}>SingleCol: {singleCol.fieldGroupName}</Box>;
          }
        })}
      </Grid>
    </Container>
  )
}
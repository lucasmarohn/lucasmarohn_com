import { useState } from 'react'
import { VStack, Heading, SimpleGrid, Stat, StatArrow, Text, StatLabel, StatNumber, Box } from '@chakra-ui/react'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'

export default function Stats({statData}, props) {
  const [animateNumbers, setAnimateNumbers] = useState(false)
  const isVisible = (isVisible) => {
    if(isVisible && animateNumbers === false) {
      setAnimateNumbers(true)
    }
  }

  return (
    <Box alignSelf={props.alignSelf}>
      <VisibilitySensor onChange={isVisible} minTopValue={"50%"}>
        <VStack spacing="1rem" w="100%">
          <SimpleGrid columns={[2, null, 4]} gap={5} w="100%">
            {statData.map( (item, idx) => 
              <Stat key={idx}>
                <StatLabel><StatArrow type="increase" />{item.title}</StatLabel>
                <StatNumber fontSize={['lg', 'xl', '5xl']}>
                  <CountUp 
                  delay={1}
                  start={animateNumbers ? 0 : 0}
                  decimals={0}
                  duration={2}
                  separator=","
                  decimal=","
                  suffix={item.suffix}
                  end={item.value} />
                </StatNumber>
              </Stat>
              )}
          </SimpleGrid>
          <Text fontSize="sm" w="100%">Compared to previous year</Text>
        </VStack>
      </VisibilitySensor>
    </Box>
  )
}